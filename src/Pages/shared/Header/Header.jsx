import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center space-y-2">
            <img className="mx-auto my-4" src={logo} alt="" />
            <p className="font-light">Journalism without Fear of favour</p>
            <p className="text-xl">{moment().format('dddd')}<span className="font-light">{moment().format(', MMMM D, YYYY')}</span></p>
        </div>
    );
};

export default Header;