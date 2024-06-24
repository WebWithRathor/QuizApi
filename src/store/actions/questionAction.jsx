import Axios from "../../utils/axios";
import questionSlice, { Load } from "../reducers/questionSlice"



export const loadQuestion = (category) => async (dispatch, getstate) => {
    let url = '/questions?apiKey=lxV8ZPP4zki8giVqV5pIGw7nZLhS48qwjqH9iThM&limit=10';
    if(category != 'random') url += `&category=${category}`;
    console.log(url);
    let { data } = await Axios.get(url)
    dispatch(Load(data))
    const user = {
        category: category,
        questions: data,
        index : 0,
        answers:data.map(()=>{return {isAttempt:false,correct:false}})
    }
    localStorage.setItem('Quiz',JSON.stringify(user))
}