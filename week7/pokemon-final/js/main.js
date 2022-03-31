window.addEventListener('load', init);

//Globals
let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
let pokemonData = {};
let gallery;
let detailModal;
let detailModalContent;
let detailModalCloseButton;

/**
 * Initialize after the DOM is ready
 */
function init()
{
  //Retrieve gallery and add a click event for every Pokémon
  gallery = document.getElementById('pokemon-gallery');
  gallery.addEventListener('click', pokemonClickHandler);

  //Retrieve modal elements, and add click event for closing modal
  detailModal = document.getElementById('pokemon-detail');
  detailModalContent = detailModal.querySelector('.modal-content');
  detailModalCloseButton = detailModal.querySelector('.modal-close');
  detailModalCloseButton.addEventListener('click', detailModalCloseClickHandler);

  //Start the application with loading the API data
  ajaxRequest(apiUrl, createPokemonCards);
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler)
{
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(successHandler)
    .catch(ajaxErrorHandler);
}

/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
function createPokemonCards(data)
{
  //Loop through the list of Pokémon
  for (let pokemon of data.results) {
    //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
    //will result in Pokémon being ordered based on the load times of the API instead of chronically
    let pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.dataset.name = pokemon.name;

    //Append Pokémon card to the actual HTML
    gallery.appendChild(pokemonCard);

    //Retrieve the detail information from the API
    ajaxRequest(pokemon.url, fillPokemonCard);
  }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param pokemon
 */
function fillPokemonCard(pokemon)
{
  //Wrapper element for every Pokémon card
  let pokemonCard = document.querySelector(`.pokemon-card[data-name='${pokemon.name}']`);

  //Element for the name of the Pokémon
  let title = document.createElement('h2');
  title.innerHTML = `${pokemon.name} (#${pokemon.id})`;
  pokemonCard.appendChild(title);

  //Element for the image of the Pokémon
  let image = document.createElement('img');
  image.src = pokemon.sprites.other.home.front_default;
  pokemonCard.appendChild(image);

  //Element for the button to load the shiny version of the Pokémon
  let button = document.createElement('button');
  button.innerHTML = 'Show shiny';
  button.dataset.id = pokemon.id;
  pokemonCard.appendChild(button);

  //Store Pokémon data globally for later use in other functions
  pokemonData[pokemon.id] = pokemon;
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
  let error = document.createElement('div');
  error.classList.add('error');
  error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
  gallery.before(error);
}

/**
 * Open the detailview with information of a Pokémon
 *
 * @param e
 */
function pokemonClickHandler(e)
{
  let clickedItem = e.target;

  //Check if we clicked on a button
  if (clickedItem.nodeName !== 'BUTTON') {
    return;
  }

  //Get the information from the global stored data
  let pokemon = pokemonData[clickedItem.dataset.id];

  //Reset the content
  detailModalContent.innerHTML = '';

  //Show the name we used on the main grid
  let title = document.createElement('h1');
  title.innerHTML = `${pokemon.name} (#${pokemon.id})`;
  detailModalContent.appendChild(title);

  //Display the shiny
  let shiny = document.createElement('img');
  shiny.src = pokemon.sprites.other.home.front_shiny;
  detailModalContent.appendChild(shiny);

  //Open the modal
  detailModal.classList.add('open');
}

/**
 * Close the modal
 *
 * @param e
 */
function detailModalCloseClickHandler(e)
{
  detailModal.classList.remove('open');
}