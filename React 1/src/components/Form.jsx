import { useState } from "react";

export default function Form() {
  //following can be used for handling single input
  //const [name, setName] = useState("")

  //to use multiple input we use object in state instead of using multiple states
  const [name, setName] = useState({ firstName: "", lastName: "" });

  //first we pass event to the function and then pass it to state function
  //we can't change the value of name directly

  //in the follwing setName we use spread operate "..." on name which append the value on firstName which distrubing lastName
  //setName({ ...name, firstName: e.target.value })

  //we can handle submit by
  function handleSubmit(e) {
    //preventing from default submitting
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <input type="submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
}
