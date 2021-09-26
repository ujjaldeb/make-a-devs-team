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

    const handleClickEvent = (employee) => {
        console.log(employee);
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
                <h3>Employees Added: 0</h3>
                <h3>Total Cost: tk 0</h3>
            </div>
        </div>
    );
};

export default Team;