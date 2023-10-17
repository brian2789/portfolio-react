import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "./components/Card"
import proyecto1 from './Imagenes/proyecto1.jpg';
import proyecto2 from './Imagenes/proyecto2.jpg';
import proyecto3 from './Imagenes/proyecto3.jpg';
import proyecto4 from './Imagenes/proyecto4.jpg';
import proyecto5 from './Imagenes/proyecto5.jpg';
import proyecto6 from './Imagenes/proyecto6.jpg';
import proyecto7 from './Imagenes/proyecto7.jpg';
import proyecto8 from './Imagenes/proyecto8.jpg';
import proyecto9 from './Imagenes/proyecto9.jpg';


function App() {
  return (
    <div className="App">
      <section id="inicio">
        <div className="contenido">
            <header>
                <div className="contenido-header">
                    <h1>/BA/</h1>
                    <nav id="nav" class="">
                        <ul id="links">
                            <li><a href="#inicio" className="seleccionado" onclick="seleccionar(this)">INICIO</a></li>
                            <li><a href="#sobremi" onclick="seleccionar(this)">SOBRE MI</a></li>
                            <li><a href="#servicios" onclick="seleccionar(this)">SERVICIOS</a></li>
                            <li><a href="#portfolio" onclick="seleccionar(this)">PORTFOLIO</a></li>
                            <li><a href="#contacto" onclick="seleccionar(this)">CONTACTO</a></li>
                        </ul>
                    </nav>

                    <div id="icono-nav" onclick="responsiveMenu()">
                    <FontAwesomeIcon icon={faBars} />
                    </div>


                    <div className="redes">
                        <a href="https://www.facebook.com/bcabj1"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/brian.vt97/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://github.com/brian2789"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </header>
            <div className="presentacion">
                <p className="bienvenida">Bienvenidos</p>
                <h2>Soy <span>Brian Arce</span>, Desarrollador Web</h2>
                <p className="descripcion">Desarrolador Frontend </p>
                <a href="#portfolio">Ir a Portafolio</a>
            </div>
        </div>
    </section>

    <section id="sobremi">
        <div class="contenedor-foto">
            <img src="" alt=""/>
        </div>
        <div class="sobremi">
            <p class="titulo-seccion">Sobre Mi</p>
            <h2>Hola, Soy <span>Brian Arce</span> </h2>
            <h3>Desarrollador Web</h3>
            <p>Los invito a conocer mi Portafolio</p>
            <a href="#">Descargar CV</a>
        </div>
    </section>

    <section id="servicios">
        <h3 class="titulo-seccion">MIS SERVICIOS</h3>
        <div class="fila">
            <div class="servicio">
                <span class="icono"> <i class="fa-solid fa-code"></i></span>
                <h4>Diseño de Sitios Web</h4>
              
                <ul class="servicios-tag">
                    <li>Web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus rem illum sunt, asperiores!</p>
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-file-code"></i></span>
                <h4>Porgramación PHP</h4>
              
                <ul class="servicios-tag">
                    <li>Web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>I have been providing web design services with great success for 9 years. The client is very happy</p>
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-arrow-trend-up"></i></span>
                <h4>Posicionamiento SEO</h4>
              
                <ul class="servicios-tag">
                    <li>Web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>I have been providing web design services with great success for 9 years. The client is very happy</p>
            </div>
        </div>
        <div class="fila">
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-database"></i></span>
                <h4>Alojamiento de Sitios</h4>
              
                <ul class="servicios-tag">
                    <li>Web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>I have been providing web design services with great success for 9 years. The client is very happy</p>
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-palette"></i></span>
                <h4>Diseñador Gráfico</h4>
              
                <ul class="servicios-tag">
                    <li>Web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>I have been providing web design services with great success for 9 years. The client is very happy</p>
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-person-circle-question"></i></span>
                <h4>Consultor Externo</h4>
              
                <ul class="servicios-tag">
                    <li>Web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>I have been providing web design services with great success for 9 years. The client is very happy</p>
            </div>
        </div>
    </section>

    <div class="contenedor-skills" id="skills">
        <h3>HABILIDADES </h3>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Html & Css</p>
                <span class="porcentaje">90%</span>
            </div>

            <div class="barra">
                <div class="" id="html"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>Javascript</p>
                <span class="porcentaje">70%</span>
            </div>

            <div class="barra">
                <div class="" id="js"></div>
            </div>
        </div>
        <div class="skill">
            <div class="info">
                <p> <span class="lista"> </span>React JS</p>
                <span class="porcentaje">65%</span>
            </div>

            <div class="barra">
                <div class="" id="bd"></div>
            </div>
        </div>
    </div>

    <section id="portfolio">
        <h3 class="titulo-seccion">Mis Proyectos</h3>
        <div class="fila">
        <Card img={proyecto1} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        <Card img={proyecto2} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        <Card img={proyecto3} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
            
        </div>
        <div class="fila">
        <Card img={proyecto4} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        <Card img={proyecto5} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        <Card img={proyecto6} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        </div>
        <div class="fila">
        <Card img={proyecto7} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        <Card img={proyecto8} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        <Card img={proyecto9} descripcion="Descripcion Proyecto" subtitulo="Diseño Web" />
        </div>
    </section>

    <section id="contacto">
        <h3 class="titulo-seccion">Contactanos ahora</h3>
        <div class="contenedor-form">
            <form action="mailto:brianarce2789@gmail.com" method='get' encType='text/plain'>
                <div class="fila mitad">
                    <input type="text" name="subject" placeholder="Nombre Completo *" class="input-mitad" />
                    <input type="email" name="email" placeholder="Dirección de Email" class="input-mitad" />
                </div>
                <div class="fila">
                    <input type="text" placeholder="Tema..." class="input-full" />
                </div>
                <div class="fila">
                    <textarea name="body" id="" cols="30" rows="10" placeholder="Tu Mensaje..." class="input-full"></textarea>
                </div>

                <input type="submit" value="Enviar Mensaje" class="btn-enviar" />
            </form>
        </div>
    </section>
    
    <footer>
        <p>Todos los derechos reservados - 2023</p>
            <div class="redes">
            <a href="https://www.facebook.com/bcabj1"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/brian.vt97/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/brian2789"><FontAwesomeIcon icon={faGithub} /></a>
        </div>

    </footer>

    </div>
  );
}

export default App;
