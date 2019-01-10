import axios from 'axios';

const baseURL='http://localhost:4000'
export const getRecords=()=>{
   return  axios.get(`${baseURL}/todos`)
}

export const getRecord=(id)=>{
    return axios.get(`http://localhost:4000/todos/${id}`)
}

export const createRecord=(inputParam)=>{
   return axios.post('http://localhost:4000/todos/add', {
        ...inputParam
       })
}

export const updateRecord=(id,inputParam)=>{
   return  axios.put(`http://localhost:4000/todos/update/${id}`,
		 {
			...inputParam
           })
        }

