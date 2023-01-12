export const getHeroById = (id, heroes) => {
	    return heroes.find((hero) => hero.id === id);
};
