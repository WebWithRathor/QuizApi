import Axios from "../../utils/axios";
import { LoadUser, emptyState } from "../reducers/questionSlice"


export const loadQuestion = (category) => async (dispatch, getstate) => {
    localStorage.removeItem("Quiz");
    dispatch(emptyState());
    let url = '/questions?apiKey=lxV8ZPP4zki8giVqV5pIGw7nZLhS48qwjqH9iThM&limit=10';
    if (category != 'random') url += `&category=${category}`;
    let { data } = await Axios.get(url)
    const user = {
        category: category,
        questions: data,
        index: 0,
        answers: data.map(() => { return { isAttempt: false, Answer: false } })
    }
    localStorage.setItem('Quiz', JSON.stringify(user))
    dispatch(LoadUser(user));
}

export const updateQuizData = (index, answer) => (dispatch, getstate) => {

    let answerObject = {}
    const userQuizData = getstate().questionSlice.User;
    const isAnswerAttempted = Array.isArray(answer) ? answer.length > 0 : !!answer;
    if (isAnswerAttempted) {
        Object.entries(userQuizData.questions[index].answers).forEach(([key, value]) => {
            let keyid = key + '_correct'
            answerObject[keyid] = `${key === answer}`
        })
    } else {
        answerObject = false;
    }
    const updatedQuizData = {
        ...userQuizData, index,
        answers: userQuizData.answers.map((item, idx) =>
            idx === index ? { ...item, isAttempt: isAnswerAttempted, Answer: answerObject } : item
        )
    };
    localStorage.setItem('Quiz', JSON.stringify(updatedQuizData))
    dispatch(LoadUser(updatedQuizData));
}
