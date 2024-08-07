import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeetcodeStats.css';
import LeetcodeCharts from './LeetcodeCharts';
import badgeImage from '../Assets/badge.gif';

const LeetcodeStats = () => {
  const [stats, setStats] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:8080/https://leetcode-stats-api.herokuapp.com/Niharikaaa98');
        console.log(response.data);
        setStats(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching LeetCode stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="leetcode-stats-card">
      <h2>LeetCode Stats</h2>
      <div className="stats-content">
        <div className="stat-item"><strong>Problems Solved:</strong> <span>{stats.totalSolved}</span></div>
        <div className="stat-item"><strong>Easy:</strong> <span>{stats.easySolved}</span></div>
        <div className="stat-item"><strong>Medium:</strong> <span>{stats.mediumSolved}</span></div>
        <div className="stat-item"><strong>Hard:</strong> <span>{stats.hardSolved}</span></div>
        <div className="stat-item"><strong>Contributions:</strong> <span>{stats.contributionPoints}</span></div>
        <div className="stat-item"><strong>Reputation:</strong> <span>{stats.reputation}</span></div>
        <div className="stat-item"><strong>Contest Rating:</strong> <span>{stats.contestRating}</span></div>
        <div className="stat-item"><strong>Global Ranking:</strong> <span>{stats.globalRanking}</span></div>
        <div className="stat-item"><strong>Attended:</strong> <span>{stats.attended}</span></div>
        <div className="stat-item"><strong>Top Percentage:</strong> <span>{stats.topPercentage}</span></div>
      </div>
      <div className="badge-container">
        <h3>Badges</h3>
        <img src={badgeImage} alt="Badge" />
      </div>
      <div className="chart-container">
        <LeetcodeCharts stats={stats} />
      </div>
    </div>
  );
};

export default LeetcodeStats;
