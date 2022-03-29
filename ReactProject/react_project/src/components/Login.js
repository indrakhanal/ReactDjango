import {Form, 
    FormGroup,
    Button,
    Input
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Login = () =>{
    return(
        <div className="row col-md-6 col-sm-10 mx-auto p-0">
            <h1>Sign In</h1><hr/>
                <Form>
                    <FormGroup>
                        <label htmlFor="username">Username:</label>
                        <Input
                        type="text"
                        name="username"
                        id="username"
                        required
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <label htmlFor="password">Password:</label>
                        <Input
                        type="password"
                        name="password"
                        id="password"
                        
                        required
                        />
                    </FormGroup>
                    
                    <Button className="btn btn-success">
                        Sign In
                    </Button>
                </Form>
            <p>
                Need an Account? <br/>
                <span className="line">
                <Link to="/sign-up">
                    <p>Sign Up</p>
                    </Link>
                </span>
            </p>
        </div>
        
      
    )
}

export default Login