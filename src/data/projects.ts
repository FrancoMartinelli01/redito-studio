export type Categoria = 'ecommerce' | 'landing' | 'reservas'

export type Proyecto = {
  slug: string
  nombre: string
  tipo: string
  categoria: Categoria
  url: string
  dominio: string
  resumen: string
  chips: string[]
  desafio: string
  hicimos: { titulo: string; texto: string }[]
  stack: string[]
  capturas: { src: string; texto: string }[]
  /** Fondo oscuro teñido con el color de la marca y acento para textos y bordes. */
  color: { fondo: string; acento: string; tinta: string }
}

export const categorias: { id: Categoria | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'landing', label: 'Landing' },
  { id: 'reservas', label: 'Reservas' },
]

export const proyectos: Proyecto[] = [
  {
    slug: 'importados-mc',
    nombre: 'Importados MC',
    tipo: 'E-commerce',
    categoria: 'ecommerce',
    url: 'https://importadosmc.com.ar',
    dominio: 'importadosmc.com.ar',
    resumen:
      'Tienda online para una marca que vendía todo por Instagram: productos originales traídos de Estados Unidos, con pago online y envío a todo el país.',
    chips: ['Mercado Pago', 'Búsqueda predictiva', 'Avisos por WhatsApp'],
    desafio:
      'Importados MC tiene 80 mil seguidores en Instagram y vendía por mensaje directo. Cada venta era una charla entera: precio, talle, envío, transferencia. Hacía falta una tienda donde el cliente pudiera elegir y pagar solo, sin perder el trato cercano que tenían por WhatsApp.',
    hicimos: [
      { titulo: 'Pago con Mercado Pago', texto: 'El cliente paga con tarjeta, dinero en cuenta o efectivo, y la orden queda registrada sin pasar comprobantes.' },
      { titulo: 'Aviso por WhatsApp en cada venta', texto: 'Cuando entra un pago llega el detalle del pedido al celular, listo para preparar el envío.' },
      { titulo: 'Catálogo que se recorre fácil', texto: 'Filtros por categoría, marca y precio, y una búsqueda que sugiere productos mientras escribís.' },
      { titulo: 'Ficha de producto completa', texto: 'Galería con zoom, guía de talles, costo de envío y una barra de compra fija en el celular.' },
      { titulo: 'Animaciones con identidad', texto: 'El recorrido de Miami a Ezeiza que se dibuja al scrollear y vitrinas de marcas con los productos recortados.' },
      { titulo: 'Reels automáticos', texto: 'Un generador que arma videos verticales de cada producto, listos para publicar en Instagram.' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Mercado Pago', 'Remotion', 'Vercel'],
    capturas: [
      { src: '/projects/importados-mc/catalogo.webp', texto: 'Catálogo con filtros por marca y precio' },
      { src: '/projects/importados-mc/producto.webp', texto: 'Ficha con galería, talles y envío' },
    ],
    color: { fondo: '#170A2E', acento: '#A88BFF', tinta: '#0E061D' },
  },
  {
    slug: 'digiwines',
    nombre: 'DigiWines',
    tipo: 'E-commerce',
    categoria: 'ecommerce',
    url: 'https://digiwines.com.ar',
    dominio: 'digiwines.com.ar',
    resumen:
      'Vinoteca online con más de 240 productos y un sommelier virtual que te recomienda qué vino abrir según lo que vas a comer.',
    chips: ['Sommelier virtual', '+240 productos', 'Pedido por WhatsApp'],
    desafio:
      'Una vinoteca que quería vender online sin que la web pareciera una lista de precios. El catálogo es grande y mucha gente no sabe qué elegir, así que el sitio tenía que ayudar a decidir y transmitir la atención de una vinoteca de las buenas.',
    hicimos: [
      { titulo: 'Sommelier virtual', texto: 'Tres preguntas (qué vas a comer, para qué ocasión y qué te gusta) y una recomendación armada a partir del catálogo.' },
      { titulo: 'Catálogo por estilo', texto: 'Tintos, blancos, rosados, espumantes, regalería y cristalería, con etiquetas destacadas y ediciones limitadas.' },
      { titulo: 'Pedido directo por WhatsApp', texto: 'El carrito arma el pedido y lo manda al WhatsApp de la vinoteca, que prefiere cerrar cada venta en persona.' },
      { titulo: 'Experiencia premium', texto: 'Portada con video, animaciones suaves y el aviso de mayoría de edad que exige la venta de alcohol.' },
    ],
    stack: ['React', 'TypeScript', 'TanStack Start', 'Framer Motion', 'Cloudflare'],
    capturas: [
      { src: '/projects/digiwines/sommelier.webp', texto: 'Sommelier virtual en tres pasos' },
      { src: '/projects/digiwines/catalogo.webp', texto: 'Catálogo con filtros por estilo' },
    ],
    color: { fondo: '#1C0C10', acento: '#D4AE5A', tinta: '#12070A' },
  },
  {
    slug: 'fuego-nomade',
    nombre: 'Fuego Nómade',
    tipo: 'Landing page',
    categoria: 'landing',
    url: 'https://ember-landing-seven.vercel.app/',
    dominio: 'ember-landing-seven.vercel.app',
    resumen:
      'Landing para un catering de fuegos y asado a domicilio, con un cotizador que arma el pedido del evento y lo manda por WhatsApp.',
    chips: ['Animación al scrollear', 'Cotizador', 'WhatsApp'],
    desafio:
      'Un catering de fuegos que recién arranca, sin fotos de eventos ni trayectoria para mostrar. La página tenía que hacer sentir el fuego desde el primer scroll y convertir la visita en un pedido de presupuesto concreto.',
    hicimos: [
      { titulo: 'El fuego se enciende al scrollear', texto: 'La parrilla arranca en una ventana chica y se abre a pantalla completa mientras se prende, cuadro por cuadro.' },
      { titulo: 'Carta con historia', texto: 'Cada plato principal se abre a pantalla completa con lo que incluye y para qué tipo de evento conviene.' },
      { titulo: 'Armá tu evento', texto: 'Un cotizador en tres pasos (evento, menú y datos) que arma la comanda y la envía por WhatsApp.' },
      { titulo: 'Identidad propia', texto: 'Paleta bordó y brasa, tipografía con carácter y chispas que flotan sobre toda la página.' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Canvas', 'Vercel'],
    capturas: [
      { src: '/projects/fuego-nomade/armar.webp', texto: 'Cotizador "Armá tu evento"' },
      { src: '/projects/fuego-nomade/poster.webp', texto: 'Portada con el fuego en vivo' },
    ],
    color: { fondo: '#200A07', acento: '#F0844A', tinta: '#140504' },
  },
  {
    slug: 'madero',
    nombre: 'Madero Club de Pádel',
    tipo: 'Web + reservas',
    categoria: 'reservas',
    url: 'https://maderoclubpadel.com',
    dominio: 'maderoclubpadel.com',
    resumen:
      'Web y sistema de reservas para un club de pádel nuevo en Puerto Madero: elegís cancha, día y horario, y reservás con seña.',
    chips: ['Reservas online', 'Seña del 50%', 'Panel de administración'],
    desafio:
      'Un club que abre de cero necesita llenar la agenda desde el primer día. Reservar tenía que ser tan fácil como pedir un turno por WhatsApp, pero sin que nadie esté contestando mensajes, y con una seña para que no queden canchas vacías.',
    hicimos: [
      { titulo: 'Reserva en tres pasos', texto: 'Cancha, día y horario. El precio cambia solo entre la franja de día y la de noche.' },
      { titulo: 'Seña o pago completo', texto: 'El jugador elige señar el 50% y pagar el resto en el club, o abonar todo al reservar.' },
      { titulo: 'Panel para el club', texto: 'Un panel de administración para ver y gestionar las reservas de cada cancha.' },
      { titulo: 'Clases de pádel', texto: 'Una sección propia con niveles, grupos y contacto directo por WhatsApp con los profesores.' },
    ],
    stack: ['React', 'TypeScript', 'TanStack Start', 'Tailwind', 'Vercel'],
    capturas: [
      { src: '/projects/madero/reservas.webp', texto: 'Reserva: cancha, día y horario' },
      { src: '/projects/madero/clases.webp', texto: 'Sección de clases' },
    ],
    color: { fondo: '#0E1407', acento: '#D6F23F', tinta: '#080C03' },
  },
]
