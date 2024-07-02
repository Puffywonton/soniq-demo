/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import questions from "../data/songsQuizData"
import { shuffleAnswers } from "../helpers";

const initialState = {
    questions,
    currentQuestionIndex: 0,
    startGame: false,
    startRound: false,
    gameOver: false,
    setupGame: false,
    genreSelected: null,
    score: 0,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: null,
    currentSongUrl: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            const selectedAnswer = action.payload
            const correctAnswer = state.questions[state.currentQuestionIndex].correctAnswer.songId
            const score = selectedAnswer == correctAnswer ? state.score + 1 : state.score
            
            return {
                ...state,
                currentAnswer: action.payload,
                score: score,
                startRound: false,
            }
        }
        case "NEXT_QUESTION": {
            const gameOver = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = gameOver ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            const answers = gameOver ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
            const currentSongUrl = state.questions[currentQuestionIndex].url
            return {
                ...state,
                currentQuestionIndex,
                gameOver,
                answers,
                currentAnswer: null,
                startRound: true,
                currentSongUrl: currentSongUrl,
                timer: null
            }
        }
        case "QUESTION_TIMEOUT": {
            
            return {
                ...state,
                startRound: false,
            }
        }
        case "RESTART_GAME": {
            return initialState
        }
        case "START_GAME": {
            const gameOver = false
            const currentQuestionIndex = 0
            const startGame = true
            const startRound = true
            const currentSongUrl = state.questions[currentQuestionIndex].url
            return {
                ...state,
                currentQuestionIndex,
                gameOver,
                startGame,
                startRound,
                currentSongUrl: currentSongUrl,
                setupGame: false
            }
        }
        case "SETUP_GAME": {
            return {
                ...state,
                setupGame: true,
            }
        }
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}