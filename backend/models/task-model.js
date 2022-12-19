import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: ['true', 'you need to send a task']
    },
    isCompleted: { type: Boolean }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Task', taskSchema)
