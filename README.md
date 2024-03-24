# SALVO: Sistema de Acompanhamento, Listagem e Verificação de Órgãos

<h4 align="center">
  <a href="https://scaffoldeth.io">Website</a> | <a href="#englishDocumentation">English Documentation</a>
</h4>

🧪 Visualize de forma transparente, segura e anônima a sua posição na fila de espera para doação de órgãos, além dos critérios de classificação para o seu posicionamento.

⚙️ Solução desenvolvida usando NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

## Índice

- 🌐 [Cenário Geral](#cenarioGeral): Uma perspectiva do cenário geral de transplante de orgãos e o modelo de sistema no Brasil.
- 🎯 [Nossa Ideia](#nossaIdeia): A partir da perspectiva geral, como a SALVO pretender tornar uma decisão que muda vidas mais transparente e justa.
- 📈 [Análise de Mercado](#): Entendendo a extensão do mercado e como podemos, por meio das necessidades desse mercado gerar impacto social.
- 👁️ [Onde olhar no código](#): Um guia de inspeção focado em orientar o revisor para cada uma das *bounties*.
- 😎 [Nossa Equipe](#): Conheça os nossos membros.

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

Em resumo, o Sistema de Acompanhamento, Listagem e Verificação de Órgãos, baseado na tecnologia *blockchain*, traz múltiplos benefícios para a maior transparência na lista de espera para doação de órgãos, deixando o receptor mais ciente de como esse processo emocionalmente carregado funciona. Assim, ele garante segurança, transparência e descentralização nos processos de verificação, promovendo a melhoria do controle de corrupção em sistemas de ordem pública, a avaliação da disponibilidade de órgãos e o endereçamento desses ao receptor mais necessitado, a rastreabilidade de todos os processos ocorridos *on-chain* e a visualização dos dados pela

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
