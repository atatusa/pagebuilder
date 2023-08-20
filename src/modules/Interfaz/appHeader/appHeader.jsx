import menuIcon from '../../../assets/menuIcon.png'
import SiteInfo from './siteInfo';
import MobileView from './mobileView';
import ExportSite from './exportSite'
import BrowserPreview from './browserPreview';



const AppHeader = (props) => {
    function openMenu() {
        document.getElementById('sideBarMenu').style.display = 'initial'
    }
    return (
        <div className='appHeader flex'>
            <div className='appHeader_left flex'>
                <div className="menuIcon" onClick={openMenu} ><img className='scale' src={menuIcon} alt="menuIcon" /></div>
                <SiteInfo />
            </div>
            <div className='appHeader_center flex'>
                <MobileView />
            </div>
            <div className='appHeader_right flex'>
                <BrowserPreview />
                <ExportSite />
            </div>
        </div>
    );
}

export default AppHeader;
