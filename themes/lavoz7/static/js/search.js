var toggleSearch = document.getElementsByClassName('toggle-search-button')[0];
var searchContainer = document.getElementById('search-form');
var searchInput = document.getElementById('searchInput');
var notFoundElem = document.getElementById('searchNotFound');

notFoundElem.style.visibility = 'hidden';
notFoundElem.style.position = 'absolute';

toggleSearch.addEventListener('click', function (e) {
    searchContainer.setAttribute('class', 'search-form-container is-active');
    document.getElementsByClassName('off-canvas-container')[0].setAttribute('class', 'off-canvas-container');

    setTimeout(() => {
        searchInput.focus();
    }, 500);
});

searchInput.addEventListener('keyup', onChange);


async function onChange(e) {
    var term = e.target.value;

    if (!term) {
        notFoundElem.style.visibility = 'hidden';
        return 0;
    }

    var results;
    var founds = [];
    await fetch('/index.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            results = json;
        })

    for (i = 0; i < results.length; i++) {
        if (results[i]['title'].toLowerCase().includes(term.toLowerCase())) {
            founds.push(results[i])
        }
    }

    await setResults(founds)
}

async function setResults(list) {
    var resultsElement = await document.getElementById('searchResults')
    resultsElement.innerHTML = await '';

    var listString = ``;
    list.forEach(li => {
        if (!listString.includes(li['title'])) {
            listString += `
            ${template(li['title'], li['permalink'], li['date'])}
        `}
    });
    resultsElement.innerHTML = listString;

    !list.length ? notFoundElem.style.visibility = 'visible' : notFoundElem.style.visibility = 'hidden';
}

function template(title, link, date) {
    var dateFormatted = new Date(date);
    var dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateFormatted);
    var mm = new Intl.DateTimeFormat('en', { month: 'long' }).format(dateFormatted);
    var yyyy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateFormatted)


    dateFormatted = dd + ' ' + mm + ' ' + yyyy;

    return `
    <div class='search-results__item'>
    <a class='search-results__item__title' href='${link}'>${title}</a>          
    <span class='search-results__date'>
    ${date ? dateFormatted : ''}
    </span>
    </div>
    `
}