import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        chatArr:[
            {
                name:'',
                message:''
            }
        ]
    },
    reducers:{
        addChat:(state,action)=>{
            state.chatArr.splice(30,1)
            state.chatArr.unshift(action.payload)
        }
    }
})

export const {addChat}=chatSlice.actions
export default chatSlice.reducer