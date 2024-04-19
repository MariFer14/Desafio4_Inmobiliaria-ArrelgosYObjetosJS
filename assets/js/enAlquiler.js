const propiedadesEnAlquiler = [
    {
      id: 1,
      src: "./assets/img/deptoLagunaCity.jpg",
      titulo: "Apartamento Laguna City",
      descripcion:
        "Este apartamento proporciona todas las comodidades necesarias, además posee una excelente ubicación para el disfrute y descanso de la familia",
      ubicacion:
        "<i class='fa-solid fa-location-dot'></i> 436 Main Street, Anytown Boulevard, CA 75896",
      habitaciones:
        "<i class='fa-solid fa-bed'></i> 2 Habitaciones | <i class='fa-solid fa-bath'></i> 2 Baños",
      precio: 3500,
      smoke: false,
      pets: false,
    },
  
    {
      id: 2,
      src: "./assets/img/deptoConPiscina.jpg",
      titulo: "Apartamento en Zona Privada con Piscina",
      descripcion:
        "Este condominio se encuentra en una zona privada, por lo que ofrece seguridad garantizada, además de una piscina para el disfrute de los inquilinos",
      ubicacion:
        "<i class='fa-solid fa-location-dot'></i> 765 Kennedy Avenue, Bourbon Town, CA 56421",
      habitaciones:
        "<i class='fa-solid fa-bed'></i> 3 Habitaciones | <i class='fa-solid fa-bath'></i> 3 Baños",
      precio: 6000,
      smoke: true,
      pets: true,
    },
  
    {
      id: 3,
      src: "./assets/img/deptoAmueblado.jpg",
      titulo: "Apartamento Amueblado",
      descripcion:
        "Este lujoso condominio te ofrece una gran estancia, ya que posee todas las comodidades necesarias para tu vida de soltero o en familia",
      ubicacion:
        "<i class='fa-solid fa-location-dot'></i> 787 Lombard Avenue, Skyview City, CA 91236",
      habitaciones:
        "<i class='fa-solid fa-bed'></i> 3 Habitaciones | <i class='fa-solid fa-bath'></i> 2 Baños",
      precio: 4750,
      smoke: false,
      pets: true,
    },
    {
      id: 4,
      src: "./assets/img/enAlquiler/casaConJardinPrivado.png",
      titulo: "Lujosa Casa con Jardín Privado",
      descripcion:
        "Esta lujosa casa posee un amplio terreno y múltiples comodidades, además de un hermoso jardín privado para el disfrute de los niños y los adultos",
      ubicacion:
        "<i class='fa-solid fa-location-dot'></i> 556 Pennsylvania Avenue, Michigan City, CA 45632",
      habitaciones:
        "<i class='fa-solid fa-bed'></i> 5 Habitaciones | <i class='fa-solid fa-bath'></i> 4 Baños",
      precio: 7700,
      smoke: true,
      pets: true,
    },
    {
      id: 5,
      src: "./assets/img/enAlquiler/casaDosPisosZonaPrivada.jpg",
      titulo: "Casa de 2 Pisos en Zona Privada",
      descripcion:
        "Esta amplia propiedad cuenta con dos pisos absolutamente amueblados. Aparte ofrece una gran seguridad ya que se encuentra en una zona privada de la ciudad",
      ubicacion:
        "<i class='fa-solid fa-location-dot'></i> 798 Park Avenue, Manhattan Town, CA 47158",
      habitaciones:
        "<i class='fa-solid fa-bed'></i> 4 Habitaciones | <i class='fa-solid fa-bath'></i> 4 Baños",
      precio: 10500,
      smoke: true,
      pets: false,
    },
    {
      id: 6,
      src: "./assets/img/enAlquiler/casaDosPisosZonaPrivada2.jpg",
      titulo: "Casa de 2 Pisos en el Centro de la Ciudad",
      descripcion:
        "Esta hermosa casa cuenta con dos pisos amplios y cómodos. Cuenta con una excelente seguridad, pues está ubicada en una zona privada y céntrica de la ciudad",
      ubicacion:
        "<i class='fa-solid fa-location-dot'></i> 456 Washington Street, Manhattan Bridge, CA 54329",
      habitaciones:
        "<i class='fa-solid fa-bed'></i> 5 Habitaciones | <i class='fa-solid fa-bath'></i> 3 Baños",
      precio: 9850,
      smoke: false,
      pets: true,
    },
  ];
  
  let fumarDepto = (permitido) => {
    if (permitido) {
      return "<span style='color: green;'><i class='fa-solid fa-smoking'></i> Está permitido fumar</span>";
    } else {
      return "<span style='color: red;'><i class='fa-solid fa-ban-smoking'></i> No está permitido fumar</span>";
    }
  };
  
  let mascotasDepto = (permitido) => {
    if (permitido) {
      return "<span style='color: green;'><i class='fa-solid fa-paw'></i> Están permitidas las mascotas</span>";
    } else {
      return "<span style='color: red;'><i class='fa-solid fa-ban'></i>No están permitidas las mascotas</span>";
    }
  };
  
  let htmlAlquiler = "";
  
  const elementoEnAlquiler = document.querySelector("#propiedadesEnAlquiler");
  
  for (const alquiler of propiedadesEnAlquiler) {
    htmlAlquiler += `<article id="${alquiler.id}">
      <img src="${alquiler.src}" alt="Imagen de la propiedad">
      <h4>${alquiler.titulo}</h4>
      <p>${alquiler.descripcion}</p>
      <p>${alquiler.ubicacion}</p>
      <p>${alquiler.habitaciones}</p>
      <p>$${alquiler.precio}</p>
      <p>${fumarDepto(alquiler.smoke)}</p>
      <p>${mascotasDepto(alquiler.pets)}</p>
  </article>
  `;
  }
  
  elementoEnAlquiler.innerHTML = htmlAlquiler;