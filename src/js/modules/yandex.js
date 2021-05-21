import makeBalloonTemplate from '../../views/makeBalloonTemplate.hbs';
import reviewTemplate from '../../views/reviewTemplate.hbs';

const reviews = document.querySelector('#reviews');
const reviewsForm = document.querySelector('.hiddenRev__form');
const title = reviews.querySelector('.hiddenRev__header');
const reviewsContent = document.querySelector('.hiddenRev__content');


export function addMarkerToMap(map, clusterer, reviewData) {
    const marker = new ymaps.Placemark(reviewData.point, {
        openBalloonOnClick: false,
        balloonContentPlace: reviewData.place,
        balloonContentComment: reviewData.comment,
        balloonContentName: reviewData.name,
        balloonContentDate: reviewData.dateTime,
        balloonContentPoint: reviewData.point.toString(),
        balloonContentAddress: reviewData.address,
    });

    map.geoObjects.add(marker);

    clusterer.add(marker);

    marker.events.add('click', (e) => {
        e.preventDefault();
        showPopupWithReviews(reviewData.point);
    });
}



function clearPopup() {
    title.childNodes[0].textContent = '-';
    reviewsContent.innerText = '';
    document.querySelector('.hiddenRev__form input[name="name"]').value = '';
    document.querySelector('.hiddenRev__form input[name="place"]').value = '';
    document.querySelector('.hiddenRev__form textarea').value = '';
}

export function showEmptyReviewForm(point, address = '') {
    clearPopup();
    title.childNodes[0].textContent = address;
    reviews.classList.remove('hiddenRev');
    reviewsForm.point = point;
}

function showPopupWithReviews(point) {
    clearPopup();

    let markers = loadDataFromStorage();
    let innerHTML = '<ul>';

    markers.forEach((marker) => {
        if (JSON.stringify(marker.point) === JSON.stringify(point)) {
            innerHTML = innerHTML + reviewTemplate({
                name: marker.name,
                time: marker.dateTime,
                place: marker.place,
                comment: marker.comment,
            });
            title.childNodes[0].textContent = marker.address;
        }
    });
    innerHTML = innerHTML + '</ul>';

    reviewsContent.innerHTML = innerHTML;
    reviews.classList.remove('hiddenRev');
    reviewsForm.point = point;
}



function unixToDateStr(Datetime) {
    let date = new Date(Datetime);
    let year = date.getFullYear();
    let month = date.getUTCMonth() + 1 ;
    let day = date.getUTCDate() ;
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function createClusterer(map) {
    const customClusterBalloonContent = ymaps.templateLayoutFactory.createClass(makeBalloonTemplate('$[(properties)]'));

    const clusterer = new ymaps.Clusterer({
        openBalloonOnClick: true,
        clusterDisableClickZoom: true,
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        clusterBalloonItemContentLayout: customClusterBalloonContent,
        clusterBalloonPanelMaxMapArea: 0,
        clusterBalloonContentLayoutWidth: 353,
        clusterBalloonContentLayoutHeight: 200,
        clusterBalloonPagerSize: 10
        
    });

    map.geoObjects.add(clusterer);

    clusterer.events.add('balloonopen', hidePopup);

    const onBalloonLinkClick = (e) => {
        if (e.target.id && e.target.id === 'balloon-link') {
            e.preventDefault();
            map.balloon.close();
            let pointData = e.target.dataset.point.split(',');
            let point = pointData.map(Number);

            showPopupWithReviews(point);
        }
    };

    document.addEventListener('click', onBalloonLinkClick);

    return clusterer;
}

export function submitHandler(e) {
    e.preventDefault();

    let reviewData = {
        point: this.point,
        name: document.querySelector('.hiddenRev__form input[name="name"]').value.trim(),
        place: document.querySelector('.hiddenRev__form input[name="place"]').value.trim(),
        comment: document.querySelector('.hiddenRev__form textarea[name="comment"]').value.trim(),
        address: document.querySelector('.hiddenRev__header').childNodes[0].textContent.trim(),
        dateTime: unixToDateStr(Date.now()),
    };

    if (!reviewData.name || !reviewData.place || !reviewData.comment) {
        alert('Нет данных');
        return;
    }
    addMarkerToMap(this.map, this.clusterer, reviewData);
    addDataToStorage(reviewData);
    showPopupWithReviews(this.point);
    reviews.classList.add('hiddenRev');
}

function addDataToStorage(newData) {
    let markers = [];
    if (localStorage.getItem('markers')) {
        markers = JSON.parse(localStorage.getItem('markers'));
    }
    markers.push(newData);
    localStorage.setItem('markers', JSON.stringify(markers));
}

export function loadDataFromStorage() {
    if (localStorage.getItem('markers')) {
        return JSON.parse(localStorage.getItem('markers'));
    }
}
export function hidePopup() {

    reviews.classList.add('hiddenRev');
    
}