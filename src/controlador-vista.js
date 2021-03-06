import { ingresar } from './View/acceso.js';
import { registrar } from './View/registro.js';
import { publicar } from './View/publicaciones.js';
import { perfil } from './View/perfil.js';


const cambioVista = (hash) => {
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '';
  switch (hash) {
    case '':
      contenedor.appendChild(ingresar());
      break;
    case '#/':
      contenedor.appendChild(ingresar());
      break;
    case '#/registro':
      contenedor.appendChild(registrar());
      break;
    case '#/muro':
      contenedor.appendChild(publicar());
      break;
    case '#/perfil':
      contenedor.appendChild(perfil());
      break;
    case '#/cerrarSesion':
      contenedor.appendChild(ingresar());
      break;
    default:
  }
};

export const cambioRuta = ((hash) => {
  if (hash === '#/') {
    return cambioVista(hash);
  } if (hash === '#/registro') {
    return cambioVista(hash);
  }
  if (hash === '#/muro') {
    return cambioVista(hash);
  }
  if (hash === '#/perfil') {
    return cambioVista(hash);
  }
  if (hash === '#/cerrarSesion') {
    return cambioVista(hash);
  }
  return cambioVista(hash);
});
