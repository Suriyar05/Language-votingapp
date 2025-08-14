import React from "react";

function Results({ languages }) {

  const totalVotes = languages.reduce((sum, lang) => sum + lang.votes, 0);


  let leader = null;
  if (totalVotes > 0) {
    const maxVotes = Math.max(...languages.map(lang => lang.votes));
    const leaders = languages.filter(lang => lang.votes === maxVotes);

    if (leaders.length === 1) {
      leader = `${leaders[0].name} is leading with ${maxVotes} votes!`;
    } else {
      leader = `It's a tie between ${leaders.map(l => l.name).join(", ")} with ${maxVotes} votes each!`;
    }
  }

  return (
    <div className="results">
      <h2>Voting Results</h2>
      {totalVotes === 0 ? (
        <p>No votes yet!</p>
      ) : (
        <>
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
          <div className="leader">
            <strong>{leader}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
