import React from 'react'
import { Menu } from 'semantic-ui-react'

function Navbar() {

    return (
      <Menu
      as='header'
      borderless
      fixed='top'

      >
        <Menu.Item
          as='a' href='/'
        >
          Inicio
        </Menu.Item>

        <Menu.Item
          as='a' href='/cook'
        >
          Pedidos
        </Menu.Item>

        <Menu.Item
          as='a' href='/'
        >
          Salir
        </Menu.Item>
      </Menu>
    )
  }

export default Navbar