import React,{ useContext } from 'react';
import PropTypes from "prop-types";
import { PayPalButton } from "react-paypal-button-v2";
import { CartContext } from "../context/CartContext";

const paybutton = () => {
      const { cart } = useContext(CartContext);
            const { items = [] } = cart;


    const onCreateOrder=(data, actions)=>{
        return actions.order.create({
            purchase_units:[{
                amount:{
                    value:46000
                }
            }]
        })
    }
     const onApproveOrder=()=>{}
    return (
        <div>
 <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />        </div>
    );
}

export default paybutton;
