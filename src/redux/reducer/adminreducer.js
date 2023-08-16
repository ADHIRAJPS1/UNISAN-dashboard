import { ADMIN } from '../actions/actionTypes';

const initialState = {
    noofCakes: 10
}

export const adminReducer = (state = initialState , action) => {

    const [ type,payload ] = action;

    switch(type){
        case ADMIN :
            return {
                ...state,
                data: payload,
                loading: false
            };
            default : return state
    }
};