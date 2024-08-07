import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeetcodeStats.css';

const LeetcodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/leetcode-stats');
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="leetcode-stats-container">
      <h2>LeetCode Stats</h2>
      <div className="stats-content">
        <div className="stats-info">
          <p><strong>Problems Solved:</strong> {stats.submitStats.acSubmissionNum.reduce((acc, curr) => acc + curr.count, 0)}</p>
          <p><strong>Easy:</strong> {stats.submitStats.acSubmissionNum.find(d => d.difficulty === 'Easy').count}</p>
          <p><strong>Medium:</strong> {stats.submitStats.acSubmissionNum.find(d => d.difficulty === 'Medium').count}</p>
          <p><strong>Hard:</strong> {stats.submitStats.acSubmissionNum.find(d => d.difficulty === 'Hard').count}</p>
          <p><strong>Contributions:</strong> {stats.contributionPoints}</p>
          <p><strong>Reputation:</strong> {stats.reputation}</p>
          <p><strong>Contest Rating:</strong> {stats.profile.ranking}</p>
          <p><strong>Global Ranking:</strong> {stats.profile.globalRanking}</p>
          <p><strong>Attended:</strong> {stats.profile.attended}</p>
          <p><strong>Top Percentage:</strong> {stats.profile.topPercentage}</p>
        </div>
        <div className="badges">
          <h3>Badges</h3>
          <img src="/path/to/badge.gif" alt="Badge" />
        </div>
      </div>
    </div>
  );
};

export default LeetcodeStats;
