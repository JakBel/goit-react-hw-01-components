import './App.css';
import React from 'react';
//Task 1
import Profile from "./components/task1_profile/Profile";
import user from './components/task1_profile/user.json';
//Task 2
import Statistics from './components/task2_statistics/Statistics';
import data from './components/task2_statistics/data.json';
//Task 3
import FriendList from './components/task3_friend-list/FriendList';
import friends from './components/task3_friend-list/friends.json';
//Task 4
import TransactionHistory from './components/task4_transaction-history/TransactionHistory';
import transactions from './components/task4_transaction-history/transactions.json';

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Task 1 - social media profile</h1>
          <a href="https://github.com/JakBel/goit-react-hw-01-components">
            Link do GitHub
          </a>
        </div>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        <div>
          <h1>Task 2 - statistics section</h1>
          <a href="https://github.com/JakBel/goit-react-hw-01-components">
            Link do GitHub
          </a>
        </div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <div>
          <h1>Task 3 - friends list</h1>
          <a href="https://github.com/JakBel/goit-react-hw-01-components">
            Link do GitHub
          </a>
        </div>
        <FriendList friends={friends} />
        <div>
          <h1>Task 4 - transaction history</h1>
          <a href="https://github.com/JakBel/goit-react-hw-01-components">
            Link do GitHub
          </a>
        </div>
        <TransactionHistory items={transactions} />
      </header>
    </div>
  );
}

export default App;