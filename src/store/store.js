import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/reducer'
export default configureStore({
        reducer:{
            counter : counterReducer
        }
})