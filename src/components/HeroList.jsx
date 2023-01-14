import { useHeroes } from '../context/HeroesContext';
import { HeroCard } from './HeroCard';
import Spinner from './ui/Spinner';

/**
 * Component HeroList for showing details of the heroes.
 * @component
 * @param {object} heroes - The heroes object.
 * @param {boolean} loading - The loading state.
 * @example
 * const heroes = [
 * {
 * id: 1,
 * name: 'superman',
 * description: 'superman is a hero',
 * thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087', extension: 'jpg' }
 * }];
 * const loading = false;
 * return (
 * <HeroList heroes={heroes} />
 * )
 * 
 * @returns {JSX.Element} - A JSX element that displays a list of heroes.
 * 
 * @example
 * const loading = true;
 *	if (loading) {
 * 		return <Spinner />;
 * 	}
 *  @returns {JSX.Element} - A JSX element that displays a spinner.
 * 	
 */



export const HeroList = () => {
	const { heroes, loading } = useHeroes();
	
	if (loading) {
		return <Spinner />;
	}


	return (
		<div className='row row-cols-1 row-cols-md-3 g-3'>
			{heroes.map((hero) => {
				return <HeroCard key={hero.id} {...hero} />;
			})}
		</div>
	);
};
