import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () => {
	return (
		<main className='flex flex-col md:flex-row justify-around'>
			<Login />

			<Register />
		</main>
	);
};

export default Auth;
