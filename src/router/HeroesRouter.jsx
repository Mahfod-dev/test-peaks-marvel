import { Routes, Route } from 'react-router-dom';
import { HeroesPage, HeroDetailPage } from '../pages/';
import { Navbar } from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { ErrorPage } from '../pages/ErrorPage';

/**
 * Component for showing HeroesRouter.
 * @component
 * @example
 * return (
 * <HeroesRouter />
 * )
 * @returns {JSX.Element} - A JSX element that displays a HeroesRouter.
 */

const HeroesRouter = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<HeroesPage />} />
					<Route path='/hero/:heroId' element={<HeroDetailPage />} />
					<Route path='*' element={<ErrorPage/>} />
					
				</Routes>
			</div>
			<Footer />
		</>
	);
};
export default HeroesRouter;
