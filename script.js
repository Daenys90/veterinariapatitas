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

//subi esta funcion para que se vea correctamente
  
function mostrarPacientes(){
    const lista = document.getElementById("lista-pacientes");
lista.innerHTML = usuarioAutenticado.listaMascotas.map(mascota =>
    `<li class="list-group-item">
    Paciente: ${mascota.nombre} - Tutor: ${mascota.tutor} - Evolución médica: ${mascota.evolucionMedica}</li>
    `).join('');
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
const veterinario01 = new Veterinario("josesolis", "perro12345" );

const paciente01 = new Mascota("Pelusa", "Juan Soto", "Control anual");

veterinario01.agregarMascota(paciente01);

console.log(veterinario01.listaMascotas);

// crear dos instancias, ya hice una asi que dejaré otra
const veterinario02 = new Veterinario("anasocias", "lunita1995");

const listaVeterinarios = [veterinario01, veterinario02];

//lave vacía, aquí no entendí mucho esto, tuve que buscar qué me estaban pidiendo
let usuarioAutenticado = null;

//iniciar sesion
function iniciarSesion(evento){
evento.preventDefault(); //esto lo tuve que agregar porque no se cargaba bien la segunda pantalla (la de registro de mascotas)
const usuarioIngresado = document.getElementById("inputUsuario").value;
const contrasenaIngresada = document.getElementById("inputPassword").value;

const usuarioEncontrado = listaVeterinarios.find(vet => vet.nombreUsuario === usuarioIngresado && vet.contrasena === contrasenaIngresada
);

if (usuarioEncontrado){
    usuarioAutenticado = usuarioEncontrado;
    alert("Bienvenido, " + usuarioAutenticado.nombreUsuario);

//aparece la nueva pantalla de registro de pacientes
    document.getElementById("seccion-formulario").style.display = "none";
    document.getElementById("seccion-registro").style.display = "block";

//mostrar pacientes del doctor
mostrarPacientes();

//si no coinciden
} else {
    alert("Usuaurio no encontrado o contraseña incorrecta");
}
}

// conectar form 
const formulario = document.querySelector("form");
formulario.addEventListener("submit", iniciarSesion);

//registro mascota

const formularioMascota = document.getElementById("formulario-mascotas");

formularioMascota.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombreMascota").value;
    const tutor = document.getElementById("tutorMascota").value;
    const evolucion = document.getElementById("evolucionMascota").value;

    const nuevaMascota = new Mascota(nombre, tutor, evolucion);

    usuarioAutenticado.agregarMascota(nuevaMascota);
    alert("Nueva mascota agregada con éxito");
    mostrarPacientes();
});
