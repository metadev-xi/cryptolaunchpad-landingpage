interface TitleProps {
  type: "title1" | "title2";
  text: string;
}

const Title = ({ type, text }: TitleProps) => {
  return (
    <h2
      className={`${
        type === "title1" ? "text-4xl" : "text-xl"
      } text-primary-text font-normal`}
    >
      {text}
    </h2>
  );
};

export default Title;
