//props are properties , they are values which are passed through component to make them dynamic
//put a parameter in parenthesis to use props
//they will return object so use key
//props have immutability (they are read only and their values can't be changed)
//we can directly take properties from parentheses instead of getting code by following
function Button({ name, message, emoji, array, object }) {
  // function Button(props) {
  //props destruction
  // let { name, message, emoji, array, object } = props;
  //name must be like attributes
  return (
    <button>
      Salam Ya {name} {message} {emoji} {array } {object.height} {object.race}
    </button>
  );
  //if not destructing use
  /*return (
    <button>
      Salam Ya {props.name} {props.message}
    </button>
  );*/
}

export default Button;
