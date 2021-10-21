import React from 'react'


function c_footer(props) {
   const footer = {
      backgroundColor: "#F8F8F8",
      borderTop: "solid #E7E7E7",
      textAlign: "center",
      padding: "10px",
      position: "auto",
      left: "0",
      bottom: "0",
      height: "30px",
      width: "100%",
    };
   return (
    <footer>
      <div>
         <p style={footer}>Northwest Store © 2020</p>
      </div>
  </footer>
   )
}

export default c_footer;