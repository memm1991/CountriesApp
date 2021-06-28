import React from 'react'
import {useState,useEffect} from 'react'
import {addall,addname,addact} from '../Actions'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar (){
 const   [name,setname]=useState('')
 const dispatch= useDispatch()
 const act=useSelector(state=>state.Act)

useEffect(()=>{
    dispatch(addall())
},[dispatch])
useEffect(()=>{
    if(name===''){
        dispatch({type:'CLEARNAME'})
    }
    else{
        dispatch(addname(name))
    }
},[name,dispatch]) 

useEffect(()=>{
    dispatch(addact())
    
},[])
    
   

 function handlerOnChange (e){
     setname(e.target.value)

 }
 function handlerSumit(e){
     e.preventDefault()
    

 }
    return(
        <div className='WrapperNav'>
            <form className='searchbar' onSubmit={(e)=>handlerSumit(e)}>
                <Link className='NavLink' to='/home'><span>Home page</span></Link>
                <input type="text" placeholder='Search' value={name} onChange={handlerOnChange}/>
                
                <Link className='NavLink' to='/home/activity'><span>Create Activity</span> </Link>
                
                
                
                

            </form>

        </div>
    )
}

export default Navbar