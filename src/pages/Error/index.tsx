import { Link } from 'react-router-dom';
import ImgError from '../../assets/page_not_found.svg';

function Error() {
    return (
        <div>
            <img src={ImgError} alt="error" />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error;
