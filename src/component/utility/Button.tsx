type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button aria-label="button" type={type} onClick={onClick} className="flex gap-3 items-center justify-center bg-blue hover:bg-blueHover py-3 px-4 rounded-md transition-all duration-300 text-white">
      {children}
    </button>
  );
};

export default Button;
