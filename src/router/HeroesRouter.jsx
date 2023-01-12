import { Routes, Route } from 'react-router-dom';
import { HeroesPage } from '../pages/';
import { Navbar } from '../components/ui/Navbar';

const HeroesRouter = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<HeroesPage />} />
					<Route path=':heroId' element={<h1>Hello HeroId</h1>} />
				</Routes>
			</div>
		</>
	);
};
export default HeroesRouter;
