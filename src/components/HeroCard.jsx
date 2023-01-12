import { Link } from 'react-router-dom';
import { getHeroImage } from '../helpers/getHeroById';

/**
 * HeroCard is a reusable component that displays a message.
 *
 *
 */

export function HeroCard({ id, description, name, thumbnail }) {
	
	const heroImageUrl = getHeroImage(thumbnail);

	
	return (
		<div className='col'>
			<div className='card' style={{ width: '18rem' }}>
				<img className='card-img-top' src={heroImageUrl} alt={description} />
				<div className='card-body'>
					<Link to={`/hero/${id}`} className='card-title'>
						{name}
					</Link>
					{description ? (
						<p className='card-text'>{description}</p>
					) : (
						<p className='card-text'>sorry we will soon have the description</p>
					)}
				</div>
			</div>
		</div>
	);
}
