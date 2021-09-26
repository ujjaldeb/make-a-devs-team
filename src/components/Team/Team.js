import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Team.css';

const Team = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('./Team.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    return (
        <div className="team">
            <div className="employees">
                {
                    employees.map(employee => <Employee key={employee.id} employee={employee}></Employee>)
                }
            </div>

            <div className="cart-container">
                cart
            </div>
        </div>
    );
};

export default Team;