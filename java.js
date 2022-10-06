const req = new XMLHttpRequest();

req.open('GET','https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?blacklistFlags=racist,sexist,explicit&type=single');

req.send();

const inWhichToPut = document.querySelector('.jokeWala');

req.onload = function() {
    const res = JSON.parse(this.response);
    let div = document.querySelector('.jokeWala');
    let content = document.querySelector('#content');
    content.innerHTML = `${res.joke}`;
}