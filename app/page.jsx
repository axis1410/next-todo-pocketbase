'use client';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';
import Auth from './auth/page';

const Home = () => {
	return (
		<AuthProvider>
			<HomeDisplay />
		</AuthProvider>
	);
};

export default Home;

const HomeDisplay = () => {
	const { loggedIn } = useContext(AuthContext);

	return <>{loggedIn ? <div>Logged in</div> : <Auth />}</>;
};
