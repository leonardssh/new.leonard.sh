import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col overflow-hidden lg:flex-row bg-effect">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
