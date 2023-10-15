const UserModel = require("../model/UserSchema");

// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.name && !req.body.email && !req.body.position && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const user = new UserModel({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        position: req.body.position,
        phone: req.body.phone,
        gender: req.body.gender,
        confirmation: req.body.confirmation
    });
    
    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    // console.log('URL----------- ', req);
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findOne({
            id: id,
        });
        // const user = await UserModel.findById({
        //     id: id,
        // });
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({
        id: id,
    });

    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    await UserModel.findByIdAndUpdate(user._id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a user with the specified id in the request
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({
        id: id,
    });

    await UserModel.findByIdAndRemove(user._id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};