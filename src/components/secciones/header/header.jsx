import './hedaer.css'

const Header = () =>{
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
                <li className="menu_items"><a className="menu_link" href="">Inicio</a></li>

                <li className="menu_items-dropdown">
                    <a className="menu_link" href="">Quiénes somos</a>
                    <ul className="menu_lista-dropdown">
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Vision, Mision, Valores y Objetivos</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Autoridades</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Alianzas Estratégicas</a>
                    </li>
                    </ul>
                </li>

                <li className="menu_items-dropdown">
                    <a className="menu_link" href="">Que hacemos</a>
                    <ul className="menu_lista-dropdown">
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Educación</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Defensa de los DD.HH. del paciente</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Eventos solidarios</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Participacion en eventos cientificos</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Programas</a>
                    </li>
                    </ul>
                </li>

                
                <li className="menu_items-dropdown">
                    <a className="menu_link" href="">Información sobre el cáncer</a>
                    <ul className="menu_lista-dropdown">
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Leucemia Miloide Cronica (LMC)</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Mieloma Multiple (MM)</a>
                    </li>
                    <li className="menu_items-dropdown">
                        <a className="menu_link" href="">Cáncer de Mama</a>
                    </li>
                    </ul>
                </li>

                <li className="menu_items">
                    <a className="menu_link" href="">Testimonios</a>
                </li>
                <li className="menu_items">
                    <a className="menu_link" href="">Sumate a la causa</a>
                </li>
                <li className="menu_items"><a className="menu_link" href="">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header