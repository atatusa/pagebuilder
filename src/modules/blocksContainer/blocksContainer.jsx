import BrowserPreview from '../Interfaz/appHeader/browserPreview';
import Menu01 from '../blocks/menus/menu01';

const BlocksContainer = () => {
    return (
        <div id='blocksContainer' className='blocksContainer'>
            <div id='blocksPreview' className='blocksPreview'>
                <Menu01/>
                

            </div>
            <div id='blocksCategory' className='blocksCategory'>
                <span>Block Category</span>
                <ul>
                    <li>Menu</li>
                    <li>Header</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    );
}

export default BlocksContainer;
