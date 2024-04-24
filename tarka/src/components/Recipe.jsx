import { useEffect, useState } from "react";

export default function Recipe({ foodId }) {
  //initializing some things
  const API = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a292d1a5d5544cdd98b64f89b4935ebd";
  // a292d1a5d5544cdd98b64f89b4935ebd
  // e48b092799a44abc88b1ba4571b709fe
  // 0045276943ad493f89af730f5581b4f7
  
  //state for food detail
  const [detail, setDetail] = useState({});
  
  useEffect(() => {
    //making function asyncrhonous
    async function fetchDetail() {
      const response = await fetch(`${API}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data)
      setDetail(data);
    }
    //triggering function
    fetchDetail();
  }, [foodId]);
  
  return <img src={detail.image} />;
}
