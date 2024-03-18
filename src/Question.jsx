// Question.js

import { useState } from "react";
import "./Question.scss";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
const Question = ({ text, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="main_pregunta" onClick={toggleExpanded}>
      <div className="pregunta">
        <p>{text}</p>
        <div className="question__icon">
          {expanded ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </div>
      </div>

      {expanded && (
        <div className="respuesta">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
