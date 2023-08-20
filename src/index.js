import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import PageSetupMenu from './modules/setupMenu/pageSetupMenu';
import AppHeader from './modules/Interfaz/appHeader/appHeader';
import AppBody from './modules/Interfaz/appBody/appBody';
import BlocksContainer from './modules/blocksContainer/blocksContainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BlocksContainer />
        <PageSetupMenu />
        <AppHeader />
        <AppBody />
    </>
);

