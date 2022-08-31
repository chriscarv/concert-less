import React from 'react';
import photo from '../images/main.jpeg';
import { Form, Button } from 'react-bootstrap';
function HomePage() {

    return(
        <div className='homepage'>
            
            <img className="jumbotron" src={photo} alt="osc"></img>
            <p>tickets</p>
            <Form className='form'>
                <div className='formtext'>Login</div>
                <Form.Group className='mb-3'>
                    <Form.Label className='formtext' htmlFor='email'>Email </Form.Label>
                    <Form.Control name='email' placeholder='your email'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='formtext' htmlFor='password'>Password </Form.Label>
                    <Form.Control type='text' name='password' placeholder='your password'></Form.Control>
                </Form.Group>
                <Button
                >
                    Submit
                </Button>
                <div className='formtext'>Sign up</div>
                <Form.Group className='mb-3'>
                <Form.Label className='formtext' htmlFor='username'>Username </Form.Label>
                <Form.Control type='text' name='username' placeholder='your username'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='formtext' htmlFor='email'>Email </Form.Label>
                    <Form.Control type='text' name='email' placeholder='your email'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='formtext' htmlFor='password'>Password </Form.Label>
                    <Form.Control type='text' name='password' placeholder='your password'></Form.Control>
                </Form.Group>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default HomePage;