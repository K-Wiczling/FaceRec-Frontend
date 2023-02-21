import React from "react";

const LinkForm = ({onInputChange, onButtonSubbmit}) => {
    return (
        <div className="ma5 mt3">
            <p className="f3">
                {'This Magic Braon will detect faces in your pictures.'}
            </p>
            <div className="center pa4 br3 shadow-5" >
                <input className="f4 w-70 center " type='text' onChange={onInputChange}/>
                <button className="f4 grow link pv2 ph3 dib white bg-light-purple w-30 center "  onClick={onButtonSubbmit}>Detect</button>
            </div>
        </div>
    )
}
export default LinkForm;