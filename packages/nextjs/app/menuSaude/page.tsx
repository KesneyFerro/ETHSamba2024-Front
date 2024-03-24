"use client";

import AccountDetail from "~~/components/AccountDetail";

export default function Servicos() {
  return (
    <AccountDetail>
      <div className="flex justify-end flex-row items-end pb-10">
        <div className="flex flex-col space-y-0">
          <div className="flex flex-row space-x-1 my-1">
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-tl-3xl p-4...">
              <div className="p-10 flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-2xl">Listas para Doação</h1>
                  <p>Veja as listas de necessidade de órgãos</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-tr-3xl p-4...">
              <div className="p-10 flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-2xl">Critérios</h1>
                  <p>Saiba como é definida a prioridade de pacientes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-1">
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-bl-3xl p-4...">
              <div className="p-10 flex flex-col">
                <h1 className="text-2xl">Serviços de Saúde</h1>
                <p>Localize um próximo a você</p>
              </div>
            </div>
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-br-3xl  p-4...">
              <div className="p-10 flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-2xl">Perguntas Frequentes</h1>
                  <p>Tire suas dúvidas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountDetail>
  );
}
