import './separador.css'

const Separador = () => {
    return(
        <div className="separador">
          <div className="separador_linea"></div>
          <div className="separador_icono">
              <box-icon name='heart' type='solid' color='#fb0004' ></box-icon>
          </div>
          <div className="separador_linea"></div>
        </div>
    )
}

export default Separador;