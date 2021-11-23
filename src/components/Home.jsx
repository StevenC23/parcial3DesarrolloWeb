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
import User from './User';
import ScrollBar from './ScrollBar';
import UserScroll from './UserScroll';
import Sugerencia from './Sugerencia';
import UserSugerencias from './UserSugerencias';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                        <FontAwesomeIcon icon={faSearch} style={styles.iconSearch}/>
                    </div>

                    <div style={styles.containerOpciones}>
                        <img src={casa} width="28" height="28" style={styles.icon}/>
                        <img src={mesenger} width="35" height="35" style={styles.icon}/>
                        <img src={brujula} width="30" height="30" style={styles.icon}/>
                        <img src={corazon} width="30" height="30" style={styles.icon}/>
                        <div style={styles.icon}>
                            <UserSugerencias width = '25px' height='25px'/>
                        </div>
                    </div>

                </div>
            </div>
            <div style={styles.containerSecundario}>
                <div style={styles.containerr}>
                    
                    <div style={styles.publicaciones} className='publicaciones'>
                        <ScrollBar/>
                        <div style={styles.publicacioness}>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                            <Publicacion img='https://picsum.photos/400/650'/>
                        </div>
                    </div>
                    <div style={styles.perfilSugerencias} className='perfilSugerencias'>
                        <div style={styles.perfil}>
                            <div style={{display:'Flex',flexDirection:'row'}}>
                                <div style={styles.userScroll}>
                                    <UserScroll/>
                                </div>
                                <div style={styles.cuenta}>
                                    <span style={{fontSize:'12px', cursor:'pointer'}}>hitler.vivaAlemania.26</span>
                                    <span style={{fontSize:'12px', color:'grey'}}>Adolf Camilo Hitler</span>
                                </div>
                            </div>
                            <span style={{color:'rgb(57, 157, 238)',cursor:'pointer'}}><strong>Cambiar</strong></span>
                        </div>
                        
                        <div style={styles.sugerencias}>
                            <div style={{display:'flex',justifyContent: 'space-between'}}>
                                <span style={{color:'grey'}}>Sugerencias para ti</span>
                                <span style={{cursor:'pointer'}}>Ver todo</span>
                            </div>
                            <div style={{marginTop:'20px'}}>
                                <Sugerencia nombre={'Daniel Ceron'}/>
                                <Sugerencia nombre={'Camilo Cesto'}/>
                                <Sugerencia nombre={'Harry Styles'}/>
                                <Sugerencia nombre={'Dwayine Jhonson'}/>
                                <Sugerencia nombre={'Megan fox'}/>
                            </div>
                        </div>
                        <div style={styles.data}>
                            informacion · Ayuda · Prensa · API · Empleo · Privacidad · Condiciones · Ubicacion · Cuentas destacadas · Hashtags · Idioma
                        </div>
                        <div style={styles.data}>
                            @ 2021 INSTAGRAM FROM META
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    containerPrincipal:{
        height: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottom: 'solid 1px #e6e6e6',
        background:'white'
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
        cursor:'pointer'
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
        cursor:'pointer'
    },
    logo:{

    },
    busqueda:{
        margin: '12px 0px',
        borderRadius: '3px',
        border: 'solid 1px rgba(var(--b6a,219,219,219),1)',
        background: 'rgba(var(--b3f,250,250,250),1)',
        width: '200px',
        outline: 'none',
        paddingLeft: '25px'
    },



    /////////

    containerSecundario:{
        width:'100%',
        height: '95vh',
        justifyContent: 'center',
        display:'flex'
    },

    containerr:{
        width: '100%',
        maxWidth: '935px',
        display: 'flex',
        flexDirection: 'row',
    },

    publicaciones:{
        minWidth: '600px',
        height: '100%',
        overflow: 'auto',
        whiteSpace: 'nowrap',
    },
    publicacioness:{
        flexDirection: 'column',
    },
    perfilSugerencias:{
        width: '100%',
        // background: 'blue',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginTop:'20px'
    },
    perfil:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    userScroll:{
        display:'flex',
        margin:'10px',
        cursor:'pointer'
    },
    cuenta:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
    },

    containerFull:{
        background:'rgba(128, 128, 128, 0.05)',
    },
    sugerencias:{
        marginLeft: '10px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    data:{
        margin: '10px',
        fontSize: '10px',
        color: 'rgba(128, 128, 128, 0.5)',
        cursor: 'pointer'
    },
    iconSearch:{
        position:'absolute',
        alignSelf: 'center',
        justifySelf: 'center',
        color: 'rgba(128, 128, 128, 0.5)',
        marginLeft: '10px',
        fontSize: '10px'
    }
    
    
    
}

export default Home;