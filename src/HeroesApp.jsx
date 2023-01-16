import { HeroesProvider } from './context/HeroesContext';
import HeroesRouter from './router/HeroesRouter';


/**
 * HeroesApp is the main component of the application.
 * It provides the HeroesProvider and HeroesRouter.
 *  
 * HeroesProvider is a context that provides the heroes and loading state.
 * @module HeroesProvider
 * @component
 * @example
 * return (
 * <HeroesProvider>
 * <HeroesRouter />
 * </HeroesProvider>
 * )
 * @returns {JSX.Element} - A JSX element that provides the heroes and loading state.
 * 
 * Component for showing HeroesApp.
 * @component
 * @example
 * return (
 * <HeroesApp />
 * )
 * @returns {JSX.Element} - A JSX element that displays a HeroesApp.
 */


function HeroesApp() {
	return (
		
		<HeroesProvider>
			<HeroesRouter />
		</HeroesProvider>
	
		
	);
}

export default HeroesApp;
