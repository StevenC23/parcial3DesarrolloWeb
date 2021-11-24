import React from 'react';
import UserScroll from '../../shared/UserScroll';

const Historias = () => {
    return (
        <div style={styles.scrollmenu} className='scroll'>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/401/400' />
                <span style={styles.username}>carlota.albert</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/200/200' />
                <span style={styles.username}>julia.vaquero</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/399/399' />
                <span style={styles.username}>monserrat.neira</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/250/250' />
                <span style={styles.username}>damian.catalan</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/350/349' />
                <span style={styles.username}>hassan.linares</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/288/288' />
                <span style={styles.username}>rosalia.moreira</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/220/220' />
                <span style={styles.username}>baltasar.mota</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/300/301' />
                <span style={styles.username}>robert.garcía</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/400/400' />
                <span style={styles.username}>ignacio.palacio</span>
            </div>
            <div style={styles.userScroll}>
                <UserScroll image='https://picsum.photos/400/400' />
                <span style={styles.username}>gaizka.crespo</span>
            </div>
        </div>
    );
};

const styles = {
    scrollmenu: {
        marginTop: '30px',
        width: '99%',
        backgroundColor: 'white',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #cfcece',
        borderLeft: '1px solid #cfcece'
    },
    userScroll: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        cursor: 'pointer',
    },
    username: {
        width: '70px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '12px'
    }
}

export default Historias;