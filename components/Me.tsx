import { useResume } from '../context/resume';
import Socials from './Socials';

const Me = () => {
	const resume = useResume();

	return (
		<div className="flex flex-col items-center justify-center my-12 lg:flex-row lg:justify-start">
			<div className="relative m-0 lg:m-0 flex bg-[url('/images/me.png')] bg-cover bg-center bg-no-repeat rounded-full w-20 h-20 shadow-lg shadow-blue-300"></div>
			<div className="flex flex-col items-center justify-between w-[calc(100%-5rem)] m-0 lg:ml-6 xl:ml-6 2xl:ml-6 lg:flex-row">
				<div className="flex flex-col items-start justify-center">
					<h1 className="m-auto mt-6 text-3xl font-bold font-inter slide-top lg:m-0">
						{resume?.basics.name}
					</h1>
					<h2 className="m-auto text-lg font-medium text-center font-inter text-slate-500 slide-top lg:m-0">
						{resume?.basics.label}
					</h2>
				</div>
				<Socials />
			</div>
		</div>
	);
};

export default Me;
