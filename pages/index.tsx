import type { GetStaticProps, NextPage } from 'next';
import { Resume } from '../@types/resume';
import Me from '../components/Me';
import { ResumeContext } from '../context/resume';

type Props = {
	resume: Resume | null;
};

const Home: NextPage<Props> = ({ resume }) => {
	return (
		<ResumeContext.Provider value={resume}>
			<div className="flex flex-col w-screen sm:flex-col md:flex-col lg:flex-row">
				<div className="lg:w-[65%] w-full px-8 sm:px-16 pb-20 lg:pb-10">
					<Me />
				</div>
				<div className="bg-[url(/images/right-bg.jpg)] bg-cover bg-[#101926] text-white lg:w-[45%] w-full px-8 sm:px-16 pb-20 lg:pb-10">
					Hello World
				</div>
			</div>
		</ResumeContext.Provider>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const gist = 'leonardssh/d72297eb48abfad33e70e1313cd35614';
	const res = await fetch(
		`https://gist.githubusercontent.com/${gist}/raw/resume.json`,
		{
			cache: 'no-cache'
		}
	);

	let resume: Resume | null = null;

	if (res.status === 200) {
		resume = await res.json();
	}

	return {
		props: {
			resume
		},
		revalidate: 10
	};
};

export default Home;
