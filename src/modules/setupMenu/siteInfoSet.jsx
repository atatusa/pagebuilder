

const SiteInfoSet = () => {

    function saveSiteName() {
        const siteNameValue = document.getElementById('siteNameInput').value;
        document.getElementById('siteName').innerHTML = `${siteNameValue}`
    }
    function savePageName() {
        const pageNameValue = document.getElementById('pageNameInput').value;
        document.getElementById('pageName').innerHTML = `${pageNameValue}`
    }
    const siteLogoPreview = () => {
        const siteLogoValue = document.getElementById('siteLogoInput').files;
        let logoUrl = URL.createObjectURL(siteLogoValue[0])
        document.getElementById('logoInputPreview').setAttribute('src', logoUrl)
        return logoUrl
    }
    
    
    function saveSiteLogo() {
        // const logoUrl = siteLogoPreview()
        document.getElementById('siteLogo').setAttribute('src', siteLogoPreview())

    }

     function closeSiteInfoSet() {
        document.getElementById('siteInfoSet').style.display = 'none'
        document.getElementById('webSiteOption').classList.remove('active_option')
    }
    return (
        <>
            <button className="siteCloseBtn scale" onClick={closeSiteInfoSet}>
                <strong>X</strong>
            </button>
            <div className='webSite'>
                <label>Site Name:
                    <input id='siteNameInput' type="text" placeholder='SiteName' />
                </label>
                <button onClick={saveSiteName}>Guardar</button>
            </div>
            <div className='webSite'>
                <label>Page Name:
                    <input id='pageNameInput' type="text" placeholder='pageName' />
                </label>
                <button onClick={savePageName}>Guardar</button>
            </div>
            <div className='webSite'>
                <label >Site Logo:
                    <input onChange={siteLogoPreview} id='siteLogoInput' className="siteLogoInput" type="file" />
                    <button className="btnLogoInput"><label for='siteLogoInput'>selecciona un archivo</label></button>
                </label>
                <img id="logoInputPreview" className="logoPreview" alt='Logo Preview' />
                <button onClick={saveSiteLogo}>Guardar</button>
            </div>
        </>

    );
}

export default SiteInfoSet;
