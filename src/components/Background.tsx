const Background: React.FC = () => {
	return (
		<div className="fixed inset-0 overflow-hidden bg-black -z-1">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(81,11,105,0.5)_2px,transparent_2px),linear-gradient(to_bottom,rgba(81,11,105,0.5)_2px,transparent_2px)] bg-size-[48px_48px]" />
			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_80%,black_100%)]" />
		</div>
	);
};

export default Background;
