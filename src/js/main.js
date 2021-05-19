import {
    createClusterer,
    loadDataFromStorage,
    addMarkerToMap,
    submitHandler,
    showEmptyReviewForm,
    hidePopup,
} from './modules/yandex';

import '../sass/main.scss';

const MAPS_CONFIG = {
    center: [59.928305, 30.320457],
    zoom: 14,
    controls: ['geolocationControl','zoomControl'],
};

const init = () => {
    const yaMap = new ymaps.Map('ymaps', MAPS_CONFIG);
    const yaClusterer = createClusterer(yaMap);
    const reviewsForm = document.querySelector('.reviews__form');

    reviewsForm.map = yaMap;
    reviewsForm.clusterer = yaClusterer;
    reviewsForm.addEventListener('submit', submitHandler);

    yaMap.events.add('click', async function (e) {
        const coords = e.get('coords');
        async function geocoder(coords) {
            var response = await ymaps.geocode(coords);
            return response.geoObjects.get(0).getAddressLine();
        }

        var address = await geocoder(coords);
        reviewsForm.point = coords;
        showEmptyReviewForm(coords, address);
        
    });

    let markers = loadDataFromStorage();
    if (markers) {
        markers.forEach((marker) => {
            addMarkerToMap(yaMap, yaClusterer, marker);
        });
    
        
    }

    yaClusterer.events
        .add(['mouseenter', 'mouseleave', 'mousedown'], function (color) {
            const target = color.get('target'),
                type = color.get('type');
            if (typeof target.getGeoObjects != 'undefined') {
                // кластер
                if (type == 'mouseenter' ) {
                    target.options.set('preset', 'islands#orangeClusterIcons');
                }  
                if ((type == 'mousedown' ) || (type == 'mouseleave' )) {
                    target.options.set('preset', 'islands#blueClusterIcons');
                } 
                
            } else {
                // геообъект
                if (type == 'mouseenter' ) {
                    target.options.set('preset', 'islands#orangeIcon');
                } 
                else {
                    target.options.set('preset', 'islands#blueIcon');
                }
            }
        });

    document.querySelector('.reviews__close').addEventListener('click', hidePopup);
    
    
};

ymaps.ready(init);
