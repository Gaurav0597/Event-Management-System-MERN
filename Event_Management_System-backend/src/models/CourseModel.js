import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema(
  {
    CourseName: { type: String, required: true },
    University: { type: String, required: true },
    UniversityImage: { type: String, required: true },
    CourseImage:{ type: String, required: true },
    Skill: { type: String, required: true },
    Type: { type: String, required: true }
  },
  {
    timestamp: true,
    versionKey: false,
  },
)
const CourseData = mongoose.model('CourseData', CourseSchema)

export default CourseData
