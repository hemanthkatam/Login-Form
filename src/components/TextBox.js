import React from 'react';

const TextBox = props => {
    const { label, type, onChangeHandler, name,value } = props;
    return (
        <div className="col-12 textbox-container">
            <label>{label}</label>
            <div >
                <input type={type} onChange={(evt) => onChangeHandler(evt, name)} value={value}/>
            </div>
        </div>
    )
}
export default TextBox;
