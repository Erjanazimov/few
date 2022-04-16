import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCarousel = createAsyncThunk(
    "carousel/fetchCarousel",
    async function(_, {rejectWithValue, dispatch}){
        try{
            const response = await fetch("https://sky-cinema-kg.herokuapp.com/api/v1/session/");
            if (!response.ok){
                throw new Error("Что то пошло не так")
            }
            const data = await response.json();

            const editMap = data.map(item => {
                return {
                    ...item,
                    status: false
                }
            })

            dispatch(addCinemaRek({data: editMap}))


        } catch (error){
            return rejectWithValue(error.message)
        }
    })


export const fetchMove = createAsyncThunk(
    "carousel/fetchMove",
    async function(_, {rejectWithValue, dispatch}){
        try{
            const response = await fetch("https://sky-cinema-kg.herokuapp.com/api/v1/films/?genre=movie-new&page=1");
            if (!response.ok){
                throw new Error("Что то пошло не так")
            }
            const data = await response.json();

            dispatch(addImagesTop({data}))

        } catch (error){
            return rejectWithValue(error.message)
        }
    })


const carouselSlice = createSlice({
    name: "carousel",
    initialState: {
        cinemaRek: [],
        moveCinema: []
    },
    reducers: {
        addCinemaRek(state, action){
            state.cinemaRek = action.payload.data
        },
        addImagesTop(state, action){
            state.moveCinema = action.payload.data
        }
    }
})

export const {addCinemaRek, addImagesTop} = carouselSlice.actions;

export default carouselSlice.reducer;