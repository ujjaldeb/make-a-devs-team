import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

// the Cart component shows employee details of the selected team 
const Cart = (props) => {
    const { cart } = props;

    // calculating the total salary expense for a team
    const totalCost = cart.reduce((previous, current) => previous + current.salary, 0);

    return (
        <div className="cart">
            <h3>Employees Added: {cart.length}</h3>
            <p>Total Cost: ${totalCost}</p>
            {
                // showing data in a table, when button click event handler function is invoked
                cart.length ? <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><b>Total Cost</b></td>
                            <td><b>{totalCost}</b></td>
                        </tr>
                    </tfoot>
                </table> : ''

            }
        </div>
    );
};

export default Cart;