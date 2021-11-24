import React from 'react';
import Header from '../components/Header/Header';
import Contenido from '../components/Contenido/Contenido';

const Home = ({ isDesktop }) => {
    return (
        <div style={styles.containerFull}>
            <Header isDesktop={isDesktop} />
            <Contenido isDesktop={isDesktop} />
        </div>
    );
};

const styles = {
    containerFull: {
        background: 'rgba(128, 128, 128, 0.05)',
    }
}

export default Home;