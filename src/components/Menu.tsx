import { useState } from "react";

const Menu: React.FC = () => {
	const [selected, setSelected] = useState<string>("");
	const items: string[] = ["Projects", "Socials", "Certificates", "Resume"];

	return (
		<div className="m-8 flex justify-center gap-16">
			<div className="max-w-48 bg-[#7295DF70] ring-4 ring-[#434BE1] p-8 rounded-lg text-center md:text-left flex flex-col gap-8">
				{items.map((item: string) =>
					item === "Resume" ? (
						<a
							key={item}
							href="/resume.pdf"
							download
							className={`
								text-3xl mt-2 leading-relaxed cursor-pointer
								transition-all duration-300
								${selected === item ? "text-white scale-110" : "text-gray-200"}
							`}
							onMouseEnter={() => setSelected(item)}
						>
							{item}
						</a>
					) : (
						<p
							key={item}
							onMouseEnter={() => setSelected(item)}
							className={`
								text-3xl mt-2 leading-relaxed cursor-pointer
								transition-all duration-300
								${selected === item ? "text-white scale-110" : "text-gray-200"}
							`}
						>
							{item}
						</p>
					),
				)}
			</div>
			<div
				className={`w-2xl ring-4 p-8 rounded-lg text-center md:text-left ${
					["Projects", "Socials", "Certificates"].includes(selected)
						? "bg-[#7295DF70] ring-[#434BE1]"
						: ""
				}`}
			></div>
		</div>
	);
};

export default Menu;
