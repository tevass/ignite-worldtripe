import { NextApiRequest, NextApiResponse } from "next";

export default async function Continents(req: NextApiRequest, resp: NextApiResponse) {
  if(req.method === "GET") {
    const continents = [
      { title: 'América do Sul', caption: 'O continente da diversidade de pessoas, etnias e línguas', img: '/assets/south-america.png', page: '/continentes/america-do-sul', description: "Atravessado pela Linha do Equador e pelo Trópico de Capricórnio, o continente possui a segunda maior cordilheira do mundo na Região Andina que se estende desde a Venezuela até o Chile e a Argentina. No vale do Amazonas encontramos a maior bacia hidrográfica do mundo, e também, a região de maior biodiversidade: a floresta Amazônica.", geonameId: 6255150 },
      { title: "África", caption: 'O berço da humanidade', img: '/assets/africa.png', page: '/continentes/africa', description: "África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km², ocupando, aproximadamente, 20% da área continental da Terra. No continente vive mais de um bilhão de habitantes, fazendo dele o segundo mais populoso entre os demais.", geonameId: 6255146 },
      { title: 'América do Norte', caption: "Onde o Tio Sam reina", img: '/assets/north-america.png', page: '/continentes/america-do-norte', description: "A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica).", geonameId: 6255149 },
      { title: 'Europa', caption: 'O continente mais antigo.', img: '/assets/europe.png', page: '/continentes/europa', description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste", geonameId: 6255148  },
      { title: 'Oceania', caption: 'O continente mais isolado', img: '/assets/oceania.png', page: '/continentes/oceania', description: "A Oceania é um continente situado entre os oceanos Índico e Pacífico, a sudeste da Ásia. A maior parte de suas terras fica no Hemisfério Sul do planeta. É composto por 14 países e ilhas e territórios pertencentes a outros países, tanto oceânicos quanto de outros continentes. A maior e mais populosa das nações é a Austrália, que consiste também na principal economia do continente.", geonameId: 6255151 },
      { title: 'Ásia', caption: 'O maior continente do mundo', img: '/assets/asia.png', page: '/continentes/asia', description: "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.", geonameId: 6255147 },
    ]

    return resp.json(continents)
  }

  return resp.status(405).json({ message: 'Method not allowed' })
}