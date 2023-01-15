import Button from './ui/Button';

/**
 *  Paginate is a component that shows the pagination.
 * @param {object} heroes - The heroes.
 * @param {number} page - The page.
 * @param {function} nextPage - The next page function.
 * @param {function} prevPage - The previous page function.
 * @component
 * @example
 * return (
 * <Paginate />
 * )
 * @returns {JSX.Element} - A JSX element that displays a Paginate.

 * */

export const Paginate = ({ heroes, page, nextPage, prevPage }) => {
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
			<nav aria-label='Page navigation'>
				<ul className='pagination'>
					<li className='page-item'>
						<Button
							onClick={prevPage}
							ariaLabel='Previous'
							description='&laquo;'
							name='Previous'
						/>
					</li>
					{heroes.map((_, index) => {
						return (
							<li key={index} className='page-item'>
								<button
									data-testid='paginate-button'
									className={`page-link ${index === page ? 'active' : null}`}>
									{index + 1}
								</button>
							</li>
						);
					})}

					<li className='page-item'>
						<Button
							onClick={nextPage}
							ariaLabel='Next'
							description='&raquo;'
							name='Next'
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};
