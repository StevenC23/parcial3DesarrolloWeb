import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import User from './User';
import corazon from '../../../../utils/imgs/Corazon.PNG';
import comentario from '../../../../utils/imgs/Comentario.PNG';
import compartir from '../../../../utils/imgs/Compartir.PNG';
import guardar from '../../../../utils/imgs/Guardar.PNG';
import emoticon from '../../../../utils/imgs/Emoticon.PNG';

const Publicacion = (props) => {
    return (
        <div style={styles.publicacion}>
            <div style={styles.headerPublicacion}>
                <div style={styles.headerL}>
                    <User width='40' height='40' />
                    <div style={styles.nombre} className='nombrePublicacion'>victoria.gomez96</div>
                </div>
                <div style={styles.headerR}>
                    <FontAwesomeIcon icon={faEllipsisH} style={{ fontSize: '14px' }} />
                </div>
            </div>
            <div style={styles.imgPublicacion}>
                <img src={props.img} width="100%" alt="" />
            </div>

            <div style={styles.footerPublicacion}>
                <div style={styles.containerOpciones}>
                    <div>
                        <img src={corazon} width="30" height="30" style={{ cursor: 'pointer' }} alt="" className='iconoPublicacion' />
                        <img src={comentario} width="30" height="30" style={{ marginLeft: '10px', cursor: 'pointer' }} alt="" className='iconoPublicacion' />
                        <img src={compartir} width="30" height="30" style={{ marginLeft: '10px', cursor: 'pointer' }} alt="" className='iconoPublicacion' />
                    </div>
                    <div>
                        <img src={guardar} width="30" height="30" style={{ cursor: 'pointer' }} alt="" className='iconoPublicacion' />
                    </div>
                </div>
                <span style={{ fontWeight: 'bold', paddingTop: '10px', paddingBottom: '10px', color: '#343434', fontSize: '13px' }}>1,012 Me gusta</span>
                <span><strong style={{ cursor: 'pointer', color: '#343434', fontSize: '13px' }} className='nombreUno'>victoria.gomez96</strong> Nueva fotito</span>
                <span style={{ color: 'grey', cursor: 'pointer', fontSize: '13px', paddingTop: '5px', paddingBottom: '5px' }}>Ver los 24 comentarios</span>
                <span><strong style={{ cursor: 'pointer', color: '#343434', fontSize: '13px' }} className='nombreDos'>Rudolf Hess</strong> Goedemorgen baas, je ziet er erg mooi uit</span>
                <span><strong style={{ cursor: 'pointer', color: '#343434', fontSize: '13px' }} className='nombreTres'>Hermann Göring</strong> We moeten Amerika veroveren</span>
                <span style={{ color: 'grey', cursor: 'pointer', fontSize: '13px', paddingTop: '5px', paddingBottom: '10px' }}>Hace 13 horas</span>


            </div>
            <div style={styles.comentario}>
                <img src={emoticon} width="30" height="30" style={{ cursor: 'pointer' }} alt="" />
                <input type="text" placeholder='Agrega un comentario...' style={{ width: '100%', border: '0', outline: 'none', marginLeft: '5px', marginRight: '5px' }} />
                <span style={{ color: 'rgba(83, 83, 255, 0.5)', cursor: 'pointer' }}>Publicar</span>
            </div>
        </div>
    );
};
const styles = {
    publicacion: {
        border: '1px solid #cfcece',
        borderRadius: '3px',
        marginBottom: '30px',
        marginTop: '30px',
        background: 'white'
    },
    imgPublicacion: {
        width: '100%',
        backgroundColor: 'white'
    },
    headerPublicacion: {
        display: 'flex',
        flexDirection: 'row',
        height: '25px',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: '20px',
    },
    headerL: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerR: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    footerPublicacion: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    iconn: {
        marginRight: '10px'
    },
    containerOpciones: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comentario: {
        height: '45px',
        borderTop: '1px solid #cfcece',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',

    },
    nombre: {
        marginLeft: '10px',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#343434'
    }

}
export default Publicacion;