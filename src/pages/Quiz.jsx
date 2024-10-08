import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Define your quizzes
const modelQuizzes = {
    model1:[
  {
    question: "What type of fabric is traditionally used in Kalamkari art?",
    options: ["Wool","Cotton or Silk","Polyester","Nylon"],
    answer: "Cotton or Silk",
  },
  {
    question: "What is used to outline the design on the fabric?",
    options: ["A pencil","A bamboo pen with black dye","A paintbrush","A marker"],
    answer: "A bamboo pen with black dye",
  },
  {
    question: " Which of the following is NOT a common color used in Kalamkari art?",
    options: ["Red", "Blue", "Yellow", "Purple"],
    answer: "Purple",
  },
  {
    question: " What natural ingredient is used to help the fabric absorb dyes better?",
    options: ["Lemon juice","Cow dung","Honey","Salt water"],
    answer: "Cow dung",
  },

],
model2:[
    {
        question: "What type of material is commonly used as the base for Tarkashi art?",
        options: ["Pinewood","Sheesham (Indian Rosewood)","Bamboo","Plastic"],
        answer: "Sheesham (Indian Rosewood)",
      },
      {
        question: "What is typically used to carve grooves into the wood for inlay?",
        options: ["Hammer","Chisel","Knife","Brush"],
        answer: "Chisel",
      },
      {
        question: " Which metals are commonly inlaid into the wood in Tarkashi art?",
        options: ["Silver and gold","Brass and copper","Iron and aluminum","Platinum and zinc"],
        answer: "Brass and copper",
      },
      {
        question: "What is the final step in Tarkashi art to enhance the appearance?",
        options: ["Painting","Polishing","Waxing","Carving more details"],
        answer: "Polishing",
      },
],}


export default function Quiz() {
  const location = useLocation();
  const { model } = location.state; // Access the model passed from the link
  const questions = modelQuizzes[model]; // Get questions based on the model
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctOption, setCorrectOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionClick = (option) => {
    const currentAnswer = questions[currentQuestionIndex].answer;
    setSelectedOption(option);
    setCorrectOption(currentAnswer);
    setUserAnswers([...userAnswers, option]);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
      setSelectedOption(null);
      setCorrectOption(null);
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setCorrectOption(null);
    setUserAnswers([]);
  };

  const calculateScore = () => {
    return userAnswers.filter((answer, index) => answer === questions[index].answer).length;
  };

  return (
    <div className="p-6 ml-20 bg-gray-900 min-h-screen text-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Mini Quiz - {model}</h1>

      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Result</h2>
          <p className="text-lg">You scored {calculateScore()} out of {questions.length}.</p>
          <button onClick={handleRestart} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl mb-4">{questions[currentQuestionIndex].question}</h2>
          <div className="flex flex-col items-center space-y-2">
            {questions[currentQuestionIndex].options.map((option) => {
              const isCorrect = option === questions[currentQuestionIndex].answer;
              const isSelected = selectedOption === option;

              return (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`py-2 px-4 rounded transition duration-300 text-white ${
                    isSelected && isCorrect
                      ? "bg-green-500"
                      : isSelected && !isCorrect
                      ? "bg-red-500"
                      : isCorrect && correctOption && !isSelected
                      ? "bg-green-500"
                      : "bg-blue-600 hover:bg-blue-500"
                  }`}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}