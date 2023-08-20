import SiteInfoSet from "./siteInfoSet";

const PageSetupMenu = () => {

  function closeMenu() {
    document.getElementById('sideBarMenu').style.display = 'none'
    document.getElementById('siteInfoSet').style.display = 'none'
    document.getElementById('webSiteOption').classList.remove('active_option')
  }
  function openSiteInfoSet() {
    const menu = document.getElementById('siteInfoSet')
    menu.style.display = 'initial'
    document.getElementById('webSiteOption').classList.add('active_option')
  }
  return (

    <div id="sideBarMenu" className="sidebar ">
      <div className="sideBarMenu" >
        <button className="sidebarCloseBtn scale" onClick={closeMenu}>
          <strong>X</strong>
        </button>
        <ul className="sideBarOptions">
          <li id="webSiteOption" onClick={openSiteInfoSet} className="scale  ">Web Site</li>
          <li>Account</li>
          <li>Help</li>
        </ul>

      </div>
      <div id="siteInfoSet" className="sidebar siteInfoSet">
        <SiteInfoSet />
      </div>
    </div>


  );
};

export default PageSetupMenu;
