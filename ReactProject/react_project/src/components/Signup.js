import React, {useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {Form, 
    FormGroup,
    Button,
    Input
} from 'reactstrap'





class  SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            'username':'',
            'first_name': '',
            'last_name':'',
            'email':'',
            'password1':'',
            'password2':''
        }
        this.submitForm = this.submitForm.bind(this)
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    submitForm(){
        fetch('http://127.0.0.1:8000/api/register/', 
        {
            method:'POSt',
            body: JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))

        this.setState({
            'username':'',
            'first_name': '',
            'last_name':'',
            'email':'',
            'password1':'',
            'password2':''
        })
    }

    render(){

        return(
            <div className="col-md-6 col-sm-10 mx-auto p-0">
                <h1>Sign In</h1><hr/>
                    <Form>
                        <FormGroup>
                            <label htmlFor="username">Username:</label>
                            <Input
                            type="text"
                            name="username"
                            onChange={this.changeHandler}
                            value={this.state.username}
                            id="username"
                            required
                            />
                        </FormGroup>
    
                        <FormGroup>
                            <label htmlFor="fname">First Name:</label>
                            <Input
                            type="text"
                            name="first_name"
                            onChange={this.changeHandler}
                            value={this.state.first_name}
                            id="fname"
                            required
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="lname">Last Name:</label>
                            <Input
                            onChange={this.changeHandler}
                            type="text"
                            name="last_name"
                            value={this.state.last_name}
                            id="lname"
                            required
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="lname">Email:</label>
                            <Input
                            onChange={this.changeHandler}
                            type="email"
                            name="email"
                            value={this.state.email}
                            id="email"
                            required
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <label htmlFor="password">Password:</label>
                            <Input
                            onChange={this.changeHandler}
                            type="password"
                            name="password1"
                            value={this.state.password1}
                            id="password1"
                            required
                            />
                        </FormGroup>
    
                        <FormGroup>
                            <label htmlFor="password">Confirm Password:</label>
                            <Input
                            onChange={this.changeHandler}
                            type="password"
                            name="password2"
                            value={this.state.password2}
                            id="password2"
                            
                            required
                            />
                        </FormGroup>
                        
                        <Button type="submit" className="btn btn-success"
                        onClick={this.submitForm}>
                            Sign Up
                        </Button>
                    </Form>
                <p>
                    Already Have Account? <br/>
                    <span className="line">
                        <Link to="/">
                        <p>Log In</p>
                        </Link>
                    </span>
                </p>
            </div>
        )

    }
  
}


export default SignUp