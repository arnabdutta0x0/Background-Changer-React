import { useState } from 'react'

function Bg() {

  const [color, setColor] = useState("#242424");

  return (
    <>
      <div className="flex h-screen w-full" style={{backgroundColor: color}}>
        <div className="rounded-2xl w-full p-2 fixed flex flex-wrap justify-center bottom-12">
          <button id="Red" className="m-2 rounded-2xl" onClick={() => setColor("red")}>Red</button>
          <button id="Yellow" className="m-2 rounded-2xl" onClick={() => setColor("yellow")}>Yellow</button>
          <button id="Blue" className="m-2 rounded-2xl" onClick={() => setColor("blue")}>Blue</button>
          <button id="Green" className="m-2 rounded-2xl" onClick={() => setColor("green")}>Green</button>
          <button id="Pink" className="m-2 rounded-2xl" onClick={() => setColor("pink")}>Pink</button>
          <button id="Lavender" className="m-2 rounded-2xl" onClick={() => setColor("lavender")}>Lavender</button>
          <button id="White" className="m-2 rounded-2xl" onClick={() => setColor("white")}>White</button>
          <button id="Black" className="m-2 rounded-2xl" onClick={() => setColor("black")}>Black</button>
          <button id="Normal" className="m-2 rounded-2xl" onClick={() => setColor()}>Normal</button>
        </div>
      </div>
    </>
  );
}

export default Bg;
