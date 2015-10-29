exports.build = false;
exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    try {
      var audio = load.metadata.audio = new Audio(load.address);
      resolve('');
    } catch (e) {
      reject(e);
    }
  });
};

exports.instantiate = function(load) {
  return load.metadata.audio;
};
