import { useContext, createContext, useState, useEffect } from 'react';
import { loadHeroesCharacters } from '../api/fetchApiMarvel';

const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
	const [heroes, setHereos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		try {
			loadHeroesCharacters().then((heroes) => {
				setHereos(heroes);
				setLoading(false);
			});
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
	}, []);

	return (
		<HeroesContext.Provider value={{ heroes, loading }}>
			{children}
		</HeroesContext.Provider>
	);
};

export const useHeroes = () => {
	const context = useContext(HeroesContext);
	if (!context) {
		throw new Error('useHeroes must be used within a HeroesProvider');
	}
	return context;
};
