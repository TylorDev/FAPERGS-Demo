/* eslint-disable react-refresh/only-export-components */
import Buttom from "../../Components/Button";
import Faq from "./Faq.module.scss"; // Archivo de estilos SCSS

import Question from "../../Components/Question";

const FAQ = () => {
  // Estado para controlar qué respuestas están visibles
  return (
    <div className={Faq.FAQ} id="faqs">
      <div className={Faq.Contenidos}>
        <div className={Faq.titulo}>Perguntas Frequêntes</div>
        <div className={Faq.Aclaracion}>
          Encontre respostas para perguntas frequentes sobre inscrições, prazos
          e oportunidades. Comece a planejar sua participação hoje! Cada chamada
          para ação é projetada para incentivar o engajamento e a participação,
          orientando os visitantes a dar o próximo passo em sua jornada com a
          conferência.
        </div>
        <Buttom text={"Junte-se a Nós"}></Buttom>
      </div>
      <div className={Faq.Preguntas}>
        <Question
          text={"Qual é o prazo para as inscrições no edital ARD/ARC?"}
          answer={
            "As inscrições para a bolsa ARD/ARC encerram em breve. Certifique-se de enviar sua inscrição antes do prazo!"
          }
        ></Question>
        <Question
          text={
            "Até quando posso me inscrever na Conferência Estadual de Ciência, Tecnologia e Inovação?"
          }
          answer={
            "As inscrições para a bolsa ARD/ARC encerram em breve. Certifique-se de enviar sua inscrição antes do prazo!"
          }
        ></Question>
        <Question
          text={
            "Quais oportunidades estão disponíveis para colaboração internacional?"
          }
          answer={
            "As inscrições para a bolsa ARD/ARC encerram em breve. Certifique-se de enviar sua inscrição antes do prazo!"
          }
        ></Question>
        <Question
          text={
            "Onde posso encontrar informações sobre oportunidades de financiamento recentes e resultados?"
          }
          answer={
            "As inscrições para a bolsa ARD/ARC encerram em breve. Certifique-se de enviar sua inscrição antes do prazo!"
          }
        ></Question>
      </div>
    </div>
  );
};

export default FAQ;
