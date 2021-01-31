const { pool } = require("../database/postgres");

const index = async (req, res) => {
  const QUERY = `SELECT * FROM users`;

  try {
    const response = await pool.query(QUERY);
    return res
      .status(200)
      .json(response.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error!", error });
  }
};

const store = async (req, res) => {
  const { username, password } = req.body;

  const QUERY = `INSERT INTO users (username, password) VALUES ($1, $2)`;

  try {
    await pool.query(QUERY, [username, password]);
    return res
      .status(201)
      .json({
        message: "User created successfully!",
        body: { username, password },
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error!", error });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  const QUERY = `UPDATE users SET username = $1, password = $2 WHERE id = $3`

  try {
    await pool.query(QUERY, [username, password, id]);
    return res 
      .status(201)
      .json({
        message: "User updated successfully!",
        body: { username, password },
      })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error!", error });
  }
}

const destroy = async (req, res) => {
  const { id } = req.params

  const QUERY = `DELETE FROM users WHERE id = $1`

  try {
    await pool.query(QUERY, [id]);
    return res
      .status(200)
      .json({ message: "User deleted successfully!" })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error!", error });
  }
}

module.exports = {
  index,
  store,
  update,
  destroy
};
