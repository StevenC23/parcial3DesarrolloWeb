import React from 'react';
import Logo from './Logo/Logo';
import SearchBar from './Search-Bar/SearchBar';
import Opciones from './Opciones/Opciones';

const Header = ({ isDesktop }) => {
    return (
        <div style={isDesktop ? styles.containerPrincipal : styles.containerPrincipalTablet}>
            <div style={styles.container}>
                <Logo isDesktop={isDesktop} />
                <SearchBar />
                <Opciones isDesktop={isDesktop} />
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
    containerPrincipalTablet: {
        height: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottom: 'solid 1px #e6e6e6',
        background: 'white',
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