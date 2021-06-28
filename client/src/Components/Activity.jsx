import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {addall,addact} from '../Actions'
import '../Styles/Activity.css'
// variable=[{name,dificulty,season,duration},[ARG,COL;VEN]]

function Activity (){
    const[resp,setresp]=useState('Creating an Activity')
    const[inputact,setinputact]=useState(
        {
            name:'',
            dificulty:'',
            duration:'',
            season:'',

        }
        
    )
    let countries=useSelector(state=>state.All)
    let dispatch=useDispatch()
    const [inputc,setinputc]=useState([])

    let handlerOnchange=(e)=>{
        setinputact({
            ...inputact,
            [e.target.name]:e.target.value
        })
    }
    let handlerSubmbit=async(e)=>{
        e.preventDefault()
        let i =inputc.map(el=>el.id)
        let sen=[inputact,i]
        let al=await axios.post('http://localhost:3001/activity', sen)
        setresp(al.data)
        setinputact(   {
            name:'',
            dificulty:'',
            duration:'',
            season:'',

        })
        dispatch(addall())
        dispatch(addact())
        setinputc([])
       
    }
    let handlerOnchangeP=(e)=>{
        
        let aux= e.target.value.split(' ')
        setinputc([
            ...inputc,{id:aux[0],name:aux[1]}//[{id,name}]--->[id,id,id]
        ])
    }
    console.log(inputact)
    console.log(inputc)
  
    return(
        <div className='WrapperAct'>
            <div>
        <form onSubmit={handlerSubmbit}>
            <label>Name</label>
            <input name='name' value={inputact.name} onChange={handlerOnchange}/>
            <label>Duration</label>
            <input name='duration' value={inputact.duration} onChange={handlerOnchange}/>
            <label >Dificulty</label>
            <select name="dificulty" id="dificultiy1" onChange={handlerOnchange}
             value={inputact.dificulty} required>
                <option  selected value={''}></option>
                <option  value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>

            </select>
            <label>Season</label>
            <select name="season" id="seson1" onChange={handlerOnchange}
             value={inputact.season}>
                <option selected value={''}></option>
                <option value={'Summer'}>Summer</option>
                <option value={'Winter'}>Winter</option>
                <option value={'Fall'}>Fall</option>
                <option value={'Spring'}>Spring</option>
            </select>
            <label>Chose a Country</label>
            <ul>
                {inputc?inputc.map((el,i)=>(<li key={el.id}>
                    {el.name}<button onClick={()=>
                        setinputc(inputc.filter(ele=>ele.name!==el.name))}>X</button>

                </li>)):null}
            </ul>
            <select name="Country" id="Country1" onChange={handlerOnchangeP} value={inputc} >
            <option selected value={''}></option>
                {countries&&
                countries.map(el=>(<option value={el.id+' '+el.name}>{el.name}</option>))}
            </select>
            <button type='submit'>Create</button>
            
        <p>{resp}</p>
        </form>
        </div>
        </div>
    )
}

export default Activity