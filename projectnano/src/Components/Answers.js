import { Answer } from "./Answer";

export function Answers({ answers, questionIndex }) {
    return answers.map(({ text }, index) =>
        <Answer
            key={questionIndex + "#" + index}
            text={text}
        />
    );
}