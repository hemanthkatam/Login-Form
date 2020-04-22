import React from 'react';
import { Link } from 'react-router-dom';
import TextBox from '../components/TextBox';

class LoginBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    onChangeHandler = (evt, name) => {
        let { firstname, lastname, email, password } = this.state;
        if (name === 'FIRST_NAME' || name === 'LAST_NAME') {
            let inputVal = evt.target.value.split('').filter(ele => isNaN(parseInt(ele))).join('');
            firstname = name === 'FIRST_NAME' ? inputVal : firstname;
            lastname = name === 'LAST_NAME' ? inputVal : lastname;
        } else if (name === 'EMAIL') {
            email = evt.target.value;
        } else {
            const passwordCheck = /^[0-9a-zA-Z]+$/;
            const inputVal = evt.target.value;
            if (passwordCheck.test(inputVal)) {
                password = evt.target.value;
            }
        }

        this.setState({
            firstname,
            lastname,
            email,
            password
        })
    };

    onSubmitHandler = () => {
        let { firstname, lastname, email, password } = this.state;
        let isError = false;
        if (firstname === '' || lastname === '' || email === '' || password === '') {
            alert('First name or Last name or Email or Password should not be empty.');
            isError = true;
        }
        if (email !== '' && !isError) {
            const emailval = email.toLowerCase();
            const comCheck = emailval.length - emailval.indexOf('.com') === 4 ? true : false;
            let atCheck = false;
            const atValidCount = emailval.split('').filter(ch => ch === '@').length === 1 ? true : false;
            if (atValidCount && comCheck) {
                atCheck = emailval.length - emailval.indexOf('@') > 5 ? true : false;
            }
            if (!atCheck) {
                alert('Enter valid email.');
                isError = true;
            }

        } 
        if (password.length < 8 && !isError) {
            alert('Password must be at least 8 characters long.');
            isError = true;
        }

        if (!isError) {
            alert('Your details successfully submitted!');
        }
    };

    render() {
        const { firstname, lastname, email, password } = this.state;
        return (
            <div className="login-base">
                <div className="header-main">Get Started today!</div>
                <div className="row col-12 name-container">
                    <div className="col-6 textbox-main">
                        <TextBox label="First name" name="FIRST_NAME" type="text" onChangeHandler={this.onChangeHandler} value={firstname} />
                    </div>
                    <div className="col-6 textbox-main">
                        <TextBox label="Last name" name="LAST_NAME" type="text" onChangeHandler={this.onChangeHandler} value={lastname} />
                    </div>
                </div>
                <div className="row col-12 name-container">
                    <div className="col-6 textbox-main">
                        <TextBox label="Email address" name="EMAIL" type="email" onChangeHandler={this.onChangeHandler} value={email} />
                    </div>
                    <div className="col-6 textbox-main">
                        <TextBox label="Password" name="PASSWORD" type="password" onChangeHandler={this.onChangeHandler} value={password} />
                    </div>
                </div>
                <div className="rectangle"></div>
                <div className="confirm-button">
                    <button onClick={this.onSubmitHandler}>
                        <div className="d-flex button-text">
                            <div>Claim Your Free Trail</div>
                            <div className="pointer-right"></div>
                        </div>
                    </button>
                </div>
                <div className="terms-cond">
                    You are agreeing to our
                        <span className="term"> <Link to="/TermsandConditons" target="_blank">
                        Terms and Services</Link>
                    </span>

                </div>
            </div>
        )
    }
}

export default LoginBase;