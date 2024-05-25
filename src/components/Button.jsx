// eslint-disable-next-line react/prop-types
const Button = ({ onClick, className, children, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
