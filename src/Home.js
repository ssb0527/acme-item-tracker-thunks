import React from 'react';
import { connect } from 'react-redux';

const Home = ({ users, things, topRankedThings, topRankedUsers })=> {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have { users.length } users and { things.length } things!
      </p>
      <h2>Top Ranked</h2>
      <h3>Things</h3>
      <ul>
        {
          topRankedThings.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name }
              </li>
            );
          })
        }
      </ul>
      <h3>Users</h3>
      <ul>
        {
          topRankedUsers.map( user => {
            return (
              <li key={user.id}>
                {user.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

const mapSToP = (s)=> {
  const topRankThing = Math.max(...s.things.map(thing => thing.ranking));
  const topRankedThings = s.things.filter(thing => thing.ranking === topRankThing);
  const topRankUser = Math.max(...s.users.map(user => user.ranking));
  const topRankedUsers = s.users.filter(user => user.ranking === topRankUser);
  return {
    users: s.users,
    things: s.things,
    topRankedThings,
    topRankedUsers
  };
};

export default connect(mapSToP)(Home);
