import { Answer } from "./Answer";
import { shuffle } from "../Services/ArrayTools";

export function Answers({ answers, questionIndex }) {
    answers = shuffle(answers);
    return answers.map((answer, index) =>
        <Answer
            key={questionIndex + "#" + index}
            answer={answer}
        />
    );
}