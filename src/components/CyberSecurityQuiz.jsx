// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaCheckCircle, FaTimesCircle, FaArrowRight } from "react-icons/fa";
// import "./CyberSecurityQuiz.css"; // Custom CSS for enhanced UI
// import QuizImage from "../assets/undraw_questions_g2px.svg";

// const quizData = [
//   {
//     question: "What is the most common sign of a phishing attack?",
//     options: [
//       "Spelling errors and urgent language",
//       "Email from your friend",
//       "A secure website",
//       "An official-looking logo",
//     ],
//     answer: 0,
//   },
//   {
//     question: "Which is the safest way to verify a suspicious email?",
//     options: [
//       "Reply to the email",
//       "Click on the links inside",
//       "Verify with the sender through a known contact method",
//       "Forward it to everyone",
//     ],
//     answer: 2,
//   },
//   {
//     question:
//       "What does 2FA (Two-Factor Authentication) add to your account security?",
//     options: [
//       "Additional layer of security beyond just passwords",
//       "Makes your password stronger",
//       "Encrypts your data",
//       "It disables your account after multiple failed logins",
//     ],
//     answer: 0,
//   },
//   {
//     question: "Which of the following is a sign of a suspicious link?",
//     options: [
//       "It has HTTPS and a padlock icon",
//       "It uses a shortened URL (e.g., bit.ly)",
//       "It is from a known website",
//       "It appears in an email from a trusted source",
//     ],
//     answer: 1,
//   },
//   {
//     question:
//       "What should you do if you receive an unexpected email with an attachment?",
//     options: [
//       "Open the attachment immediately to check",
//       "Forward it to your friends",
//       "Delete the email without opening it",
//       "Verify the sender before opening the attachment",
//     ],
//     answer: 3,
//   },
// ];

// const CyberSecurityQuiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [answered, setAnswered] = useState(false);

//   const handleAnswer = (index) => {
//     if (answered) return;

//     setAnswered(true);
//     if (index === quizData[currentQuestion].answer) {
//       setScore(score + 10);
//     }
//   };

