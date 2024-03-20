import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("John Doe")
  //first we pass event to the function and then pass it to state function
  //we can't change the value of name directly
  return (
    <div>
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}
