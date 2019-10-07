// index, show, store, update, destroy
const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    //looking for existing users, if doesn't exist create one
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
