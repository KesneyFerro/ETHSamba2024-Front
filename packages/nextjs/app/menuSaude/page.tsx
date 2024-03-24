"use client";

import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { LiaNewspaperSolid } from "react-icons/lia";
import AccountDetail from "~~/components/AccountDetail";

export default function Servicos() {
  return (
    <AccountDetail>
      <div className="flex justify-end w-full flex-row items-end pb-10">
        <div className="flex flex-col w-full  space-y-0">
          <div className="flex flex-row space-x-1 my-1">
            <div className="w-1/2 hover:bg-[#e4e4ec] bg-[#efeff4] transition-all rounded-tl-3xl p-4...">
              <Link href="/listaDoacoes">
                <div className="p-10 flex flex-col md:flex-row items-center  gap-5 ">
                  <div className=" bg-[#C9CADA] max-w-[150px] rounded-full flex items-center justify-center p-12 aspect-square">
                    <span className="text-[#4b4e6d] text-[50px]">
                      <BiSolidDonateHeart />
                    </span>
                  </div>
                  <div className="flex justify-center flex-col text-center md:text-left">
                    <h1 className="m-0 text-2xl font-semibold">Listas para Doação</h1>
                    <p className="m-0">Veja as listas de necessidade de órgãos</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-1/2 hover:bg-[#e4e4ec] bg-[#efeff4] transition-all rounded-tr-3xl p-4...">
              <Link href="/criterios">
                <div className="p-10 flex flex-col md:flex-row items-center  gap-5 ">
                  <div className=" bg-[#C9CADA] max-w-[150px] rounded-full flex items-center justify-center p-12 aspect-square">
                    <span className="text-[#4b4e6d] text-[50px]">
                      <LiaNewspaperSolid />
                    </span>
                  </div>
                  <div className="flex justify-center flex-col text-center md:text-left">
                    <h1 className="m-0 text-2xl font-semibold">Critérios</h1>
                    <p className="m-0">Saiba como é definida a prioridade de pacientes</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-row space-x-1">
            <div className="w-1/2 hover:bg-[#e4e4ec] bg-[#efeff4] transition-all rounded-bl-3xl p-4...">
              <div className="p-10 flex flex-col md:flex-row items-center  gap-5 ">
                <div className=" bg-[#C9CADA] max-w-[150px] rounded-full flex items-center justify-center p-12 aspect-square">
                  <span className="text-[#4b4e6d] text-[50px]">
                    <GrMapLocation />
                  </span>
                </div>
                <div className="flex justify-center flex-col text-center md:text-left">
                  <h1 className="m-0 text-2xl font-semibold">Serviços de Saúde</h1>
                  <p className="m-0">Localize um próximo a você</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 hover:bg-[#e4e4ec] bg-[#efeff4] transition-all rounded-br-3xl  p-4...">
              <div className="p-10 flex flex-col md:flex-row items-center  gap-5 ">
                <div className=" bg-[#C9CADA] max-w-[150px] rounded-full flex items-center justify-center p-12 aspect-square">
                  <span className="text-[#4b4e6d] text-[50px]">
                    <BsFillQuestionSquareFill />
                  </span>
                </div>
                <div className="flex justify-center flex-col text-center md:text-left">
                  <h1 className="m-0 text-2xl font-semibold">Perguntas Frequentes</h1>
                  <p className="m-0">Tire suas dúvidas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountDetail>
  );
}
