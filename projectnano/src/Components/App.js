import './App.css';
import { useState } from 'react';
import { Question } from './Question';
import { Title } from './Title';

function App() {
    const [currentQuestion, updateCurrentQuestion] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <Title text="Project Nano" />
                <Question question={defaultQuestions[currentQuestion]} index={currentQuestion} />
            </header>
        </div>
    );
}

const defaultQuestions = [{
    statement: "Not a question!",
    answers: [{
        text: "Not an answer 1",
        valid: true
    }, {
        text: "Not an answer 2",
        valid: false
    }, {
        text: "Not an answer 3",
        valid: false
    }, {
        text: "Not an answer 4",
        valid: false
    }]
}];

export default App;
