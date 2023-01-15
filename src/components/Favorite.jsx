import { useHeroes } from '../context/HeroesContext';
import { getHeroById, getHeroImage } from '../helpers/getHeroById';
import { toogleFavorite } from '../helpers/localFavorite';

export const Favorite = ({ favorite }) => {
	const { heroes } = useHeroes();

	const hero = getHeroById(favorite, heroes);

	const image = getHeroImage(hero.thumbnail);

	const onClickFavorite = () => {
		toogleFavorite(hero.id);
       };

	return (
		<>
			<div className='card ms-3' style={{ maxWidth: 750 }}>
				<div className='row no-gutters'>
					<div className='col-md-4'>
						<img src={image} className='card-img' alt={hero.name} />
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>{hero?.name}</h5>
							<button onClick={onClickFavorite}>Delete Favori</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
