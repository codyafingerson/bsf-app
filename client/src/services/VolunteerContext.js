import axios from "axios";
import { createContext, useState, useEffect } from "react";

const API_ROUTE = '/api';

const VolunteerContext = createContext();

export const VolunteerProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [listEntries, setListEntries] = useState([]);

  useEffect(()=> {
    fetchAllVolunteers();
  },[]);

    const fetchAllVolunteers = async() => {
      axios.get(`${API_ROUTE}/read`).then((response) => {
        setListEntries(response.data)
        // console.log(response.data)
      })
    }

    return (
        <VolunteerContext.Provider value={listEntries}>
            {children}
        </VolunteerContext.Provider>
    )
};

export default VolunteerContext;