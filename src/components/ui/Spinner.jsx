/**
 * Component Spinner for showing spinner.
 *
 * @component
 *
 * @example
 * return (
 * <Spinner />
 * )
 * @returns {JSX.Element} - A JSX element that displays a spinner.
 *
 */

export const Spinner = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div data-testid="spinner" className="spinner-grow" role="status"></div>
      </div>
    </>
  );
};
