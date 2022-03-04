import { createAction } from "redux-actions";
const SEARCH= 'contact/SEARCH';

// const SHOW_DETAIL= 'contact/SHOW_DETAIL';
// const CREATE_NEW= 'contact/CREATE_NEW';

export const search= createAction(SEARCH);
//export const search= (e)=> ({type: SEARCH});
// export const showDetail= ()=> ({type: SHOW_DETAIL});
// export const createNew= id=> ({type: CREATE_NEW});

const initialState= [
    {id:1, name:'JIEUN', phone:'010.0000.1111'}, {id:2, name:'a', phone:'010.0000.1111'},
    {id:3, name:'JI', phone:'010.0000.1111'}, {id:4, name:'tommy', phone:'010.0000.1111'}
]

export default function contact(state=initialState, action){
    switch(state.type){
        case SEARCH: 
            return state.map(
                contact=> contact.id===action.id ? {...state} : null
            )
        // case SHOW_DETAIL:
        //     return state;
        // case CREATE_NEW:
        //     return [...state, {id:action.id, name:action.name, phone:action.phone}]
    }
}