import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { createUser, deleteUser, removeThingFromUser } from './store';


const Users = ({ users, createUser, deleteUser, things, removeThingFromUser })=> {
  return (
    <div>
      <h1>Users</h1>
      <button onClick={ createUser }>+</button>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.name }
                <button onClick={ ()=> deleteUser(user)}>x</button>
                <ul>
                {
                  things.filter( thing => thing.userId === user.id)
                    .map(thing => {
                      return (
                        <li key={ thing.id }>
                          { thing.name } ({ thing.ranking })
                          <button onClick={ ()=> removeThingFromUser(thing)}>x</button>
                        </li>
                      );
                    }) 
                  
                }
                </ul>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    users: state.users,
    things: state.things
  };
}

const mapDispatch = (dispatch)=> {
  return {
    createUser: ()=> {
      dispatch(createUser());
    },
    removeThingFromUser: async(thing)=> {
      thing = {...thing, userId: null}
      dispatch(removeThingFromUser(thing));
    },
    deleteUser: (user)=> {
      dispatch(deleteUser(user));
    },
  };
}
export default connect(mapStateToProps, mapDispatch)(Users);
