import axios from 'axios'


export function addall(){
    return async function(dispatch){
        let back= await axios.get('http://localhost:3001/countries')
        return dispatch({
            type:'ADDALL',
            payload:back.data
        })
    }
}
export function addname(name){
    return async function(dispatch){
        let back= await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type:'ADNAME',
            payload:back.data
        })
    }
}
export function addid(id){
    return async function(dispatch){
        let back= await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type:'ADDID',
            payload:back.data
        })
    }
}

export function addact(){
    return async function(dispatch){
        let back= await axios.get('http://localhost:3001/activity')
        return dispatch({
            type:'ADDACT',
            payload:back.data
        })
    }
}