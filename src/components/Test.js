import React from 'react'
import TestText from './TestText'

function Test({inputText,setInputText}) {
    return (
        <div>
            <TestText inputText={inputText} setInputText={setInputText} />
        </div>
    )
}

export default Test
