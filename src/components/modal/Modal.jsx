import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal }) => {

  //form edit/fill
  const [formState, setFormState] = useState(
    {
      page: "",
      description: "",
      status: "live"
    });


  //handle change
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  //handle submit form(button)
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState)
  }

  return (
    <div className="container" onClick={(e) => {
      if (e.target.className === "container")
        closeModal();
    }}>
      <div className="cont">
        <form>
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input name="page" value={formState.page} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="desscription">Description</label>
            <textarea name="description" value={formState.description} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status" value={formState.status} onChange={handleChange} >
              <option value="live"> live</option>
              <option value="draft"> draft</option>
              <option value="error"> error</option>
            </select>
          </div>
          <button className="button" type="submit" onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </div>
  )
}
