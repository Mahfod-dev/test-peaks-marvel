import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroesPage } from '../pages/';

const HeroesRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HeroesPage />} />
			</Routes>
		</Router>
	);
};
export default HeroesRouter;
