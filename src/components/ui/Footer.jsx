
/**
 * Component for showing Footer.
 *
 * @component
 * @example
 * return (
 * <Footer />
 * )
 * @returns {JSX.Element} - A JSX element that displays a Footer.
 * 
 */



const Footer = () => {
	return (
		<footer className='bg-dark mt-3 text-center text-lg-start'>
			<div className='text-center p-3 text-white'>
				© {new Date().getFullYear()} Copyright
			</div>
		</footer>
	);
};
export default Footer;
