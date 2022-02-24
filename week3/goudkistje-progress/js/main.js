window.addEventListener('load', init);

//Globals
let imageList = ['ballonnen', 'cars', 'planes', 'goudkistje'];
let playField;

/**
 * Initialize after the DOM is ready
 */
function init()
{
  //Retrieve the playing field element from the HTML
  playField = document.getElementById('playing-field');

  createPlayField();
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField()
{
  //Empty field & shuffle current array to actually have a 'game feeling'
  imageList = shuffleArray(imageList);

  //Loop through all the images
  for (let i = 0; i < imageList.length; i++) {
    //Create div for card
    let div = document.createElement('div');
    div.classList.add('playing-card');

    //Create & append H2 to div
    let h2 = document.createElement('h2');
    h2.innerHTML = i.toString();
    div.appendChild(h2);

    //Create image & append to div
    let img = document.createElement('img');
    img.src = `img/${imageList[i]}.png`;
    div.appendChild(img);

    //Append div to playing field
    playField.appendChild(div);
  }
}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e)
{

}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e)
{

}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text)
{

}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * @link http://stackoverflow.com/a/12646864
 *
 * @param array
 * @returns {*}
 */
function shuffleArray(array)
{
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
