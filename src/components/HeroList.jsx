import { useHeroes } from '../context/HeroesContext';
import { HeroCard } from './HeroCard';

export const HeroList = () => {
	const { heroes } = useHeroes();
	
	return (
		<div className='row row-cols-1 row-cols-md-3 g-3'>
			{heroes.map((hero) => {
				return <HeroCard key={hero.id} {...hero} />;
			})}
		</div>
	);
};
