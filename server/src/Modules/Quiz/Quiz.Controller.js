import { AppError } from '../../Utils/AppError.js';
import Quiz from './Quiz.Model.js';
//-------------------------------------------------get All Quizzes------------------------------------------------------------------------
export const getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).json({ data: quizzes });
  } catch (err) {
    next(err);
  }
}
//-------------------------------------------------create Quiz------------------------------------------------------------------------
export const createQuiz = async (req, res, next) => {
  try {
    const newQuiz = new Quiz(req.body);
    const quizAdded = await newQuiz.save();
    if (!quizAdded) return next(new AppError("This Quiz is Not Added", 500));
    res.status(201).json({ message: "Quiz is added", data: quizAdded });
  } catch (err) {
    next(err);
  }
}
//-------------------------------------------------update Quiz------------------------------------------------------------------------
export const updateQuiz = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const quizData = await Quiz.findByIdAndUpdate(id, update, { new: true });
    if (!quizData) return next(new AppError("This Quiz is Not Found", 404));
    res.status(200).json({ message: "Quiz is updated", data: quizData });
  } catch (err) {
    next(err);
  }
}
//-------------------------------------------------delete Quiz------------------------------------------------------------------------
export const deleteQuiz = async (req, res, next) => {
  try {
    const { id } = req.params;
    const quizData = await Quiz.findByIdAndDelete(id);
    if (!quizData) return next(new AppError("This Quiz is Not Found", 404));
    res.status(200).json({ message: "Quiz is deleted" });
  } catch (err) {
    next(err);
  }
}
