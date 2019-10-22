function initMap() {
    var asheville = {
        lat: 35.594721,
        lng: -82.554469
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: asheville
        }
    );
    var marker = new google.maps.marker({
        position: asheville,
        map: map
    });
}


const home = document.querySelector('#homeLink');
home.addEventListener('click', e => {
    window.scrollTo(document.querySelector('#top'));
});

const about = document.querySelector('#aboutLink');
about.addEventListener('click', e => {
    window.scrollTo(document.querySelector('.about'));
});