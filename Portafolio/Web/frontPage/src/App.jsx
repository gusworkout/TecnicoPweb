import MyInfo from './components/contactInfo'
import './AppCss.css'
import './MobileDesign.css'
import "@fontsource/yeseva-one";
import "@fontsource/bungee";

import { useEffect, useState } from 'react';



function App() {

  const [isActive, setIsActive] = useState(false)
  const [scrollAnimationHeader, setScrollAnimationHeader] = useState(false)
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 20) {
        setScrollAnimationHeader(true)
      } else {
        setScrollAnimationHeader(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <div className='container'>
      <header className={scrollAnimationHeader ? "scrollActivo" : ""}>
        <div className="menuBar">
          <div className="miLogo">
            <img className="logoSvg" src="src/assets/github.svg" alt=" Gustavo Web" />
            Gustavo Web
          </div>
          <ul>
            <li><a href="#">Sobre mi</a></li>
            <li><a href="#">Trayectoria</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Oscuro</a></li>
          </ul>
        </div>
      </header>
      <div className={scrollAnimationHeader ? "sCrollActivoBtn" : "menuSlideBar"} onClick={() => setIsActive(!isActive)}>
        MENÚ
      </div>
      <div id='slideBarMobil' className={isActive ? "slideBarMobilslideActive" : "slideBarMobil"}>
        <div className="btnRegresar" onClick={() => setIsActive(!isActive)}>
          Regresar
        </div>
        <ul className='ulSlideBar'>
          <li><a href="">Sobre mi</a></li>
          <li><a href="">Trayectoria</a></li>
          <li><a href="">Contacto</a></li>
          <li><a href="">Oscuro</a></li>
        </ul>
        <div className="logoSlideBar">
          <img src="#" alt="GustavoWeb" />
        </div>
      </div>
      <div className="myTitle">
        <div className="nameAndSpec">
          <h1>Gustavo Ochoa</h1>
          <h2>Frontend Developer</h2>
        </div>

        <img src="src/images/PruebaMiTituloImg.webp" alt="#" />
      </div>
      <div className='aboutMe'>
        <div className='MeTitle'>
          Sobre mi
        </div>
        <div className="Me1">
          <p className="aboutMeText">
            Hola!! <br />
            "Soy Gustavo. A mis 23 años, puedo decir que desde hace más
            de cinco años soy un apasionado de la tecnología. Decidí emprender
            este camino en el desarrollo frontend y me especializo en la creación
            de vistas utilizando React junto con CSS, siempre enfocándome en la
            experiencia del usuario.
            <br />
            Deseo aplicar mis conocimientos para brindar soluciones visualmente 
            atractivas. Además, siempre estoy dispuesto a aprender algo nuevo. 
            ¡Nunca es tarde para hacerlo!"
          </p>
        </div>
        <div className="Me2">
          <MyInfo />
        </div>
        <div className="Me3">
          <img src="src/images/PruebaMiTituloImg.webp" alt="#" />
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
          <img src="src/images/PruebaMiTituloImg.webp" alt="#" />
        </div>
        <div className="experienceName2">
          <p>Titulo 2</p>
        </div>
        <div className="experienceData2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis vitae debitis illum laboriosam, sint dicta laudantium eum a neque adipisci incidunt,
            odio consequuntur consectetur similique placeat maxime repudiandae et culpa.
            odio consequuntur consectetur similique placeat maxime repudiandae et culpa.
          </p>
        </div>
        <div className="experienceImg2">
          <img src="src/images/PruebaMiTituloImg.webp" alt="#" />
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
          <img src="src/images/PruebaMiTituloImg.webp" alt="#" />
        </div>
      </div>
      <div className="endPart">
        <ul>
          <li>Mis medios oficiales</li>
          <li> <img src="src/assets/whatsapp.svg" alt="" /> <a href="">WhatsApp</a></li>
          <li><img src="src/assets/gmail.svg" alt="" /> <a href="">Gmail</a></li>
          <li><img src="src/assets/github.svg" alt="" /> <a href="">GitHub</a></li>
          <li><img src="src/assets/facebook.svg" alt="" /> <a href="">Facebook</a></li>

        </ul>
        <p>Copyright © 2025 GustavoWeb.All rights reserved and subject to the Privacy Policy and Terms and Conditions. </p>
      </div>
      <script src='./src/componentes/transition.js'></script>
    </div>

  )
}

export default App
