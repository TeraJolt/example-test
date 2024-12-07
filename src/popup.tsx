import { Home } from "popups/home"
import "./reset.css"
//import { createRoot } from "react-dom/client"

function IndexPopup() {
  return (
    <div style={{display: "flex"}}>
      <Home/>
    </div>
  )
}

export default IndexPopup

// const mountNode = document.createElement("div");
// document.body.appendChild(mountNode);

// const root = createRoot(mountNode);
// root.render(<IndexPopup/>);