
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const{VITE_API_URL}= import.meta.env
export const fetchProjects= createAsyncThunk(

    "projects/fetchProjects",
    async (_, { rejectWithValue }) => {
        try{
            const response= await axios.get(`${VITE_API_URL}/project`, {
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
            // console.log(response.data);
            return response.data;
        
        }catch(error){
            console.log(error);
            return rejectWithValue(error.response?.data?.message || "Failed to fetch projects");
        }
    }
)



export const createProject= createAsyncThunk(
    "projects/createProject",
    async (projectData, { rejectWithValue }) => {
        try{
            const response= await axios.post(`${VITE_API_URL}/project/create`, projectData, {
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
            console.log("Project created:", response.data);
            return response.data;
        }catch(error){
            console.log("Error creating project:", error.response.data);
            return rejectWithValue(error.response?.data?.message || "Failed to create project");
        }
    }

)




const projectSlice= createSlice({
    name: "projects",
    initialState:{ items:[], loading: false, error: null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProjects.pending, (state)=>{ 
            state.loading = true; 
            state.error =null;
        })
        .addCase(fetchProjects.fulfilled,(state, action)=>{
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchProjects.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createProject.fulfilled, (state, action) => {
        state.items.push(action.payload); 
        });
    }
})
export default projectSlice.reducer;