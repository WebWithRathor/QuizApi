import axios from 'axios'

const Axios =  axios.create({
    baseURL:'https://quizapi.io/api/v1/'
})

export default Axios