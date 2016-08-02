const SessionApiUtil = {
  logIn(user, success, error) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: 'api/session',
      method: 'DESTROY',
      success,
      error: () => {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  },

  signUp(user, success, error) {
    $.ajax({
      url: 'api/user',
      method: 'POST',
      dataType: 'JSON',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  fetchCurrentUser(success, complete) {
    $.ajax({
      url: 'api/session',
      method: 'GET',
      success,
      error: (xhr) => {
        console.log("Error in SessionApiUtil#fetchCurrentUser");
      },
      complete: () => {
        complete();
      }
    });
  }
};

module.exports = SessionApiUtil;
