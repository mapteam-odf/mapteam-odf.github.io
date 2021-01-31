let map, userData;
const image = "https://mapteam-odf.github.io/circle-map.png";
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 39.7, lng: -105 },
  });
}

function getContent(user) {
  const profileUrl = "https://community.beondeck.com/user/" + user.id;
  const profilePhoto = user.profilePhoto;
  const name = user.name;
  return ('<div id="content">' +
      '<img src="' + profilePhoto + '"/>' +
      '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>' +
      '<div id="bodyContent"><a href="' + profileUrl + '" target="_parent">View profile</a></div>' +
    "</div>");
}

function getPosition(user) {
  const position = user.positions[0];
  if (position.hasOwnProperty('coordinates')) {
    console.log(position.label);
    return position.coordinates;
  }
  return undefined;
}

function displayMarkers (evt) {
  var message;
  if (evt.origin !== "https://community.beondeck.com" && evt.origin !== "https://mapteam-odf.github.io" && evt.origin !== "http://localhost") {
    alert("Not gonna happen: " + evt.origin);
  }
  else {
    console.log(event.data);
    userData = JSON.parse(evt.data);
    if (userData.hasOwnProperty('users')) {
      var size = userData.users.length;
      for (var i = 0; i < size; i++) {
        const user = userData.users[i];
        const position = getPosition(user);
        console.log("got user", position.lat, position.lng);
        if (position !== undefined) {
          console.log("printing " + user.name);
          const marker = new google.maps.Marker({
            position: position,
            map,
            icon: image,
          });
          const infowindow = new google.maps.InfoWindow({
            content: getContent(user),
          });
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
        }
      }
    } else {
      console.log("Could not get location for " + user.id);
    }
  }
}

if (window.addEventListener) {
  // For standards-compliant web browsers
  window.addEventListener("message", displayMarkers, false);
}
else {
  window.attachEvent("onmessage", displayMarkers);
}
