//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let contactList = ['Bruce Banner', 'Thor Odinson', 'Loki Odinson'];

//Crea una función para añadir un nuevo contacto a una lista

let aggcontact = (nuevoIntegrante) => {
    contactList.push (nuevoIntegrante);
};
//aggcontact ('Steve Grant Rogers');
//console.log(contactList);


//Crea una función para borrar un contacto existente de la lista

let deleteContact = (fueraIntegrante) => {
    let index = contactList.indexOf(fueraIntegrante);
    if (index !== -1){
        contactList.splice(index,1);
        
   };
};
//deleteContact('Thor Odinson');
//console.log(contactList);

//Crea una función para imprimir en consola los contactos presentes en la lista

let printList = () => {
    contactList.forEach((contactList) =>{
        console.log(contactList);
        console.log('_____________');
    })
    }
    
//printList();