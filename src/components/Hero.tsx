import profile from "../assets/profile.png";
import profileHover from "../assets/profile-hover.png";

const Hero: React.FC = () => {
	return (
		<div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 px-4">
			{/* Profile Image */}
			<div className="group">
				<img
					src={profile}
					alt="Profile picture of Pendoof"
					className="w-32 h-32 rounded-lg ring-4 ring-[#434BE1] transition duration-200 group-hover:opacity-0 absolute"
				/>
				<img
					src={profileHover}
					alt=""
					className="w-32 h-32 rounded-lg ring-4 ring-[#434BE1] transition duration-200 opacity-0 group-hover:opacity-100"
				/>
			</div>

			{/* Text Card */}
			<div className="max-w-lg bg-[#7295DF70] ring-4 ring-[#434BE1] p-4 rounded-lg text-center md:text-left">
				<h1 className="text-4xl font-bold text-gray-100">Pendoof</h1>
				<p className="text-xl text-gray-200 mt-2 leading-relaxed">
					Focused on software development, problem-solving, and building practical applications. Interested in full-stack development and continuously learning new technologies
				</p>
			</div>
		</div>
	);
};

export default Hero;