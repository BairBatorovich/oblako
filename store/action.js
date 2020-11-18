import {ADD} from './constants'

export const addTitle = (title) => {  
    return {
        type: ADD,
        title
    } 
};