export function manageFriends(state = {friends: []}, action){
  if(action.type === "ADD_FRIEND") {
    // let newFriends = {...state}
    // newFriends.friends.push(action.friend)
    // return newFriends
    return {friends: [...state.friends, action.friend]}
  } else if(action.type === "REMOVE_FRIEND") {
    return {friends: state.friends.filter(friend => friend.id !== action.id)}
  } else {
    return state
  }
}
