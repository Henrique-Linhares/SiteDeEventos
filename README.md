 TechCommunity - Plataforma de Gestão e Publicação de Eventos
Visão Geral do Projeto
Este projeto consiste no desenvolvimento de uma plataforma web completa para a TechCommunity, uma organização local de tecnologia, com o objetivo de centralizar a divulgação e gestão de seus eventos. A plataforma permite que membros visualizem os próximos meetups e workshops, se inscrevam neles, e, crucialmente, que os próprios organizadores cadastrem novos eventos de forma autônoma e rápida.

A necessidade de uma solução como esta surgiu do desafio da TechCommunity em escalar suas atividades, visto que o método anterior de divulgação por WhatsApp estava se tornando insustentável. A autonomia na gestão de conteúdo era a chave para atender essa demanda.

💡 Desafio Proposto
O desafio era desenvolver uma plataforma utilizando HTML, CSS e JavaScript, focando na divulgação e inscrição de eventos. Um ponto fundamental foi a implementação de um formulário para cadastro de novos eventos, com a persistência dos dados localmente no navegador, simulando um "banco de dados" leve para fins de demonstração.

✨ Funcionalidades Principais
A plataforma TechCommunity oferece as seguintes funcionalidades:

Página Inicial (index.html): Apresenta a comunidade e destaca os próximos eventos mais relevantes.
Lista de Eventos (eventos.html): Exibe todos os eventos disponíveis, permitindo aos usuários explorar o calendário completo.
Detalhes do Evento (detalhes-evento.html): Página dedicada que exibe informações detalhadas sobre um evento específico, incluindo um formulário de inscrição.
Cadastro de Novo Evento (cadastrar-evento.html): Formulário exclusivo para organizadores adicionarem novos eventos à plataforma. Os dados são persistidos no localStorage.
Sobre Nós (sobre.html): Uma breve descrição da TechCommunity, sua missão e história.
Contato (contato.html): Informações de contato para a comunidade.
Gestão de Eventos com localStorage:
Carrega eventos salvos no localStorage ou, se não houver, eventos iniciais predefinidos.
Permite a adição de novos eventos através do formulário de cadastro, que são persistidos no localStorage para manter as informações entre as sessões do navegador.
Carregamento Dinâmico de Eventos: Exibição dinâmica dos eventos (vindos do localStorage) nas páginas inicial e de listagem.
Formulário de Cadastro de Eventos:
Coleta e valida dados como título, data, hora, local, descrição, categoria e URL da imagem.
Geração de um ID único para cada novo evento.
Mensagens de sucesso ou erro após o cadastro.
Formulário de Inscrição em Eventos:
Valida campos obrigatórios (nome, e-mail) e o formato do e-mail.
Exibe mensagem de confirmação de inscrição.
Botão "Voltar ao Topo": Para rolagem suave da página.
Navegação por Parâmetros de URL: Utiliza parâmetros de URL (ex: detalhes-evento.html?id=123) para carregar detalhes de eventos específicos.
