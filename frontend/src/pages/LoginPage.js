import React from 'react';
import { Button, TextField } from '@material-ui/core';

const LoginPage = () => {
    const handleSubmit = () => {
        console.log('handle submit');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <TextField variant='outlined' style={{ marginBottom: '20px', width: '250px' }} inputProps={{ fontSize: '2px' }} type='text' name='username' placeholder='Enter Username' />
                <TextField variant='outlined' style={{ marginBottom: '24px', width: '250px' }} inputProps={{ fontSize: '2px' }} type='password' name='password' placeholder='Enter Password' />
                <Button variant='contained' style={{ padding: '10px 50px', fontSize: '14px' }} type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default LoginPage;
