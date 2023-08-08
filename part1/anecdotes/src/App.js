import { useState } from "react";

const anecdoteList = [
  {
    quote: "If it hurts, do it more often.",
    votes: 0,
  },
  {
    quote: "Adding manpower to a late software project makes it later!",
    votes: 0,
  },
  {
    quote:
      "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    votes: 0,
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    votes: 0,
  },
  {
    quote: "Premature optimization is the root of all evil.",
    votes: 0,
  },
  {
    quote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    votes: 0,
  },
  {
    quote:
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    votes: 0,
  },
  {
    quote: "The only way to go fast, is to go well.",
    votes: 0,
  },
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(anecdoteList);

  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const updatedAnecdotes = anecdotes.map((anecdote, index) => {
      if (index === selected) {
        return { ...anecdote, votes: anecdote.votes + 1 };
      }
      return anecdote;
    });
    setAnecdotes(updatedAnecdotes);
  };

  const getMostVotedAnecdote = () => {
    const mostPopularAnecdote = anecdotes.reduce((acc, curr) => {
      if (curr.votes > acc.votes) {
        return curr;
      }
      return acc;
    }, anecdotes[0]);
    return mostPopularAnecdote;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].quote}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{getMostVotedAnecdote().quote}</p>
      <p>has {getMostVotedAnecdote().votes} votes</p>
    </div>
  );
};

export default App;
