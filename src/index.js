import "./globalStyle.css"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)
