import React from 'react';
import hit from '../../utils/imgs/hit.PNG';

const ImgProfile = (props) => {
    return (
        <div >
            <img src={hit} width={props.width} height={props.height} style={styles.img} alt="" />
        </div>
    );
};

const styles = {

    multiColor: {
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(236,252,69,1) 100%)',
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center'
    },
    fondo: {
        background: 'white',
        width: '46px',
        height: '46px',
        borderRadius: '100%',
        margin: 'auto',
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        borderRadius: '100%'
    }
}



export default ImgProfile;