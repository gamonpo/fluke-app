import React from 'react';
import {FlatList, Animated} from 'react-native';

import {Container, Header, HeaderTitle, List, Item, Title} from './styles';

export default function Ajuda({navigation}) {
  const scrollY = new Animated.Value(0);

  const translateY = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, -10],
  });

  const data = [
    {
      id: '1',
      title: 'O que é o Fluke App?',
      answer:
        'O Fluke App é o aplicativo da Fluke. É por lá que você vai pedir e ativar seu chip, comprar seu pacote e acompanhar seu consumo como e quando você quiser, sempre que você precisar.',
    },
    {
      id: '2',
      title: 'O aplicativo da Fluke pode ser usado em IPads ou Tablets?',
      answer:
        'Nós já estamos trabalhando para que o nosso aplicativo possa ser instalado em IPads e Tablets mas, no momento, ele só pode ser instalado em um celular.',
    },
    {
      id: '3',
      title: 'Como eu faço para baixar o aplicativo da Fluke?',
      answer:
        'Para baixar o nosso aplicativo basta acessar o Google Play ou a Apple Store, buscar por Fluke App e fazer o download do aplicativo de forma totalmente gratuita.',
    },
    {
      id: '4',
      title: 'Quem pode acessar o aplicativo da Fluke?',
      answer:
        'Todos os clientes da Fluke podem acessar o aplicativo através do login e senha utilizados na hora do cadastro.',
    },
    {
      id: '5',
      title: 'Como eu faço o cadastro no aplicativo da Fluke?',
      answer:
        'Para se cadastrar no nosso aplicativo basta fazer o download no Google Play ou na Apple Store, abrir o aplicativo e clicar em quero ser fluke. Você será direcionado para a página de cadastro e já poderá se cadastrar para ser um de nossos clientes. É importante ressaltar que, na hora de se cadastrar, você deve usar o mesmo e-mail que recebeu o convite para ser cliente Fluke.',
    },
    {
      id: '6',
      title: 'Como eu acesso a minha conta da Fluke?',
      answer:
        'Para acessar sua conta da Fluke basta abrir o aplicativo, clicar em já sou cliente, preencher os campos e-mail e senha e clicar em entrar. Pronto, você será direcionado para a página inicial do aplicativo.',
    },
    {
      id: '7',
      title: 'Onde eu vejo o meu consumo de dados móveis?',
      answer:
        'Para ver o seu consumo de dados móveis basta acessar o nosso aplicativo, no menu inferior clicar em início, e na parte superior colocar meus dados. Você verá o seu consumo no formato gráfico indicando o quanto foi consumido e o quanto você ainda tem disponível.',
    },
    {
      id: '8',
      title: 'Onde eu vejo o meu saldo de ligações?',
      answer:
        'Para ver o seu saldo de ligações basta acessar o nosso aplicativo, no menu inferior clicar em início, e na parte superior colocar meus minutos. Você verá o seu consumo no formato gráfico indicando o quanto foi consumido e o quanto você ainda tem disponível.',
    },
    {
      id: '9',
      title: 'Onde eu vejo a quantidade de SMS disponíveis?',
      answer:
        'Para ver a quantidade de SMS disponíveis basta acessar o nosso aplicativo, no menu inferior clicar em início, e na parte superior colocar meus minutos. Você verá a quantidade de SMS disponíveis embaixo do gráfico do seu consumo de minutos.',
    },
    {
      id: '10',
      title: 'Onde eu consulto o dia de vencimento do meu pacote?',
      answer:
        'Para consultar o dia de vencimento do seu pacote você pode acessar o nosso aplicativo, ir em início no menu inferior, selecionar meu pacote arrastando a tela para cima e a sua data de vencimento aparecerá na parte superior da tela.',
    },
    {
      id: '11',
      title: 'Como eu faço para comprar mais dados móveis, minutos e SMS?',
      answer:
        'Para comprar mais dados móveis, minutos e SMS basta acessar nosso aplicativo, no menu inferior clicar em início, selecionar meu pacote arrastando a tela para cima, clicar em + comprar mais e escolher a quantidade de dados móveis, minutos e SMS que você quiser.',
    },
    {
      id: '12',
      title: 'Como eu edito os dados do meu cartão de crédito?',
      answer:
        'Para editar os dados do seu cartão de crédito você pode acessar o nosso aplicativo, ir em perfil no menu inferior, acessar forma de pagamentos, clicar sobre o cartão que deseja editar e selecionar editar.Vale ressaltar que não é possível editar o seu atual cartão de cobrança, apenas alterá-lo.',
    },
    {
      id: '13',
      title: 'Como eu altero o meu cartão de crédito para cobrança?',
      answer:
        'Para alterar o seu cartão de crédito para cobrança você pode acessar o nosso aplicativo, ir em perfil no menu inferior e selecionar forma de pagamentos.  Você terá a opção de cadastrar um novo cartão clicando em + novo cartão ou selecionar um cartão já cadastrado. Caso você queira utilizar um dos cartões cadastrados basta clicar sobre ele e selecionar usar cartão.',
    },
    {
      id: '14',
      title: 'Como eu removo um cartão de crédito do aplicativo?',
      answer:
        'Para remover um cartão de crédito já cadastrado você pode ir em perfil no menu inferior, selecionar forma de pagamentos, clicar sobre o cartão que deseja remover e selecionar remover. Caso o cartão que você queira remover seja o seu atual cartão de cobrança, você deve primeiro alterá-lo e depois removê-lo do aplicativo. Vale lembrar que é necessário sempre deixar um cartão de crédito cadastrado no aplicativo.',
    },
    {
      id: '15',
      title: 'Como eu desativo a renovação automática do meu pacote?',
      answer:
        'Caso você queira desativar a renovação automática do seu pacote, é só abrir o aplicativo, ir em início, acessar meu pacote, clicar em ajustar pacote, selecionar recorrência e desativar o botão de renovação automática. Lembrando que ao desativar a renovação automática o seu pacote não será mais renovado toda semana, mas a sua assinatura fixa de R$ 2,00 continuará sendo cobrada.',
    },
    {
      id: '16',
      title: 'Como eu pauso minha conta da Fluke?',
      answer:
        'Caso você queira pausar a sua conta, basta acessar o nosso aplicativo, ir em perfil no menu inferior, acessar minha conta, selecionar pausar conta da fluke e clicar em pausar sua conta. É importante ressaltar que o período máximo em que você poderá manter sua conta pausada é por 90 dias e que, ao escolher essa opção, você perderá os seus dados móveis, minutos e SMS acumulados.',
    },
    {
      id: '17',
      title: 'Como eu cancelo o meu chip da Fluke?',
      answer:
        'Para cancelar a sua linha e deixar de ser um cliente Fluke, você pode acessar o nosso aplicativo, ir em perfil, acessar minha conta e clicar em deixar de ser cliente Fluke ou então chamar alguém do nosso Time Salva-Vidas através do chat do app, pelo e-mail sos@flukeoperadora.com.br ou pelo whatsapp (16) 93618-0000 que estamos online para te ajudar!Importante: esse processo é irreversível e, ao cancelar a sua linha, você perderá o seu número assim como os seus dados móveis, minutos e SMS acumulados.',
    },
    {
      id: '18',
      title: 'Como eu faço para alterar minha senha?',
      answer:
        'Para alterar sua senha você pode acessar o nosso aplicativo, ir em perfil, acessar minha conta e clicar em alterar senha.',
    },
    {
      id: '19',
      title: 'Esqueci minha senha, e agora?',
      answer:
        'Caso você tenha esquecido sua senha e esteja logado no aplicativo, basta você ir em perfil, acessar minha conta e clicar em sair da conta. Você será redirecionado para a página de login novamente e, ao clicar em já sou cliente aparecerá a opção esqueci minha senha. Basta clicar nela e seguir o passo-a- passo para cadastrar uma nova senha.',
    },
    {
      id: '20',
      title: 'Ocorreu um erro com o meu aplicativo, o que eu faço?',
      answer:
        'Caso você tenha percebido algum erro no seu app, basta chacoalhar o celular que a tela "precisa de ajuda" aparecerá. Lá você poderá informar qual erro ocorreu que o nosso Time Salva-Vidas irá entrar em contato para te ajudar a resolver.',
    },
    {
      id: '21',
      title:
        'Como eu entro em contato com o Time de Atendimento da Fluke pelo aplicativo?',
      answer:
        'Caso você precise de ajuda do nosso Time Salva-Vidas basta acessar seu perfil, no menu inferior, ir em ajuda e clicar em fale conosco ou chacoalhar o seu celular que você será direcionado para o nosso chat onde nós estaremos online para te ajudar com o que você precisar.',
    },
  ];

  const renderItem = ({item}) => (
    <Item onPress={() => navigation.navigate('Resposta', {item: item})}>
      <Title>{item.title}</Title>
    </Item>
  );

  return (
    <Container>
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
        }}>
        <Header>
          <HeaderTitle>Fluke</HeaderTitle>
        </Header>
      </Animated.View>

      <List>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
      </List>
    </Container>
  );
}
