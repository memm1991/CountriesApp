import React from 'react'
import{Link} from 'react-router-dom'
import '../Styles/Country.css'

function Country (props){
    if(props.loading){
        return <h2>Loading...</h2>
    }
    return(
        
        <div className='WraperC'>
            <img width='400' src={props.flag} className='flagC'/>
            <Link to={`/home/details/${props.id}`} className='nameC'>{props.name}</Link>
            <p className='ContinentC'>{props.continent}</p>


        </div>
    )
}

export default Country