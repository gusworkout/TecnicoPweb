import MyInfo from './components/contactInfo'
import './AppCss.css'

function App() {


  return (
    <div className='container'>
      <header>
        <div className="menuBar">
          <div className="miLogo">
          <img className="logoSvg" src="#" alt=" Gustavo Web" />
          
          
          </div>
          <ul>
            <li><a href="#">Quien soy</a></li>
            <li><a href="#">Trayectoria</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </header>
      <div className="myTitle">
        <div className="nameAndSpec">
          <h1>Gustavo Alberto Ochoa Diaz</h1>
        <h2>Programador Frontend</h2>
        </div>
        
        <img src="#" alt="#" />
      </div>
      <div className='aboutMe'>
        <p className="aboutMeText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat ab temporibus facilis consequatur omnis consequuntur, 
          cum neque inventore laudantium a, architecto,
           vitae optio recusandae! Eos aut quae aliquam dicta ad!
        </p>
        <MyInfo/>
      </div>
      <div className="experience">
        <ul className='xp'>
          <li className='nameXp'>Pagina de institucion</li>
          <li className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sapiente aliquam quos iusto distinctio? Dicta debitis eveniet vero nihil nemo, totam aliquam magnam 
            suscipit exercitationem autem at consequatur veritatis est itaque.
            </li>
        </ul>
        <ul className='xp'>
          <li className='nameXp'>Pagina de institucion</li>
          <li className='description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sapiente aliquam quos iusto distinctio? Dicta debitis eveniet vero nihil nemo, totam aliquam magnam 
            suscipit exercitationem autem at consequatur veritatis est itaque.
          </li>
        </ul>
        <ul className='xp'>
          <li className='nameXp'>Pagina de institucion</li>
          <li className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sapiente aliquam quos iusto distinctio? Dicta debitis eveniet vero nihil nemo, totam aliquam magnam 
            suscipit exercitationem autem at consequatur veritatis est itaque.
            </li>
        </ul>
      </div>
      <div className="endPart">
        <ul>
          <li>Contactame</li>
          <li>Mis redes</li>
          <li>........</li>
        </ul>
        <p>© Todos los derechos reservados | 2025</p>
      </div>
    </div>
  )
}

export default App
