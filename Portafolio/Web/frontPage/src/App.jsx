import { useState } from 'react'
import MyInfo from './components/contactInfo'


function App() {


  return (
    <div>
      <header>
        <div className="menuBar">
          <div className="miLogo">
          <img className="logoSvg" src="#" alt="Logo" />
          </div>
          <ul>
            <li>Titulo</li>
            <li>Proyectos</li>
            <li>Cursos</li>
          </ul>
        </div>
      </header>
      <div className="myTitle">
        <h1>Gustavo Alberto Ochoa Diaz</h1>
        <h2>Programador Frontend</h2>
      </div>
      <div className='aboutMe'>
        <div className='MyProfilePhoto'><img src="#" alt="#" /></div>
        <p className="aboutMeText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat ab temporibus facilis consequatur omnis consequuntur, 
          cum neque inventore laudantium a, architecto,
           vitae optio recusandae! Eos aut quae aliquam dicta ad!
        </p>
        <MyInfo/>
      </div>
      <div className="experience">
        <p>Mi camino</p>
        <ul>
          <li>Pagina de institucion</li>
          <li>Desarrollador web frontend</li>
          <li>Ingeniero de sistemas</li>
        </ul>
      </div>
      <div className="endPart">
        <ul>
          <li>Contactame</li>
          <li>Mis redes</li>
          <li>........</li>
        </ul>
        <p>copy</p>
      </div>
    </div>
  )
}

export default App
