import Header from "../../components/secciones/header/header";
import HeroHome from "../../components/Heros/heroHome/heroHome";
import SeccionSobre from "../../components/secciones/seccionSobre/seccionSobre";
import Footer from "../../components/secciones/footer/footer";
import SobreCancer from "../../components/secciones/sobreCancer/sobreCancer";

const Home = () =>{
    return(
        <>
            <Header />
            <HeroHome />

            <SeccionSobre />
            <SobreCancer />

            <Footer />
        </>
    )
}

export default Home;