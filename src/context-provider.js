import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import { produce } from 'immer'


/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            clearCart: this.clearCart,
            getCartTotal: this.getCartTotal,
        }
        this.state = {
            categories: {},
            products: {},
            cart: {
            },
            cartCount: 0,
        }
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const respc = await axios.get('/api/category/')
        console.log(respc)
        const cats ={}
        for (const c of respc.data) {
           cats[c.title] = c
        }

        this.setState({
           categories:cats
        })

        const respp = await axios.get('/api/product/')
        console.log(respp)
        const pros ={}
        for (const p of respp.data) {
            pros[p.id] = p
        }

        this.setState({
           products:pros
        })
    }

    addToCart = pid => {
        this.setState(produce(this.state, draft => {
            draft.cart[pid] = (draft.cart[pid] || 0) + 1

            let count = 0
            for (const qty of Object.values(draft.cart)) {
                count += qty
            }
            draft.cartCount = count
        }))
    }

    removeFromCart = pid => {
        this.setState(produce(this.state, draft => {
            delete draft.cart[pid]

            let count = 0
            for (const qty of Object.values(draft.cart)) {
                count += qty
            }
            draft.cartCount = count
        }))
    }

    clearCart = () => {
        this.setState(produce(this.state, draft => {
            draft.cart = {}
            draft.cartCount = 0
        }))
    }

    getCartTotal = () => {
        let total = 0.0
        for (const [pid, qty] of Object.entries(this.state.cart)) {
            const product = this.state.products[pid]
            if (product) {
                total += (qty * product.price)
            }
        }
        return total
    }

}