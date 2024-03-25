// css module , we use it to use different style of same name like we want to use header class but different color for different element
// we will have to import it and put its name in the className attribute and then class name which the imported file contains
import stylesOne from "./cssOne.module.css";
import stylesTwo from "./cssTwo.module.css";
// in external css we import the css file and put class name using className attributes
import "../css/style.css";
// in internal css we put js variable and make that var an object and put css property in it
const internal = {
  color: "blue",
  fontSize: "24px",
};
export default function CSS() {
  // in inline css, the outer bracket refers to javascript and inner refers to object containing styles of it
  return (
    <div>
      <h2 style={{ color: "red", fontSize: "20px" }}>Hi from Inline CSS</h2>
      <h2 style={internal}>Hi from Internal CSS</h2>
      <h2 className="heading">Hi from External CSS</h2>
      <h2 className={stylesOne.header}>Hi from Module 1 CSS</h2>
      <h2 className={stylesTwo.header}>Hi from Module 2 CSS</h2>
    </div>
  );
}
