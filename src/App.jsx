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


  const handleDeleteRow = (targetIndex) => {
    setRows((prevRows) => prevRows.filter((_, idx) => idx !== targetIndex));
  };

 //handles new table row creation
  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows,newRow]):
      setRows(rows.map((currentRow, idx) => {
        if (idx !== rowToEdit) return currentRow

        return newRow;
      }))
  };

  const [rowToEdit, setRowToEdit] = useState(null)

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  }


  return (<div className="App" >
    <Tables rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
    <button className="button" onClick={() => setModalOpen(true)}>Add</button>
    {modalOpen && <Modal closeModal={() => { setModalOpen(false); setRowToEdit(null); }}  onSubmit={handleSubmit}
         defaultValue={rowToEdit !== null && rows[rowToEdit]}           
                    />}

  </div>
  )
}

export default App;