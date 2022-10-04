const persona = { 
    nombre: 'brandon',
    edad: 29,
    hobbies: ['leer', 'juegos', 'codigo'],
    greet: function() {
        console.log('Hola como estas');
    },
    nota: {
        Desarolloweb: 5.0,
        Deportes: 5.0
    }
};

console.log(typeof persona); 


console.log(persona.nombre);
console.log(persona.hobbies[0]);
persona.greet();
console.log(persona.nota.Desarolloweb);