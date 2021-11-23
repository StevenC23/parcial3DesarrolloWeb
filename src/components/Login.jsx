import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Loginpage() {
    const history = useNavigate()
    const { signInWithGoogle, login } = useAuth()
    const { logout, currentUser } = useAuth()

    const location = useLocation()

    function handleRedirectToOrBack() {
        history.replace(location.state?.from ?? '/profile')
    }


    return (
        <div>
            <button
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
    )
}
