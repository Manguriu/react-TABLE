import "./Tables.css"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"


const Tables = () => {
  return (
    <div className="table- wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>Page</th>
          <th className="expand">Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Home</td>
          <td>this is the main page</td>
          <td>
            <span className="label label-live">live</span>
          </td>
          <td>
            <span className="icons">
              <BsFillTrashFill className="delete-btn" />
              <BsFillPencilFill />
            </span>
          </td>
        </tr>
                <tr>
          <td>Page 2</td>
          <td>this is the second page</td>
          <td>
            <span className="label label-draft">draft</span>
          </td>
          <td>
            <span className="icons">
              <BsFillTrashFill className="delete-btn" />
              <BsFillPencilFill />
            </span>
          </td>
        </tr>
                <tr>
          <td>Page 3</td>
          <td>this is the third page</td>
          <td>
            <span className="label label-error">error</span>
          </td>
          <td>
            <span className="icons">
              <BsFillTrashFill className="delete-btn" />
              <BsFillPencilFill />
            </span>
          </td>
        </tr>

      </tbody>
    </table>

    </div>


  )
}

export default Tables;