// app.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors()); // Permitir requisições cross-origin

const PORT = 5000;

let cidades = [
    {
        id: 1, nome: "Rio de Janeiro/RJ",
        imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg",
        descricao: 'O Rio de Janeiro, frequentemente chamado de "Cidade Maravilhosa", é famoso por sua deslumbrante paisagem de montanhas, praias e a icônica estátua do Cristo Redentor. O Carnaval do Rio é uma das maiores e mais vibrantes celebrações do mundo, atraindo turistas de todos os cantos. Contudo, a cidade também enfrenta desafios sociais e de segurança, com a presença de favelas e desigualdades evidentes.'
    },
    {
        id: 2, nome: "São Paulo/SP",
        imagem: "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1166728645-1.jpg",
        descricao: 'São Paulo é o principal centro financeiro e cultural do Brasil, sendo conhecida como a "locomotiva econômica" do país. Com sua vasta diversidade e rica cena gastronômica e artística, a cidade atrai pessoas de todas as partes do mundo. Apesar de seu dinamismo e tamanho imponente, São Paulo enfrenta desafios relacionados ao trânsito intenso e à poluição.'
    },
    {
        id: 3, nome: "Curitiba/PR",
        imagem: "https://jbaimoveis.com.br/media/jbaimoveis/2022/03/melhores-bairros-de-curitiba-para-universitarios-blog.jpg",
        descricao: "Curitiba é reconhecida por suas inovações urbanísticas e seu sistema integrado de transporte público eficiente. A cidade destaca-se por seus parques e áreas verdes, como o Jardim Botânico, tornando-a uma referência em sustentabilidade no Brasil. Mesmo com seu clima mais frio em comparação a outras capitais brasileiras, Curitiba possui uma rica herança cultural e uma população acolhedora."
    },
    {
        id: 4, nome: "Brasilia/DF",
        imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-brasilia-capa2019-01.jpg",
        descricao: "Brasília, a capital do Brasil, foi projetada pelo arquiteto Oscar Niemeyer e pelo urbanista Lúcio Costa, sendo um patrimônio mundial da UNESCO devido à sua arquitetura modernista única. Concebida como um símbolo de modernidade e progresso, a cidade é caracterizada por seus amplos boulevards e edifícios governamentais icônicos. No entanto, além de sua estrutura planejada, Brasília também abriga desafios socioeconômicos e áreas periféricas que contrastam com o plano original da cidade."
    },
    {
        id: 5, nome: "Barbacena/MG",
        imagem: "https://static.portaldacidade.com/unsafe/https://s3.amazonaws.com/barbacena.portaldacidade.com/img/news/2023-05/barbacena-tera-seu-primeiro-festival-de-inverno-64777c03a2f56.jpg",
        descricao: 'Barbacena, localizada no estado de Minas Gerais, é conhecida por sua rica história e arquitetura colonial. A cidade é frequentemente chamada de "Cidade dos Loucos" devido ao antigo manicômio que operou ali, tendo uma história sombria relacionada aos direitos humanos. Além disso, Barbacena destaca-se pela produção agrícola, principalmente de flores, sendo um dos maiores polos do Brasil nesse setor.'
    },
    {
        id: 6, nome: "Natal/RN",
        imagem: "https://coralplaza.com.br/wp-content/uploads/2019/04/280453-x-praias-urbanas-em-natal-que-voce-nao-pode-deixar-de-conferir.jpg",
        descricao: "Natal, capital do Rio Grande do Norte, é frequentemente lembrada por suas deslumbrantes dunas e praias paradisíacas, como Ponta Negra e Pipa. A cidade, cujo nome celebra o nascimento de Cristo, ostenta o Forte dos Reis Magos, um marco histórico que remonta à sua fundação em 1599. Além de sua beleza natural e rica história, Natal é conhecida por seu povo acolhedor e pela vibração festiva que permeia suas celebrações culturais e festividades."
    },
    {
        id: 7, nome: "Pirassununga/SP",
        imagem: "https://www.fzea.usp.br/wp-content/uploads/2015/07/instituto-de-educacao-de-pirassununga_rodrigo-mangetti.jpg",
        descricao: 'Pirassununga, situada no interior de São Paulo, é amplamente reconhecida por ser sede da Academia da Força Aérea (AFA), uma das principais instituições de formação de oficiais aviadores do Brasil. A cidade também é famosa pela produção da cachaça "51", uma das mais conhecidas e distribuídas no país. Com sua rica tradição cultural e festas típicas, Pirassununga celebra a herança caipira e a rica diversidade do interior paulista.'
    },
    {
        id: 8, nome: "São José dos Campos/SP",
        imagem: "https://meulugar.quintoandar.com.br/wp-content/uploads/2022/08/Morar-em-Sao-Jose-dos-Campos-850x562.jpg",
        descricao: "São José dos Campos, localizada no Vale do Paraíba em São Paulo, é um importante polo tecnológico e industrial, abrigando empresas e centros de pesquisa renomados, como o Instituto Nacional de Pesquisas Espaciais (INPE) e a Embraer. A cidade combina desenvolvimento com áreas verdes, destacando-se o Parque Vicentina Aranha e o Parque da Cidade. Além disso, São José desempenha um papel crucial na aviação brasileira, sendo um berço de inovações e talentos no setor aeroespacial."
    },
    {
        id: 9, nome: "Porto Alegre/RS",
        imagem: "https://a.cdn-hotels.com/gdcs/production54/d1484/9bba5297-47b5-46e0-931b-abcc17053949.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        descricao: "Porto Alegre, a capital do Rio Grande do Sul, é uma cidade rica em cultura gaúcha e história, banhada pelas águas do Rio Guaíba e conhecida por seus belos pôr do sol. O Mercado Público, a Usina do Gasômetro e o Parque Farroupilha são alguns de seus pontos icônicos, refletindo a diversidade e a herança cultural da região. A cidade é também o berço de importantes movimentos artísticos e literários, além de ser conhecida por sua tradicional hospitalidade sulista."
    }
];



app.get('/cidades', (req, res) => {
    res.json(cidades.map(c => ({ id: c.id, nome: c.nome }))); // retorna apenas o id e o nome
});

app.get('/cidade/:id', (req, res) => {
    const cidade = cidades.find(c => c.id === parseInt(req.params.id));
    if (cidade) {
        res.json(cidade);
    } else {
        res.status(404).send('Cidade não encontrada.');
    }
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});