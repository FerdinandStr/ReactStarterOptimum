import './globalStyle.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!')
}

ReactDOM.render(
    <Home />,
    document.getElementById('app')
)
