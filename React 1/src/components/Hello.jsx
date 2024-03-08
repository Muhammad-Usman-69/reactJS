let name = "Usman";

function dio() {
  return "Kono Dio Da!";
}
//components is a function which returns jsx (javascript extension)
//component name must be capital or it will be a normal function like dio()
//jsx includes html and js

//can only return one element from one component
//use {} to use | show js expressions
//use container to use multiple elements

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
