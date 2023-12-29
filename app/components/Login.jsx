import { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext';
import pb from '@/pb';

const Login = () => {
	const { loggedIn, isLoading, handleLogin, email, setEmail, password, setPassword } =
		useContext(AuthContext);

	return (
		<main>
			<h1>Log in</h1>
			{isLoading && <div>Loading...</div>}
			{loggedIn ? (
				<h1>Logged in as {pb.authStore.model.username}</h1>
			) : (
				<>
					<form onSubmit={handleLogin}>
						<input
							className='authInput'
							type='text'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className='authInput'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type='submit'>Submit</button>
					</form>
				</>
			)}
		</main>
	);
};

export default Login;
