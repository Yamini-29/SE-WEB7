import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Function to shuffle an array
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Context for each question
const explanations = {
    Kalamkari: {
        "Cotton or Silk": "Cotton and silk are traditional choices as they absorb natural dyes well and provide an excellent base for the intricate pen work involved in Kalamkari.",
        "A bamboo pen with black dye": "The bamboo pen (kalam) is what gives Kalamkari its name - 'kalam' means pen and 'kari' means work.",
        "Purple": "Traditional Kalamkari uses natural dyes, which typically include red, blue, yellow, and black. Purple wasn't commonly available from natural sources.",
        "Cow dung": "Cow dung treatment helps in bleaching the fabric and makes it more receptive to dyes.",
        "Pen work": "Kalamkari literally translates to 'pen work' in Persian, referring to the hand-drawn nature of this art form.",
        "Andhra Pradesh": "Andhra Pradesh, particularly Sri Kalahasti and Machilipatnam, are the major centers of Kalamkari art.",
        "Geometric patterns": "Kalamkari traditionally features mythological scenes, floral motifs, and narrative art rather than geometric patterns.",
        "Srikalahasti": "Srikalahasti style is one of the most prominent styles of Kalamkari, known for its temple-themed artwork."
    },
    Tarkashi: {
        "Sheesham": "Sheesham wood is preferred for its durability and ability to hold intricate metal inlay work.",
        "Chisel": "Chisels are essential tools for creating precise grooves that will hold the metal inlay.",
        "Brass and copper": "These metals are commonly used as they're malleable, durable, and create beautiful contrasts with the wood.",
        "Polishing": "Polishing is crucial as it brings out the contrast between the wood and metal while protecting the piece.",
        "Metal inlay": "Tarkashi refers to the art of inlaying metal into wood, creating intricate patterns.",
        "Uttar Pradesh": "Uttar Pradesh, particularly the Mainpuri region, is famous for this traditional craft.",
        "Wood": "Wood serves as the primary base material, providing durability and beauty.",
        "Textiles": "Tarkashi is specifically a wood and metal craft, not related to textile work."
    },
    ThanjavurThattu: {
        "Brass": "Brass is the traditional material of choice for Thanjavur Thattu due to its durability, aesthetic appeal, and cultural significance.",
        "Serving meals": "Thanjavur Thattu is primarily designed as an elegant dining plate, combining functionality with artistic beauty.",
        "Floral engravings": "These plates are known for their intricate floral engravings that showcase the region's artistic heritage and craftsmanship.",
        "Epics and deities central to Tamil folklore": "The engravings often depict scenes from Tamil epics and deities, reflecting the rich cultural heritage of the region.",
        "Lotus flowers": "The lotus is a recurring motif in Thanjavur Thattu, symbolizing purity, prosperity, and spiritual growth in Tamil culture.",
        "Embossing": "The intricate designs are created through embossing, a technique that creates raised patterns on the metal surface.",
        "Pongal": "These plates hold special significance during Pongal, Tamil Nadu's harvest festival, where they're used for special offerings.",
        "Intricate detailing": "Thanjavur Thattu is renowned for its meticulous craftsmanship and attention to fine details in the engravings."
    },
    Dhokra: {
        "A type of metalwork": "Dhokra is an ancient lost-wax metal casting technique that produces unique brass and bronze artifacts.",
        "Bronze": "Bronze is the primary metal used in Dhokra, chosen for its durability and beautiful patina development.",
        "Dhokra moula": "This traditional lost-wax casting technique has been passed down through generations of artisans.",
        "Orissa": "Orissa (Odisha) is a major center for Dhokra craft, though it's also practiced in other eastern Indian states.",
        "Making the wax model": "The process begins with creating a detailed wax model, which forms the basis for the final metal piece.",
        "Using a gravity feed": "The molten metal is poured through channels using gravity, ensuring even distribution throughout the mold.",
        "All of the above": "Dhokra art incorporates diverse motifs including animals, birds, deities, geometric patterns, and floral designs, showing its versatility.",
        "Hand-modeling with beeswax": "Artisans carefully hand-model beeswax to create the initial design, allowing for unique details in each piece."
    },
    ThanjavurBommai: {
        "A type of doll": "Thanjavur Bommai are traditional dolls that showcase the rich cultural heritage of Tamil Nadu.",
        "Tamil Nadu": "These dolls originated in Thanjavur, Tamil Nadu, and reflect the region's artistic traditions.",
        "Wood": "The dolls' bodies are primarily made from wood, chosen for its durability and carving potential.",
        "Glass": "Traditional Thanjavur Bommai dolls feature glass eyes, adding lifelike qualities to their appearance.",
        "Inlay work": "The dolls are decorated with intricate inlay work, showcasing the craftsmen's skill and attention to detail.",
        "All of the Above": "The inlay work combines various precious and semi-precious materials to create elaborate designs.",
        "All of the above": "The dolls' attire represents traditional clothing, wealth symbols, and mythological characters, making them culturally significant.",
        "Standing": "These dolls are typically crafted in a standing posture, showcasing their regal bearing and elaborate costumes.",
    },
};

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
        {
            question: "What does the word 'Kalamkari' mean?",
            options: ["Hand painted", "Block printed", "Pen work", "Natural dyes"],
            answer: "Pen work",
        },
        {
            question: "In which state is Kalamkari art primarily practiced?",
            options: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
            answer: "Andhra Pradesh",
        },
        {
            question: "Which of the following is NOT a characteristic of Kalamkari art?",
            options: ["Use of natural dyes", "Intricate designs", "Geometric patterns", "Bold colors"],
            answer: "Geometric patterns",
        },
        {
            question: "Which of the following is a famous style of Kalamkari?",
            options: ["Madhubani", "Pichwai", "Pattachitra", "Srikalahasti"],
            answer: "Srikalahasti",
        }            
    ],
    Tarkashi: [
        {
            question: "What type of material is commonly used as the base for Tarkashi art?",
            options: ["Pinewood", "Sheesham", "Bamboo", "Plastic"],
            answer: "Sheesham",
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
        {
            question: "What does the word 'Tarkashi' mean?",
            options: ["Wood carving", "Metal inlay", "Stone carving", "Textile painting"],
            answer: "Metal inlay",
        },
        {
            question: "In which region is Tarkashi primarily practiced?",
            options: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Bihar"],
            answer: "Uttar Pradesh",
        },
        {
            question: "Which material is commonly used as the base for Tarkashi?",
            options: ["Cloth", "Paper", "Stone", "Wood"],
            answer: "Wood",
        },
        {
            question: "Which of the following is NOT a common Tarkashi product?",
            options: ["Jewelry boxes", "Furniture", "Textiles", "Wall hangings"],
            answer: "Textiles",
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
        {
            question: "What is often depicted on Thanjavur Thattus as a symbol of prosperity?",
            options: ["Lotus flowers", "Sun and moon", "Fish and shells", "Peacocks"],
            answer: "Lotus flowers",
        },
        {
            question: "The intricate designs on a Thanjavur Thattu are typically created through which technique?",
            options: ["Embossing", "Enamel painting", "Carving", "Weaving"],
            answer: "Embossing",
        },
        {
            question: "Which festival is the Thanjavur Thattu often associated with for serving special offerings?",
            options: ["Pongal", "Diwali", "Navratri", "Holi"],
            answer: "Pongal",
        },
        {
            question: "Which of the following qualities is a Thanjavur Thattu known for in terms of craftsmanship?",
            options: ["Intricate detailing", "Use of bright colors", "Soft texture", "Transparent finish"],
            answer: "Intricate detailing",
        },        
    ],
    Dhokra: [
        {
            question: "What is Dhokra?",
            options: ["A type of painting", "A type of textile", "A type of metalwork", "A type of dance"],
            answer: "A type of metalwork",
        },
        {
            question: "Which metal is primarily used in Dhokra art?",
            options: ["Silver", "Gold", "Bronze", "Copper"],
            answer: "Bronze",
        },
        {
            question: "What is the traditional lost-wax casting technique called in Dhokra?",
            options: ["Dhokra moula", "Dhokra chitra", "Dhokra patra", "Dhokra rekha"],
            answer: "Dhokra moula",
        },
        {
            question: "In which region of India is Dhokra primarily practiced?",
            options: ["Rajasthan", "West Bengal", "Orissa", "Karnataka"],
            answer: "Orissa",
        },
        {
            question: "What is the first step in the Dhokra process?",
            options: ["Melting the metal", "Carving the design", "Making the wax model", "Polishing the final product"],
            answer: "Making the wax model",
        },
        {
            question: "How is the molten metal poured into the mold?",
            options: ["Using a ladle", "Using a funnel", "Using a syringe", "Using a gravity feed"],
            answer: "Using a gravity feed",
        },
        {
            question: "What are some common motifs found in Dhokra art?",
            options: ["Animals, birds, and deities", "Geometric patterns", "Floral designs", "All of the above"],
            answer: "All of the above",
        },
        {
            question: "How is the wax model created?",
            options: ["Carving a wooden block", "Molding clay", "Using a 3D printer", "Hand-modeling with beeswax"],
            answer: "Hand-modeling with beeswax",
        },            
    ],
    ThanjavurBommai: [
        {
            question: "What is Thanjavur Bommai?",
            options: ["A type of classical dance", "A type of musical instrument", "A type of doll", "A type of painting"],
            answer: "A type of doll",
        },
        {
            question: "In which region of India is Thanjavur Bommai primarily made?",
            options: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
            answer: "Tamil Nadu",
        },
        {
            question: "What is the primary material used to make the doll's body?",
            options: ["Wood", "Clay", "Metal", "Cloth"],
            answer: "Wood",
        },
        {
            question: "What is the traditional material used to make the doll's eyes?",
            options: ["Glass", "Plastic", "Gemstones", "Pearl"],
            answer: "Glass",
        },
        {
            question: "What technique is used to decorate the doll's body?",
            options: ["Painting", "Embroidery", "Inlay work", "Carving"],
            answer: "Inlay work",
        },
        {
            question: "Which materials are typically used for inlay work on the doll?",
            options: ["Gold and silver", "Copper and brass", "Gemstones and pearls", "All of the above"],
            answer: "All of the Above",
        },
        {
            question: "What is the significance of the doll's attire?",
            options: ["Traditional clothing of the region", "Symbolizes wealth and prosperity", "Based on mythological characters", "All of the above"],
            answer: "All of the above",
        },
        {
            question: "What is the typical posture of a Thanjavur Bommai doll?",
            options: ["Standing", "Sitting", "Dancing", "Sleeping"],
            answer: "Standing",
        },            
    ],
};

export default function Quiz() {
    const location = useLocation();
    const { model } = location.state;
    const originalQuestions = modelQuizzes[model];

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [correctOption, setCorrectOption] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        const shuffledQuestions = shuffleArray(originalQuestions);
        const limitedQuestions = shuffledQuestions.slice(0, 4);
        setQuestions(limitedQuestions);
    }, [originalQuestions]);    

    const handleOptionClick = (option) => {
        const currentAnswer = questions[currentQuestionIndex].answer;
        setSelectedOption(option);
        setCorrectOption(currentAnswer);
        setUserAnswers([...userAnswers, option]);
        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
        setSelectedOption(null);
        setCorrectOption(null);
        setShowExplanation(false);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setShowResult(false);
        setCorrectOption(null);
        setUserAnswers([]);
        setShowExplanation(false);
        setQuestions(shuffleArray(originalQuestions));
    };

    const calculateScore = () => {
        return userAnswers.filter((answer, index) => answer === questions[index].answer).length;
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 overflow-hidden p-6">
            {/* Background shapes remain unchanged */}
            <div className="absolute inset-0 z-0">
                <div className="bg-indigo-700 opacity-30 w-96 h-96 rounded-full filter blur-3xl absolute -top-10 -left-20"></div>
                <div className="bg-purple-600 opacity-30 w-96 h-96 rounded-full filter blur-3xl absolute bottom-10 right-20"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
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
                        className="flex flex-col items-center w-full"
                    >
                        <h2 className="text-3xl mb-6">{questions[currentQuestionIndex]?.question}</h2>
                        <div className="flex flex-col items-center space-y-4 w-full">
                            {questions[currentQuestionIndex]?.options.map((option) => {
                                const isCorrect = option === questions[currentQuestionIndex].answer;
                                const isSelected = selectedOption === option;

                                return (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                        className={`w-full max-w-md py-3 rounded-full transition duration-300 text-white text-xl 
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

                        {showExplanation && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md"
                            >
                                <p className="text-lg mb-4">
                                    {explanations[model][questions[currentQuestionIndex].answer]}
                                </p>
                                <button
                                    onClick={handleNextQuestion}
                                    className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Next Question
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
