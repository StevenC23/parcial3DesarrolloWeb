import React from 'react';
import User from './User';
import UserScroll from './UserScroll';

const ScrollBar = () => {
    return (
        <div style={styles.scrollmenu} className='scroll'>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll/>
                <span>Hitler</span>
            </div>
        </div>
    );
};

const styles = {
//scrollbar
    scrollmenu: {
        marginTop: '30px',
        // height: '100px',
        width:'99%',
        backgroundColor: 'white',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #cfcece',
        paddingBottom: '0px',
        marginBottom: '0px',
        cursor:'pointer',
    },
    userScroll:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'10px'
    }
}

export default ScrollBar;