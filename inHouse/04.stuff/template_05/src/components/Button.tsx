type ButtonProps = {
  backgroundColor: string;
  fontSize: number;
  pillShape: boolean;
};

const Button = ({ backgroundColor, fontSize, pillShape }: ButtonProps) => {
  return (
    <button className={`bg-${backgroundColor}-600 text-white rounded px-4 py-2 text-[${fontSize}px]`}>
      클릭!
    </button>
  );
};

export default Button;
