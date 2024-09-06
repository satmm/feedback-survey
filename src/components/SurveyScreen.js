// components/SurveyScreen.js
import React, { useState } from "react";
import './SurveyScreen.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

// Sample questions
const questions = [
  {
    id: 1,
    question: "How satisfied are you with our products?",
    type: "rating",
    maxRating: 5,
  },
  {
    id: 2,
    question: "How fair are the prices compared to similar retailers?",
    type: "rating",
    maxRating: 5,
  },
  {
    id: 3,
    question: "How satisfied are you with the value for money of your purchase?",
    type: "rating",
    maxRating: 5,
  },
  {
    id: 4,
    question: "On a scale of 1-10, how would you recommend us to your friends and family?",
    type: "rating",
    maxRating: 10,
  },
  {
    id: 5,
    question: "What could we do to improve our service?",
    type: "text",
  },
];

const SurveyScreen = ({ completeSurvey }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sessionId] = useState(Date.now().toString()); // Generate a unique session ID

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: { value, sessionId },
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    // Save answers and status
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    localStorage.setItem("surveyStatus", "COMPLETED");
  
    // Redirect to thank-you screen immediately
    completeSurvey();
  };
  

  const getCurrentAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return answers[currentQuestion.id]?.value || '';
  };

  return (
    <div className="survey-screen">
      <div className="survey-header">
        <h1 className="survey-title">Customer Survey Form</h1>
        <span className="question-number">{currentQuestionIndex + 1}/{questions.length}</span>
      </div>
      <form className="survey-form">
        <fieldset>
          <legend>{questions[currentQuestionIndex].question}</legend>

          {questions[currentQuestionIndex].type === "rating" && (
            <div className="rating-container">
              {[...Array(questions[currentQuestionIndex].maxRating)].map((_, index) => (
                <label key={index} className="rating-label">
                  <input
                    type="radio"
                    name={`question-${questions[currentQuestionIndex].id}`}
                    value={index + 1}
                    checked={getCurrentAnswer() === String(index + 1)}
                    onChange={(e) => handleAnswer(e.target.value)}
                    required
                  />
                  <span className="rating-circle">{index + 1}</span>
                </label>
              ))}
            </div>
          )}
          {questions[currentQuestionIndex].type === "text" && (
            <textarea
              value={getCurrentAnswer()}
              onChange={(e) => handleAnswer(e.target.value)}
            ></textarea>
          )}

          <div className="button-container">
            {currentQuestionIndex > 0 && (
              <button
                type="button"
                className="prev-button"
                onClick={handlePrevious}
              >
                <FaArrowLeft className="button-icon" /> Previous
              </button>
            )}
            {currentQuestionIndex < questions.length - 1 && (
              <button
                type="button"
                className="next-button"
                onClick={handleNext}
              >
                Next <FaArrowRight className="button-icon" />
              </button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button
                type="button"
                className="submit-button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>

          {currentQuestionIndex < questions.length - 1 && (
            <div className="skip-link">
              <a href="#" onClick={handleSkip}>Skip this question</a>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default SurveyScreen;
