const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className="inline-flex items-center border-2 border-twitterblue rounded-lg py-1 px-3 focus:outline-none 
            hover:bg-gray-100 text-base mt-4 md:mt-0"
    >
      {props.title}
    </button>
  );
};

export default Button;
