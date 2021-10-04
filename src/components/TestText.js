import React from 'react'

function TestText({setInputText,inputText}) {
    const onChageHandler = (e) => {
        console.log("누름")
        setInputText(e.target.value)
    }
    return (
        <div>
            {inputText}
            <input value={inputText} onChange={onChageHandler} />
        </div>
    )
}

export default TestText
