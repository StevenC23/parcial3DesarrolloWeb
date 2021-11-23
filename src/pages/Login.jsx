import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import inicioInstagram from '../utils/imgs/inicioInstagram.PNG';

export default function Loginpage() {
    const history = useNavigate()
    const { signInWithGoogle, login } = useAuth()
    const { logout, currentUser } = useAuth()

    const location = useLocation()

    function handleRedirectToOrBack() {
        history.replace(location.state?.from ?? '/profile')
    }

    const styles = {
        containerFull: {
            width:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            // background: 'red',
            margin: '10px',
            border: '1px solid rgba(128, 128, 128, 0.5)',
            borderRadius: '5px'
        },
        button:{
            height:'100px',
            border:'0px solid',
            background: 'white'
        }
    }

    return (
        <div style={{width:'100vw', height:'100vh', display:'flex'}}>
            <div style={{margin: 'auto', display:'flex', height:'500px', width:'600px'}}>
                <div style={{width:'50%', background: 'blue'}}>

                    <img src={inicioInstagram} width="100%" height="100%" alt="" />
 
                </div>
                <div style={styles.containerFull}>

                    <button style={styles.button}
                        onClick={() =>
                            signInWithGoogle()
                                .then(user => {
                                    handleRedirectToOrBack()
                                    console.log(user)
                                })
                                .catch(e => console.log(e.message))
                        }
                    >
                        Iniciar sesión con Google
                    </button>
                    {currentUser && (
                        <button
                            onClick={async e => {
                                e.preventDefault()
                                await logout()
                            }}
                        >
                            Cerrar sesión
                        </button>
                    )}

                </div>
            </div>
        </div>
    )

    
}
