import { Routes, Route } from 'react-router-dom';
import { HeroesPage, HeroDetailPage } from '../pages/';
import { Navbar } from '../components/ui/Navbar';

const HeroesRouter = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<HeroesPage />} />
					<Route path='/hero/:heroId' element={<HeroDetailPage />} />
				</Routes>
			</div>
		</>
	);
};
export default HeroesRouter;
