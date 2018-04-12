import React, { Component } from 'react'; //need to store info with tables
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Signup extends Component {
    // constructor(){
        // super()
    //     this.state = { //changes start here
    //         email: '',
    //         password: '',
    //         formErrors: {email: '', password: ''},
    //         emailValid: false,
    //         passwordValid: false,
    //         formValid: false
    //     } //changes end here
    // }
                                     //FORM VALIDATION CHALLENG https://dev.to/_arpy/html5-form-validation-in-react-3308 https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs
    // validate = () => {
    //     const formLength = this.formEl.length;

    //     if (this.formEl.)
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        //Post - fetch
        fetch("http://localhost:4000/api/user", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken))
        //save our token
        
        //prevent default
        event.preventDefault();
    }

    render(){
        return(
            <div>
               <h1>Signup</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type="text" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Signup;