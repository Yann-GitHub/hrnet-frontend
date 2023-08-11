// import { Link } from 'react-router-dom';
import Welcome from '../../assets/welcome.svg';
import '@fontsource/courgette';

function Home() {
    return (
        <div className="section-min-height flex flex-col justify-center items-center">
            <img src={Welcome} alt="Welcome" className="w-1/3" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[70px] p-0 text-blue-600 font-[courgette]">
                    HRnet
                </h1>
                <p className="text-center">
                    Web application designed for managing employee records.
                </p>
            </div>
            <div className="flex flex-col"></div>
        </div>
    );
}

export default Home;
