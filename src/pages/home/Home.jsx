import Header from "../../components/secciones/header/header";
import HeroHome from "../../components/secciones/heroHome/heroHome";
import SeccionSobre from "../../components/secciones/seccionSobre/seccionSobre";
import Footer from "../../components/secciones/footer/footer";

const Home = () =>{
    return(
        <>
            <Header />
            <HeroHome />

            <SeccionSobre />

            <Footer />
        </>
    )
}

export default Home;