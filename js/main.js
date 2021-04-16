const select = document.getElementById('selBreed')
const disp = document.getElementById('breedDesc')
// console.log(select)





























// search and filter
/* const searchBreed = async searchText => {
  const resp = await fetch('https://api.thecatapi.com/v1/breeds/search');
  const breeds = await resp.json();

  let match = breeds.filter( breeds => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return breeds.name.match(regex) || breeds.origin.match(regex)
  });
  if(searchText.length == 0) {
    match = ''
    disp.innerHTML = ''
  }
  outputHtml(match)

};

console.log(searchBreed)

const outputHtml = match => {
  if(match.length > 0) {
    const html = match.map(match => 
    `<div class="card card-body mb-1">
    <h4> ${match.name} (${match.origin}) <span class="text-secondary">
    ${match.description}</span> </h4>
    </div>`).join('')

    match.innerHTML = html;
    
  }
}
select.addEventListener('input', () => searchBreed
(search.value)); */