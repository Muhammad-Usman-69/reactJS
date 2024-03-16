import True from "./True";
import False from "./False";

export default function Condition() {
  //1)rendering conditionally
  const x = true;
  /* if (x) {
        return <True></True>;
    } else {
        return <False></False>;
    } */
  //2)having 2 return statement isn't good, so use following
  /* let message;
    if (x) {
        message = <True></True>;
    } else {
        message = <False></False>;
    }
    //now returning single message
    return message; */
  //3)Another way is by using terniary operator (?)
  let message = x ? <True /> : <False />;
  return message;
}
