interface TextProps {
  text: string;
}

export const Text = ({ text }: TextProps) => {
  return <p className="font-light text-xl text-secondary-text">{text}</p>;
};
