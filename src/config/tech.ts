/** Nombre legible de cada clave de tecnología usada en site.ts. */
export const TECH_LABELS: Record<string, string> = {
  Html: 'HTML',
  Css: 'CSS',
  Js: 'JavaScript',
  Ts: 'TypeScript',
  Java: 'Java',
  Csharp: 'C#',
  Dart: 'Dart',
  Angular: 'Angular',
  SpringBoot: 'Spring Boot',
  Flutter: 'Flutter',
  Node: 'Node.js',
  Express: 'Express',
  Astro: 'Astro',
  Tailwind: 'Tailwind CSS',
  Bootstrap: 'Bootstrap',
  Postgresql: 'PostgreSQL',
  Mysql: 'MySQL',
  Mongo: 'MongoDB',
  Git: 'Git',
  Docker: 'Docker',
  Jwt: 'JWT',
  Figma: 'Figma',
};

export const techLabel = (key: string) => TECH_LABELS[key] ?? key;
