// import { Link } from 'react-router-dom';
import Welcome from '../../assets/welcome.svg';
import '@fontsource/courgette';

function Home() {
    return (
        <div className="section-min-height flex flex-col justify-center items-center">
            <img src={Welcome} alt="Welcome" className="w-1/3" />
            <h1 className="text-4xl mt-6 text-blue-600 font-[courgette]">
                HRnet
            </h1>
            <p className="text-center">
                Web application designed for managing employee records.
            </p>
            <div className="flex flex-col">
                {/* <Link to="/employee-list">Link - Employees list</Link>
                <Link to="/create-employee">Link - Create Employees</Link> */}
            </div>
        </div>
    );
}

export default Home;
