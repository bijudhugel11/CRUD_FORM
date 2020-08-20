import React from "react";

function SubInputField(props) {
  const {
    name,
    email,
    age,
    hobby,
    address,
    handleChange,
    button,
    password,
  } = props;
  return (
    <div>
      <form>
        <div>
          <label
            htmlFor="name"
            className="col-sm-1 text-left mb-3  mr-1 col-12"
          >
            Name
          </label>

          <input
            className="col-sm-4  col-12"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="col-sm-1 mr-1 text-left mb-3 col-12"
          >
            Email
          </label>

          <input
            className="col-sm-4 col-12"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="col-sm-1 mr-3 text-left mb-3 col-12"
          >
            Password
          </label>

          <input
            className="col-sm-4 col-12"
            type="password"
            id="passsword"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age" className="col-sm-1 mr-1 text-left mb-3 col-12">
            Age
          </label>

          <input
            className="col-sm-4 col-12"
            name="age"
            type="text"
            id="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="hobby"
            className="col-sm-1 mr-1 text-left mb-3 col-12"
          >
            Hobby
          </label>

          <input
            className="col-sm-4 col-12"
            name="hobby"
            type="text"
            id="hobby"
            value={hobby}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="col-sm-1 mr-1 text-left mb-3 col-12"
          >
            Address
          </label>

          <input
            className="col-sm-4 mb-5 col-12"
            name="address"
            type="text"
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        {button}
      </form>
    </div>
  );
}

export default SubInputField;
