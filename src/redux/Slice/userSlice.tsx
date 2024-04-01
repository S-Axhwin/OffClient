import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchUserToken", async(payload:any) => {
    console.log(payload);
    console.log("end url: ", `${payload.isRec?"rec":"user"}/${payload.reg?"reg":"login"}`);
    const data:any = axios.post(`https://offserver-production.up.railway.app/${payload.isRec?"rec":"user"}/${payload.reg?"reg":"login"}`, {gmail:payload.gmail, password: payload.password, phone: payload.phone})
    .then((res:any) => {
        console.log(res, "from fetch user");
        localStorage.setItem("token", res.data.token)
        console.log(res);
        return (res.data)
    })
    return data
})

const inti = {
    gmail: '',
    username: '',
    isloading: true,
    isloggedIn: false,
    error: '',
    token: '',
    isRec: false
}

const slice:any = {
    name: 'user',
    initialState: inti,
    reducers: {
        logoutState(state:any) {
            state.gmail = ''
            state.username = ''
            state.isloggedIn = false;
            state.token = ''
        }   
    },
    extraReducers: (builder:any) => {
        builder.addCase(fetchUser.fulfilled, (state:any, payload:any) => {
            const curpayload = payload.payload
            console.log(curpayload);
            state.gmail = curpayload.gmail;
            state.isloggedIn = true;
            state.username = curpayload.gmail.substring(0, curpayload.gmail.lastIndexOf("@"));
            state.token = curpayload.token
            state.isloading = false;
            state.isRec = payload.payload.isRec || false
        });

        builder.addCase(fetchUser.pending, (state:any) => {
            console.log(state);
            state.isloading = true;
        });
        builder.addCase(fetchUser.rejected, (state:any, payload:any) => {
            state.isloading = true;
            state.error = payload.error || "page not found";
        });
    },
}


const useSlice:any = createSlice(slice) 
export const { logoutState } = useSlice.actions
export default useSlice.reducer