import Membership from "./models/Membership.js";
export async function createMembership(req, res) {
  const { name, price, description } = req.body;

  try {
    const membership = new Membership({
      name,
      price,
      description,
    });
    await membership.save();
    res.status(201).json(membership);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
