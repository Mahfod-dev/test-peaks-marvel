const Button = ({onClick,ariaLabel,name,description}) => {
  return (
    			<button
							onClick={onClick}
							className='page-link'
							aria-label={ariaLabel}>
							<span aria-hidden='true'>{description}</span>
							<span className='sr-only'>{name}</span>
						</button>
  )
}
export default Button