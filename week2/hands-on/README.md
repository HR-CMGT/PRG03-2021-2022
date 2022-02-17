# Week 2 : Herhaling Javascript Basics

We gaan kijken naar de javascript principes uit Programmeren 1.

[Bekijk hier het resultaat van les 2](./js/main.js)

## Variabelen en data types

Number, String, Boolean, Array

```javascript
let a = 4;                       // number
let b = a * 2;                   // number
let c = 10;                      // number
let lessonComplete = false;      // boolean
const artist = "Gorillaz";       // string
let tracks = ["On Melancholy Hill", "Dirty Harry", "Rhinestone eyes"]; // array
```
Gebruik **string templates** met backtick en `${}` om variabelen en strings te combineren.

```javascript
console.log(`Hello world`);
console.log(artist);
console.log(`Artist name ${artist}`);
```

## IF statements

```javascript
if(a > b && a < c) {
    console.log("A is groter dan B en kleiner dan C");
} 
if(lessonComplete) {
    console.log("De les is afgelopen");
} else {
    console.log("De les is nog niet afgelopen");
}
if(artist === "Gorillaz" || artist === "BabyMetal") {
    console.log("Award rewarded!");
}
if (artist !== "Babymetal") {
    console.log("Boring!");
}
```

## Switch statement

```javascript
switch(c){
  case 10:
    console.log('Alright');
    break;
  case 20:
    console.log('Greater');
    break;
  case 30:
    console.log('Huge');
    break;
  default:
    console.log('Unkown');
}
```

## Arrays

```javascript
console.log(`Er zijn ${tracks.length} tracks`);
console.log(`Track 1 is ${tracks[0]}`);

tracks.push("Feel Good Inc");
tracks[1] = "Dirty Harry";
```

## FOR Loops

```javascript
for(let i = 0; i < tracks.length; i++) {
    console.log(tracks[i]);
}
// for of
for(let track of tracks){
    console.log(track);
}
```

## Functions

```javascript
function logArtist() {
    console.log(artist);
}

logArtist();
```
### Function arguments

```javascript
function logTrack(tracknumber){
    console.log(tracks[tracknumber]);
}

logTrack(0);
logTrack(1);
```
