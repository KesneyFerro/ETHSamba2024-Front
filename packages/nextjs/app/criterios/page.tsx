/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Criterios: NextPage = () => {
  return (
    <div className="bg-white px-[5%] text-black">
      <section className="flex min-h-[90vh]  w-full items-center justify-center">
        <article className="w-full p-10">
          <h1 className="font-bold text-6xl">Critérios de classificação de prioridade na lista de doação</h1>
          <p className="text-xl pr-[20%]">
            Entenda como o Sistema Nacional de Transplantes (SNT) define as prioridades para lista de doação
          </p>
        </article>
        <article className="w-[60%] max-w-[60%]">
          <img src="/criteriosIllustration.svg" alt="" title="ilustração" />
          {/* <div className="w-[300px] h-[300px] bg-[#d9d9d9]"></div> */}
        </article>
      </section>
      <section className="max-md:flex-col-reverse flex gap-x-10 justify-center items-center bg-gradient-to-t from-[#5A5E8C] to-[#4B4E6D] w-full min-h-[800px] text-white rounded-[30px] p-32 mb-[20px]">
        <article className="w-[70%] gap-y-10 items-start  flex flex-col">
          <div className="flex justify-center items-center">
            <h1 className="text-7xl font-bold text-center">1</h1>
            <p className="px-10 max-w-[700px]">
              O <strong>tipo de órgão</strong> é o primeiro fator considerado para a geração da lista de compatibilidade
              e de prioridade, de maneira que apenas receptores necessitados do tipo de órgão específicos são
              considerados para a lista de doação daquele órgão
            </p>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-7xl font-bold text-center">2</h1>
            <p className="px-10 max-w-[700px]">
              As <strong>características do órgão como tamanho e idade do doador</strong> são primordiais para
              identificar a viabilidade da recepção, de maneira que indivíduos com dimensões incompatíveis não são
              considerados como possíveis receptores.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-7xl font-bold text-center">3</h1>
            <p className="px-10 max-w-[700px]">
              Por fim, <strong>fatores imunológicos</strong> são de extrema importância para ponderar a probabilidade de
              boa recepção do órgão transplantado pelo organismo, de forma que tipos sanguíneos diferentes geram
              impossibilidade de transplante.
            </p>
          </div>
        </article>
        <article className="flex-grow flex justify-center max-w-[450px]">
          <h1 className="text-5xl font-bold">Fatores genéticos de compatibilidade que geram exclusão</h1>
        </article>
      </section>
    </div>
  );
};

export default Criterios;
