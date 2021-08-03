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
        statement: "What is the name of the world's longest river?",
        answers: [{
            text: "Nile",
            valid: true
        }, {
            text: "Amazon River",
            valid: false
        }, {
            text: "Yangtze",
            valid: false
        }, {
            text: "Niger",
            valid: false
    }] }, {
        statement: "What was the name of the actor who played Jack Dawson in Titanic?",
        answers: [{
            text: "Brad Pitt",
            valid: false
        }, {
            text: "Tom Hank",
            valid: false
        }, {
            text: "Leonardo DiCaprio",
            valid: true
        }, {
            text: "Johnny Depp",
            valid: false
        }]
    }];

export default App;
