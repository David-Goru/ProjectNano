import './Answer.css';
import { useState } from 'react';

export function Answer({ answer }) {
    const [selected, updateSelected] = useState(false);
    const selectionClass = selected ? ("selected " + (answer.valid ? "correct" : "incorrect")) : "unselected";

    return <div onClick={() => updateSelected(true)} className={selectionClass}> {answer.text}</div>;
}
