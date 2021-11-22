import { Button } from '@chakra-ui/react'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card } from '../components/Card'
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
            <Card maxW='md' mx='auto' mt={4}>
                <Button
                    variant='outline'
                    isFullWidth
                    colorScheme='red'
                    leftIcon={<FaGoogle />}
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
                </Button>
                {currentUser && (
                    <Button
                        variant='outline'
                        isFullWidth
                        colorScheme='red'
                        leftIcon={<FaGoogle />}
                        onClick={async e => {
                            e.preventDefault()
                            await logout()
                        }}
                    >
                        Cerrar sesión
                    </Button>
                )}
            </Card>
        </div>
    )
}
