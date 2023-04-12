import {ADDING_CRYPTO,REMOVING_CRYPTO} from './types'

export const initialState = {
    data: []
}

 const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ADDING_CRYPTO:
            return{
                ...state,
                data: [...state.data, action.payload]
            }
        case REMOVING_CRYPTO:
        const data = JSON.parse(localStorage.getItem("WATCHLIST"))
        const newData = data.filter((coin)=>coin.id !== action.payload)
        localStorage.setItem('WATCHLIST', JSON.stringify(newData));

            return{
                ...state,
                data:newData
            }
        default:
            return state
    }
}

export default reducer