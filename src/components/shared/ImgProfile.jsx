import React from 'react';
import hit from '../../utils/imgs/hit.PNG';

const ImgProfile = (props) => {
    return (
        <div >
            <img src={hit} width={props.width} height={props.height} style={{borderRadius: '100%'}} alt="" />
        </div>
    );
};

export default ImgProfile;