import React from 'react';

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