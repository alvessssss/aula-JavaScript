function getAdmins(map) {
    let admins = [];            
     for([key, value] of Map){
         if (value == 'Admin'){
             getAdmins.push(key)
         }
     }
     return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));