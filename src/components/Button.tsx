interface ButtonProps {
    title: string;
    onClick?: () => void;
    mainClassName?: string;
    titleClassName?: string;
  }
  
  const Button = ({
    title,
    onClick,
    mainClassName = '',
    titleClassName = '',
  }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded transition ${mainClassName}`}
      >
        <span className={titleClassName}>{title}</span>
      </button>
    );
  };
  
  export default Button;
  