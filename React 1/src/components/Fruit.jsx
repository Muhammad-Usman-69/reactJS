export default function fruit(props) {
  return (
    // <> are fragments which can be used if we want to return an entire jsx but not as another container for example we want to return li element but not with div
    <>
      <li>
        {props.name}'s price is Rs. {props.price} and looks like {props.emoji}
      </li>
    </>
  );
}
