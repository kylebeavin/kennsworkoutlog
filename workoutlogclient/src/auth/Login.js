import React, { Component } from 'react'; //need to store info with tables
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        //Post - fetch
        fetch("http://localhost:3000/api/login", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        //save our token
        //prevent default
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">password</Label>
                        <Input name="password" type="text" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>

            </div>
        );
    }
}

export default Login;