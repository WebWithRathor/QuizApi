import Axios from "../../utils/axios";
import { LoadUser } from "../reducers/questionSlice"


export const loadQuestion = (category) => async (dispatch, getstate) => {
    let url = '/questions?apiKey=lxV8ZPP4zki8giVqV5pIGw7nZLhS48qwjqH9iThM&limit=10';
    if(category != 'random') url += `&category=${category}`;
    let { data } = await Axios.get(url)
    const user = {
        category: category,
        questions: data,
        index : 0,
        answers:data.map(()=>{return {isAttempt:false,Answer:false}})
    }
    localStorage.setItem('Quiz',JSON.stringify(user))
    dispatch(LoadUser(user));

}
