import React from 'react';
import {useNavigate } from 'react-router-dom';
import GoogleButton from '../components/shared/GoogleButton';
import { useAuth } from '../contexts/AuthContext'
import inicioInstagram from '../utils/imgs/inicioInstagram.PNG';
import logoInstagram from '../utils/imgs/Logo-Instagram.jpg';

export default function Loginpage() {

    const navigate = useNavigate();

    const { signInWithGoogle} = useAuth();
    const { logout, currentUser } = useAuth();

    function handleRedirectToOrBack() {
        navigate('/home');
    }

    const styles = {
        containerFull: {
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '10px',
            border: '1px solid rgba(128, 128, 128, 0.5)',
            borderRadius: '5px'
        },
        button: {
            height: '100px',
            border: '0px solid',
            background: 'white'
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <div style={{ margin: 'auto', display: 'flex', height: '500px', width: '600px' }}>
                <div style={{ width: '50%', background: 'blue' }}>
                    <img src={inicioInstagram} width="100%" height="100%" alt="" />
                </div>
                <div style={styles.containerFull}>
                    <img src={logoInstagram} width="190px" height="120" alt="" />
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
        </div>
    )


}
