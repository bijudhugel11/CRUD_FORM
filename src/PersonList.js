import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
function PersonList(props) {
  const { person, handleDelete, handleEdit } = props;

  return (
    <div className="person__container container mt-5">
      {person.personArr.map((person, i) => (
        <div key={i} className="person__container--sub">
          <ul className="person__list--ul">
            <li>
              <h4>
                Name:
                {person.name}
              </h4>
            </li>
            <li>
              <h4>Age: {person.age}</h4>
            </li>
            <li>
              <h4>Email: {person.email}</h4>
            </li>
            <li>
              <h4>Hobby: {person.hobby}</h4>
            </li>
            <li>
              <h4>Address:{person.address} </h4>
            </li>
          </ul>
          <div className="person__container--button">
            <button
              type="button"
              className="btn btn-danger mr-5
              "
              onClick={(e) => handleDelete(e, i)}
            >
              <AiFillDelete /> <span className="ml-3">Delete</span>
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={(e) => handleEdit(e, i)}
            >
              <FaEdit />
              <span className="ml-3">Edit</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
