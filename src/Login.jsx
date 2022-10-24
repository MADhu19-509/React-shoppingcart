import React, { Component } from "react";
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "", password: ""
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4">

                        <div className="form-group form-row">
                            <h4 className="text-center font-weight-bold"> Login </h4>
                            <label for="InputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describeby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                        </div>
                        <div className="form-group form-row">
                            <label for="InputPassword1">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block m-2 pull-right" onClick={this.onLoginClick}>Login</button>
                        <div className="form-footer">
                            <p className="p-2 m-3"> Don't have an account? <a href="#">Sign Up</a></p>

                        </div>

                    </div>
                </div>
            </div>

            // <div className="col-lg-9">
            //     <h4 className="m-1 p-2 border-bottom "> Login </h4>
            //     <div className="form-group form-row">
            //         <label className="col-lg-4"> Email: </label>
            //         <input type="text" ClassName="form-control" />
            //     </div>

            //     <div className="form-group form-row ">
            //         <label className="col-lg-4"> password: </label>
            //         <input type="password" className="form-control" />
            //     </div>

            // </div> 
        )
    }

    onLoginClick = async () => {
        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, { method: "GET" })
        var body = await response.json()

        if (body.length > 0) {
            alert("successfully loged in")
        }
        else alert("invalid credentials ")

    }
}