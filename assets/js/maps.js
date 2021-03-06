// Property array
/*jshint esversion: 6 */
const properties = [
    [
        "Appleton Farm",
        42.647935,
        -70.850771,
        "appleton-sm.jpg",
        "appleton-farms/",
        1,
    ],
    [
        "Castle Hill Estate",
        42.682783,
        -70.777461,
        "castlehill-sm.jpg",
        "castle-hill-on-the-crane-estate/",
        2,
    ],
    [
        "Crane Beach",
        42.683697,
        -70.766222,
        "cranebeach-sm.jpg",
        "crane-beach-on-the-crane-estate/",
        3,
    ],
    [
        "Coolidge Point",
        42.579904,
        -70.725684,
        "coolidge-sm.jpg",
        "coolidge-reservation/",
        4,
    ],
    [
        "Greenwood Farm",
        42.694674,
        -70.821945,
        "greenwood-sm.jpg",
        "greenwood-farm/",
        5,
    ],
    [
        "Halibut Point",
        42.686697,
        -70.631741,
        "halibut-sm.jpg",
        "halibut-point-reservation/",
        6,
    ],
    [
        "Long Hill", 42.587141, -70.846344, "longhill-sm.jpg", "long-hill/", 7,
    ],
    [
        "Old Town Hill",
        42.768704,
        -70.849503,
        "oldtownhill-sm.jpg",
        "old-town-hill/",
        8,
    ],
    [
        "Ravenswood Park",
        42.592897,
        -70.698277,
        "Ravenswood-sm.jpg",
        "ravenswood-park/",
        9,
    ],
    [
        "Stavros Reservation",
        42.651123,
        -70.786834,
        "stavros-sm.jpg",
        "stavros-reservation/",
        10,
    ],
    [
        "Agassiz Rock",
        42.598149,
        -70.766914,
        "agassiz-sm.jpg",
        "agassiz-rock/",
        11,
    ],
    [
        "Sally Weatherall Reservation",
        42.7017,
        -70.804188,
        "sally-sm.jpg",
        "Sally-Weatherall-Reservation-and-Viewing-Platform",
        12,
    ],
    [
        "Allyn Cox Reservation",
        42.63383,
        -70.764614,
        "cox-sm.jpg",
        "Allyn-Cox-Reservation",
        13,
    ],
    [
        "Harvey Reservation",
        42.679187,
        -70.660575,
        "harvey-sm.jpg",
        "Harvey-Reservation",
        14,
    ],
    [
        "Tompson Street Reservation",
        42.62,
        -70.724,
        "tompson-sm.jpg",
        "Tompson-Street-Reservation",
        15,
    ],
    [
        "Stoney Cove Presson Point",
        42.625613,
        -70.704964,
        "stonycove-sm.jpg",
        "Stoney-Cove-and-Presson-Point",
        16,
    ],
];

// When the user clicks the marker, an info window opens.

function initMap() {
    var centerLatLng = { lat: 42.694674, lng: -70.73868 };
    var map;

    if (screen.width < 600) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: centerLatLng,
        });
    } else {
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: centerLatLng,
        });
    }

    var i = 0;

    for (i = 0; i < properties.length; i++) {
        var infoContent = `<img src='assets/images/${properties[i][3]}'><p style="font-weight:bold">${properties[i][0]}</p>`;

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(properties[i][1], properties[i][2]),
            map: map,
        });

        marker.info = new google.maps.InfoWindow({
            content: infoContent,
            maxWidth: 200,
        });

        if (screen.width < 900) {
            google.maps.event.addListener(marker, "click", function () {
                this.info.open(this.getMap(), this);
            });
        } else {
            marker.addListener("mouseover", function () {
                this.info.open(this.getMap(), this);
            });
            //  hide the infowindow when user mouses-out
            marker.addListener("mouseout", function () {
                this.info.close();
            });
        }
    }
}
