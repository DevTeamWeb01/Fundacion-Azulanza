import Separador from '../../separador/separador'
import './seccionVisionMision.css'

const SeccionVisionMision = () => {
    return(
        <section className="mision-vision">
            <h2 className="titulo">Nuesta Mision Y Vision</h2>
            <Separador />
            <div className="info">
                <div className='mision'>
                    <p>Mision</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi fugit ipsa sed, recusandae reiciendis ex enim voluptate esse nostrum sequi, earum laborum! Accusamus adipisci iusto voluptas perferendis vitae repellendus.</span>
                </div>

                <div className='vision'>
                    <p>Vision</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi fugit ipsa sed, recusandae reiciendis ex enim voluptate esse nostrum sequi, earum laborum! Accusamus adipisci iusto voluptas perferendis vitae repellendus.</span>
                </div>
            </div>
        </section>
    )
}

export default SeccionVisionMision