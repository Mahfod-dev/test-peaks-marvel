import { useHeroes } from '../context/HeroesContext';
import { HeroCard } from './HeroCard';
import Spinner from './ui/Spinner';

export const HeroList = () => {
	const { heroes, loading } = useHeroes();
	console.log(heroes)
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
