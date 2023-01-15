import { Link } from 'react-router-dom';

const NoFavorite = () => {
	return (
		<div className='d-flex align-items-center justify-content-center vh-100'>
			<div className='text-center'>
				<h1 className='display-1 fw-bold'>No Favorites</h1>
				<p className='fs-3'>
					{' '}
				
				</p>
			
				<Link to='/' className='btn btn-primary'>
					Go Home
				</Link>
			</div>
		</div>
	);
};
export default NoFavorite;
