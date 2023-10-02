import Services from "./models/services.js";
import Users from "./models/users.js";
import mongoose from "mongoose";

export async function getMemberships(req, res) {
  const { name, price, description } = req.body;
  try {
    const membership = await Services.find();
    res.status(201).json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getUsers(req, res) {
  const { name, surname, email } = req.body;
  try {
    const users = await Users.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getUsersByName(req, res) {
  const { name } = req.params;
  try {
    const users = await Users.findOne({ name });
    if (users) {
      res.json(users);
    } else {
      res
        .status(404)
        .json({ error: `membership with name ${name} is not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getOrderUsers(req, res) {
  const { order } = req.params;

  try {
    const users = await Users.find({ name: order })
      .populate("service_id")
      .sort({ name: order });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createMemberships(req, res) {
  const { name, price, description } = req.body;
  try {
    const newMembership = new Services({
      name,
      price,
      description,
    });
    await newMembership.save();
    res.status(201).json(newMembership);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function createUsers(req, res) {
  const { name, surname, email, service_id } = req.body;
  try {
    const serviceMongoId = new mongoose.Types.ObjectId(service_id);
    const newUsers = new Users({
      name,
      surname,
      email,
      service_id: serviceMongoId,
    });
    await newUsers.save();

    const service = await Services.findById(service_id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    service.users_id.push(newUsers._id);
    await service.save();
    res.status(201).json(newUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteMembershipsById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Services.findByIdAndDelete(id);
    const users = await Users.updateMany(
      { service_id: id },
      { $unset: { service_id: 1 } }
    );
    if (deleted) {
      res.json(deleted);
      console.log(`Membership with id ${id} is deleted`);
    } else {
      res.status(404).json({ error: `membership with id ${id} is not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
