import React from 'react';
import casa from '../utils/imgs/Casa.PNG';
import brujula from '../utils/imgs/Brujula.PNG';
import mesenger from '../utils/imgs/Mesenger.PNG';
import corazon from '../utils/imgs/Corazon.PNG';
// import perfil from '../utils/imgs/Logo-Instagram.jpg';
import logo from '../utils/imgs/Logo-Instagram.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import Publicacion from './Publicacion';

const Home = () => {
    return (
        <div style={styles.containerFull}>

            <div style={styles.containerPrincipal}>
                <div style={styles.container}>

                    <div style={styles.containerLogo}>
                        <img src={logo} width="100" height="100%" />
                    </div>

                    <div style={styles.containerBusqueda}>
                        <input type="text" style={styles.busqueda} placeholder="Buscar"/>
                    </div>

                    <div style={styles.containerOpciones}>
                        <img src={casa} width="30" height="30" style={styles.icon}/>
                        <img src={mesenger} width="35" height="35" style={styles.icon}/>
                        <img src={brujula} width="30" height="30" style={styles.icon}/>
                        <img src={corazon} width="30" height="30" style={styles.icon}/>
                        <img src={corazon} width="30" height="30" style={styles.icon}/>
                    </div>

                </div>
            </div>
            <div style={styles.containerSecundario}>
                <div style={styles.containerr}>
                    <div style={styles.publicaciones}>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                        <Publicacion img='https://picsum.photos/400/650'/>
                    </div>
                    <div>

                    </div>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        marginLeft: '15px',
        
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



    /////////

    containerSecundario:{
        width:'100%',
        height: '100%',
        // background: 'red',
        justifyContent: 'center',
        display:'flex'
    },

    containerr:{
        width: '100%',
        maxWidth: '935px',
        // justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        // background:'blue',
    },

    publicaciones:{
        // background: 'green',
        width: '600px'
    }
}

export default Home;