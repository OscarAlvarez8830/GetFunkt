const SessionApiUtil = {
  logIn(user, success, errorHandler) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success,
      error: (xhr) => {
        const errors = xhr.responseJSON;
        errorHandler("login", errors); // ErrorActions.setErrors
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error: () => {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  },

  signUp(user, success, error) {
    $.ajax({
      url: '/api/user',
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
      url: '/api/session',
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
