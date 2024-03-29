import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchUserToken", async(payload:any) => {
    const data:any = axios.post("http://192.168.47.238:5001/user/login", {gmail:payload.gmail, password: payload.password})
    .then((res:any) => {
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
    isRer: false,
    error: '',
    token: '',

}

const slice = {
    name: 'user',
    initialState: inti,
    reducers: {
        setuser(state:any, action:any) {
            //console.log('i came here');
            //console.log(action.payload);
            state.gmail = action.payload.gmail
            state.username = action.payload.gmail.substring(0, action.payload.gmail.lastIndexOf("@"));
            state.isloggedIn = true;
            state.token = action.payload.token;
        }
    },
    extraReducers: (builder:any) => {
        builder.addCase(fetchUser.fulfilled, (state:any, payload:any) => {
            const curpayload = payload.payload
            state.gmail = curpayload.gmail;
            state.isloggedIn = true;
            state.username = curpayload.gmail.substring(0, curpayload.gmail.lastIndexOf("@"));
            state.token = curpayload.token
            state.isloading = false;
        });
        builder.addCase(fetchUser.pending, (state:any) => {
            state.isloading = true;
        });
        builder.addCase(fetchUser.rejected, (state:any, payload:any) => {
            state.isloading = true;
            state.error = payload.error || "page not found";
        });
    },
}

const useSlice:any = createSlice(slice as any);
export const { setuser } = useSlice.actions
export default useSlice.reducer