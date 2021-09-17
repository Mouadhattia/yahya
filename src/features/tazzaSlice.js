import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
    list3:[
 { 
     name:'yahya',
     lastName: 'elhammi'
         
    }   ,
    { 
        name:'mou3adh',
        lastName: 'attia'
            
       }   
    ]

}

const tazzaSlice = createSlice({
    name: "tazzaSlicee",
    initialState,
    reducers: { 
        add : (state, action) =>{
            state.list3.push(action.payload)
            
        }
    
    }
});

export const { add } = tazzaSlice.actions
export default tazzaSlice.reducer