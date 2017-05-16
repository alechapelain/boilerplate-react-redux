let Utils = {
  isDefined: (val) => {
    return (typeof val !== 'undefined' && val !== null && val !== '');
  },
  objIsEmpty: (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  capitalizeFirst: (str) => {
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
  },
  getById: (input, id) => {
    let i = 0;
    let len = input.length;

    for (i; i < len; i++) {
      if (input[i].id === id) {
        return input[i];
      }
    }

    return null;
  },
  getByKey: (input, key, value) => {
    let i = 0;
    let len = input.length;

    for (i; i < len; i++) {
      if (input[i][key] === value) {
        return input[i];
      }
    }

    return null;
  }
};

export default Utils;
