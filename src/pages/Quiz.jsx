import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const modelQuizzes = {
    Kalamkari: [
        {
            question: "What type of fabric is traditionally used in Kalamkari art?",
            options: ["Wool", "Cotton or Silk", "Polyester", "Nylon"],
            answer: "Cotton or Silk",
        },
        {
            question: "What is used to outline the design on the fabric?",
            options: ["A pencil", "A bamboo pen with black dye", "A paintbrush", "A marker"],
            answer: "A bamboo pen with black dye",
        },
        {
            question: "Which of the following is NOT a common color used in Kalamkari art?",
            options: ["Red", "Blue", "Yellow", "Purple"],
            answer: "Purple",
        },
        {
            question: "What natural ingredient is used to help the fabric absorb dyes better?",
            options: ["Lemon juice", "Cow dung", "Honey", "Salt water"],
            answer: "Cow dung",
        },
    ],
    Tarkashi: [
        {
            question: "What type of material is commonly used as the base for Tarkashi art?",
            options: ["Pinewood", "Sheesham (Indian Rosewood)", "Bamboo", "Plastic"],
            answer: "Sheesham (Indian Rosewood)",
        },
        {
            question: "What is typically used to carve grooves into the wood for inlay?",
            options: ["Hammer", "Chisel", "Knife", "Brush"],
            answer: "Chisel",
        },
        {
            question: "Which metals are commonly inlaid into the wood in Tarkashi art?",
            options: ["Silver and gold", "Brass and copper", "Iron and aluminum", "Platinum and zinc"],
            answer: "Brass and copper",
        },
        {
            question: "What is the final step in Tarkashi art to enhance the appearance?",
            options: ["Painting", "Polishing", "Waxing", "Carving more details"],
            answer: "Polishing",
        },
    ],
    ThanjavurThattu: [
        {
            question: "What is the primary material used in crafting a traditional Thanjavur Thattu?",
            options: ["Silver", "Copper", "Brass", "Bronze"],
            answer: "Brass",
        },
        {
            question: "Thanjavur Thattu is a traditional plate primarily used for what purpose in Tamil Nadu?",
            options: ["Decorative wall art", "Rituals and offerings in temples", "Serving meals", "Musical performances"],
            answer: "Serving meals",
        },
        {
            question: "Which distinctive artistic feature is often found on a Thanjavur Thattu?",
            options: ["Floral engravings", "Gemstone inlays", "Enamel painting", "Mirror work"],
            answer: "Floral engravings",
        },
        {
            question: "The engravings on a traditional Thanjavur Thattu often draw inspiration from which of the following themes?",
            options: ["Epics and deities central to Tamil folklore", "Abstract geometric designs of South Indian origin", "Traditional Tamil Nadu flora and fauna", "Maritime imagery linked to Tamil Nadu's coast"],
            answer: "Epics and deities central to Tamil folklore",
        },
    ],
};

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
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 overflow-hidden p-6">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 z-0">
                <div className="bg-indigo-700 opacity-30 w-96 h-96 rounded-full filter blur-3xl absolute -top-10 -left-20"></div>
                <div className="bg-purple-600 opacity-30 w-96 h-96 rounded-full filter blur-3xl absolute bottom-10 right-20"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.h1
                    className="text-5xl font-bold mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    Mini Quiz on {model}
                </motion.h1>

                {showResult ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-semibold mb-4">Your Result</h2>
                        <p className="text-2xl">You scored {calculateScore()} out of {questions.length}.</p>
                        <button
                            onClick={handleRestart}
                            className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 text-xl"
                        >
                            Restart Quiz
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl mb-6">{questions[currentQuestionIndex].question}</h2>
                        <div className="flex flex-col items-center space-y-4">
                            {questions[currentQuestionIndex].options.map((option) => {
                                const isCorrect = option === questions[currentQuestionIndex].answer;
                                const isSelected = selectedOption === option;

                                return (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                        className={`w-80 py-3 rounded-full transition duration-300 text-white text-xl 
                                            ${isSelected && isCorrect ? "bg-green-500" :
                                            isSelected && !isCorrect ? "bg-red-500" :
                                            isCorrect && correctOption && !isSelected ? "bg-green-500" :
                                            "bg-blue-600 hover:bg-blue-500"
                                        }`}
                                        disabled={selectedOption !== null}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
