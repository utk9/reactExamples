var axios = require('axios');


var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      console.log(username);
      return axios.get('https://api.github.com/users/' + username);
    }))
    .then(function (info) {
    
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;