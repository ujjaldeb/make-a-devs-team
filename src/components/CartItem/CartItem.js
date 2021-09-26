import React from 'react';

// the CartItem component shows an employee details
const CartItem = (props) => {
    const { name, salary } = props.cartItem;
    return (
        <tr>
            <td>{name}</td>
            <td>{salary}</td>
        </tr>
    );
};

export default CartItem;