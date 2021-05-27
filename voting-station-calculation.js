const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const chosen = [];
    for (const station of stations) {
      let capacity = station[1];
      if (capacity >= 20) {
        let type = station[2];
        if (type === "school" || type === "community centre") {
          chosen.push(station[0]);
        }
      } 
  } 
  return chosen;
}

console.log(chooseStations(stations));


//each station is an array -> name, capacity, venue type 
//appropriate station = capacity >= 20, be a school or community centre 
