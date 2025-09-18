const eventosContent = {
  upcomingEvents: {
    title: "Próximos Eventos",
    events: [
      {
        id: 1,
        title: "Workshop de Desenvolvimento Web para Iniciantes",
        date: "20 de Outubro de 2025",
        time: "14:00 - 17:00",
        location: "Online (Google Meet)",
        description: "Aprenda os fundamentos do HTML, CSS e JavaScript para criar suas primeiras páginas web. Ideal para quem está começando na área de desenvolvimento.",
        image: "/public/images/eventos/evento_image_1.png"
      },
      {
        id: 2,
        title: "Palestra: Inteligência Artificial e o Futuro do Trabalho",
        date: "05 de Novembro de 2025",
        time: "19:00 - 21:00",
        location: "Auditório Principal - Instituto TechFuturo",
        description: "Descubra como a Inteligência Artificial está moldando o mercado de trabalho e quais habilidades serão essenciais para o futuro. Com a participação de especialistas da área.",
        image: "/public/images/eventos/evento_image_2.png" // Adicionar imagem correspondente
      },
      {
        id: 3,
        title: "Hackathon TechFuturo 2025",
        date: "29 e 30 de Novembro de 2025",
        time: "09:00 - 18:00 (ambos os dias)",
        location: "Sede do Instituto TechFuturo",
        description: "Maratona de programação para desenvolver soluções inovadoras para desafios sociais. Equipes multidisciplinares são bem-vindas. Grandes prêmios para os vencedores!",
        image: "/public/images/eventos/evento_image_3.png" // Adicionar imagem correspondente
      }
    ]
  },
  pastEvents: {
    title: "Eventos Anteriores",
    events: [
      {
        id: 101,
        title: "Bootcamp de Lógica de Programação",
        date: "Julho de 2025",
        description: "Intenso bootcamp de uma semana focado em lógica de programação e algoritmos, preparando os alunos para desafios mais complexos.",
        image: "/public/images/eventos/evento_image_passado_1.png" // Adicionar imagem correspondente
      },
      {
        id: 102,
        title: "Feira de Profissões em TI",
        date: "Maio de 2025",
        description: "Evento que conectou nossos alunos com empresas de tecnologia, proporcionando oportunidades de estágio e networking.",
        image: "/public/images/eventos/evento_image_passado_2.png" // Adicionar imagem correspondente
      }
    ]
  }
};

export default eventosContent;

