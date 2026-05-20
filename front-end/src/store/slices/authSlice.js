import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "axios";
import { authService } from "../../services/auth";



export const LoginUser= createAsyncThunk(
    "auth/loginUser",
    async(credentials,{rejectWithValue})=>{
        try {
            const data= await authService.login(credentials);
            if(data.token) localStorage.setItem("token",data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
)

export const registerUser=createAsyncThunk(
    "auth/registerUser",
    async(userData,{rejectWithValue})=>{
        try{

        }catch(error){
            return rejectWithValue(error.response?.data?.message || 'Registration failed')
        }
    }
)