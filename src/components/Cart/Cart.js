import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    const totalCost = cart.reduce((previous, current) => previous + current.salary, 0);

    return (
        <div className="cart">
            <h3>Employees Added: {cart.length}</h3>
            <p>Total Cost: ${totalCost}</p>
            {
                cart.length ? <table>
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {
                        cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                    }
                    <tr>
                        <td><b>Total Cost</b></td>
                        <td><b>{totalCost}</b></td>
                    </tr>
                </table> : ''

            }
        </div>
    );
};

export default Cart;