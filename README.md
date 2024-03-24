# SALVO: Sistema de Acompanhamento, Listagem e Verificação de Órgãos

<h4 align="center">
  <a href="https://scaffoldeth.io">Website</a> | <a href="#englishDocumentation">English Documentation</a>
</h4>

🧪 Uma atualização para a fila de espera de doação de orgãos. Visualize de forma transparente, segura e anônima a sua posição na fila de espera de doação de órgãos, além dos critérios de classificação para o seu posicionamento.

⚙️ Solução desenvolvida usando NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

## Índice

- 🌐 [Cenário Geral](#cenarioGeral): Uma perspectiva do cenário geral de transplante de orgãos e o modelo de sistema no Brasil.
- 🎯 [Nossa Ideia](#nossaIdeia): A partir da perspectiva geral, como a SALVO pretender tornar uma decisão que muda vidas mais transparente e justa.
- 📈 [Análise de Mercado](#analiseDeMercado): Entendendo a extensão do mercado e como podemos, por meio das necessidades desse mercado gerar impacto social.
- 👁️ [Onde olhar no código](#ondeOlharNoCodigo): Um guia de inspeção focado em orientar o revisor para cada uma das *bounties*.
- 😎 [Nossa Equipe](#nossaEquipe): Conheça os nossos membros.

</br>
<a name="cenarioGeral"></a>

## Cenário Geral

No panorama global, o transplante de órgãos é uma área complexa e crucial da medicina, salvando vidas e melhorando a qualidade de vida de milhões de pessoas em todo o mundo. No entanto, o acesso a transplantes muitas vezes é limitado por uma série de fatores, incluindo a disponibilidade de órgãos, sistemas de listagem e distribuição, e a capacidade de infraestrutura médica.

No Brasil, o Sistema Nacional de Transplantes (SNT) é o órgão do Ministério da Saúde que desempenha o papel fundamental de coordenação e regulação dos transplantes de órgãos brasileiros. O SNT é responsável por garantir que os órgãos sejam alocados de forma justa e eficiente, levando em consideração [critérios médicos](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html), éticos e legais. Este sistema visa garantir que os órgãos sejam distribuídos de acordo com a gravidade do caso e a compatibilidade entre doador e receptor.

Na atualidade, mais de [68,2 mil pacientes estão na lista de espera](https://brasil61.com/n/mais-de-66-mil-brasileiros-na-fila-a-espera-de-um-transplante-bras239634) (2023) aguardando por um órgão compatível. Visto que essa lista é dinâmica e varia de acordo com a oferta de órgãos e a gravidade das condições de saúde dos pacientes, ela apresenta um avanço gradual, de maneira que o tempo de espera vaira consideravelmente de acordo com a região e a especificidade do órgão necessário.

Um dos maiores desafios enfrentados pelos pacientes e suas famílias durante esse processo é a incerteza. Como exemplificado pelo relato dado à SALVO pela Simone, mãe da Élida, "o processo de espera por um órgão pode ser angustiante e emocionalmente desgastante". A falta de informações precisas sobre a posição na lista e o tempo de espera pode gerar ansiedade e insegurança. Além disso, a necessidade de depender da generosidade de outra família em um momento de perda torna o processo ainda mais delicado. Ainda no relato de Simone, ela evidencia que "não é divulgado a lista pra gente, mas o médico, como foi ele que solicitou a córnea, ele sabe", de modo que, denota-se uma característica alarmante do SNF: privação de acesso a informação.

Assim, a falta de transparência na divulgação das posições na lista de espera também pode ser um ponto de preocupação. Como mencionado por Simone, o desconhecimento sobre a posição na lista pode causar confusão e frustração, especialmente quando há uma percepção de que o sistema não está funcionando de maneira justa. Isso porque, em uma análise crítica, quando observa-se [casos como o de Fausto Silva (Faustão)](https://oglobo.globo.com/saude/medicina/noticia/2023/08/28/faustao-furou-a-fila-do-transplante-entenda-por-que-apresentador-recebeu-o-orgao-tao-rapido.ghtml), percebe-se que não existem mecanismos de verificação desse sistema, de forma que cabe ao paciente, em situação de angústia, apenas confiar que não haverão corrupções no sistema.
</br>
<a name="nossaIdeia"></a>

## Nossa Ideia

### O Problema

Tendo em vista a perspectiva apresentada pelo cenário geral, nota-se que, no modelo atual do SNT, existem desafios que devem ser superados, como a centralização de informações no órgão governamental e o sigilo passível de corrupção na instituição, onde apenas os membros têm acesso a dados que competem aos pacientes. Nessa linha, embora o Sistema Nacional de Transplantes seja um órgão comprometido com a verdade e imparcialidade, tendo métodos criteriosos de seleção de receptores em face das questões éticas que envolvem o processo de transplante, faz-se necessário observar os seguintes desafios atrelados ao modelo:

1. Centralização de Informações: A concentração de dados apenas no órgão governamental pode dificultar o acesso e a transparência para pacientes e outros envolvidos no processo de transplante.

2. Sigilo e Corrupção:A falta de controle adequado sobre o sigilo das informações pode abrir espaço para práticas corruptas, comprometendo a integridade do sistema e a confiança do público.

3. Equidade no Acesso: Garantir que o acesso aos transplantes seja equitativo e justo, sem favorecimentos indevidos ou influências externas que possam comprometer a imparcialidade do processo.

4. Transparência e Prestação de Contas:A necessidade de maior transparência no processo de distribuição de órgãos, incluindo a divulgação clara de critérios de seleção e a prestação de contas sobre as decisões tomadas.

Abordar esses desafios é fundamental para aprimorar o funcionamento do Sistema Nacional de Transplantes, assegurando que ele cumpra sua missão de salvar vidas de maneira justa, transparente e eficiente.

### Solução

No contexto do Sistema Nacional de Transplantes (SNT), o Sistema de Acompanhamento, Listagem e Verificação de Órgãos busca enfrentar os desafios citados acima. Para abordar esses problemas, utiliza-se a tecnologia *blockchain* como base, possibilitando a criação de um portal transparente para a listagem de possíveis receptores de órgãos doados. Por meio da utilização de contratos inteligentes, o *owner* permite que médicos inscritos e permitidos no sistema, por meio da verificação de carteira e CRM, adicionem pacientes à lista de espera de doação de órgãos. Dessa maneira, os dados do quadro clínico de cada paciente podem ser coletados pelos médicos e adicionados à *blockchain* por meio de *smart contracts*, garantindo a imutabilidade daquele caso e a transparência no processo de re-listagem e priorização.

Nessa solução, a utilização de *blockchain* como meio de resolução do problema se baseia em três pilares dessa tecnologia: segurança, transparência e descentralização. Por meio da *blockchain*, é possível garantir a segurança e integridade dos dados do paciente, uma vez que oferece um ambiente anônimo e imutável para o armazenamento de informações pessoais, permitindo que apenas o quadro clínico seja exposto em razão de verificação por revisão de pares a ordenação da lista. Para garantir a anonimidade, o SALVO utiliza um sistema de rede descentralizada em que as informações pessoais têm acesso restrito, dificultando qualquer tentativa de adulteração ou falsificação.

Como método de classificação ética dos possíveis receptores de órgãos, o SALVO utiliza mecanismos iguais ao SNT. A primeira parte dessa classificação é a avaliação de elementos excludentes que, caso não sejam compatíveis, geram automaticamente a exclusão do receptor para o processo de recebimento de doação de órgão. Na análise proposta, esses elementos são:

1. O tipo de órgão: visto que uma pessoa necessitada de um órgão A não é atendida caso receba um órgão B;
2. Características do órgão doado como tamanho e idade do doador: visto que esses fatores físicos podem gerar incompatibilidades perigosas para o processo de transplante;
3. Fatores Imunológicos como o tipo sanguíneo: visto que esse fator biológico pode gerar incompatibilidade durante o transplante.

Para além disso, uma vez que o órgão está disponível para doação e o paciente é compatível em todos os aspectos excludentes (não apresenta incompatibilidades), ele será considerado em ordem da soma dos seguintes fatores classificatórios que são definidos pela doença previamente avaliada:

1. Urgência (definido pela doença apresentada e medida de 0 a 100): O quão importante é que o transplante aconteça em um curto espaço de tempo;
2. Curabilidade (definido pela doença apresentada e medida de 0 a 100): Capacidade do paciente responder positivamente ao tratamento;
3. Fator Q Constante (definido pelo tempo de espera do paciente): Tempo de inscrição em lista única e de ordem logística.

Nota-se que o Fator Q Constante é acrescido em 0,33 por dia, a partir da data de inclusão do receptor na lista. Caso o receptor tenha menos de 13 anos, ele entra na listagem com 20 pontos iniciais no Fator Q Constante; caso contrário, entra com 0 pontos.

Dessa forma, a plataforma garante ao usuário acesso à listagem e o método pelo qual ela funciona, garantindo que o processo é transparente para os pacientes, ao passo que é possível ter acesso aos fatores excludentes e classificatórios para a listagem, e para os médicos, garantindo responsabilização dos médicos pelos seus pacientes e evidenciando possíveis casos de corrupção.

Além disso, a plataforma permite a fácil verificação de possíveis adulterações de dados, isso porque quando existe uma atualização dos dados que geram mudanças de posição na lista de espera, será armazenado o motivo pelo qual aquela mudança se sucedeu e qual o impacto que ela teve na listagem geral. Um exemplo dessa instância seria um paciente que sofreu uma piora em seu caso clínico, de maneira que tanto a classificação da doença, quanto a urgência e curabilidade foram aumentadas. Nesse caso, em razão da dinamicidade da lista, o paciente seria movido para posições superiores visto que ele demanda um órgão compatível com maior urgência. Para fazer esse sistema de listagem e reordenação, o SALVO utiliza um algoritmo no *front-end* que considera os fatores de ordenação para posicionar os dados em ordem de prioridade e chegada. Por meio das versões salvas desse algoritmo, é possível distinguir mudanças de posição baseadas em alterações no quadro clínico e estabelecer um sistema de versionamento do quadro do paciente e da sua posição utilizando as informações imutáveis da *blockchain*.

A plataforma também promove a inclusão e o acesso global aos registros acadêmicos dos estudantes. A natureza descentralizada da *blockchain* permite que os registros sejam verificáveis em qualquer parte do mundo, sendo especialmente benéfico para estudantes que buscam oportunidades educacionais ou empregos em outros países. Além disso, a utilização da *blockchain* contribui para a distribuição justa e igualitária de cotas, uma vez que avalia o desempenho real dos alunos, garantindo que as cotas sejam atribuídas com base em méritos acadêmicos em vez de presunções raciais.

Em resumo, o Sistema de Acompanhamento, Listagem e Verificação de Órgãos, baseado na tecnologia *blockchain*, traz múltiplos benefícios para a maior transparência na lista de espera para doação de órgãos, deixando o receptor mais ciente de como esse processo emocionalmente carregado funciona. Assim, ele garante segurança, transparência e descentralização nos processos de verificação, promovendo a melhoria do controle de corrupção em sistemas de ordem pública, a avaliação da disponibilidade de órgãos e o endereçamento desses ao receptor mais necessitado, a rastreabilidade de todos os processos ocorridos *on-chain* e a visualização dos dados pela sociedade para o aprimoramento contínuo do sistema de doação de órgãos.

<a name="analiseDeMercado"></a>
## Análise de Mercado

### Análise SWOT

A análise SWOT é uma ferramenta estratégica utilizada para avaliar os pontos fortes (Strengths), pontos fracos (Weaknesses), oportunidades (Opportunities) e ameaças (Threats) de uma empresa, projeto ou situação específica. Ela serve para fornecer uma visão abrangente do ambiente interno e externo de uma organização, permitindo identificar áreas de melhoria, vantagens competitivas, potenciais riscos e oportunidades de crescimento. A análise SWOT é importante porque ajuda na formulação de estratégias mais eficazes, na tomada de decisões informadas e no desenvolvimento de planos de ação que aproveitem os pontos fortes da organização e minimizem suas fraquezas, ao mesmo tempo em que buscam aproveitar as oportunidades e mitigar as ameaças do ambiente externo. Dado essa importância, segue a análise SWOT da SALVO na Figura 1:

<p align="center"> Figura 1: Análise SWOT</p>
<br>

![imagem swot]()
<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

Descrição da análise SWOT:

*Strengths* (Pontos Fortes):
- Transparência: Com o uso de *blockchain* a imutabilidade das respostas confere total transparência sobre os processos. Ademais, ao buscar mostrar para o público geral os métodos utilizados, mesmo que no *front-end*, é possível conferir mais um *layer* de transparência no formato de letramento geral.
- Confiabilidade: Ao oferecer uma visão clara e precisa sobre a fila de espera de órgãos é possível trazer mais confiança nesse processo e assegurar ao usuário que o processo é feito de maneira ponderada e segura.
  
*Weaknesses* (Pontos Fracos):
- Custos operacionais: Sendo uma iniciativa de fim puramente social os custos apresentam um ponto fraco visto que requer-se um investimento governamental para a manutenção da solução
- A complexidade de implementação: Por ser um projeto em larga escala o SALVO pode encontrar dificuldades de instauração geral, visto que o SNT opera em bases de larga escala.

*Opportunities* (Oportunidades):
- Atual déficit do mercado em transparência:
- Incerteza das pessoas no modelo atual: Em consoância, pautado na premissa que o modelo atual causa uma dor relacionada à incerteza do usuário acerca de sua posição na lista e do funcionamento dela, surge uma oportunidade ao SALVO de garantir maior confiabilidade com seus pontos fortes que cobrem essa lacuna

*Threats* (Ameaças):
- Dificuldade de Implementação geral: Enquanto a SALVO apresenta pontos fortes e oportunidades inegavelmente únicas no setor, com a tartativa do atual orgão público acerca de inovações em sistemas de alto impacto existe o risco de a solução não ser implementada em todas as instâncias do SNT de maneira a impactar a efetividade.

Considerando a análise SWOT apresentada para o SALVO, é evidente que a solução possui pontos fortes significativos, como transparência e confiabilidade, que podem resolver deficiências no sistema atual de fila de espera de órgãos. No entanto, há desafios a serem superados, como custos operacionais elevados e complexidade de implementação em larga escala.

A oportunidade de preencher a lacuna existente no mercado em termos de transparência e a incerteza das pessoas em relação ao modelo atual são aspectos que o SALVO pode aproveitar para se destacar. No entanto, as ameaças, como a dificuldade de implementação em todas as instâncias do Sistema Nacional de Transplantes (SNT), representam um risco para a eficácia da solução.

Conclui-se, portanto, que embora o SALVO apresente um grande potencial para melhorar o sistema de fila de espera de órgãos, é crucial abordar os pontos fracos e ameaças identificados na análise SWOT para garantir uma implementação bem-sucedida e maximizar seu impacto positivo. Isso destaca a importância da análise SWOT como uma ferramenta valiosa para orientar o desenvolvimento e a execução de estratégias eficazes em projetos e iniciativas.

### Canvas de Proposta de Valor

O Canvas de Proposta de Valor é uma ferramenta visual que descreve e analisa a proposta de valor de um produto ou serviço para um determinado público-alvo. Ele consiste em um quadro dividido em blocos que ajudam a identificar e compreender os elementos essenciais da proposta de valor, tais como os problemas que o produto ou serviço resolve, os benefícios oferecidos, os diferenciais competitivos, entre outros.

Essa ferramenta serve para ajudar empreendedores, empresas e equipes de projeto a definir, analisar e iterar sobre sua proposta de valor, garantindo que ela seja clara, relevante e atraente para os clientes.

A importância do Canvas de Proposta de Valor reside no fato de que uma proposta de valor bem definida é fundamental para o sucesso de um negócio. Ela ajuda a diferenciar o produto ou serviço no mercado, a atrair e reter clientes, a identificar oportunidades de inovação e a alinhar as estratégias de marketing e desenvolvimento de produtos. Ao utilizar o canvas, as empresas podem entender melhor as necessidades e desejos dos clientes e, assim, criar ofertas que realmente agreguem valor e se destaquem da concorrência. No caso da SALVO, a Figura 2 ilustra nossa proposta de valor:

<p align="center"> Figura 2: Canva de Proposta de Valor</p>
<br>
![imagem canvaPropostaDeValor]()
<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

Descrição da proposta:

Perfil do cliente
+ Dores:
1. Insegurança da população acerca dos seus processos
2. Complexidade na comunicação e coordenação entre hospitais, centros de transplante e pacientes.
+ Ganhos:
1. Satisfação e sentimento de pertencimento por parte da população
2. Eficiência na gestão das listas de espera, reduzindo o tempo de espera dos pacientes.
3. Transparência e clareza no processo de alocação de órgãos, aumentando a confiança do público.
+ Tarefas do Cliente:
1. Manutenção constante da segurança dos dados populacionais
2. Gerenciar eficientemente as listas de espera para doação de órgãos.

Proposta de valor
+ Criadores de Ganho: 
1. Maior eficiência operacional para o Ministério da Saúde na gestão das listas de espera.
2. Aumento da satisfação dos pacientes devido a uma comunicação mais transparente e a uma alocação mais justa de órgãos.
+ Aliviadores de Dores:
1. Implementação de algoritmos e critérios de priorização objetivos e consistentes, garantindo uma alocação mais justa e eficiente dos órgãos disponíveis.
2. Capacidade de identificar rapidamente pacientes elegíveis para transplante com base em critérios específicos, maximizando as chances de sucesso dos procedimentos.
+ Produtos & Serviços: 
1. Software que possibilita a automatização
2. Plataforma online para gerenciamento centralizado de listas de espera em relação ao transplante de órgãos
3. Ferramentas de comunicação integradas para facilitar a interação entre hospitais, centros de transplante e pacientes.

<a name="ondeOlharNoCodigo"></a>
## Onde Olhar no Código

### Scroll

Participamos das categorias:
- Non-Financial Track:
- Feneral Track:

### BuidlGuidl

Participamos da categoria principal 

<a name="nossaEquipe"></a>
## Nossa Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/calebe-matias/">
        <img src="https://media.licdn.com/dms/image/D4E03AQGsV_LbRR3huQ/profile-displayphoto-shrink_800_800/0/1710419179739?e=1717027200&v=beta&t=HBV3sjbTfPzuYEcUWHGFfYQu8QDyVAtd8re1hUm05GY" width="100px;" alt="Calebe Matias profile image"/><br>
        <sub>
          <b>Calebe Matias</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/danielaraujogon%C3%A7alves/">
        <img src="https://media.licdn.com/dms/image/D4D03AQFFXzzlX-MXKg/profile-displayphoto-shrink_800_800/0/1710527034217?e=1717027200&v=beta&t=oqNj_U_JlykS1AR-aeFZ7g--iQW-xqV9mmxQ_LCrWYc" width="100px;" alt="profile image"/><br>
        <sub>
          <b>Daniel Augusto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/gustavo-dacosta/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEafql2JkG4iQ/profile-displayphoto-shrink_800_800/0/1696874768177?e=1717027200&v=beta&t=P4DVd2c779eDlf2AKCTZ3A_lJkFjQ_S3QcDw8SQNrtY" width="100px;" alt="Daniel Augusto profile image"/><br>
        <sub>
          <b>Gustavo Gonçalves</b>
        </sub>
      </a>
    </td>
  <td align="center"> 
      <a href="https://www.linkedin.com/in/j%C3%BAlia-lika-ishikawa/">
        <img src="https://media.licdn.com/dms/image/D4E03AQE0imVmxKn0-A/profile-displayphoto-shrink_800_800/0/1710350586905?e=1717027200&v=beta&t=Bs-7Lx3n4GBp1YjmO-2ZzBxv7mQt_CfkjKjE-Kpz-2k" width="100px;" alt="Júlia Lika profile image"/><br>
        <sub>
          <b>Júlia Lika</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/kesneylucas/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEw5ZsuniNLwQ/profile-displayphoto-shrink_800_800/0/1692393475145?e=1717027200&v=beta&t=UjFlZa4k_PZgxiWy27XckXoRSyBckwNrhPFJVVCj7NE" width="100px;" alt="Kesney Lucas profile image"/><br>
        <sub>
          <b>Kesney Lucas</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
