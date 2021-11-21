import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <div></div>
            <div>
                <input type="text" style={styles.busqueda} placeholder="Buscar"/>
            </div>
            <div></div>
        </div>
    );
};

const styles = {
    container:{
        // backgroundColor: 'red',
        height: '53px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    logo:{

    },
    busqueda:{
        margin: '10px 0px',
        borderRadius: '3px',
        border: 'solid 1px rgba(var(--b6a,219,219,219),1)'
    },
    opciones:{

    }
}

export default Home;