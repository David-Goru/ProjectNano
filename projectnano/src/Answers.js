export function Answers({ answers }) {
    return answers.map(({ text }) =>
        <Answer text={text} />
    );
}

function Answer({ text }) {
    return <p>{text}</p>;
}
