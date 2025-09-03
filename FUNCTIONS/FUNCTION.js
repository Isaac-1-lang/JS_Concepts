function greeting(name,gender) {
     return (`Good ${gender == "male" ? `Mr. ${name}` : `Mrs. ${name}`}`);
}
let greetings= greeting(('Precieux', 'male'));
console.log(greetings);