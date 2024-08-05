import { createSlice } from "@reduxjs/toolkit";


const initialState=
{

   
    AuthUser:{},
    token: "",
    mobiledata:[],

}

// console.log("inside Auth reducer",initialState.AuthUser, );
// console.log("inside Auth reducer",initialState.token, );

const AuthSlice=createSlice(
    {
        name:"Auth",
        initialState,
        reducers:
        {
           setAuthUser:(state, action)=>
            {
                state.AuthUser=action.payload
            },
           setAuthUserToken:(state, action)=>
            {
                state.token = action.payload;
            },
            Logout: (state) =>
            {
                state.AuthUser = null;
                state.AuthUserToken = null;
                localStorage.clear();
            },

            setMobileListData:(state, action)=>
            {
               state.mobiledata=action.payload        
            }
            ,
            setItem:(state, action)=>
                {
                    state.Item=action.payload
                }
                
        }
    })

    export const AuthReducer= AuthSlice.reducer;
    export const Actions= AuthSlice.actions;