import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// createAsyncThunk

const fetchdata = createAsyncThunk(
    // Action: type: , payload:
    'Coins/fetch',

    async(args , ThunkAPI)=>{

        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
            const data = await response.json();
            return data; // this return data goes in our payload
        }
        catch(error){
           return rejectWithValue(error.message);
        }
    }
    
)


const slicer1 = createSlice(
    {
        name:'slice1',
        initialState:{data:[],loading:false,error:null},
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(fetchdata.pending , (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchdata.fulfilled , (state,action)=>{
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchdata.rejected ,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
        } 
    }
)

export default slicer1.reducer;
export {fetchdata};