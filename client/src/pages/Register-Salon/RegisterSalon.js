import "./RegisterSalon.css";
import { Link } from "react-router-dom";
import { registerSalon } from "../../features/Salons/salonsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RegisterSalon = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [bio, setBio] = useState();

  const { user } = useSelector((state) => state);

  const pushData = (e) => {
    e.preventDefault();
    const salonDetails = {
      userId: user.user_id,
      name: name,
      contactInformation: contact,
      location: city,
      bio: bio,
      address: address,
    };
    dispatch(registerSalon(salonDetails));
  };
  return (
    <>
      <form onSubmit={(e) => pushData(e)}>
        <div className="input-section">
          <div className="left-side-">
            <ul>
              <li>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label>Contact:</label>
                <input onChange={(e) => setContact(e.target.value)}></input>
              </li>
              <li>
                <label>City</label>
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </li>
              <li>
                <label>Cover Picture:</label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  multiple
                  accept="image/*,video/*"
                />
              </li>
            </ul>
          </div>
          <div className="right-side">
            <ul>
              <li>
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </li>
              <li>
                <label>Bio</label>
                <input onChange={(e) => setBio(e.target.value)}></input>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="submit">Publish</button>
        </div>
      </form>
      <div className="add-service">
        <a>
          <Link to={"/services"}>
            Add Services <span> -- </span>
          </Link>
        </a>
      </div>
    </>
  );
};

export default RegisterSalon;
