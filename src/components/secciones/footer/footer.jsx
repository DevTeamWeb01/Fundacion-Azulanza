import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
          <div className="footer_contenido">
              <div className="footer_logo">
                  <img src="https://github.com/Migana1204/fundacion/blob/main/FUndacion/imagenes/logoFundacion-removebg-preview.png?raw=true" alt="logo footer"/>
              </div>
              <div className='footer_email'>
                  <p>Recibe la información más relevante de Fundación Azulanza directamente en tu correo electrónico.</p>
              </div>
          </div>

          <div className='footer_info'>
              <div className='footer_contacto'>
                  <div className='footer_telefono'>
                      <span>
                          <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                      </span>
                      <p>(+57) 300 - 2760124</p>
                  </div>

                  <div className='footer_correo'>
                      <span>
                          <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                      </span>
                      <p>devteamweb01@gmai.com</p>
                  </div>
              </div>
          </div>

          <div className='footer_derechos'>
              <p>Todos los Derechos Reservados. Diseñado y Desarrollado por: DevTeamWeb ®</p>
          </div>
      </div>
    )
}

export default Footer