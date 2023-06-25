import HeroHome from '../../components/Heros/heroHome/heroHome';
import Footer from '../../components/secciones/footer/footer';
import Header from '../../components/secciones/header/header';
import './contacto.css'
import { useState } from 'react';

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const NameChange = (e) => {
    setName(e.target.value);
  };

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };

  const MessageChange = (e) => {
    setMessage(e.target.value);
  };

  const Envio = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
        <Header />
        <HeroHome />
        <section className='contacto'>
            <h1 className='contacto_titulo'>Contacta con Azulanza</h1>
            <form className="form" onSubmit={Envio}>
                <input id="name" type="text" value={name} onChange={NameChange} placeholder='Nombre *' required />

                <input id="email" type="email" value={email} onChange={EmailChange} placeholder='Correo *' required />

                <textarea id="message" value={message} onChange={MessageChange} placeholder='Mensaje *' required ></textarea>

                <button type="submit" className='form_boton'>Enviar</button>
            </form>
        </section>
        <Footer />
    </>
  );
};

export default Contacto;
