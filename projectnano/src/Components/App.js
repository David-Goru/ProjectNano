import './App.css';
import { Question } from './Question';
import { Title } from './Title';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Title text="Project Nano" />
                <Question />
            </header>
        </div>
    );
}

export default App;
