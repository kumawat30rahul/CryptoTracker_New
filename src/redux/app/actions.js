import {ADDING_CRYPTO,REMOVING_CRYPTO} from './types'

export const whishListHandler = (target,id,data,dispatch) =>{
    if(target.parentElement.classList.contains('remove') || target.classList.contains('remove')){
        dispatch(removingFromCart(id))
    }else if(target.parentElement.classList.contains('add') || target.classList.contains('add') || target.tagName === "BUTTON"){
        dispatch(addingToCart(data))
        const watchListStorage = JSON.parse(localStorage.getItem("WATCHLIST")) || []
        localStorage.setItem("WATCHLIST",JSON.stringify([...watchListStorage,data]))
    }
}
export const addingToCart = (data)=>{
    return {
        type: ADDING_CRYPTO,
        payload: data
    }
}
export const removingFromCart = (id)=>{
    return {
        type: REMOVING_CRYPTO,
        payload: id
    }
}