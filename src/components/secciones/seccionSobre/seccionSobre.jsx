import Separador from '../../separador/separador';
import './seccionSobre.css'

const SeccionSobre = () => {
    return (
        <>
            <section className="sobre">
                <Separador />
                <h1>Azulanza enfoca sus actividades en: <br />
                    Educación y Defensa de los Derechos Humanos del paciente
                </h1>

                <div className="cartas">
                    <div className="carta">
                    <figure>
                        <img
                        src="https://images.theconversation.com/files/502439/original/file-20221221-15-rseen2.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5463%2C3620&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                        alt="Educación"
                        />
                    </figure>
                    <h3>Educación</h3>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SeccionSobre;