import { createSlice } from "@reduxjs/toolkit";

const{VITE_API_URL}= import.meta.env
export const fetchProjects= createAsyncThunk(

    "projects/fetchProjects",
    async (_, { rejectWithValue }) => {
        try{
            const response= await axios.get(`${VITE_API_URL}/projects`, {
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
            return response.data;
        
        }catch(error){
            return rejectWithValue(error.response?.data?.message || "Failed to fetch projects");
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
    }
})
export default projectSlice.reducer;