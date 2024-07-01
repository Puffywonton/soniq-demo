export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ]

    return unshuffledAnswers
        .map(answer => ({ sort: Math.random(), value: answer }))
        .sort((a, b) => a.sort - b.sort)
        .map(obj => obj.value)
}



export const handleModal = () => {
    document.getElementById('dialogBox').showModal()
    setTimeout(() => {
        document.getElementById('dialogBox').close()
    }, "100500")
}