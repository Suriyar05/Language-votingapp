import React from "react";

function Results({ languages }) {
  // Calculate total votes
  const totalVotes = languages.reduce((sum, lang) => sum + lang.votes, 0);

  return (
    <div className="results">
      <h2>Voting Results</h2>
      {totalVotes === 0 ? (
        <p>No votes yet!</p>
      ) : (
        <ul>
          {languages.map((lang, i) => {
            const percentage = ((lang.votes / totalVotes) * 100).toFixed(2);
            return (
              <li key={i}>
                {lang.name}: {percentage}% ({lang.votes} votes)
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Results;
