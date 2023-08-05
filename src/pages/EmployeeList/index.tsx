// import { Link } from 'react-router-dom';
import React from 'react';
import team from '../../assets/team.svg';
import { useEmployeeContext } from '../../context/employeeContext';

function EmployeeList() {
    const { employees } = useEmployeeContext();

    return (
        <div className="section-min-height flex flex-col justify-center items-center">
            <h2 className="text-xl text-blue-600">Employee List</h2>
            <div className="flex flex-col justify-center items-center">
                <img src={team} alt="team" className="w-1/3" />
                <ul>
                    {employees.map((employee) => (
                        <React.Fragment key={employee.lastname}>
                            <li key={employee.firstname}>
                                {employee.firstname}
                            </li>
                            <li key={employee.lastname}>{employee.lastname}</li>
                        </React.Fragment>
                    ))}
                </ul>
                {/* <Link to="/">Link - Page Home</Link>
                <Link to="/create-employee">Link - Page create employee</Link> */}
            </div>
        </div>
    );
}

export default EmployeeList;
