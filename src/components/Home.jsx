import React from 'react';
import logo from '../utils/imgs/Logo-Instagram.jpg'; // with import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.container}>

                <div style={styles.containerLogo}>
                    <img src={logo} width="100" height="100%" />
                    <FontAwesomeIcon icon={faHome} />
                </div>

                <div style={styles.containerBusqueda}>
                    <input type="text" style={styles.busqueda} placeholder="Buscar"/>
                </div>

                <div style={styles.containerOpciones}>
                    <span>Hi 2</span>
                </div>

            </div>
        </div>
    );
};

const styles = {
    containerPrincipal:{
        // backgroundColor: 'red',
        height: '53px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottom: 'solid 1px #e6e6e6',
    },
    container:{
        // backgroundColor: 'blue',
        width: '100%',
        maxWidth: '935px',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',

    },
    containerLogo:{

    },
    containerBusqueda:{
        display: 'flex',
        flexDirection: 'row',
    },
    containerOpciones:{

    },

    logo:{

    },
    busqueda:{
        margin: '12px 0px',
        borderRadius: '3px',
        border: 'solid 1px rgba(var(--b6a,219,219,219),1)',
        background: 'rgba(var(--b3f,250,250,250),1)',
        width: '200px',
    },
    opciones:{

    }
}

export default Home;