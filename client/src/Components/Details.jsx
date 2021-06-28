import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {addid} from '../Actions'
import '../Styles/Details.css'
function Details (){

    let{id}=useParams()
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(addid(id))
    },[dispatch])
    let details = useSelector(state=>state.Id)
    return(
        <div className='WrapperDetails'>
            <section>

            <h3>{details.name}</h3>
            <img width='400' src={details.flag} alt="no se que va aqui" />
            <p>Capital: {details.capital}</p>
            <p>Continent: {details.continent}</p>
            <p>Population: {details.population}</p>
            <p>Area: {details.area}km2</p>
            <p>Subregion:{details.subregion}</p>
            <div className='ActivitiesShow'>
              { details.activities&&details.activities.map(ele=>(
                  <div>
                      <h3>Activity: {ele.name}</h3>
                      <p>dificulty: {ele.dificulty}</p>
                      <p>duration: {ele.duration}</p>
                      <p>season: {ele.season}</p>

                  </div>
              ))}
            </div>
              </section>
        </div>
    )
}

export default Details