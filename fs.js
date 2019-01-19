const axios = require('axios');
require('dotenv').config();

const fsConfig = {
  base_url: 'https://api.foursquare.com/v2/venues/explore?',
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
};

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20190101';

async function loadVenues(location) {
  const response = await axios.get(fsConfig.base_url + location + fsCredentials);
  console.log(`Searching ${location}...`);
  var venues = response.data.response.groups[0].items;
  const venueCollection = [];
  for (let i = 0; i < venues.length; i++) {
    const singleVenue = venues[i].venue;
    const venue = {
      name: singleVenue.name,
      category: singleVenue.categories[0].name,
      address: singleVenue.location
    };
    venueCollection.push(venue);
  }
  console.log(venueCollection);
}

loadVenues('near=Waterford,IE');
loadVenues('near=Tramore,IE');
loadVenues('near=Dungarvan,IE');
