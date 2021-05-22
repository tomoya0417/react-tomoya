import React from 'react'
import {useHistory} from 'react-router-dom'

const ComponentC = () => {
    const history = useHistory()
    const backPage = () => {
        history.push("componentb")
    }
    return (
        <div>
            <div>ComponentC</div>
            <button onClick={backPage}>ComponentBへ戻る</button>
        </div>
    )
}


export default ComponentC;
