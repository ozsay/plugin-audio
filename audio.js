exports.build = false;
exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    try {
      load.metadata.audio = new Audio(load.address);
      resolve('');
    } catch (e) {
      reject(e);
    }
  });
};

exports.instantiate = function(load) {
  return load.metadata.audio;
};
