import Background from "./components/Background";
import Hero from "./components/Hero";
import Menu  from "./components/Menu"

const App: React.FC = () => {
	return (
		<div className="App">
			<Background />
			<Hero />
			<Menu />
		</div>
	);
};

export default App;
