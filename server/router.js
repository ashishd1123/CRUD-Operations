const router = require("express").Router();
const { findAll, create, findOne, update, deleteUser } = require("./controllers/Todo");

router.get('/', findAll);
router.get('/:id', findOne);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deleteUser);



module.exports = router;
