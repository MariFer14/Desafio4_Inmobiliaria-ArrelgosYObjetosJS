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
];

let fumar = (permitido) => {
  if (permitido) {
    return "<span style='color: green;'><i class='fa-solid fa-smoking'></i> Está permitido fumar</span>";
  } else {
    return "<span style='color: red;'><i class='fa-solid fa-ban-smoking'></i> No está permitido fumar</span>";
  }
};

let mascotas = (permitido) => {
  if (permitido) {
    return "<span style='color: green;'><i class='fa-solid fa-paw'></i> Están permitidas las mascotas</span>";
  } else {
    return "<span style='color: red;'><i class='fa-solid fa-ban'></i>No están permitidas las mascotas</span>";
  }
};

let html = "";

const elemento = document.querySelector("#pEnVenta");

for (const iterator of propiedadesEnVenta) {
  html += `<article id="${iterator.id}">
    <img src="${iterator.src}" alt="Imagen de la propiedad">
    <h4>${iterator.titulo}</h4>
    <p>${iterator.descripcion}</p>
    <p>${iterator.ubicacion}</p>
    <p>${iterator.habitaciones}</p>
    <p>$${iterator.precio}</p>
    <p>${fumar(iterator.smoke)}</p>
    <p>${mascotas(iterator.pets)}</p>
</article>
`;
}

elemento.innerHTML = html;
