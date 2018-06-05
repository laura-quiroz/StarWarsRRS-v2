import React from 'react'
import logo from '../sw1.jpg'
import '../App.css'
import { Menu, Grid, Segment } from 'semantic-ui-react'

const StarWarsScene = props => (
  <div className="App">
    <header className="App-header">
      <img id="logo" src={logo} alt="Logo Star Wars" />
    </header>
    <h2>{props.hello}</h2>
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item
            name="people"
            active={props.activeItem === 'PEOPLE'}
            onClick={() => props.Mostrar2('PEOPLE')}
          />
          <Menu.Item
            name="films"
            active={props.activeItem === 'FILMS'}
            onClick={() => props.Mostrar2('FILMS')}
          />
          <Menu.Item
            name="species"
            active={props.activeItem === 'SPECIES'}
            onClick={() => props.Mostrar2('SPECIES')}
          />
          <Menu.Item
            name="vehicles"
            active={props.activeItem === 'VEHICLES'}
            onClick={() => props.Mostrar2('VEHICLES')}
          />
          <Menu.Item
            name="starships"
            active={props.activeItem === 'STARSHIPS'}
            onClick={() => props.Mostrar2('STARSHIPS')}
          />
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={12}>
        <Segment>Information saga Star Wars</Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default StarWarsScene
