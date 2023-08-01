import { Link } from 'react-router-dom';
import ImgError from '../../assets/error-404.svg';

function Error() {
    return (
        <div className="section-min-height flex flex-col justify-center items-center">
            <img src={ImgError} alt="error" className="w-1/3" />
            <h2 className="mt-16">
                Oops! The page you requested does not exist.
            </h2>
            <Link to="/" className="text-blue-500 hover:text-blue-300">
                Back to Home Page
            </Link>
        </div>
    );
}

export default Error;
