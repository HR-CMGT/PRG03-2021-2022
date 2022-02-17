//Create 2 strings, 1 integer, 1 boolean and 1 array
let artist = 'Joe Satriani';
let album = 'Unstoppable Momentum';
let specialEdition = true;
let duration = 70;
let songs = ['Unstoppable Momentum', 'Can\'t Go Back', 'Lies and Truths', 'Three Sheets to the Wind', 'Lies and Truths'];

//Log all the above variables in 1 log
console.log(artist, album, specialEdition, duration, songs);

//If statement to check if the edition is super special
if (specialEdition) {
  console.log('Dit album is zeer speciaal');
}

//Switch instead of long if/else for cleaner code
switch (true) {
  case duration <= 30:
    console.log('Zeer kort album');
    break;
  case duration <= 60:
    console.log('Gemiddeld album');
    break;
  case duration <= 90:
    console.log('Waar voor je geld!');
    break;
  default:
    console.log('Hmmm, dat is best extreem');
}

//Using an array in JS
console.log(`Er staan ${songs.length} nummers op dit album`);
songs.push('I\'ll Put a Stone on Your Cairn');
songs[1] = 'Something else';
console.log(songs);

//Loop through the results
for (let song of songs) {
  console.log(song);
}

//Function to add a new song
function addSong(title)
{
  songs.push(title);
}

//Call the function with a parameter
addSong('A Door into Summer');
addSong('Shine On American Dreamer');
console.log(songs);
