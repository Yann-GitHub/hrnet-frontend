// import { Link } from 'react-router-dom';
import team from '../../assets/team.svg';

function EmployeeList() {
    return (
        <div className="section-min-height flex flex-col justify-center items-center">
            <h2 className="text-xl text-blue-600">Employee List</h2>
            <div className="flex flex-col justify-center items-center">
                <img src={team} alt="team" className="w-1/3" />
                {/* <Link to="/">Link - Page Home</Link>
                <Link to="/create-employee">Link - Page create employee</Link> */}
            </div>
        </div>
    );
}

export default EmployeeList;
