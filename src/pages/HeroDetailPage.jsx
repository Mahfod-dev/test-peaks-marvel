import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useHeroes } from '../context/HeroesContext';
import {
	getHeroById,
	getHeroImage,
	getComicsByThird,
} from '../helpers/getHeroById';

export const HeroDetailPage = () => {
	const { heroId } = useParams();
	const navigate = useNavigate();

	const { heroes } = useHeroes();

	const hero = getHeroById(+heroId, heroes);

	const onNavigateBack = () => {
		navigate(-1);
	};

	const heroImageUrl = getHeroImage(hero.thumbnail);
	const heroThirdComics = getComicsByThird(hero);

	if (!hero) {
		return <Navigate to='/' />;
	}

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img src={heroImageUrl} alt={hero.name} className='img-thumbnail' />
			</div>
			<div className='col-8'>
				<h3>{hero.name}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>description:</b> :
						{hero.description
							? hero.description
							: 'sorry we will soon have the description'}
					</li>
					<li className='list-group-item'>
						<b>Comics:</b> {hero.comics.available}
					</li>
					<b>Comics:</b>
					{heroThirdComics.map((comic) => {
						return <li className='list-group-item'>{comic}</li>;
					})}

					{/* <li className='list-group-item'>
						<b>First apperance:</b> {hero.first_appearance}
					</li> */}
				</ul>

				{/* <h5 className='mt-3'>Characters</h5>
				<p>{hero.characters}</p> */}

				<button className='btn btn-outline-info' onClick={onNavigateBack}>
					Back
				</button>
			</div>
		</div>
	);
};
