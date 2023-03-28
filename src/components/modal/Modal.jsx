import "./Modal.css"

const Modal = ({ closeModal }) => {
  return (
    <div className="container" onClick={(e) => {
      if (e.target.className === "container")
        closeModal();
    }}>
      <div className="cont">
        <form>
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="desscription">Description</label>
            <textarea name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="none" selected disabled hidden>Select an Option..</option>
              <option value="live"> live</option>
              <option value="draft"> draft</option>
              <option value="error"> error</option>
            </select>
          </div>
          <button className="button" type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}
 export default Modal;