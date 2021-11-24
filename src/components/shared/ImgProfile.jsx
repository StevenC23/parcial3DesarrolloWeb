import React from 'react';

const ImgProfile = (props) => {
    return (
        <div >
            <img src={props.image} width={props.width} height={props.height} style={{borderRadius: '100%'}} alt="" />
        </div>
    );
};

export default ImgProfile;