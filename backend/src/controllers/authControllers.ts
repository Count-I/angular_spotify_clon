import { Request, Response } from 'express';

export const contacts = (req: Request, res: Response) => {
  try {

    const { nombre, descripcion, telefono } = req.params;

    res.send(`el, ${nombre} y su descripcion : ${descripcion} tiene el telefono ${telefono}`);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
};

export const createContact = (req: Request, res: Response) => {
  try {

    const { id, nombre, descripcion, telefono, contrasenia} = req.body;

    res.json({

      mensaje:"mi id es "+id+"Hola me llamo "+nombre+"y  esta es mi descripcion "+descripcion+"este es mi telefono"+telefono+" y mi conraseña"+contrasenia
     });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
};

let contactsList = [
  { id: 1, nombre: 'John', descripcion: 'Amigo', telefono: '123456' , contrasenia:12},
  { id: 2, nombre: 'Alice', descripcion: 'Familia', telefono: '789012',contrasenia:123 },

];


export const updateContact = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { nombre, descripcion, telefono } = req.body;

    // Buscamos el contacto en la lista por su id
    const contactIndex = contactsList.findIndex((contact) => contact.id === id);

    // Si el contacto existe en la lista, lo actualizamos
    if (contactIndex !== -1) {
      const updatedContact = {
        id,
        nombre: nombre || contactsList[contactIndex].nombre,
        descripcion: descripcion || contactsList[contactIndex].descripcion,
        telefono: telefono || contactsList[contactIndex].telefono,
        contrasenia: telefono || contactsList[contactIndex].contrasenia,
      };

      contactsList[contactIndex] = updatedContact;

      return res.send(`Contacto actualizado: ${JSON.stringify(updatedContact)}`);
    }

    return res.status(404).send('Contacto no encontrado');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
};

export const deleteContact = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    // Filtramos los contactos para obtener todos aquellos que no coinciden con el id a eliminar
    const updatedContacts = contactsList.filter((contact) => contact.id !== id);

    // Verificamos si algún contacto fue eliminado
    if (updatedContacts.length < contactsList.length) {
      contactsList = updatedContacts;
      return res.send(`Contacto eliminado: ${id}`);
    }

    return res.status(404).send('Contacto no encontrado');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
};



