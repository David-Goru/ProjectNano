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
                <div className="App-buttons">
                    <button className="App-button" onClick={() => {
                        if (currentQuestion === 0) updateCurrentQuestion(defaultQuestions.length - 1);
                        else updateCurrentQuestion(currentQuestion - 1);
                    }}> Previous Question </button>
                    <button className="App-button" onClick={() => {
                        if (currentQuestion === (defaultQuestions.length - 1)) updateCurrentQuestion(0);
                        else updateCurrentQuestion(currentQuestion + 1);
                    }}> Next Question </button>
                </div>
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
        statement: "How long is an Olympic swimming pool (in meters)?",
        answers: [{
            text: "50 meters",
            valid: true
        }, {
            text: "10 meters",
            valid: false
        }, {
            text: "25 meters",
            valid: false
        }, {
            text: "150 meters",
            valid: false
    }] }, {
        statement: "What is 'cynophobia'?",
        answers: [{
            text: "Fear of dogs",
            valid: true
        }, {
            text: "Fear of cats",
            valid: false
        }, {
            text: "Fear of rats",
            valid: false
        }, {
            text: "Fear of birds",
            valid: false
    }] }, {
        statement: "What is the name of the largest ocean on earth?",
        answers: [{
            text: "Pacific Ocean",
            valid: true
        }, {
            text: "Atlantic Ocean",
            valid: false
        }, {
            text: "Indian Ocean",
            valid: false
        }, {
            text: "Arctic Ocean",
            valid: false
    }] }, {
        statement: "What was the name of the actor who played Jack Dawson in Titanic?",
        answers: [{
            text: "Leonardo DiCaprio",
            valid: true
        }, {
            text: "Tom Hank",
            valid: false
        }, {
            text: "Brad Pitt",
            valid: false
        }, {
            text: "Johnny Depp",
            valid: false
        }]
    }];

export default App;
