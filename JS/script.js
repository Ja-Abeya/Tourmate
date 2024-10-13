function initMap() {
    var location;

    // Identify the city based on the current page URL
    if (window.location.pathname.includes('busan.html')) {
        location = { lat: 35.1796, lng: 129.0756 }; // Busan coordinates
    } else if (window.location.pathname.includes('daegu.html')) {
        location = { lat: 35.8722, lng: 128.6025 }; // Daegu coordinates
    } else if (window.location.pathname.includes('daejeon.html')) {
        location = { lat: 36.3504, lng: 127.3845 }; // Daejeon coordinates
    } else if (window.location.pathname.includes('jeju.html')) {
        location = { lat: 33.4996, lng: 126.5312 }; // Jeju coordinates
    }

    // Create the map and marker for the specified location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', initMap);
