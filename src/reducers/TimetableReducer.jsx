"use client"

export const TimetableInit = (TimetableInitialState) => {
    const result = {
        ...TimetableInitialState, 
        items: [ {id:1} ],
    }
    return result;
}

export const TimetableInitialState = {
    items: [],
};


export const TimetableReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, {id: action.payload.id} ]
            }   
        case 'ADD_COLUMN':
            return {
                ...state,
                items: state.items.filter((i) => {
                    if(i.id === action.payload.id) {
                        i.subject_id = action.payload.subject_id;
                        i.day = action.payload.day;
                        i.start = action.payload.start;
                        i.end = action.payload.end;
                        return i;
                    } else{
                        return i;
                    }
                })
            }   
        case 'ADD_START':
            return {
                ...state,
                items: state.items.filter((i) => {
                    if(i.id === action.payload.id) {
                        i.start_time = action.payload.start_time;
                        return i;
                    } else{
                        return i;
                    }
                })
            }   
        case 'ADD_END':
            return {
                ...state,
                items: state.items.filter((i) => {
                    if(i.id === action.payload.id) {
                        i.end_time = action.payload.end_time;
                        return i;
                    } else{
                        return i;
                    }
                })
            }   
        case 'ADD_DAY':
            return {
                ...state,
                items: state.items.filter((i) => {
                    if(i.id === action.payload.id) {
                        i.day = action.payload.day;
                        return i;
                    } else{
                        return i;
                    }
                })
            }   
        case 'ADD_SUBJECT':
            return {
                ...state,
                items: state.items.filter((i) => {
                    if(i.id === action.payload.id) {
                        i.subject_id = action.payload.subject_id;
                        return i;
                    } else{
                        return i;
                    }
                })
            } 
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload.id),
            }
        case 'EMPTY_ITEMS':
            return {
                ...state,
                items: [],
            }  
        default:
           return state;
    }
}