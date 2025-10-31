import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Send, Trophy } from "lucide-react";
import { toast } from "sonner";
import { triviaQuestions } from "@/data/trivia";

const FanZone = () => {
  const [pollVote, setPollVote] = useState<string | null>(null);
  const [pollResults, setPollResults] = useState({
    "Shreyas Iyer": 35,
    "Andre Russell": 28,
    "Sunil Narine": 22,
    "Venkatesh Iyer": 15,
  });

  const [fanMessages, setFanMessages] = useState([
    { name: "Rajesh Kumar", message: "KKR forever! Can't wait for the next match! 💜", time: "2h ago" },
    { name: "Priya Sharma", message: "Andre Russell is the best finisher in the world!", time: "5h ago" },
    { name: "Amit Das", message: "Eden Gardens atmosphere is unmatched! #KKR", time: "1d ago" },
  ]);

  const [newMessage, setNewMessage] = useState({ name: "", message: "" });

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const handlePollVote = (player: string) => {
    setPollVote(player);
    setPollResults((prev) => ({
      ...prev,
      [player]: prev[player as keyof typeof prev] + 1,
    }));
    toast.success("Vote recorded!", {
      description: `You voted for ${player}`,
    });
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      setFanMessages([
        { ...newMessage, time: "Just now" },
        ...fanMessages.slice(0, 9),
      ]);
      setNewMessage({ name: "", message: "" });
      toast.success("Message posted!", {
        description: "Your message has been added to the fan wall",
      });
    }
  };

  const handleQuizSubmit = () => {
    let score = 0;
    triviaQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    toast.success(`Quiz completed! You scored ${score}/${triviaQuestions.length}`);
  };

  const totalPollVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);

  return (
    <section id="fanzone" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Fan Zone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow KKR supporters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Poll */}
          <Card className="p-6 border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <Trophy className="w-6 h-6 text-accent" />
              Player of the Season?
            </h3>
            <div className="space-y-4">
              {Object.entries(pollResults).map(([player, votes]) => (
                <div key={player}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{player}</span>
                    <span className="text-muted-foreground">
                      {((votes / totalPollVotes) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={(votes / totalPollVotes) * 100} className="h-3" />
                  {!pollVote && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-accent/30 hover:border-accent"
                      onClick={() => handlePollVote(player)}
                    >
                      Vote
                    </Button>
                  )}
                </div>
              ))}
            </div>
            {pollVote && (
              <p className="mt-4 text-sm text-accent">
                ✓ You voted for {pollVote}
              </p>
            )}
          </Card>

          {/* Fan Wall */}
          <Card className="p-6 border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              Fan Wall
            </h3>
            
            <form onSubmit={handleMessageSubmit} className="space-y-3 mb-6">
              <Input
                placeholder="Your name"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                className="border-accent/30 focus:border-accent"
              />
              <Textarea
                placeholder="Share your thoughts (max 200 chars)"
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value.slice(0, 200) })}
                className="border-accent/30 focus:border-accent min-h-[80px]"
              />
              <Button type="submit" className="w-full bg-primary shadow-purple">
                <Send className="w-4 h-4 mr-2" />
                Post Message
              </Button>
            </form>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {fanMessages.map((msg, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-sm">{msg.name}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm">{msg.message}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Trivia Quiz */}
          <Card className="p-6 border-accent/20 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              KKR Trivia Challenge
            </h3>

            {!quizSubmitted ? (
              <div className="space-y-6">
                {triviaQuestions.map((question, qIndex) => (
                  <div key={qIndex}>
                    <p className="font-semibold mb-3">
                      {qIndex + 1}. {question.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {question.options.map((option, oIndex) => (
                        <Button
                          key={oIndex}
                          variant={quizAnswers[qIndex] === oIndex ? "default" : "outline"}
                          onClick={() =>
                            setQuizAnswers({ ...quizAnswers, [qIndex]: oIndex })
                          }
                          className={
                            quizAnswers[qIndex] === oIndex
                              ? "bg-primary"
                              : "border-accent/30 hover:border-accent"
                          }
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
                <Button
                  onClick={handleQuizSubmit}
                  size="lg"
                  className="w-full bg-primary shadow-purple"
                  disabled={Object.keys(quizAnswers).length < triviaQuestions.length}
                >
                  Submit Quiz
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <Trophy className="w-16 h-16 text-accent mx-auto mb-4 animate-glow" />
                <h4 className="text-3xl font-bold mb-2 text-accent">
                  {quizScore}/{triviaQuestions.length}
                </h4>
                <p className="text-lg mb-6">
                  {quizScore === triviaQuestions.length
                    ? "Perfect! You're a true KKR superfan! 🎉"
                    : quizScore >= 3
                    ? "Great job! You know your KKR history! 💜"
                    : "Keep following KKR to learn more! 👍"}
                </p>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  {triviaQuestions.map((q, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        quizAnswers[index] === q.correctAnswer
                          ? "bg-accent/10 border border-accent/30"
                          : "bg-muted"
                      }`}
                    >
                      <p className="font-semibold mb-2">{q.question}</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-semibold text-accent">Correct answer:</span>{" "}
                        {q.options[q.correctAnswer]}
                      </p>
                      <p className="text-sm">{q.explanation}</p>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => {
                    setQuizSubmitted(false);
                    setQuizAnswers({});
                    setQuizScore(0);
                  }}
                  className="mt-6"
                  variant="outline"
                >
                  Retake Quiz
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FanZone;
