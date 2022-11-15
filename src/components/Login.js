import { signGoogle } from '../lib/firebase.js';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import React from 'react';
import { Container } from 'semantic-ui-react'

//rendereado condicional, si estas logueado te muestra botones de waiter o cook
//si no estas logueado sign in
//Agegar sombrita

const Login = () => {

    return (
        <Container>
        <Button
        onClick={signGoogle}>
        entrar
        </Button>
        </Container>
        
    )
}

export default Login
