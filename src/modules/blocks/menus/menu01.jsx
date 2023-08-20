import logo from '../../../assets/Solutions-website-logo-png.png'
import facebook from '../../../assets/facebook.png'
import twiter from '../../../assets/twiter.png'
import instagram from '../../../assets/instagram.png'

const Menu01 = () => {
    return (
        <>
            <header className="menu01 flexb">
                <div className="logoBlock01 blockSize">
                    <img src={logo} alt="logo" />
                </div>
                <div className="blockMenu01 blockSize">
                    <ul className="flexb">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="socialNetworks blockSize flexb">
                    <img src={facebook} alt="facebook logo" />
                    <img src={twiter} alt="twiter logo" />
                    <img src={instagram} alt="instagram logo" />
                </div>
            </header>
        </>
    );
}

export default Menu01;