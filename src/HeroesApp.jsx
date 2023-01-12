import { HeroesProvider } from './context/HeroesContext';
import HeroesRouter from './router/HeroesRouter';

function HeroesApp() {
	return (
		
		<HeroesProvider>
			<HeroesRouter />
		</HeroesProvider>
		
	);
}

export default HeroesApp;
