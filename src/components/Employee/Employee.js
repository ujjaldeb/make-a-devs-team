import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Employee.css';

// the Employee component shows employee details
const Employee = (props) => {
    const { age, country, department, img, name, role, salary } = props.employee;

    // getting font-awesome icon
    const faIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className="employee">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="employee-details">
                <span><b>Name:</b> {name}</span>
                <br />
                <span><b>Position:</b> {role}</span>
                <br />
                <span><b>Age:</b> {age}</span>
                <br />
                <span><b>From:</b> {country}</span>
                <br />
                <span><b>Salary:</b> {salary}</span>
                <br />
                <span><b>Department:</b> {department}</span>
                <br /><br />
                <button onClick={() => props.handleClickEvent(props.employee)}>{faIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Employee;