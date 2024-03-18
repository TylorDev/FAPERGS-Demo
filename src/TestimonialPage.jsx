// TestimonialsPage.js
import "./TestimonialsPage.scss";
import Testimonial from "./Testimonial";

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <h1 className="testimonials-page__title">Alguns dos participantes</h1>
      <p className="testimonials-page-description">
        Alguns dos participantes da edição passada compartilharam suas
        experiências transformadoras durante o evento. Suas histórias
        inspiradoras destacaram a importância da colaboração, inovação e
        descoberta na Conferência.
      </p>
      <div className="testimonials-page__testimonials">
        <Testimonial
          image={"1.png"}
          name="Jhon mendes"
          description="“Participar da Conferência Estadual de Ciência, Tecnologia e Inovação foi uma experiência transformadora. A oportunidade de interagir com os principais pesquisadores, conhecer descobertas inovadoras e estabelecer contatos com líderes da indústria enriqueceu muito minha perspectiva e alimentou minha paixão pela inovação.”"
        />
        <Testimonial
          image={"2.png"}
          name="Carlos Oliveira"
          description="“A conferência proporcionou uma plataforma única para compartilhar minha pesquisa e colaborar com outros profissionais. As discussões estimulantes e as oportunidades de networking foram inestimáveis para o avanço da minha carreira acadêmica. Recomendo a todos os interessados em ciência e inovação!”"
        />
        <Testimonial
          image={"3.png"}
          name="Ana luiza"
          description="A conferência foi um marco em minha jornada acadêmica. Conhecer especialistas de diversas áreas, participar de workshops e apresentar meu trabalho foi uma oportunidade enriquecedora. Estou muito grato por ter participado e ansioso para os próximos eventos!"
        />
      </div>
      <button className="testimonials-page__button">Junte-se a Nós</button>
    </div>
  );
};

export default TestimonialsPage;
