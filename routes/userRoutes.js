//require controllers
const {test,addUser,getAllUsers,getUserById,updateUser,deleteUser,findByName}=require('../controllers/userController');

//require express
const express=require('express');

//require router
const router = express.Router();

//define the test page route
router.get('/test',test);

//add user route
router.post('/add_user',addUser);

//get all user route
router.get('/all_users',getAllUsers);

 //get user by id
router.get('/get_user/:_id',getUserById);
//get user by id with query
router.get('/get_user',getUserById);

//Update
router.put('/update',updateUser);
router.put('/update_user/:_id',updateUser);

//delete
router.delete('/delete',deleteUser);
router.delete('/delete_user/:_id',deleteUser);

//find by name
router.get('/found_user',findByName);
//export
module.exports = router;