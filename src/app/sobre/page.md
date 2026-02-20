# Sobre   
Site pessoal iniciado em Maio de 2024   
O projeto abrange várias páginas, incluindo:   
- Uma homepage baseada no [T3 Stack](https://create.t3.gg/), mantida no repositório [homepage](https://github.com/digo-eu/homepage);   
- Páginas sobre tópicos diversos, incluindo meus projetos e interesses especiais;   
- Um Geoserver, disponível em [digo-eu.com/geoserver/](https://digo-eu.com/geoserver/) e habilitado para servir mapas em WMS;   
- Base de dados PostgreSQL com a extensão PostGIS, para uso com o Geoserver;   
- Um cliente PgAdmin para manutenção do PostgreSQL, exposto apenas na rede local;   
- Uma página criada com Go e HTMX para teste em [digo-eu.com/air/](https://digo-eu.com/air/).   
- Uma página de boas vindas para meu casamento realizado em 20/11/2024, disponível em [digo-eu.com/casamento/](https://digo-eu.com/casamento/). Mantenho ela em pé porque gosto de entrar e olhar para ela de vez em quando :)   
   
### Infraestrutura   
- Hospedado em um VPS Linode, com DB em servidor doméstico. Ver [Servidores](servidores).
- Todo o código é containerizado com docker e orquestrado com docker compose.
- Tenho planos de aproveitar o hardware de outros notebooks velhos disponíveis, para criar um cluster de servidores com balanceamento de carga.
- Considero também permitir ao balanceamento direcionar pedidos para um servidor da AWS apenas em caso de saturação da capacidade. Assim os custos com hospedagem seriam mantidos no mínimo nível possível.
   
Me diverti bastante aprendendo os fundamentos de arquitetura e deploy de um backend, mas decidi que deveria dar uma cara bonita para meus projetos com um frontend moderno também. Sugestões são bem vindas!
### Meus planos para o futuro:   
- Melhorias no visual e conteúdo das páginas no [homepage](https://github.com/digo-eu/homepage)   
- Showcase de modelos de rede neural   
- Servir jogos exportados pelo Godot   
   
### Obstáculos   
Me distraí com a implementação de um painel lateral no site [digo-eu.com](A%20Grande%20S%C3%ADntese%5Cpages%5Cdigo-eu.com).   
- Concluí e estou satisfeito com o estado atual, embora continue fazendo ajustes menores.   
- Tomou um tempo considerável para uma parte pequena da funcionalidade desejada, ainda por cima de um detalhe não planejado. Embora eu acredite que essa experiência aprofundou meu conhecimento das ferramentas e vá melhorar significativamente o visual e a experiência do site, devo tomar isso como advertência sobre os perigos de iniciar atividades tangenciais a um projeto.   
   
### Melhorias realizadas:   
Servir jogos exportados pelo Godot.
- Pretendo expandir essa funcionalidade quando tiver jogos mais interessantes para mostrar.
Implementar segurança TLS do Geoserver.
Nova homepage com React e stack T3.
Página do casamento
- Página criada em digo-eu.com/casamento
- Informações para os convidados
- História do casal
- Galeria de fotos