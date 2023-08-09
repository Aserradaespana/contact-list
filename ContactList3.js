let contactList = [
    { id: 'Hulk',
    nombre: 'Bruce',
    apellido: 'Banner',
    tlf: 'Lo daño',
    ubicacion: {
        ciudad: 'La tierra',
        direccion: 'Donde caiga'
    }, 
},


    { id: 'Dios del trueno',
    nombre: 'Thor',
    apellido: 'Odinson',
    tlf: 'Le cayo un trueno',
    ubicacion: {
        ciudad: 'Asgard',
        direccion: 'Asgard'
    }, 
},


    { id: 'Dios de la mentira',
    nombre: 'Loki',
    apellido: 'Odinson',
    tlf: 'Desaparecio',
    ubicacion: {
        ciudad: 'Asgard',
        direccion: 'Asgard'
    }, 
}];

//Modificar un contacto de la lista.


contactList[2].nombre = ('Odin');
contactList[2].apellido = ('Loki');
console.log(contactList);
