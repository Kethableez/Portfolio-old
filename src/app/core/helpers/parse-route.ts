export function parseRoute(rawValue: string): string {
  const value = rawValue
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  switch (value) {
    case 'start':
    case 'landing':
      return 'landing';

    case 'o_mnie':
    case 'about':
      return 'about';

    case 'umiejetnosci':
    case 'skills':
      return 'skills';

    case 'edukacja':
    case 'education':
      return 'education';

    case 'doswiadczenie':
    case 'experience':
      return 'experience';

    case 'projekty':
    case 'projects':
      return 'projects';

    case 'kontakt':
    case 'contact':
      return 'contact';

    case '..':
      return '';

    default:
      return 'DIR_NOT_FOUND';
  }
}
