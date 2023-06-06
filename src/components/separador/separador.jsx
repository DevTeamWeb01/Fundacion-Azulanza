import './separador.css'

const Separador = () => {
    return(
        <div className="separador">
          <div className="separador_linea"></div>
          <div className="separador_icono">
            <box-icon name='donate-heart' type='solid' color='#eb00f3' size="40px"></box-icon>
          </div>
          <div className="separador_linea"></div>
        </div>
    )
}

export default Separador;