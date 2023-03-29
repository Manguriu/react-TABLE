import { Tables } from "./components/tables/Tables";
import { Modal } from "./components/modal/Modal";
import { useState } from "react"
import "./App.css";


 function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    { page: "home", description: "this is the first page", status: "live" },
    { page: "page 2", description: "this is the second page", status: "draft" },
    { page: "page 3", description: "this is the third page", status: "error" },
  ]);

  //   const handleDeleteRow = (targetIndex: number): void => {
  //   setRows((prevRows) => prevRows.filter((_, idx) => idx !== targetIndex));
  // };

  const handleDeleteRow = (targetIndex) => {
    setRows((prevRows) => prevRows.filter((_, idx) => idx !== targetIndex));
  };



  return (<div className="App" >
    <Tables rows={rows} deleteRow={handleDeleteRow} />
    <button className="button" onClick={() => setModalOpen(true)}>Add</button>
    {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}

  </div>
  )
}

export default App;