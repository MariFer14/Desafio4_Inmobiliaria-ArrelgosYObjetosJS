const propiedadesEnVenta = [
  {
    id: 1,
    src: "./assets/img/deptoConPlayaPrivada.jpg",
    titulo: "Apartamento con Playa privada",
    descripcion:
      "Este apartamento se encuentra ubicado en una zona cuyas playas son completamente privadas, para el uso exclusivo de los propietarios",
    ubicacion:
      "<i class='fa-solid fa-location-dot'></i> 123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones:
      "<i class='fa-solid fa-bed'></i> 5 Habitaciones | <i class='fa-solid fa-bath'></i> 4 Baños",
    precio: 10000,
    smoke: false,
    pets: true,
  },

  {
    id: 2,
    src: "./assets/img/deptoCentroDeLaCiudad.jpg",
    titulo: "Apartamento en el Centro de la Ciudad",
    descripcion:
      "Excelente propiedad, ubicada en el centro de la ciudad, con acceso a diversos lugares, gracias a su ubicación",
    ubicacion:
      "<i class='fa-solid fa-location-dot'></i> 789 Mountain City, Park Avenue, CA 23456",
    habitaciones:
      "<i class='fa-solid fa-bed'></i> 3 Habitaciones | <i class='fa-solid fa-bath'></i> 2 Baños",
    precio: 8500,
    smoke: false,
    pets: false,
  },

  {
    id: 3,
    src: "./assets/img/deptoConVistaAlMar.jpg",
    titulo: "Penthouse con vista al Mar",
    descripcion:
      "Este penthouse de lujo ofrece además de una excelente ubicación y comodidad, una vista al Mar increíble, ideal para disfrutar con la familia",
    ubicacion:
      "<i class='fa-solid fa-location-dot'></i> 567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones:
      "<i class='fa-solid fa-bed'></i> 4 Habitaciones | <i class='fa-solid fa-bath'></i> 3 Baños",
    precio: 15000,
    smoke: true,
    pets: true,
  },

  {
    id: 4,
    src: "./assets/img/enVenta/condominioConEtacionamientoPrivado.jpg",
    titulo: "Condominio con Estacionamiento Privado",
    descripcion:
      "Lujoso apartamento con multiples comodidades, además de poseer su propio estacionamiento privado, para mayor seguridad",
    ubicacion:
      "<i class='fa-solid fa-location-dot'></i> 623 Collins Avenue, Venice City, CA 78964",
    habitaciones:
      "<i class='fa-solid fa-bed'></i> 3 Habitaciones | <i class='fa-solid fa-bath'></i> 2 Baños",
    precio: 8500,
    smoke: false,
    pets: false,
  },

  {
    id: 5,
    src: "./assets/img/enVenta/condominioConPiscinaGym.jpg",
    titulo: "Lujoso Apatamento con Pisicina y Gym",
    descripcion:
      "Este cómodo apartamento no solo cuenta con su propia piscina, sino que también un Gym de alta gama con todas las máquinas necesarias para tu entrenamiento",
    ubicacion:
      "<i class='fa-solid fa-location-dot'></i> 778 Ocean Avenue, Skyview City, CA 23451",
    habitaciones:
      "<i class='fa-solid fa-bed'></i> 5 Habitaciones | <i class='fa-solid fa-bath'></i> 5 Baños",
    precio: 22000,
    smoke: false,
    pets: true,
  },

  {
    id: 6,
    src: "./assets/img/enVenta/lujosoCondiminioPrivado.jpg",
    titulo: "Lujoso Condominio Privado",
    descripcion:
      "Este condominio es extremadamente seguro, pues aparte de sus grandes comodidades, posee un enrrejamiento alrededor de toda la zona.",
    ubicacion:
      "<i class='fa-solid fa-location-dot'></i> 235 Venice Boulevard, Ángeles City, CA 77554",
    habitaciones:
      "<i class='fa-solid fa-bed'></i> 3 Habitaciones | <i class='fa-solid fa-bath'></i> 2 Baños",
    precio: 14550,
    smoke: true,
    pets: false,
  },
];

let fumarEndepto = (permitido) => {
    if (permitido) {
      return "<span style='color: green;'><i class='fa-solid fa-smoking'></i> Está permitido fumar</span>";
    } else {
      return "<span style='color: red;'><i class='fa-solid fa-ban-smoking'></i> No está permitido fumar</span>";
    }
  };
  
  let mascotasEnDepto = (permitido) => {
    if (permitido) {
      return "<span style='color: green;'><i class='fa-solid fa-paw'></i> Están permitidas las mascotas</span>";
    } else {
      return "<span style='color: red;'><i class='fa-solid fa-ban'></i>No están permitidas las mascotas</span>";
    }
  };
  
let htmlVenta = "";
  
const elementoenVenta = document.querySelector("#propiedadesEnVenta");

for (const depto of propiedadesEnVenta) {
  htmlVenta += `<article id="${depto.id}">
    <img src="${depto.src}" alt="Imagen de la propiedad">
    <h4>${depto.titulo}</h4>
    <p>${depto.descripcion}</p>
    <p>${depto.ubicacion}</p>
    <p>${depto.habitaciones}</p>
    <p>$${depto.precio}</p>
    <p>${fumarEndepto(depto.smoke)}</p>
    <p>${mascotasEnDepto(depto.pets)}</p>
</article>
`;
}

elementoenVenta.innerHTML = htmlVenta;