import React from 'react'
import '../Styles/Pagination.css'

function Pagination ({countryPerPage,allCountries,paginate}){
   const pageNumbers=[]
   for(let i=1; i<=Math.ceil(allCountries/countryPerPage);i++){
       pageNumbers.push(i)

   }
    return(
        <nav>
            <ul>
                {pageNumbers.map(el=>(
                <li key={el} className='pagNum'>
                    <button onClick={()=>paginate(el)}  className='pageLink'>
                        {el}
                    </button>

                </li>))}
            </ul>
        </nav>
    )
}

export default Pagination