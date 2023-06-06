import './sobreCancer.css'
import canceres from '../../../js/infoCanceres';


const SobreCancer = () => {
    return(
        <>
        <section className="canceres">
            <h2>Prevención, Detencción precoz y Tratamineto</h2>
            <div className="canceres_cartas">
                { canceres.map((cancer) => (
                    <div className="canceres_carta" key={cancer.id}>
                        <h3>{cancer.titulo}</h3>
                        <figure className="canceres_img">
                            <img  src={cancer.img} alt={cancer.titulo} />
                        </figure>
                        <p>{cancer.descripcion}</p>
                    </div>
                )) }
            </div>
      </section>
      </>
    )
}


export default SobreCancer