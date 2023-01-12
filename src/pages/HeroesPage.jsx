import { useEffect } from 'react';
import { loadHeroesCharacters } from '../api/fetchApiMarvel';

export const HeroesPage = () => {
	useEffect(() => {
		loadHeroesCharacters();
	}, []);

	return <div>HeroesPage</div>;
};
