export default [
  {
    question: `Em Sistemas Distribuídos, o conceito de transparência pode ser aplicado em vários aspectos. O tipo de transparência que esconde do usuário as diferenças da representação de dados e no modo como um recurso é acessado é chamado de:`,
    answers: [
      { option: "transparência de acesso.", correct: true },
      { option: "transparência de migração.", correct: false },
      { option: "transparência de relocação.", correct: false },
    ],
  },
  {
    question: `Em Sistemas Distribuídos, o conceito de transparência pode ser aplicado em vários aspectos. A Transparência de Replicação pode ser definida como:`,
    answers: [
      { option: "a transparência em que os usuários não podem dizer qual é a localização física de um recurso no sistema.", correct: false },
      { option: "a ocultação do fato de que existem duas ou mais cópias de um recurso.", correct: true },
      { option: "a transparência de que um recurso está sendo compartilhado por vários usuários concorrentes.", correct: false },
    ],
  },
  {
    question: "Considerando o contexto de sistemas distribuídos, uma implementação na qual o servidor manipula as requisições e envia uma resposta ao remetente quando necessário é chamada de",
    answers: [
      { option: "servidor concorrente.", correct: false },
      { option: "servidor handoff.", correct: false },
      { option: "servidor iterativo.", correct: true },
    ],
  },
  {
    question: "Para os sistemas distribuídos, existem quatro importantes arquiteturas. Assinale a alternativa que apresenta corretamente três delas.",
    answers: [
      { option: "Centrada em recursos, baseada em eventos, baseada em objetos.", correct: true },
      { option: "Baseada em sistemas, centrada em camadas, baseada em objetos.", correct: false },
      { option: "Centrada no problema, arquitetura em camadas, baseada em eventos.", correct: false },
      
    ],
  },
  {
    question: `Em relação aos Sistemas Distribuídos, pode-se afirmar:
    I - O middleware visa melhorar a visão de sistema único que um sistema distribuído deve ter. II - O middleware tem como objetivo esconder em como os computadores de um sistema distribuído realmente participam do sistema como um todo. III - Um Sistema Distribuído sempre tem que informar ao seus usuários quando partes estão sendo substituídos ou consertados, e novas peças são adicionadas.`,
    answers: [
      { option: "somente III.", correct: false },
      { option: "somente II.", correct: false },
      { option: "somente I e II.", correct: true },
    ],
  },
  {
    question: `Com relação a tecnologias de sistemas distribuídos e web services, julgue o item. O DCOM (Distributed Component Object Model) é uma plataforma para sistemas distribuídos desenvolvida pela OMG (Object Management Group) e baseada no CORBA.`,
    answers: [
      { option: "Errado.", correct: false },
      { option: "Não totalmente certo.", correct: false },
      { option: "Certo.", correct: true },
    ],
  },
];
