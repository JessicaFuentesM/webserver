const {Router} = require("express");
const { userGet, userPost , userPut,userDelete} = require("../controllers/usuario");
const router = Router(); //

module.exports = router;

router.get('/', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.delete('/', userDelete);

module.exports = router;