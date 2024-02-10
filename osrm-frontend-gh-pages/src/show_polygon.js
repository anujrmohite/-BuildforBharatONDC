// Import necessary modules
const L = require('leaflet');
const data = require('./ga.json'); // Assuming data.json is in the same folder
// console.log(data);
// Function to draw polygons
// function drawPolygons(map) {
//   for (let i = 0; i < 2000; i++) {
//     const coords = data.features[i].geometry.coordinates[0];

//     // Check if coordinates are present
//     if (coords && coords.length > 0) {
//       // Reverse the coordinates
//       const reversedCoords = coords.map(coord => [coord[1], coord[0]]);

//       // Create polygon with reversed coordinates and add it to the map
//       const polygon = L.polygon(reversedCoords, {
//         color: "red",
//       }).addTo(map);
//     } else {
//       console.log("Invalid coordinates at index", i);
//     }
//   }
// }


function drawPolygons(map, targetDistrict, targetSubdistrict) {
  for (let i = 0; i < data.features.length; i++) {
    const feature = data.features[i];
    const district = feature.properties.DISTRICT;
    const subdistrict = feature.properties.SUB_DIST;

    // Check if the feature matches the target district and subdistrict
    if (district === targetDistrict && subdistrict === targetSubdistrict) {
      const coords = feature.geometry.coordinates[0];

      // Check if coordinates are present
      if (coords && coords.length > 0) {
        // Reverse the coordinates
        const reversedCoords = coords.map(coord => [coord[1], coord[0]]);

        // Create polygon with reversed coordinates and add it to the map
        const polygon = L.polygon(reversedCoords, {
          color: "red",
        }).addTo(map);
      } else {
        console.log("Invalid coordinates for feature at index", i);
      }
    }
  }
}

// Export the function for use in other files
module.exports = drawPolygons;
