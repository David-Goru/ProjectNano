import { Answer } from "./Answer";

export function Answers({ answers, questionIndex }) {
    return answers.map((answer, index) =>
        <Answer
            key={questionIndex + "#" + index}
            answer={answer}
        />
    );
}