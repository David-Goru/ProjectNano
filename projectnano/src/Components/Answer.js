import './Answer.css';
import { useState } from 'react';

export function Answer({ answer }) {
    const [selected, updateSelected] = useState(false);
    const selectionClass = selected ? (answer.valid ? "correct" : "incorrect") : "unselected";

    return <div onClick={() => updateSelected(true)} className={"answer " + selectionClass}> {answer.text}</div>;
}
