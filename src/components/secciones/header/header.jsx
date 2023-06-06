import './hedaer.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector(".header");
          const contenedor = document.querySelector(".container");
          header.classList.toggle("abajo", window.scrollY > 50);
          contenedor.classList.toggle("abajo", window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return(
        <>
        <div className="container">
            <div className="container_logo">
                <img src="https://github.com/Migana1204/fundacion/blob/main/FUndacion/imagenes/logoFundacion-removebg-preview.png?raw=true" alt="Logo Fundación Azulanza" className="container_img"/>
            </div>
            <div className="container_contacto">
                <span className="container_telefono">
                <box-icon type="solid" name="phone" color="#545454"></box-icon>
                <p className="container_numero">(+57) 300-340-3454</p>
                </span>
                <p className="container_direccion">info@gmail.com</p>
            </div>
        </div>

        <header className="header">
            <nav className="menu">
                <ul className="menu_lista">
                <li className="menu_items">
                    <Link className='menu_link' to="/">Inicio</Link>
                </li>

                <li className="menu_items-dropdown">
                    <Link className='menu_link' to="">Quienes somos</Link>
                    <ul className="menu_lista-dropdown">
                    <li className="menu_items-dropdown">
                        <Link className='menu_link' to="/nosotros">Visión y Misión</Link>
                    </li>
                    <li className="menu_items-dropdown">
                        <Link className='menu_link' to="/">Miembros</Link>
                    </li>
                    <li className="menu_items-dropdown">
                        <Link className='menu_link' to="/">Alianzas</Link>
                    </li>
                    </ul>
                </li>

                <li className="menu_items-dropdown">
                    <Link className='menu_link' to="">¿Qué hacemos?</Link>
                    <ul className="menu_lista-dropdown">
                    <li className="menu_items-dropdown">
                        <Link className='menu_link' to="/">Educación</Link>
                    </li>
                    <li className="menu_items-dropdown">
                        <Link className='menu_link' to="/">Eventos solidarios</Link>
                    </li>
                    <li className="menu_items-dropdown">
                        <Link className='menu_link' to="/">Programas</Link>
                    </li>
                    </ul>
                </li>


                <li className="menu_items-dropdown">
                    <Link className='menu_link' to="">Sobre el cancer</Link>
                    <ul className="menu_lista-dropdown">
                    <li className="menu_items-dropdown">
                        <Link className="menu_link" to="/">Leucemia Miloide Cronica (LMC)</Link>
                    </li>
                    <li className="menu_items-dropdown">
                        <Link className="menu_link" to="/">Mieloma Multiple (MM)</Link>
                    </li>
                    <li className="menu_items-dropdown">
                        <Link className="menu_link" to="/">Cáncer de Mama</Link>
                    </li>
                    </ul>
                </li>

                <li className="menu_items">
                    <Link className="menu_link" to="/">Testimonios</Link>
                </li>
                <li className="menu_items">
                    <Link className="menu_link" to="/">Apoya</Link>
                </li>
                <li className="menu_items">
                    <Link className="menu_link" to="/">Contacto</Link>
                </li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header