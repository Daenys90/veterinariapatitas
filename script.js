//clase mascota
class Mascota {
    constructor(nombre, tutor, evolucionMedica){
        this.nombre = nombre;
        this.tutor= tutor;
        this.evolucionMedica = evolucionMedica;
    }
 mostrarDatos() {
        console.log(`Paciente: ${this.nombre} | Tutor: ${this.tutor} | Evolución: ${this.evolucionMedica}`);
    }
  }

//clase vet
class Veterinario{
constructor(nombreUsuario, contrasena){
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    this.listaMascotas = [];
}

agregarMascota(mascota){
    this.listaMascotas.push(mascota);
    console.log(`Mascota ${mascota.nombre} agregada al registro de ${this.nombreUsuario}`);
    }
}

//probando
const veterinario01 = new Veterinario("josesolis", "perro1235" );

const paciente01 = new Mascota("Pelusa", "Juan Soto", "Control anual");

veterinario01.agregarMascota(paciente01);

console.log(veterinario01.listaMascotas);