import React from "react"
import { useDispatch } from "react-redux"


export const Items = ()=>{

    const dispatch = useDispatch()

    const addItem=()=>{
        dispatch({type:"Add_Item"})
    }
    const removeItem=()=>{
        dispatch({type:"Remove_Item"})
    }
    return (
        <>
            <h2>This is item component</h2>
            <button onClick={addItem}>Add item to cart</button>
            &nbsp; &nbsp;
            <button onClick={removeItem}>Remove Item from the Cart</button>
        </>
    )
}