import './Question.css';
import { Answers } from "./Answers";

export function Question({ question, index }) {
    return (
        <div className={"question"}>
            <h4>Question: {question.statement}</h4>
            <Answers answers={question.answers} questionIndex={index} />
        </div>
    );
}