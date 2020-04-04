import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

import {GOOGLE_CLINT_ID} from './../../constants/environment';
import { LoginStyle } from './login.style';

class Login extends Component {

    responseGoogle = (res: any) => {
        console.log(res);
        
    }

    failGoogle = (err: any) => {
        console.log(err);
        
    }
    
    render() {
        return (
            <LoginStyle>
                <div className="wapper">
                    <h1>Login with</h1>
                    <div className="social-media__box">
                    <GoogleLogin
                        clientId={GOOGLE_CLINT_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.failGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                        {/* <img className="social-media_logo" src={`${PUBLIC_URL}/images/google-logo.png`} alt="google"/> */}
                    </div>
                </div>
            </LoginStyle>
            
            
        )
    }

}

export default Login;