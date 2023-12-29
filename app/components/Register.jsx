'use client';
import { useState } from 'react';
import pb from '@/pb';

const Register = () => {
	const data = {
		username: '',
		email: '',
		emailVisibility: true,
		password: '',
		passwordConfirm: '',
		name: '',
	};

	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
	const [registerName, setRegisterName] = useState('');
	const [registerUsername, setRegisterUsername] = useState('');
	const [registerEmailVisibility, setRegisterEmailVisibility] = useState(true);

	const handleRegister = async (e) => {
		e.preventDefault();
		if (registerPassword !== registerPasswordConfirm) {
			alert('Passwords do not match');
			return;
		}
		data.username = registerUsername;
		data.email = registerEmail;
		data.emailVisibility = registerEmailVisibility;
		data.password = registerPassword;
		data.passwordConfirm = registerPasswordConfirm;
		data.name = registerName;

		try {
			const record = await pb.collection('users').create(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<h1>Register new user</h1>
			<form className='flex flex-col justify-center'>
				<input
					className='authInput'
					type='text'
					placeholder='Username'
					value={registerUsername}
					onChange={(e) => setRegisterUsername(e.target.value)}
				/>
				<input
					className='authInput'
					type='text'
					placeholder='Email'
					value={registerEmail}
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
				<input
					className='authInput'
					type='password'
					placeholder='Password'
					value={registerPassword}
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
				<input
					className='authInput'
					type='password'
					placeholder='Confirm password'
					value={registerPasswordConfirm}
					onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
				/>
				<input
					className='authInput'
					type='text'
					placeholder='Name'
					value={registerName}
					onChange={(e) => setRegisterName(e.target.value)}
				/>
				<div>
					<label>Toggle email visibility</label>
					<input
						type='checkbox'
						checked={registerEmailVisibility}
						onChange={(e) => setRegisterEmailVisibility(e.target.checked)}
					/>
				</div>
				<button
					type='submit'
					onClick={handleRegister}
				>
					Register
				</button>
			</form>
		</main>
	);
};

export default Register;
