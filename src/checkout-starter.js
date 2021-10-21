import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe(...)


function Checkout(props) {
    return (
        <CheckoutController />
    )
}
export default Checkout


const CheckoutController = props => {
    const total = 50.00 

    return (
        <Formik
            initialValues={{
                name: 'Anita Wu',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                state: 'UT',
                zipcode: '84602',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                return errors
            }}
            onSubmit={async (values, actions) => {
                console.log('submit', values)
                await new Promise(resolve => {
                    setTimeout(() => {  
                        resolve()
                    }, 2000)
                })
                console.log('after the 2 seconds')
            }}
        >{form => (
            <PaymentForm form={form} total={total} />
        )}</Formik>
    )
}


/**
 * The form layout/html
 */
const PaymentForm = props => (
    <Form>
        <Input title="Name:" name="name" type="text" />
    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
