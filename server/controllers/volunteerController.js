const asyncHandler = require("express-async-handler");
const database = require("../config/database");

/**
 * Returns all the volunteers found in the database
 * @param req the request body (UNUSED)
 * @param res the response body that returns the result of the SQL query
 */
const viewAllVolunteers = asyncHandler(async (req, res) => {
  const sqlSelect = "SELECT * FROM volunteers;";
  database.query(sqlSelect, (err, result) => {
    if (err) {
      throw new Error(err.message);
    }
    res.json(result);
  });
});
 /**
  * Create a new volunteer in the database
  * @param req the request body containing firstName, lastName and email
  * @param res the response body that returns the result of the SQL query
  */
const createNewVolunteer = asyncHandler(async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const sqlInsert =
    "INSERT INTO volunteers (first_name, last_name, email_address) VALUES (?,?,?);";
  database.query(sqlInsert, [firstName, lastName, email], (err, result) => {
    if (err) throw new Error(err.message);
    console.log("Server posted: ", firstName, lastName);
    res.json(result);
  });
});

/**
 * Remove a volunteer with a specified email address
 * @param req the request body containing emailAddress
 * @param res the response body that returns the result of the SQL query
 */
const removeVolunteer = asyncHandler(async (req, res) => {
  const email = req.params.emailAddress;
  const sqlDelete = "DELETE FROM volunteers WHERE email_address = ?";
  database.query(sqlDelete, [email], (err, result) => {
    if (err) throw new Error(err.message);
    console.log("Server: deleted: ", ea);
    res.json(result);
  });
});

/**
 * Update volunteer's email address in the database
 * @param req the request body containing both the new and old email address
 * @param res the response body that returns the result of the SQL query
 */
const updateVolunteer = asyncHandler(async (req, res) => {
  const { newEmail, oldEmail } = req.body;
  const sqlUpdate =
    "UPDATE volunteers SET email_address = ? WHERE email_address = ?";
  database.query(sqlUpdate, [newEmail, oldEmail], (err, result) => {
    if (err) throw new Error(err.message);
    console.log(`Server changed: ${oldEmail} to ${newEmail}`);
    res.send(result);
  });
});

module.exports = {
  viewAllVolunteers,
  createNewVolunteer,
  removeVolunteer,
  updateVolunteer
};
