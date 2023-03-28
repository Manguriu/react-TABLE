import Tables  from "./components/tables/Tables";
import  Modal  from "./components/modal/Modal";
import { useState } from "react"
import "./App.css";


function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (<div className="App" >
    <Tables />
    <button className="button" onClick={() => setModalOpen(true)}>Add</button>
    {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}

  </div>
  )
}
export default App