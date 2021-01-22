import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './Quiz'

import './styles.css';
import { QuizData } from './QuizData';

function App() {
    return (
        <div className="App">
            <Quiz />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) 
