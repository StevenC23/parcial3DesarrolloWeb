import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from '../components/shared/GoogleButton';
import { useAuth } from '../contexts/AuthContext'
import inicioInstagram from '../utils/imgs/inicioInstagram.PNG';
import logoInstagram from '../utils/imgs/Logo-Instagram.jpg';

export default function Loginpage({ isDesktop }) {

    const navigate = useNavigate();

    const { signInWithGoogle } = useAuth();
    const { logout, currentUser } = useAuth();

    function handleRedirectToOrBack() {
        navigate('/home');
    }

    const styles = {
        containerFull: {
            height: '45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '5%',
            marginTop: '150px',
            border: '1px solid rgba(128, 128, 128, 0.5)',
            borderRadius: '5px',
            padding: '50px'
        },
        button: {
            height: '100px',
            border: '0px solid',
            background: 'white'
        },
        footer: {
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        data: {
            margin: '10px',
            fontSize: '10px',
            color: 'rgba(128, 128, 128, 0.5)',
            cursor: 'pointer'
        },
        data2: {
            margin: '10px',
            fontSize: '10px',
            color: 'rgba(128, 128, 128, 0.5)',
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: 'auto', padding: '40px', display: 'flex' }}>
                <div style={{ display: isDesktop ? 'flex' : 'none' }}>
                    <img src={inicioInstagram}  height="100%" alt="" />
                </div>
                <div style={styles.containerFull}>
                    <img src={logoInstagram} width="225px" height="120px" alt="" />
                    <GoogleButton onClick={() =>
                        signInWithGoogle()
                            .then(user => {
                                handleRedirectToOrBack();
                            })
                            .catch(e => console.log(e.message))
                    } />
                    {currentUser && (
                        <div styles={{ display: "flex", flexDirection: "column", height: "50px", justifyContent: "space-around", alignItems: "center" }}>
                            <button
                                onClick={async e => {
                                    e.preventDefault()
                                    await logout()
                                }}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    )}

                </div>
            </div>
            <div style={styles.footer}>
                <div style={styles.data}>
                    Informacion · Ayuda · Prensa · API · Empleo · Privacidad · Condiciones · Ubicacion · Cuentas destacadas · Hashtags · Idioma
                </div>
                <div style={styles.data2}>
                    @ 2021 INSTAGRAM FROM META
                </div>
            </div>
        </div>
    )


}