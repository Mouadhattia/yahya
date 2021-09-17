import React from 'react';
import {useSelector} from "react-redux"
import Tazza from './Tazza';

const TazzaList = () => {
    const tazza = useSelector(state => state.mou3adh.list3)
    
    return (
        <div>
             <div>
            {tazza.map((el)=> <Tazza tazza={el}/>)}
        </div> 
       
      
           
        </div>
    )
}

export default TazzaList
