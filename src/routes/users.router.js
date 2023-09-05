const { Router } = require("express");
const { userModel } = require("../models/users.model");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();

    console.log(users);

    res.send({ result: "success", payload: users });
    console.log(users);
  } catch (error) {
    console.log("Error:", error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, email } = req.body;

    console.log(name);

    if (!name || !email)
      res.send({ status: "error", error: "Falta algun parametro" });

    let result = await userModel.create({ name, email });
    res.send({ result: "success", payload: result });
  } catch (error) {
    res.send({ status: error, error: "Error al crear usuario." });
  }
});

router.put("/", async (req, res) => {
  try {
    let { name, email } = req.body;

    if (!name || !email)
      res.send({ status: "error", error: "Falta algun parametro" });

    let result = await userModel.updateMany({ name, email });
    res.send({ result: "success", payload: result });
  } catch (error) {
    res.send({ status: error, error: "Error al actualizar el usuario." });
  }
});

router.delete("/", async (req, res) => {
  try {
    let { email } = req.body;

    if (!email) res.send({ status: "error", error: "Faltan algun paramtros" });

    let result = await userModel.findOneAndDelete({ email: email });

    console.log(result);

    res.send({ result: "success", payload: result });
  } catch (error) {
    res.send({ status: error, error: "Error al eliminar el usuario." });
  }
});

module.exports = router;
