import { useContext } from "react";
import VolunteerContext from "../services/VolunteerContext";

function VolunteerList() {
  const { listEntries } = useContext(VolunteerContext);
  return (
    <div>
      <h1>Current Volunteers</h1>
      {console.log(listEntries)}
    </div>
  );
}
export default VolunteerList;