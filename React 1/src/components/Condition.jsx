import True from "./True";
import False from "./False";

export default function Condition() {
    //rendering conditionally
    let x = 1;
    if (x) {
        return <True></True>;
    } else {
        return <False></False>;
    }
}