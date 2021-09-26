import React from 'react';
import './Employee.css';

const Employee = (props) => {
    const { age, country, department, img, name, role, salary } = props.employee;
    return (
        <div className="employee">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="employee-details">
                <span><b>Name:</b> {name}</span>
                <br />
                <span><b>Role:</b> {role}</span>
                <br />
                <span><b>Age:</b> {age}</span>
                <br />
                <span><b>Country:</b> {country}</span>
                <br />
                <span><b>Salary:</b> {salary}</span>
                <br /><br />
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Employee;