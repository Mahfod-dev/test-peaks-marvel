import Button from "./ui/Button";

export const Paginate = ({ heroes, page, nextPage, prevPage }) => {
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
			<nav aria-label='Page navigation'>
				<ul className='pagination'>
					<li className='page-item'>

                    <Button onClick={prevPage} ariaLabel='Previous' description='&laquo;' name='Previous' />

                    </li>
					{heroes.map((_, index) => {
						return (
							<li key={index} className='page-item'>
								<button
									className={`page-link ${index === page ? 'active' : null}`}>
									{index + 1}
								</button>
							</li>
						);
					})}

					<li className='page-item'>
                        <Button onClick={nextPage} ariaLabel='Next' description='&raquo;' name='Next' />
                    </li>
				</ul>
			</nav>
		</div>
	);
};
