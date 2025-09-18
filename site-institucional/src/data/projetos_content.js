const projetosContent = {
  activeProjects: {
    title: "Projetos Ativos",
    projects: [
      {
        id: 1,
        title: "Code for Change",
        description: "Um programa de mentoria e desenvolvimento de software onde jovens criam soluções tecnológicas para problemas sociais reais. Atualmente, estamos desenvolvendo um aplicativo para auxiliar na gestão de resíduos em comunidades.",
        image: "/public/images/projetos/projeto_image_1.png",
        status: "Em Andamento",
        tags: ["Desenvolvimento", "Impacto Social", "Meio Ambiente"]
      },
      {
        id: 2,
        title: "TechGirls",
        description: "Iniciativa focada em incentivar a participação feminina na área de tecnologia, oferecendo cursos, workshops e mentorias exclusivas para garotas. Nosso objetivo é reduzir a lacuna de gênero no setor de TI.",
        image: "/public/images/projetos/projeto_image_2.png", // Adicionar imagem correspondente
        status: "Em Andamento",
        tags: ["Inclusão", "Educação", "Mulheres na Tecnologia"]
      }
    ]
  },
  completedProjects: {
    title: "Projetos Concluídos",
    projects: [
      {
        id: 101,
        title: "Conecta Comunidade",
        description: "Plataforma web que conecta voluntários a projetos sociais em suas comunidades, facilitando a organização e a participação em ações de impacto. Mais de 500 voluntários cadastrados e 100 projetos concluídos.",
        image: "/public/images/projetos/projeto_image_passado_1.png", // Adicionar imagem correspondente
        status: "Concluído",
        tags: ["Voluntariado", "Conectividade", "Comunidade"]
      },
      {
        id: 102,
        title: "Alfabetização Digital para Idosos",
        description: "Programa que ofereceu aulas básicas de informática e uso de smartphones para idosos, promovendo a inclusão digital e melhorando sua qualidade de vida. Mais de 200 idosos alfabetizados digitalmente.",
        image: "/home/ubuntu/public/images/projetos/projeto_image_passado_2.png", // Adicionar imagem correspondente
        status: "Concluído",
        tags: ["Inclusão Digital", "Terceira Idade", "Educação"]
      }
    ]
  }
};

export default projetosContent;

