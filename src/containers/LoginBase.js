import React from 'react';
import TextBox from '../components/TextBox';

class LoginBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: ''
        }
    }

    render() {
        return (
            <div className="login-base">
                <div className="header-main">Get Started today!</div>
                <div className="row col-12 name-container">
                    <div className="col-6 textbox-main">
                        <TextBox label="First name" />
                    </div>
                    <div className="col-6 textbox-main">
                        <TextBox label="Last name" />
                    </div>
                </div>
                <div className="row col-12 name-container">
                    <div className="col-6 textbox-main">
                        <TextBox label="Email address" />
                    </div>
                    <div className="col-6 textbox-main">
                        <TextBox label="Password" />
                    </div>
                </div>
                <div className="rectangle"></div>
                <div className="confirm-button">
                    <button>Claim Your Free Trail</button>
                </div>
                <div className="terms-cond">
                    You are agreeing to our  <span className="term">
                        Terms and Services
                            </span>

                </div>
            </div>
        )
    }
}

export default LoginBase;