//   const nextQuestion = () => {
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < quizData.length) {
//       setCurrentQuestion(nextQuestion);
//       setAnswered(false);
//     } else {
//       setShowResult(true);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="quiz-heading mb-4 text-center">Cyber Security Quiz</h1>
//       <p className="quiz-description text-center mb-5">
//         Test your knowledge of cyber security best practices. Answer the
//         questions to see how well you can protect yourself online!
//       </p>
//       <div className="row align-items-center">
//         {/* Quiz Section */}
//         <div className="col-lg-6">
//           <div className="card p-4 shadow-lg border-0 quiz-card">
//             {showResult ? (
//               <div>
//                 <h2 className="score-heading">Your Score: {score} / 50</h2>
//                 <p className="score-message">
//                   {score >= 30
//                     ? "Great job! You passed!"
//                     : "Try again to improve!"}
//                 </p>
//                 <button
//                   className="btn btn-primary restart-btn"
//                   onClick={() => window.location.reload()}
//                 >
//                   Restart Quiz
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <h4 className="question-text">
//                   {quizData[currentQuestion].question}
//                 </h4>
//                 {quizData[currentQuestion].options.map((option, index) => (
//                   <button
//                     key={index}
//                     className={`btn d-block w-100 mt-3 option-btn ${
//                       answered
//                         ? index === quizData[currentQuestion].answer
//                           ? "btn-success"
//                           : "btn-danger"
//                         : "btn-outline-primary"
//                     }`}
//                     onClick={() => handleAnswer(index)}
//                   >
//                     {answered &&
//                       (index === quizData[currentQuestion].answer ? (
//                         <FaCheckCircle className="me-2" />
//                       ) : (
//                         <FaTimesCircle className="me-2" />
//                       ))}
//                     {option}
//                   </button>
//                 ))}
//                 <div className="progress mt-4">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     style={{
//                       width: `${
//                         ((currentQuestion + 1) / quizData.length) * 100
//                       }%`,
//                     }}
//                   />
//                 </div>
//                 {answered && (
//                   <div className="mt-4">
//                     <button
//                       className="btn btn-primary next-btn"
//                       onClick={nextQuestion}
//                     >
//                       <FaArrowRight /> Next Question
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="col-lg-6 text-center">
//           <div className="svg-container">
//             <img
//               src={QuizImage}
//               alt="Education Illustration"
//               className="img-fluid rounded img-resize"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CyberSecurityQuiz;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from "react-icons/fa";
import "./CyberSecurityQuiz.css"; // Custom CSS for enhanced UI
import QuizImage from "../assets/undraw_questions_g2px.svg";

const quizData = [
  {
    question: "What is the most common sign of a phishing attack?",
    options: [
      "Spelling errors and urgent language",
      "Email from your friend",
      "A secure website",
      "An official-looking logo",
    ],
    answer: 0,
  },
  {
    question: "Which is the safest way to verify a suspicious email?",
    options: [
      "Reply to the email",
      "Click on the links inside",
      "Verify with the sender through a known contact method",
      "Forward it to everyone",
    ],
    answer: 2,
  },
  {
    question:
      "What does 2FA (Two-Factor Authentication) add to your account security?",
    options: [
      "Additional layer of security beyond just passwords",
      "Makes your password stronger",
      "Encrypts your data",
      "It disables your account after multiple failed logins",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a sign of a suspicious link?",
    options: [
      "It has HTTPS and a padlock icon",
      "It uses a shortened URL (e.g., bit.ly)",
      "It is from a known website",
      "It appears in an email from a trusted source",
    ],
    answer: 1,
  },
  {
    question:
      "What should you do if you receive an unexpected email with an attachment?",
    options: [
      "Open the attachment immediately to check",
      "Forward it to your friends",
      "Delete the email without opening it",
      "Verify the sender before opening the attachment",
    ],
    answer: 3,
  },
];

const CyberSecurityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index) => {
    if (answered) return;

    setAnswered(true);
    if (index === quizData[currentQuestion].answer) {
      setScore(score + 10);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="quiz-heading mb-4 text-center">Cyber Security Quiz</h1>
      <p className="quiz-description text-center mb-5">
        Test your knowledge of cyber security best practices. Answer the
        questions to see how well you can protect yourself online!
      </p>
      <div className="row align-items-center">
        {/* Quiz Section */}
        <div className="col-lg-6">
          <div className="card p-4 shadow-lg border-0 quiz-card">
            {showResult ? (
              <div>
                <h2 className="score-heading">Your Score: {score} / 50</h2>
                <p className="score-message">
                  {score >= 30
                    ? "Great job! You passed!"
                    : "Try again to improve!"}
                </p>
                <button
                  className="btn btn-primary restart-btn"
                  onClick={() => window.location.reload()}
                >
                  Restart Quiz
                </button>
              </div>
            ) : (
              <div>
                <h4 className="question-text">
                  {quizData[currentQuestion].question}
                </h4>
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`btn d-block w-100 mt-3 option-btn ${
                      answered
                        ? index === quizData[currentQuestion].answer
                          ? "btn-success"
                          : "btn-danger"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    {answered &&
                      (index === quizData[currentQuestion].answer ? (
                        <FaCheckCircle className="me-2" />
                      ) : (
                        <FaTimesCircle className="me-2" />
                      ))}
                    {option}
                  </button>
                ))}
                <div className="progress mt-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / quizData.length) * 100
                      }%`,
                    }}
                  />
                </div>
                {answered && (
                  <div className="mt-4">
                    <button
                      className="btn btn-primary next-btn"
                      onClick={nextQuestion}
                    >
                      <FaArrowRight /> Next Question
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 text-center">
          <div className="svg-container">
            <img
              src={QuizImage}
              alt="Quiz Illustration"
              className="img-fluid rounded img-resize"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityQuiz;
