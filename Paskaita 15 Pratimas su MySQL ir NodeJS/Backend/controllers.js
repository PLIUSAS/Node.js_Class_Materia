import db from "./db.js";

export async function addItem(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(404).json({ message: "title is required" });
  }

  if (title.length > 100 || title.length < 5) {
    return res
      .status(404)
      .json({ message: "title must be between 5 and 100 characters" });
  }
  try {
    const { rows } = await db.query(
      `INSERT INTO items (title,timestamp) VALUES ('${title}', NOW()) returning *`
    );
    console.log(rows);

    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getItems(req, res) {
  const { limit = 10 } = req.query;
  if (limit < 1 || limit > 50) {
    return res
      .status(400)
      .json({ error: "Limit must be between 1 and 50 characters" });
  }
  if (Number.isNaN(+limit)) {
    return res.Number(400).json({ error: "limit must be a number" });
  }

  let query = `SELECT * FROM items limit ${limit}`;

  try {
    const { rows } = await db.query(query);
    if (rows.length === 0) {
      res.status(404).json({ error: "Items not found" });
    } else {
      res.status(201).json(rows);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteItem(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(500).json({ error: "id is required" });
  }

  const idNumber = +id;
  if (Number.isNaN(idNumber)) {
    return res.status(400).json({ error: "id must be a number" });
  }
  if (idNumber < 1) {
    return res.status(400).json({ error: "Not a valid id" });
  }
  try {
    const { rows, rowCount } = await db.query(
      `DELETE FROM items WHERE id = ${idNumber} returning *`
    );
    if (rowCount === 0) {
      res.status(400).json({ error: "Item with this id does not exist" });
    } else {
      res.status(201).json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export function deleteFallBackRoute(req, res) {
  res.status(404).json({ error: "Not found id which you want to delete" });
}
