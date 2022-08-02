export function manageFriends(state, action) {
  // your code here
  switch(action.type){
    case "friends/add":
      return {friends: [...state.friends, action.payload]};
    case "friends/remove":
      let newFriendsArray = state.friends.filter(friend => friend.id !== action.payload)
      return {friends: newFriendsArray}
    default:
      return state
  }
}
