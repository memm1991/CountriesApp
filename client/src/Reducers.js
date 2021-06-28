const inicialState={
    All:[],
    Id:{},
    filt:[],
    Act:[]
    };
    
   

 function rootReducer(state=inicialState,action) {
     switch(action.type){
         case 'ADDALL':
             return{
                 ...state,
                 All:action.payload,
                 filt:action.payload
             }
         case 'ADDID' :
             return{
                 ...state,
                 Id:action.payload
             }
         case 'ADNAME':
             return{
                 ...state,
                 filt:action.payload
             }
         case 'CLEARNAME':
             return{
                 ...state,
                 filt:state.All
             }
         case 'POPULATION':  
     
         return{
             ...state,
             filt:state.All.filter(el=>el.population!=='blank').sort((a,b)=> b.population-a.population)
        
         }  
         case 'ALPHABETA':
       
             return{
                 ...state,
                 filt:state.All.sort((a,b)=>{
                   return  a.name===b.name?0:a.name>b.name?1:-1
                 })

            
            }
         case 'ALPHABETZ':
        
            return{
                ...state,
                filt:state.All.sort((a,b)=>{
                   return a.name===b.name?0:a.name<b.name?1:-1
                })

           
        }

         case 'CONTINENT':
        
            return{
                ...state,
                filt:state.All.filter(el=>el.continent===action.payload)
            }
        
        case 'ACTIVITY'  :
        
            return{//[{...activities[{},{}]},{}.{}]//[{...activis=[aaaa]}]
                ...state,
                filt:state.All.map(el=>({name:el.name,flag:el.flag,id:el.id,continent:el.continent,
                    activities:el.activities&&el.activities.map(e=>e.name)
                })).filter(element=>element.activities.includes(action.payload))
            
        }

        case 'ADDACT':
            return{
                ...state,
                Act:action.payload
            }    
        default:  
        return state    
    }
}
export default rootReducer;
    
                 
    