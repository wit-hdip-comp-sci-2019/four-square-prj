const fsConfig = {
  base_url: 'https://api.foursquare.com/v2/venues/explore?',
  client_id: 'YOUR_ID',
  client_secret: 'YOUR_CLIENT'
};

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20190101';

function populateTable(venues) {
  $("#repo-table tbody").empty();
  for (let i = 0; i < venues.length; i++) {
    $("#repo-table tbody").append(`
      <tr> 
        <td>  ${venues[i].name} </td>
        <td>  ${venues[i].category} </td>
      </tr>`);
  }
}

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
      address: singleVenue.category
    };
    venueCollection.push(venue);
  }
  console.log(venueCollection);
  populateTable(venueCollection)
}

$('#fetch-btn').click(function() {
  var location = $('#github-id').val();
  loadVenues('near=' + location);
});
