import Login from './components/Login';
import React from 'react'
import { auth } from './lib/firebase'
import Navbar from './components/Navbar'
import {Button,Container} from 'semantic-ui-react'
function Hello() {
    if (auth === false) {
        return (
            <Login />
        )
    }


    return (
        <Container>
       <Navbar/>
       <Container
       style={{marginTop: '100px'}}>
        <Button as='a' href='/SCL021-burger-queen/waiter' >
        Garzones</Button>
        <Button as='a' href='/SCL021-burger-queen/cook'>Cocina</Button>
        </Container>
        </Container>
    )

}

export default Hello