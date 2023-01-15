/**
 *  Button component
 * @param {function} onClick - The onClick function.
 * @param {string} ariaLabel - The ariaLabel.
 * @param {string} name - The name.
 * @param {string} description - The description.
 * @component
 * @example
 * return (
 * <Button />
 * )
 * @returns {JSX.Element} - A JSX element that displays a Button.
 *
 *
 */

const Button = ({ onClick, ariaLabel, name, description, datatest }) => {
	return (
		<button
			
			onClick={onClick}
			className='page-link'
			aria-label={ariaLabel}>
			<span aria-hidden='true'>{description}</span>
			<span className='sr-only'>{name}</span>
		</button>
	);
};
export default Button;
