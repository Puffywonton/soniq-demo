import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { QuizProvider } from './contexts/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <div className="iphone-wrapper">
          <div className="iphone-screen">
              <div className="notch"></div>
              <App />
          </div>
      </div>
    </QuizProvider>
  </React.StrictMode>,
)
