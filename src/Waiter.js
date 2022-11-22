import './App.css';
import React, { useState, useEffect} from 'react';
import Categories from './components/Categories';
import Navbar from './components/Navbar'
import Display from './components/Display';
import Order from './components/Order';
import data from './components/menu.json';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment,Sidebar,Header, Container } from 'semantic-ui-react';

//aquí llamo a todos los componentes
function Waiter() {


  const names = data.map((element) => { return element.name })

  const [activeCategory, setActiveCategory] = useState("Para beber");
  const [currentOrder, setCurrentOrder] = useState([])
  const [customerName, setCustomerName] = useState("")
  const [visible, setVisible] = useState(false);

  const filterMenu = (category) => {
      setActiveCategory(category);
      return;
  }

  const takeOrder = (item) => {
      setCurrentOrder([
          item,
          ...currentOrder
      ]);
      return
  }

  const deleteFromOrder = (item) => {
      setCurrentOrder(
          currentOrder.filter((thisItem) => (thisItem) !== item)
      );
      return
  }

  function totalSum() {
      const [count, setCount] = useState(0);
      useEffect(() => {
          let prices = (currentOrder.map((item) => (Number(item.price))))
          setCount(prices.reduce((a, b) => a + b, 0))
      }, [currentOrder]);

      return count;
  }

  function visibility() {
      useEffect(() => {
          if (currentOrder.length !== 0) {
              setVisible(true)
          }
          else setVisible(false)
      }, [currentOrder]);

      return visible;
  }

  visibility()

  return (
    <Container style={{marginTop: '50px', width: '-webkit-fill-available'}}>
    <Navbar/>
      <Grid columns={1}>
        
          <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                  <Sidebar
                      
                      icon='labeled'
                      inverted
                      vertical
                      visible={visible}
                      width='very wide'
                  >
                      <Order
                          command={currentOrder}
                          erase={deleteFromOrder}
                          price={totalSum()}
                          nameCallback={setCustomerName}
                          nameState={customerName}
                      />

                  </Sidebar>

                  <Sidebar.Pusher>
                      <Segment basic>
                          <Header as='h3'>Application Content</Header>

                          <Categories
                              menu={names}
                              filterMenu={filterMenu}
                          />

                          <Display
                              menu={data}
                              category={activeCategory}
                              add={takeOrder}
                          />

                      </Segment>
                  </Sidebar.Pusher>
              </Sidebar.Pushable>
          </Grid.Column>
      </Grid>
      </Container>
  )
}

export default Waiter;
