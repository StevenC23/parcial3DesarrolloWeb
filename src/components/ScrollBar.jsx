import React from 'react';
import User from './User';

const ScrollBar = () => {
    return (
        <div style={styles.scrollmenu}>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    );
};

const styles = {
//scrollbar
    scrollmenu: {
        height: '100px',
        width:'100%',
        // padding: '5px',
        backgroundColor: 'white',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
}

export default ScrollBar;