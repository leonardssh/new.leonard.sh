import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-[url('/images/left-bg.jpg')] font-inter antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;
