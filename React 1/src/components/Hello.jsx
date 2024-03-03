let name = "Usman";

function dio() {
  return "Kono Dio Da!";
}

//can only return one element from one component
//use {} to use | show js expressions
//use container to use multiple elements

//components is a function which returns jsx (javascript extension)
//jsx includes html and js
function Hello() {
  return (
    <div>
      <h1>
        Hello Warldo! {name} {19 - 2}. {dio()}
      </h1>
    </div>
  );
}

export default Hello;
