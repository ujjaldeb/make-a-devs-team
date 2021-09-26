import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Team.css';

const Team = () => {
    const [employees, setEmployees] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./Team.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

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
                    employees.map(employee => <Employee
                        key={employee.id}
                        employee={employee}
                        handleClickEvent={handleClickEvent}
                    ></Employee>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;