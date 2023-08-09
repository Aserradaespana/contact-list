// Ajusta las funciones de crear y eliminarun contacto para que puedan almacenar la siguiente informacion como objetos:
// id, nombres, apellidos, telefono, ubicacion (Ciudad , direccion)

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
//console.log(contactList);

//Funcion para agregar contactos

// let aggcontact = ( id, nombre, apellido, telefono, ubicacion) => {
//     console.log('Agregando con exito');
//     contactList.push (id, nombre, apellido, telefono, ubicacion)

// };

// aggcontact (
// 'Capitan america',
// 'Steve',
// 'Grant Rogers',
// 'No lo sabe utilizar',
// {
//     ciudad: 'la tierra',
//     direccion: 'Compañia los vengadores'
// }
// );
// console.log(contactList);

//Eliminar contacto por id

let deleteContact = (id) => {
    let index = contactList.findIndex ((contact)=> contact.id === id);
    if (index !== -1){
        contactList.splice(index,1);
    }else {
            console.log('el id no es valido');
        };
        };
    
deleteContact();
console.log(contactList);