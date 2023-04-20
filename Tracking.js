fetch(`https://example.com/tracking/${trackingNumberValue}`)
  .then(response => response.json())
  .then(data => {
    // Update the UI with the tracking information
    status.textContent = data.status;
    deliveryDate.textContent = data.deliveryDate;
    location.textContent = `${data.location.latitude}, ${data.location.longitude}`;

    // Display the tracking information
    trackingNumberDisplay.textContent = trackingNumberValue;
    trackingResults.classList.add('visible');

    // Show the map
    const map = new google.maps.Map(mapDiv, {
      center: {lat: data.location.latitude, lng: data.location.longitude},
      zoom: 8
    });
  })
  .catch(error => console.error(error));
