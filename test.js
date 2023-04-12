const calback1 = (req, res) => {
  console.log(req);
  console.log(res);
};

const invokeCallback = (data, callback) => {
  console.log(data);
  callback(data + 'req', data + 'res');
};

invokeCallback('stang', calback1);
invokeCallback('stang2', (a, b) => {
  console.log(a);
});
