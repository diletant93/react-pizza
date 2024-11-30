import { Link } from 'react-router-dom';
function Button({ children, to, type, onClick = null, disabled = false }) {
  const base =
    'transition-colors inline-block rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'px-4 py-2 md:px-5 md:py-3.5 text-sm transition-colors inline-block rounded-full border-2 border-stone-300   font-semibold uppercase tracking-wide text-stone-400 hover:text-stone-800  duration-300 hover:bg-stone-300 focus:bg-stone-300  focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (!(type in styles)) type = 'primary';
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
