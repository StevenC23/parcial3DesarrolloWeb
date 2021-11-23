import React from 'react';

const GoogleButton = (props) => {
    return (
        <div style={styles.googleBtn} onClick={props.onClick}>
            <div style={styles.googleIconWrapper}>
                <img style={styles.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p style={styles.btnText}><b>Iniciar sesión con Google</b></p>
        </div>
    );
};

const styles = {
    googleBtn: {
        width: "235px",
        height: "42px",
        backgroundColor: "#4285f4",
        borderRadius: "2px",
        boxShadow: "0 3px 4px 0 rgba(0,0,0,.25)",
        cursor: 'pointer'
    },
    googleIconWrapper: {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "1px",
        width: "40px",
        height: "40px",
        borderRadius: "2px",
        backgroundColor: "#fff"
    },
    googleIcon: {
        position: "absolute",
        marginTop: "11px",
        marginLeft: "11px",
        width: "18px",
        height: "18px"
    },
    btnText: {
        float: "right",
        margin: "11px 11px 0 0",
        color: "#fff",
        fontSize: "14px",
        letterSpacing: "0.2px",
        fontFamily: "sans-serif"
    }
}

export default GoogleButton;