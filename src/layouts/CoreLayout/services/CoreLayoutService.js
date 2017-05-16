const services = {
  authenticate: (action) => {
    return (dispatch) => {
      setTimeout(function() {
        // TODO do something with login password to receive a real token
        action.token = 'zg485z4e56g4z54h545er1g5';
        dispatch(action);
      }, 3000);
    };
  }
};

export default services;
