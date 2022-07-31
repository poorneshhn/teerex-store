import "./custombutton.css";

const CustomButton = (props) => {
  const { title = "Click", onClick } = props;
  return (
    <button className="custom-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
