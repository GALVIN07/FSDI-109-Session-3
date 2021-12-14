import "./cart.css";
import storeContext from "../context/storeContext";
import React, {useContext} from "react";
import CartItem from "./cartItem";




const Cart = () => {
    const cart = useContext(storeContext).cart;

    const getTotal = () => {

        let total = 0;

        for(let i=0; i < cart.length; i++) {
            let prod = cart[i];
            let prodTotal = prod.price * prod.quantity;
            total += prodTotal;
        }

        return total.toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Ready to Order</h1>
            <h4>You Have {cart.length} products on the cart</h4>

            <div className="cart-content">
                <section className="list">
                {cart.map((prod)=>(
                    <div>
                    <CartItem key={prod._id} info={prod}></CartItem>
                    </div>
                ))}
                </section>

                <section className="total-content">
                    <div>
                        <h5>Total:</h5>

                        <hr />

                        <h6>{getTotal()}</h6>

                        <hr />

                        <button className="btn btn-dark">Proceed to Payment</button>
                    </div>
                </section>
            </div>
        </div>
        
    );
};


export default Cart;