const router = require('express').Router();
const {
  getUsers,
  // getSingleUser,
  // createCourse,
  // updateCourse,
  // deleteCourse,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers);

// /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;
