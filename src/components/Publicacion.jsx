import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCommentDots, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import hit from '../utils/imgs/hit.PNG';
import User from './User';
import corazon from '../utils/imgs/Corazon.PNG';
import comentario from '../utils/imgs/Comentario.PNG';
import compartir from '../utils/imgs/Compartir.PNG';
// import corazon from '../utils/imgs/Corazon.PNG';
import guardar from '../utils/imgs/Guardar.PNG';
import emoticon from '../utils/imgs/Emoticon.PNG';

const Publicacion = (props) => {
    return (
        <div style={styles.publicacion}>
            <div style={styles.headerPublicacion}>
                <div style={styles.headerL}>
                    <User/>
                    <div style={styles.nombre}>Adolf Hitler</div>
                </div>
                <div style={styles.headerR}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div>
            {/* <div style={{
                ...styles.publicacionImg,
                // ...styles[props.size],
                background : 'url('+props.img+')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundSize: '100% 100%',
                }}>
                    hi
            </div> */}
            <div style={styles.imgPublicacion}>
                <img src={props.img} width="100%" height="500px"/>
            </div>

            <div style={styles.footerPublicacion}>
                <div style={styles.containerOpciones}>
                    <div>
                        <img src={corazon} width="30" height="30"/>
                        <img src={comentario} width="30" height="30" style={styles.icon}/>
                        <img src={compartir} width="30" height="30" style={styles.icon}/>
                    </div>
                    <div>
                        <img src={guardar} width="30" height="30"/>
                    </div>
                </div>
                <br />
                <span style={{}}><strong>Adolf Hitler</strong> Nueva fotito</span>
                <span style={{color:'grey'}}>Ver los 24 comentarios</span>
                <span><strong>Rudolf Hess</strong> Goedemorgen baas, je ziet er erg mooi uit</span>
                <span><strong>Hermann Göring</strong> We moeten Amerika veroveren</span>
                <br />
                <span style={{color:'grey'}}>Hace 13 horas</span>


            </div>
            <div style={styles.comentario}>
                <img src={emoticon} width="30" height="30"/>
                <input type="text" placeholder='Agrega un comentario...' style={{width:'100%', border:'0',outline: 'none',marginLeft: '5px', marginRight:'5px'}}/>
                <span style={{color:'rgba(83, 83, 255, 0.5)'}}>Publicar</span>
            </div>
        </div>
    );
};
const styles = {
    publicacion:{
        // backgroundColor: 'purple',
        // height: '800px',
        border: '1px solid #cfcece',
        borderRadius: '3px',
        marginBottom: '30px',
        marginTop: '30px',
        // height: '53px',
        // width: '100%',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // borderBottom: 'solid 1px #e6e6e6',
    },
    // publicacionImg: {
    //     height: '75%',
    //     width: '100%',
    //     // margin: '15px 10px',
    //     // padding: 0,
    //     // borderRadius: '10px',
    //     backgroundColor: 'grey',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'

    // },

    imgPublicacion:{
        width: '100%',
        backgroundColor: 'white'
    },

    headerPublicacion:{
        display:'flex',
        flexDirection: 'row',
        height:'40px',
        backgroundColor:'white',
        justifyContent: 'space-between',
        padding: '20px',
        // border: '3px solid '
        // linear-gradient(rigth, #833ab4, #fd1d1d,#fcb045)
        // -webkit-gradient(linear, left top, right top, from(#833ab4), color-stop(50%, #fd1d1d), to(#fcb045))
    },
    headerL:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerR:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerPublicacion:{
        padding:'10px',
        display:'flex',
        flexDirection: 'column'
    },
    icon:{
        marginLeft: '10px',
    },
    iconn:{
        marginRight: '10px'
    },
    containerOpciones:{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comentario:{
        height: '45px',
        // backgroundColor:'red'
        borderTop: '1px solid #cfcece',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',

    },
    nombre:{
        marginLeft: '10px'
    }



}
export default Publicacion;