import React, { Component } from 'react'; //need to store info with tables
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Signup extends Component {
    constructor(){
        super()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div>
               <h1>Signup</h1>
                {/* <Form onSubmit={} > */}
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type="text" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                {/* </Form> */}
            </div>
        );
    }
}

export default Signup;