import React, { useState, useEffect } from "react";
import "./App.css";
import PersonList from "./PersonList";
/* name, email, age, hobby, address */
import firebase from "firebase";
import db from "./firebase";
import SubInputField from "./SubInputField";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";
function App() {
  let editedArr;
  let button;
  let addEditedPerson;
  const [person, setPerson] = useState({
    person: {
      name: "",
      age: "",
      email: "",
      password: "",
      hobby: "",
      address: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },

    personArr: [],
    isAdd: false,
    isEdited: false,
    isEditedAdd: false,
    editedPersonNum: "", //for adding the edited item
  });

  useEffect(() => {
    /* every single times it changes onSnapshots will fires up the snapsho which will store the click of the changes in the firebase //same as the camera */
    /* console.log(
      "the value from the database db.collection",
      db.collection("persons")
    ); */
    db.collection("persons").onSnapshot((snapshot) => {
      /*  */

      /* these will return the array of the object so we don't need to assign it in the array */
      /*  console.log(db.collection("persons").doc());
      console.log(
        "let see the value from the first snapshot.docs",
        String(snapshot.docs.map((doc) => doc.id)[0])
      );
 */
      const snapshots = [...snapshot.docs.map((doc) => doc.data())];
      /*  console.log(snapshots); */

      /* 
      
this is the value from the snapshots which will gives us the data which is in the database of the firebase 
      console.log(
        "the value from the snapshots which is the array[...snapshot.docs.map(doc=>doc.data())]",
        snapshots
      );
 */
      setPerson({
        ...person,
        personArr: snapshots,
      });
      // console.log("value from the snapshots ", snapshots);

      /* setPerson(snapshot.docs.map(doc=>)) */
    });
  }, [person]);

  // console.log("line no 40 which is bleow the useEffect", person.personArr);
  const addUser = () => {
    if (person.isEditedAdd) {
      addEditedPerson = person.personArr;
      addEditedPerson.splice(person.editedPersonNum, 0, person.person);
      /* when the user edited the value then these case if fired and update the user in it */

      setPerson({
        ...person,

        isAdd: true,
        isEditedAdd: false,
      });
    } else {
      /* while the user is first adding the value then these case is active and the value will goes to the database  */

      db.collection("persons").add(person.person);
      setPerson({
        ...person,
        personArr: [...person.personArr, person.person],
        isAdd: true,
      });
    }
  };

  if (person.isAdd) {
    setPerson({
      ...person,
      person: {
        name: "",
        age: "",
        email: "",
        password: "",
        hobby: "",
        address: "",
      },
      isAdd: false,
    });
  }
  /* console.log(person.personArr); */
  // console.log(person.isAdd);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      person: {
        ...person.person,
        [name]: value,
      },
    });
  };
  const handleDelete = (e, num) => {
    console.log("Index at,", num);
    const personArr = person.personArr;

    personArr.splice(num, 1);
    setPerson({
      ...person,
      personArr: personArr,
    });
  };

  const handleEdit = (e, num) => {
    const personArr = person.personArr;

    // console.log(num);

    setPerson({
      ...person,
      person: {
        name: personArr[num].name,
        email: personArr[num].email,
        password: personArr[num].password,
        age: personArr[num].age,
        hobby: personArr[num].hobby,
        address: personArr[num].address,
      },
      isEdited: true,
      isEditedAdd: true,
      editedPersonNum: num,
    });
    editedArr = person.personArr;
    editedArr.splice(num, 1);
  };
  if (person.isEdited) {
    setPerson({
      ...person,
      isEdited: false,
      personArr: person.personArr,
    });
  }
  if (
    person.person.name !== "" &&
    (person.person.email !== "") & (person.person.age !== "") &&
    person.person.password &&
    person.person.hobby &&
    person.person.address
  ) {
    button = (
      <button
        type="button"
        className={person.isEditedAdd ? "btn btn-warning" : "btn btn-success"}
        onClick={addUser}
      >
        {person.isEditedAdd ? (
          <>
            <FaUserEdit />
            <span className="ml-3"> Update User</span>
          </>
        ) : (
          <>
            <FaUserPlus />
            <span className="ml-3"> Add User</span>
          </>
        )}
      </button>
    );
  } else {
    button = (
      <button
        type="button"
        className={
          person.isEditedAdd
            ? "btn btn-warning btn-lg"
            : "btn btn-success btn-lg"
        }
        onClick={addUser}
        disabled
      >
        {person.isEditedAdd ? (
          <>
            <FaUserEdit />
            <span className="ml-3"> Update User</span>
          </>
        ) : (
          <>
            <FaUserPlus />
            <span className="ml-3"> Add User</span>
          </>
        )}
      </button>
    );
  }
  return (
    <div className="container py-3">
      <header className="App-header ">
        <h1>Hello {person.person.name}</h1>
      </header>
      <div className="form__container">
        <SubInputField
          name={person.person.name}
          handleChange={handleChange}
          email={person.person.email}
          age={person.person.age}
          hobby={person.person.hobby}
          address={person.person.address}
          password={person.person.password}
          button={button}
        />
      </div>
      <div className="content__container">
        <h1 className="content__contaner--heading mt-5">Persons List</h1>
        <PersonList
          person={person}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
