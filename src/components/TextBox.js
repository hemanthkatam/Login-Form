import React from 'react';

class TextBox extends React.Component {
    render() {
        const { label } = this.props;
        return (
            <div className="col-12 textbox-container">
                <label>{label}</label>
                <div >
                    <input />
                </div>
            </div>
        )
    }
}

export default TextBox;