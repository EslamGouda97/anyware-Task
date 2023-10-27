import { Schema, model } from "mongoose";
    const quizSchema = new Schema({
      title: {
        type: String,
        required: true,
      },
      questions: [{
        questionText: {
          type: String,
          required: true,
        },
        options: [String], 
        correctAnswer: {
          type: String,
          required: true,
        },
      }],
      date: {
        type: Date,
        default: Date.now,
      },
    });
    
    export default model('Quiz', quizSchema);
