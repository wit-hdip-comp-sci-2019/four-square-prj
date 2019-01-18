const axios = require('axios');
require('dotenv').config();

const fsConfig = {
  base_url: 'https://api.foursquare.com/v2/venues/explore?',
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
};

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20190101';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);

axios.get(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials).then(function(response) {
  var venues = response.data.response.groups[0].items;
  console.log(venues);
});
