export const getHeroById = (id, heroes) => {
	    return heroes.find((hero) => hero.id === id);
};

export const getHeroImage=(image)=>{

    return `${image.path}.${image.extension}`;
}

export const getComicsByThird=({comics})=>{
  const comicsDetails = comics.items.slice(0,3).map((comic)=>{

        return comic.name

    })
    return comicsDetails
}
