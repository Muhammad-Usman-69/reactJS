//props are properties , they are values which are passed through component to make them dynamic
//put a parameter in parenthesis to use props
//they will return object so use key
function Button(props) {
  return (
    <button>
      Salam Ya {props.name} {props.message}
    </button>
  );
}

export default Button;
