  function initMap() {
      var uluru = { lat: 50.83176086, lng: -0.16859699 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

