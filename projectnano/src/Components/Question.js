import { Answers } from "./Answers";

export function Question({ question = "Not a question!", answers = [{ text: "Not an answer 1" }, { text: "Not an answer 2" }, { text: "Not an answer 3" }] }) {
    return (
        <div>
            <h4> {question} </h4>
            <Answers answers={answers} />
        </div>
    );
}