// About.j
import about from "./About.module.scss";
import Buttom from "../../Components/Button";
const About = () => {
  return (
    <div className={about} id="sobre">
      <div className={about.content}>
        <div className={about.image}>
          <img
            src="about.png"
            alt="Imagen de muestra"
            className={about.image}
          />
        </div>

        <div className={about.text}>
          <h2 className={about.title}>Sobre a Conferência</h2>
          <p className={about.description}>
            A Conferência Estadual de Ciência, Tecnologia e Inovação é uma
            plataforma líder dedicada a promover a colaboração e impulsionar o
            progresso nos campos da ciência, tecnologia e inovação. Nossa
            conferência serve como um ponto de encontro para pesquisadores,
            formuladores de políticas, líderes da indústria e acadêmicos
            trocarem ideias, apresentarem pesquisas de ponta e forjarem
            parcerias que impulsionam a inovação. Desde explorar as últimas
            tendências até abordar desafios urgentes, estamos comprometidos em
            avançar o conhecimento e catalisar mudanças transformadoras.
          </p>
          <Buttom text={"Inscreva-se"} />
        </div>
      </div>
    </div>
  );
};

export default About;
