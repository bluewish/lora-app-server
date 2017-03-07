import { EventEmitter } from "events";

class UserStore extends EventEmitter {
  getAll(callbackFunc) {
    callbackFunc([
      {id: 1, username: "user1", isActive: true, isAdmin: true},
      {id: 2, username: "user2", isActive: true, isAdmin: false},
    ]);
  } 

  getUser(userID, callbackFunc) {
    callbackFunc({id: 1, username: "user1", isActive: true, isAdmin: true});
  }

  createUser(user, callbackFunc) {
    callbackFunc({id: 1});
  }

  updateUser(userID, user, callbackFunc) {
    callbackFunc({});
  }

  deleteUser(userID, callbackFunc) {
    callbackFunc({});
  }

  updatePassword(userID, password, callbackFunc) {
    callbackFunc({});
  }
}

const userStore = new UserStore();

export default userStore;
