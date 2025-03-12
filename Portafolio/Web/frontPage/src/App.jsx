import MyInfo from './components/contactInfo'
import './AppCss.css'
import "@fontsource/yeseva-one";
import "@fontsource/bungee";



function App() {


  return (
    <div className='container'>
      <header>
        <div className="menuBar">
          <div className="miLogo">
            <img className="logoSvg" src="#" alt=" Gustavo Web" />


          </div>
          <ul>
            <li><a href="#">Sobre mi</a></li>
            <li><a href="#">Trayectoria</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Oscuro</a></li>
          </ul>
        </div>
      </header>
      <div className="myTitle">
        <div className="nameAndSpec">
          <h1>Gustavo Ochoa</h1>
          <h2>Frontend Developer</h2>
        </div>

        <img src="#" alt="#" />
      </div>
      <div className='aboutMe'>
        <div className='MeTitle'>
          Sobre mi
        </div>
        <div className="Me1">
          <p className="aboutMeText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat ab temporibus facilis consequatur omnis consequuntur,
            cum neque inventore laudantium a, architecto,
            vitae optio recusandae! Eos aut quae aliquam dicta ad!
          </p>
        </div>
        <div className="Me2">
          <MyInfo />
        </div>
        <div className="Me3">
          <img src="#" alt="#" />
        </div>


      </div>
      <div className="experience">
        <div className="experienceName1">
          <p>Titulo 1</p>
        </div>
        <div className="experienceData1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis vitae debitis illum laboriosam, sint dicta laudantium eum a neque adipisci incidunt,
            odio consequuntur consectetur similique placeat maxime repudiandae et culpa.
          </p>
        </div>
        <div className="experienceImg1">
          <img src="#" alt="#" />
        </div>
        <div className="experienceName2">
          <p>Titulo 2</p>
        </div>
        <div className="experienceData2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis vitae debitis illum laboriosam, sint dicta laudantium eum a neque adipisci incidunt,
            odio consequuntur consectetur similique placeat maxime repudiandae et culpa.
          </p>
        </div>
        <div className="experienceImg2">
          <img src="#" alt="#" />
        </div>
        <div className="experienceName3">
          <p>Titulo 2</p>
        </div>
        <div className="experienceData3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis vitae debitis illum laboriosam, sint dicta laudantium eum a neque adipisci incidunt,
            odio consequuntur consectetur similique placeat maxime repudiandae et culpa.
          </p>
        </div>
        <div className="experienceImg3">
          <img src="#" alt="#" />
        </div>
      </div>
      <div className="endPart">
        <ul>
          <li>Contactame</li>
          <li>Mis redes</li>
          <li>........</li>
        </ul>
        <p>Copyright © 2025 GustavoWeb.All rights reserved and subject to the Privacy Policy and Terms and Conditions. </p>
      </div>
    </div>
  )
}

export default App
