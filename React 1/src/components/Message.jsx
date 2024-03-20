export default function Message() {
  //event handling
  function handleClick() {
    console.log("Hello Click!");
  }
  return (
    <div>
      {/* onClick is jsx not onclick of html */}
      {/* parenthesis willl automatically trigger handleClick */}
      <button onClick={handleClick}>Event Here</button>
    </div>
  );
}
