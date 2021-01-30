// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 37.7576793, lng: 122.5076399 },
  });
  const image =
    "https://mapteam-odf.github.io/circle-map.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 37.7576793, lng: 122.5076399 },
    map,
    icon: image,
  });
}