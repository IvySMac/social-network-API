const { ObjectId } = require("mongoose").Types;
const User = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users,
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

//   // Get a single user
//   async getSingleUser(req, res) {
//     try {
//       const course = await Course.findOne({ _id: req.params.courseId })
//         .select('-__v');

//       if (!course) {
//         return res.status(404).json({ message: 'No course with that ID' });
//       }

//       res.json(course);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Create a course
//   async createCourse(req, res) {
//     try {
//       const course = await Course.create(req.body);
//       res.json(course);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Delete a course
//   async deleteCourse(req, res) {
//     try {
//       const course = await Course.findOneAndDelete({ _id: req.params.courseId });

//       if (!course) {
//         return res.status(404).json({ message: 'No course with that ID' });
//       }

//       await Student.deleteMany({ _id: { $in: course.students } });
//       res.json({ message: 'Course and students deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Update a course
//   async updateCourse(req, res) {
//     try {
//       const course = await Course.findOneAndUpdate(
//         { _id: req.params.courseId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!course) {
//         return res.status(404).json({ message: 'No course with this id!' });
//       }

//       res.json(course);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };