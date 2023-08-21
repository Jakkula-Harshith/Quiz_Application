import  React from "react";
import Questions from "./Questions";
export default function Quiz()
{
    function onPrev()
    {
        console.log('On Prev')
    }
    function onNext()
    {
        console.log('On Next')
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <Questions/>
            <div className='grid'>
                <button className="btn prev" onClick={onPrev}>Prev</button>
                <button className="btn next" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}