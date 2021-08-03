import { Answer } from "./Answer";

export function Answers({ answers }) {
    return answers.map(({ text }) =>
        <Answer text={text} />
    );
}