import { signGoogle } from '../lib/firebase.js';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import React from 'react';

const Login = () => {
    return (
        <Button
        onClick={signGoogle}>
        entrar
        </Button>
    )
}

export default Login
