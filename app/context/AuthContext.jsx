import { createContext, useState } from 'react';
import pb from '@/pb';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			await pb.collection('users').authWithPassword(email, password);
			console.log(pb.authStore.isValid);
			console.log(pb.authStore.token);
			console.log(pb.authStore.model.id);
			setLoggedIn(true);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				isLoading,
				setIsLoading,
				email,
				setEmail,
				password,
				setPassword,
				handleLogin,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
