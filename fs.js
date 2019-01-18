const fsConfig = {
  base_url: "https://api.foursquare.com/v2/venues/explore?",
  client_id: "Your ID",
  client_secret: "Your Secret"
};

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20190101';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);
console.log(fsConfig);