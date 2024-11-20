const fs = require("fs")

// Aca verifico si existe documento, en caso que no, crea un json vacio
const existeDoc = () => {
    if (!fs.existsSync('citas.json')) {
        fs.writeFileSync('citas.json', JSON.stringify([], null, 2))
    }
}

const registrar = (nombre, edad, tipo, color, enfermedad) => {

    existeDoc()

    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada con éxito:', nuevaCita);
}
const leer = () => {

    existeDoc()

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
        console.log(`${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${cita.tipo}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
    });
}

module.exports = {
    registrar, leer
}
