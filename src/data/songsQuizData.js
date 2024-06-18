// do i get all the song quiz or just one ?

const songsQuizData = [
    {
        url: '../../public/songs/songPlaceholder.mp3',
        question: "What is this famous song from 1979?",
        incorrectAnswers: [
            {
                songTitle: "What you gonna do about it honey",
                songArtist: "The Scary Doctors",
                songId: 45
            },
            {
                songTitle: "I'm all about your love",
                songArtist: "Toto and the tatas",
                songId: 35
            },
            {
                songTitle: "Get it going you wank stain",
                songArtist: "Jacky Channel",
                songId: 588
            },
        ],
        correctAnswer: {
            songTitle: "my Way or the CORRECT way",
            songArtist: "Bubbleman",
            songId: 943
        }
    },
    {
        url: '../../public/songs/songPlaceholder2.mp3',
        question: "What is this famous song from 2013?",
        incorrectAnswers: [
            {
                songTitle: "oops I pooped my pants",
                songArtist: "not so White Knickers",
                songId: 33
            },
            {
                songTitle: "solo I go biatch",
                songArtist: "I forgot my name",
                songId: 154
            },
            {
                songTitle: "blue staircase",
                songArtist: "Tommy L.A",
                songId: 940
            },
        ],
        correctAnswer: {
            songTitle: "CORRECT me if I am wrong",
            songArtist: "Kevin and the zits",
            songId: 989
        }
    },
    {
        url: '../../public/songs/songPlaceholder3.mp3',
        question: "What is this famous song from 2006?",
        incorrectAnswers: [
            {
                songTitle: "pinball wizard",
                songArtist: "The who",
                songId: 25
            },
            {
                songTitle: "he plays by intuition",
                songArtist: "who again?",
                songId: 654
            },
            {
                songTitle: "how do you think he does it",
                songArtist: "what makes him so good",
                songId: 766
            },
        ],
        correctAnswer: {
            songTitle: "I am CORRECT, you are wrong",
            songArtist: "pinball master",
            songId: 89
        }
    },   
]

export default songsQuizData