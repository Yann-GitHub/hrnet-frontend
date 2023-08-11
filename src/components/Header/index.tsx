import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo-wh.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/courgette';

function Header() {
    return (
        <nav className="sticky top-0 z-10 px-8 bg-blue-500 flex justify-between items-center text-white h-20 drop-shadow-lg">
            <NavLink to="/" className="">
                <h1 className="text-5xl font-[courgette]">HRnet</h1>
            </NavLink>
            <div className="flex gap-6">
                <Link to="/create-employee" className="hover:text-blue-200">
                    <FontAwesomeIcon icon={faUser} className="pr-2" />
                    Create Employee
                </Link>
                <Link to="/employee-list" className="hover:text-blue-200">
                    <FontAwesomeIcon icon={faList} className="pr-2" />
                    Employee List
                </Link>
            </div>
        </nav>
    );
}

export default Header;
