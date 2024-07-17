//**********test********** */
exports.test = async (req, res) => {
  try {
    res.status(200).send("Test OK!");
  } catch (error) {
    res.status(400).send("error");
  }
};

//***require User**** */
const User = require("../models/user");

//******************add User *****************/
exports.addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.status(200).send({ msg: "User Added Successfully", newUser });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//******************get All User *****************/
exports.getAllUsers = async (req, res) => {
  try {
    const foundUsers = await User.find();
    if (foundUsers.length > 0) {
      res.status(200).send({ msg: "the list of users", foundUsers });
    } else {
      res.status(200).send("List Empty");
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//************get user by ID ****************/
exports.getUserById = async (req, res) => {
  try {
    // const {_id } = req.params;
    const { _id } = req.query;
    const foundUser = await User.findById(_id);
    if (foundUser) {
      res.status(200).send({ msg: "User Found", foundUser });
    } else {
      res.status(404).send("User Not Found");
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//**************get by ID and update********** */
exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.query;
    await User.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send("User updated.");
  } catch (error) {
    res.status(400).send(error);
  }
};

//**************get by ID and update********** */
exports.updateUser = async (req, res) => {
  try {

    const { _id } = req.params;
    const { name,phone,email}=req.body;
    await User.findByIdAndUpdate({_id},{name,phone,email});
    const foundUser = await User.findById(_id);
    res.status(200).send({msg: "User Updated.", foundUser});
  } catch (error) {
    res.status(400).send(error);
  }
};

//******************Delete by ID************* */
exports.deleteUser = async (req, res) => {
  try {

    const { _id } = req.query;
    await User.deleteOne({ _id });
    res.status(200).send("User deleted.");
  } catch (error) {
    res.status(400).send(error);
  }
};
//*****************Delete by id 2eme methode *********/
exports.deleteUser = async (req, res) => {
  try {

    const { _id } = req.params;
    const deletedUser = await User.findByIdAndDelete({_id});
    res.status(200).send({msg: "User deleted.", deletedUser});
  } catch (error) {
    res.status(400).send(error);
  }
};

//************find by name************/
exports.findByName = async (req, res) => {
  try {

    const {name} = req.query;
    const foundUsers = await User.find({name: {$regex: name }});
    res.status(200).send({msg: "Users found.", foundUsers});
  } catch (error) {
    res.status(400).send(error);
  }
};
