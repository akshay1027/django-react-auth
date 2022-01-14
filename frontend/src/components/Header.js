import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '100px', padding: '20px', background: '#2f2f2f' }}>
            <Link to='/login' style={{ padding: '0px 20px', color: 'white' }}>Login</Link>
            <Link to='/' style={{ padding: '0px 20px', color: 'white' }}>Home</Link>
        </div>
    );
};

export default Header;
