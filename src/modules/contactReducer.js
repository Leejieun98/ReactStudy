import { createAction } from "redux-actions";
export const SEARCH= 'contact/SEARCH';
export const ADD = 'contact/ADD'

// const SHOW_DETAIL= 'contact/SHOW_DETAIL';
// const CREATE_NEW= 'contact/CREATE_NEW';

export const searchMember= createAction(SEARCH);
export const addMember= createAction(ADD);
/*
export const addMember = (id)=>{
    return {type:ADD , payload:id}

}*/

//export const search= (e)=> ({type: SEARCH});
// export const showDetail= ()=> ({type: SHOW_DETAIL});
// export const createNew= id=> ({type: CREATE_NEW});

export const initialState= [
    {id:1, name:'JIEUN', phone:'010.0000.1111'}, {id:2, name:'a', phone:'010.0000.1111'},
    {id:3, name:'JI', phone:'010.0000.1111'}, {id:4, name:'tommy', phone:'010.0000.1111'}
]

export default function contactReducer(state=initialState, action){
    switch(action.type){
        case SEARCH:
            return state.map(
                contact=> contact.id===action.id ? {...state} : null
            )
        case ADD:
            console.log('이거',action.payload)
            return (
                state.concat(action.payload)
            )
        // case SHOW_DETAIL:
        //     return state;
        // case CREATE_NEW:
        //     return [...state, {id:action.id, name:action.name, phone:action.phone}]
        default : return state
    }
}