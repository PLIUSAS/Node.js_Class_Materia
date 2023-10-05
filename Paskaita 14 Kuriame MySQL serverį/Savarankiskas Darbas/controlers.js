import pool from "./db.js";

export async function addShirts(req, res) {
  const { brand, model, size, price } = req.body;
  try {
    const { rows } = await pool.query(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}', '${model}', '${size}', ${price}) RETURNING *`
    );
    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCheapShirts(req, res) {
  const { size } = req.params;
  const { limit } = req.query;
  try {
    if (size) {
      const { rowCount, rows } = await pool.query(
        `SELECT * FROM shirts where size = '${size}' order by price limit ${limit}`
      );
      if (rowCount === 0) {
        res.json({ message: `Size ${size} not found` });
      } else {
        res.json(rows);
      }
    } else {
      const { rows } = await pool.query(
        `SELECT * FROM shirts order by price limit ${limit}`
      );
      res.status(201).json(rows);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
