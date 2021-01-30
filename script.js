// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 37.77, lng: -122.41 },
  });
  const image =
    "https://mapteam-odf.github.io/circle-map.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 37.77, lng: -122.41 },
    map,
    icon: image,
  });
}

function displayMarkers (evt) {
  var message;
  if (evt.origin !== "https://community.beondeck.com/" || evt.origin !== "https://mapteam-odf.github.io//") {
    alert("Not gonna happen");
  }
  else {
    console.log(evt.data);
  }
}

if (window.addEventListener) {
  // For standards-compliant web browsers
  window.addEventListener("message", displayMarkers, false);
}
else {
  window.attachEvent("onmessage", displayMarkers);
}