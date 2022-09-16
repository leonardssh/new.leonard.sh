import dynamic from 'next/dynamic';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useResume } from '../context/resume';

const ReactTooltip = dynamic(() => import('react-tooltip-rc'), { ssr: false });

type Props = {
	icon: string;
};

const SocialIcon = ({ icon }: Props) => {
	return (
		<>
			{icon === 'GitHub' && <FiGithub />}
			{icon === 'LinkedIn' && <FiLinkedin />}
			{icon === 'Twitter' && <FiTwitter />}
			{icon === 'Instagram' && <FiInstagram />}
		</>
	);
};

const Socials = () => {
	const resume = useResume();

	return (
		<div className="flex items-end justify-center mt-5 space-x-3 text-3xl cursor-pointer lg:text-2xl lg:m-0 text-slate-500">
			<ReactTooltip className="react-tooltip" />

			{resume?.basics.profiles.map(({ network, url, username }, index) => (
				<a
					key={index}
					className="transition-all duration-200 hover:text-slate-700"
					href={url}
					target="_blank"
					rel="noreferrer"
					data-tip={username}
					data-arrow-color="transparent"
				>
					<SocialIcon icon={network} />
				</a>
			))}
		</div>
	);
};

export default Socials;
