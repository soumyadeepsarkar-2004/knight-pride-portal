export interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const triviaQuestions: TriviaQuestion[] = [
  {
    question: "In which year was Kolkata Knight Riders founded?",
    options: ["2007", "2008", "2009", "2010"],
    correctAnswer: 1,
    explanation: "KKR was founded in 2008 when the IPL was established, with Shah Rukh Khan, Juhi Chawla, and Jay Mehta as the owners.",
  },
  {
    question: "How many IPL titles has KKR won?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "KKR has won the IPL championship twice - in 2012 and 2014, both times under Gautam Gambhir's captaincy.",
  },
  {
    question: "What is the home ground of Kolkata Knight Riders?",
    options: ["Wankhede Stadium", "M. Chinnaswamy Stadium", "Eden Gardens", "Feroz Shah Kotla"],
    correctAnswer: 2,
    explanation: "Eden Gardens in Kolkata is KKR's home ground and is the largest cricket stadium in India by seating capacity.",
  },
  {
    question: "Who captained KKR to their first IPL title in 2012?",
    options: ["Sourav Ganguly", "Brendon McCullum", "Gautam Gambhir", "Eoin Morgan"],
    correctAnswer: 2,
    explanation: "Gautam Gambhir led KKR to their first IPL championship in 2012, defeating Chennai Super Kings in the final.",
  },
  {
    question: "What is KKR's team motto?",
    options: ["Play Bold", "Korbo Lorbo Jeetbo Re", "Whistle Podu", "Ee Sala Cup Namde"],
    correctAnswer: 1,
    explanation: "'Korbo Lorbo Jeetbo Re' is KKR's famous motto, which translates to 'We will do, fight, and win' in Bengali.",
  },
];
