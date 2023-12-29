'use client';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import Auth from './auth/page';
import Dashboard from './components/Dashboard';
import { AuthContext, AuthProvider } from './context/AuthContext';

const Home = () => {
	return (
		<AuthProvider>
			<HomeDisplay />
		</AuthProvider>
	);
};

export default Home;

const HomeDisplay = () => {
	const router = useRouter();
	const { loggedIn } = useContext(AuthContext);

	return <>{loggedIn ? <Dashboard /> : <Auth />}</>;
};
