import react from './node_modules/react';
import reactDOM from './node_modules/react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }
    render() {
        return (
            <div className="root-container">

                <div className="box-controller">
                    <div className="controller">
                        Login
                    </div>

                    <div className="controller">
                        Register
                    </div>

                </div>

                <div className="box-container">


                </div>

            </div>
        );
    }
}

class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) { }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
          </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLogin
                            .bind(this)}>Login</button>
                </div>
            </div>
        );
    }

}



//Register Box 
class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) { }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register
          </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}



reactDOM.render(<App />, document.getElementById("root"));