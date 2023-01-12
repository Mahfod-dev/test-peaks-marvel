import { HeroesProvider } from './context/HeroesContext';
import HeroesRouter from './router/HeroesRouter';

function App() {
	return (
		<>
		<HeroesProvider>
			<HeroesRouter />
			</HeroesProvider>
		</>
	);
}

export default App;
