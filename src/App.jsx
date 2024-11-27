import { useEffect, useState } from "react";

function App() {
  const [x,setX] = useState(0)
  useEffect(function(){
    console.log(x)
  },[])

  return (
    <div>
       Hello
    </div>
  );
}

export default  App;