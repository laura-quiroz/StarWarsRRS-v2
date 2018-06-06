import React from 'react'
import logo from '../sw1.jpg'
import '../App.css'
import { Dimmer, Loader, Menu, Grid, Segment, Popup } from 'semantic-ui-react'

const StarWarsScene = props => (
  <div className="App">
    {props.stateL && (
      <Dimmer active>
        <Loader size="huge"> Esperando a {props.activeItem} </Loader>
      </Dimmer>
    )}
    <header className="App-header">
      <img id="logo" src={logo} alt="Logo Star Wars" />
    </header>
    <h2>{props.hello}</h2>
    <div className="App_Menu">
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="people"
              active={props.activeItem === 'people'}
              onClick={() => props.Mostrar2('people')}
            />
            <Menu.Item
              name="films"
              active={props.activeItem === 'films'}
              onClick={() => props.Mostrar2('films')}
            />
            <Menu.Item
              name="species"
              active={props.activeItem === 'species'}
              onClick={() => props.Mostrar2('species')}
            />
            <Menu.Item
              name="vehicles"
              active={props.activeItem === 'vehicles'}
              onClick={() => props.Mostrar2('vehicles')}
            />
            <Menu.Item
              name="starships"
              active={props.activeItem === 'starships'}
              onClick={() => props.Mostrar2('starships')}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12} className="App_Menu_Cont">
          <Segment>
            {props.activeItem === 'people' &&
              props.starwars &&
              !props.errorL &&
              props.starwars.results.map(item => (
                <Popup
                  key={item.name}
                  trigger={<p className="p_name">{item.name}</p>}
                  content={
                    <div>
                      <p>Mass: {item.mass}</p>
                      <p>Height: {item.height}</p>
                      <p>Eye Color: {item.eye_color}</p>
                      <p>Hair Color: {item.hair_color}</p>
                      <p>Gender: {item.gender}</p>
                    </div>
                  }
                  horizontalOffset={5}
                  position="right center"
                  onClick={() => props.Mostrar2('starships')}
                />
              ))}
            {props.activeItem === 'films' &&
              props.starwars &&
              !props.errorL &&
              props.starwars.results.map(item => (
                <Popup
                  key={item.title}
                  trigger={<p>{item.title}</p>}
                  content={
                    <div>
                      <p>Title: {item.title}</p>
                    </div>
                  }
                  horizontalOffset={5}
                  position="right center"
                />
              ))}

            {props.activeItem === 'species' &&
              props.starwars &&
              !props.errorL &&
              props.starwars.results.map(item => (
                <Popup
                  key={item.name}
                  trigger={<p>{item.name}</p>}
                  content={
                    <div>
                      <p>Nombre: {item.name}</p>
                    </div>
                  }
                  horizontalOffset={5}
                  position="right center"
                />
              ))}

            {props.activeItem === 'vehicles' &&
              props.starwars &&
              !props.errorL &&
              props.starwars.results.map(item => (
                <Popup
                  key={item.name}
                  trigger={<p>{item.name}</p>}
                  content={
                    <div>
                      <p>Nombre: {item.name}</p>
                    </div>
                  }
                  horizontalOffset={5}
                  position="right center"
                />
              ))}

            {props.activeItem === 'starships' &&
              props.starwars &&
              !props.errorL &&
              props.starwars.results.map(item => (
                <Popup
                  key={item.name}
                  trigger={<p>{item.name}</p>}
                  content={
                    <div>
                      <p>Nombre: {item.name}</p>
                    </div>
                  }
                  horizontalOffset={5}
                  position="right center"
                />
              ))}
            {props.errorL && (
              <h2 key="{item.error}">Ocurrio un error, intentalo de nuevo!!</h2>
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  </div>
)

export default StarWarsScene
