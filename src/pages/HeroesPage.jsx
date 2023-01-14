import { HeroList } from '../components/HeroList';
import Spinner from '../components/ui/Spinner';
import { useHeroes } from '../context/HeroesContext';

/**
 * HeroesPage is the main page of the application.
 * It shows the HeroList component.
 * @module HeroesPage
 * @component
 * @example
 * return (
 * <HeroesPage />
 * )
 * @returns {JSX.Element} - A JSX element that displays a HeroesPage.
 * 
 * useHeroes is a custom hook that returns the heroes and loading state.
 * @function useHeroes
 * @returns {object} - The heroes and loading state.
 * 
 * HeroList is a component that shows the list of heroes.
 * const loading = false
 * @param {boolean} loading - The loading state.
 * @component
 * @example
 * return (
 * <HeroList />
 * )
 * @returns {JSX.Element} - A JSX element that displays a HeroList.
 * 
 * Spinner is a component that shows a spinner.
 * const loading  = true;
 * @param {boolean} loading - The loading state.
 * 	
 * @component
 * @example
 * return (
 * <Spinner />
 * )
 * @returns {JSX.Element} - A JSX element that displays a Spinner.
 * 
 */





export const HeroesPage = () => {
	const { loading } = useHeroes();

	if (loading) {
		return <Spinner />;
	}

	return (
		<div>
			<h1>Marvel Heroes</h1>
			<HeroList />
		</div>
	);
};
