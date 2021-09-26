import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Team.css';

// the Team component contains The Employee component and the Cart component
const Team = () => {
    // declaring states
    const [employees, setEmployees] = useState([]);
    const [cart, setCart] = useState([]);

    // load the data and set to employees
    useEffect(() => {
        fetch('./Team.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    // event handler function for add to cart button
    const handleClickEvent = (employee) => {
        if (!cart.includes(employee)) {
            const newCart = [...cart, employee];
            setCart(newCart);
        }
    }

    return (
        <div className="team">
            <div className="employees">
                {
                    // calling Employee component when state is changed
                    employees.map(employee => <Employee
                        key={employee.id}
                        employee={employee}
                        handleClickEvent={handleClickEvent}
                    ></Employee>)
                }
            </div>

            <div className="cart-container">
                {/* calling the Cart component when the click event fires on the add to cart button */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;