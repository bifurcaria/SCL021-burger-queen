import { signGoogle } from '../lib/firebase.js';
import React from 'react';

const Login = () => {
    return (
        <button
        onClick={signGoogle}>
        entrar
        </button>
    )
}

export default Login
