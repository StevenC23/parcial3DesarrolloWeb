import React from 'react';
import Logo from './Logo/Logo';
import SearchBar from './Search-Bar/SearchBar';
import Opciones from './Opciones/Opciones';

const Header = () => {
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.container}>
                <Logo />
                <SearchBar />
                <Opciones />
            </div>
        </div>
    );
};

const styles = {
    containerPrincipal: {
        height: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottom: 'solid 1px #e6e6e6',
        background: 'white'
    },
    container: {
        width: '100%',
        maxWidth: '935px',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
    }
}

export default Header;