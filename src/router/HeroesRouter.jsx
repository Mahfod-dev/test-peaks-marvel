import { Routes, Route } from 'react-router-dom';
import { HeroesPage } from '../pages/';
import { Navbar } from '../components/ui';

const HeroesRouter = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<HeroesPage />} />
				</Routes>
			</div>
		</>
	);
};
export default HeroesRouter;
