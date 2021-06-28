import React from 'react'
import Country from './Country'
import {useEffect,useState} from 'react'
import {useSelector, useDispatch}from 'react-redux'
import Pagination from './Pagination'
import '../Styles/Countries.css'

function Countries (){


    const state=useSelector(state=>state)
    const dispatch=useDispatch()

    const[render,setrender]=useState([])
    useEffect(()=>{
        setrender(state.filt)
    },[state])
    
    

    
    const [pag,setpag]=useState({
        currentpage:1,
        loading:false,
        countryPerpage:10,
    })
    let handlerChangeA=(e)=>{
        if(e.target.value==='asc'){
            dispatch({type:'ALPHABETA'})
        }else{
            dispatch({type:'ALPHABETZ'})
        }
    }
    const indexOfLastCountry= pag.currentpage * pag.countryPerpage
    const indexOfFirstCountry= indexOfLastCountry -pag.countryPerpage
    const currentCountry= render.slice(indexOfFirstCountry,indexOfLastCountry)

    const paginate=(pageNumber)=> setpag({
        ...pag,
        currentpage:pageNumber
    })
   
  
    
    return(
        <div className='WrapperCountries'>
            <p>Filters</p>
            <div className='filters'>
                <div>
            <label htmlFor="">Alfabetic Order: </label>
            <select name='alfabetic'  onChange={handlerChangeA}>
                <option value=""></option>
                <option value='asc'>Ascendent</option>
                <option value="des">Descendent</option>
                
            </select>
            </div>
            <div>
            <label htmlFor="">Continents: </label>
            <select name="continents" id="" onChange={(e)=>{dispatch({type:'CONTINENT',payload:e.target.value})}} >
                <option value=""></option>
                <option value="Americas">Americas</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
            <div>
            <label htmlFor="">Activities: </label >
            <select name="activities" id="" onChange={(e)=>{dispatch({type:'ACTIVITY',payload:e.target.value})}}>
                <option value=""></option>
            {state.Act.map(e=>(<option value={e}>{e}</option>))}
            </select>
            </div>
            <div>
            <label>Population</label>
            <button onClick={e=>dispatch({type:'POPULATION'})}>X</button>
            </div>
            </div>
           <div className='WrapperCards'>
               {currentCountry&&currentCountry.map(e=>(<Country flag={e.flag} id={e.id} name={e.name}
               continent={e.continent} loading={pag.loading}/>
               ))}

           </div>
           
          <Pagination countryPerPage={pag.countryPerpage} allCountries={render.length} paginate={paginate}/>
            
        </div>
    )
}

export default Countries