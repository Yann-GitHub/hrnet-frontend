// import { Link } from 'react-router-dom';
import Join from '../../assets/join.svg';

function CreateEmployee() {
    return (
        <div className="section-min-height flex flex-col justify-center items-center">
            <h2 className="text-xl text-blue-600">Create Employee</h2>
            <div className="flex flex-col justify-center items-center">
                <img src={Join} alt="join" className="w-1/3" />
                {/* <Link to="/">Link - Page Home</Link>
                <Link to="/employee-list">Link - Page Employee List</Link> */}
            </div>
        </div>
    );
}

export default CreateEmployee;
