const input = document.getElementById('searchInput');
function fetchData(query) {
    console.log('запит', query)
}




const trorrleFetch = _.throrrle(fetchData, 500);
input.addEventListener('input', (e) => {
    trorrleFetch(e.target.value);

})