/**
 * Fuente única de verdad del portfolio.
 * Editar el contenido aquí; los componentes sólo se ocupan de presentarlo.
 */

export const SITE = {
  url: 'https://robertorodesluchoro.github.io',
  title: 'Roberto Rodes — Desarrollador Full-Stack',
  description:
    'Desarrollador full-stack en Alicante. Construyo aplicaciones web con Java, Spring Boot y Angular, cuidando la arquitectura tanto como la experiencia de uso.',
  /* Sustituir por una imagen dedicada de 1200×630 cuando la tengas. */
  ogImage: '/img/fotoPerfil.png',
  lang: 'es',
} as const;

export const PROFILE = {
  name: 'Roberto Rodes Luchoro',
  firstName: 'Roberto',
  role: 'Desarrollador Full-Stack',
  location: 'Alicante, España',
  available: true,
  availableLabel: 'Disponible para trabajar',
  email: 'robertorodesluchorodev@gmail.com',
  /* Titular del hero, línea a línea: cada una se revela por separado. */
  headline: ['Construyo software', 'que resuelve', 'problemas reales'],
  intro:
    'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma. Trabajo el backend con Java y Spring Boot y el frontend con Angular, con especial interés en la arquitectura limpia y el código que otros pueden mantener.',
} as const;

export const SOCIALS = [
  { label: 'GitHub', handle: '@RobertoRodesLuchoro', href: 'https://github.com/RobertoRodesLuchoro', icon: 'github' },
  { label: 'LinkedIn', handle: 'roberto-rodes-luchoro', href: 'https://www.linkedin.com/in/roberto-rodes-luchoro/', icon: 'linkedin' },
  { label: 'Email', handle: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: 'mail' },
] as const;

export const NAV = [
  { label: 'Inicio', href: '#top' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre mí', href: '#sobre-mi' },
] as const;

/* Manifiesto del bloque a pantalla completa, una frase por línea. */
export const STATEMENT = [
  'Cualquiera puede hacer que una app funcione.',
  'Lo difícil es que siga siendo fácil de cambiar',
  'seis meses después. Ahí es donde pongo',
  'el foco: arquitectura, pruebas y detalle.',
] as const;

export const EXPERIENCE = [
  {
    from: '2025',
    to: 'Actualidad',
    role: 'Desarrollador Full-Stack',
    company: 'GFT Technologies',
    href: 'https://www.gft.com/',
    summary:
      'Desarrollo de aplicaciones bancarias en equipo ágil, del endpoint a la interfaz.',
    highlights: [
      'Servicios en Java 17/22 con Spring Boot sobre arquitectura hexagonal, siguiendo OpenAPI First.',
      'Pruebas unitarias y de integración con JUnit y Mockito bajo enfoque TDD.',
      'Interfaces en Angular con arquitectura por componentes y programación reactiva (RxJS).',
      'Integración continua y despliegues en múltiples entornos.',
    ],
    stack: ['Java', 'SpringBoot', 'Angular', 'Ts', 'Docker', 'Git'],
  },
] as const;

export const PROJECTS = [
  {
    name: 'ProXpert Garage',
    kind: 'ERP · Proyecto final de ciclo',
    year: '2025',
    description:
      'Sistema de gestión integral para talleres mecánicos: órdenes de trabajo, balance financiero y dashboard de métricas, con control de acceso por rol (mecánico, administrativo, jefe de taller y administrador).',
    image: '/img/proxpert-garage.png',
    repo: 'https://github.com/RobertoRodesLuchoro/ERP-ProXpert-Garage',
    demo: null,
    stack: ['Java', 'SpringBoot', 'Jwt', 'Dart', 'Flutter'],
  },
  {
    name: 'HolidaysApp',
    kind: 'ERP · Gestión de vacaciones',
    year: '2024',
    description:
      'Aplicación web para gestionar solicitudes de vacaciones de una plantilla: autenticación con JWT, roles y permisos con Spring Security, e importación y exportación masiva de datos en Excel.',
    image: '/img/holidays-app.png',
    repo: 'https://github.com/RobertoRodesLuchoro/ERP-HolidaysApp',
    demo: null,
    stack: ['Java', 'SpringBoot', 'Jwt', 'Angular', 'Ts'],
  },
] as const;

export const STACK = [
  {
    group: 'Lenguajes',
    items: ['Java', 'Ts', 'Js', 'Csharp', 'Dart', 'Html', 'Css'],
  },
  {
    group: 'Frameworks',
    items: ['SpringBoot', 'Angular', 'Flutter', 'Node', 'Express', 'Astro', 'Tailwind', 'Bootstrap'],
  },
  {
    group: 'Datos',
    items: ['Postgresql', 'Mysql', 'Mongo'],
  },
  {
    group: 'Herramientas',
    items: ['Git', 'Docker', 'Jwt', 'Figma'],
  },
] as const;

export const CERTIFICATIONS = [
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'Microsoft · freeCodeCamp',
    year: '2025',
    description:
      'Fundamentos de C#: tipos, estructuras de control, programación orientada a objetos, colecciones, depuración y manejo de errores.',
    href: 'https://www.linkedin.com/in/roberto-rodes-luchoro/overlay/1750614891600/single-media-viewer/?profileId=ACoAAE55Dc0B6v-GEUUGUd9K29cBB7qHRujvvVo',
  },
] as const;

export const EDUCATION = [
  {
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    place: 'I.E.S. Mare Nostrum, Alicante',
    year: '2023 — 2025',
  },
  {
    title: 'Automoción',
    place: 'I.E.S. La Torreta, Elche',
    year: '2021 — 2023',
  },
] as const;
