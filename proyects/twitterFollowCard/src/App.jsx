// React functional component
import React from 'react';
import { TwitterFollowCard } from './components/TwitterFollowCard';

export const App = () => {
console.log("----> App.jsx"); // eslint-disable-line no-console
  return (
    <div>
      <TwitterFollowCard />
    </div>
  );
}