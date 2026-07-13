import { Category } from '@/types/content';

/**
 * Categorias gerais de atividade. Publique apenas atividades confirmadas
 * pela equipe; enquanto isso, esta lista descreve tipos de atividade em
 * termos institucionais prudentes, sem cronograma ou estatística.
 */
export const activityCategories: Category[] = [
  { icon: 'people', title: 'Convivência em Grupo', text: 'Espaços de partilha, escuta ativa e fortalecimento de vínculos.' },
  { icon: 'book', title: 'Educação e Capacitação', text: 'Oficinas, cursos e formações voltados ao desenvolvimento pessoal.' },
  { icon: 'tools', title: 'Trabalho Terapêutico', text: 'Atividades práticas que promovem responsabilidade e autoestima.' },
  { icon: 'heart', title: 'Saúde e Bem-estar', text: 'Cuidados com o corpo e a mente para promover equilíbrio.' },
  { icon: 'music', title: 'Música e Convivência', text: 'Momentos de arte e expressão que fortalecem os vínculos.' },
  { icon: 'sun', title: 'Momentos de Reflexão', text: 'Espaços de silêncio, escuta e reflexão pessoal.' },
  { icon: 'tree', title: 'Contato com a Natureza', text: 'Atividades ao ar livre que favorecem tranquilidade e equilíbrio.' },
  { icon: 'sprout', title: 'Desenvolvimento Pessoal', text: 'Ações voltadas ao autoconhecimento e à construção de novos hábitos.' },
];
