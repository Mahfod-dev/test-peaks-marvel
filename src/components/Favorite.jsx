import { getHeroImage } from '../helpers/getHeroById';


export const Favorite = ({ id, name, thumbnail, onDeleteFavorite }) => {


	const image = getHeroImage(thumbnail);


	return (
		<>
			<div className='card ms-3' style={{ maxWidth: 750 }}>
				<div className='row no-gutters'>
					<div className='col-md-4'>
						<img src={image} className='card-img' alt={name} />
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>{name}</h5>
							<button onClick={() => onDeleteFavorite(id)}>Delete Favori</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
