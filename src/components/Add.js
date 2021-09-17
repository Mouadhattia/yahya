import React ,{useState}from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/tazzaSlice';

const Add = () => {
    const dispatch = useDispatch()
    const [newtazza, setnewtazza] = useState({
        name:"",
        lastName:""
    });
  
    return (
        <div>
           name: <input type="text" onChange={(e)=>setnewtazza({...newtazza,name:e.target.value})} />
          last name : <input type="text"onChange={(e)=>setnewtazza({...newtazza,lastName:e.target.value})} />
          <button onClick={()=>dispatch(add(newtazza))} > add</button>
        </div>
    )
}

export default Add

   

