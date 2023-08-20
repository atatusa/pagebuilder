import React from 'react';
import favicon from '../../../assets/website-builder.png'


const SiteInfo = () => {
    return (
        <div className="siteInfo flex">
            <div className="pageFavicon flex">
                <div id='siteLogoContainer' className="favicon "><img id='siteLogo' src={favicon} alt="favicon" title='Site Logo' /></div>
                <div className="pageName "><span id='pageName' title='Page Name'>Page</span></div>
            </div>
            <div className="siteName "><span id='siteName' title='Site Name'>Site Name</span></div>
        </div>
    );
}

export default SiteInfo;

