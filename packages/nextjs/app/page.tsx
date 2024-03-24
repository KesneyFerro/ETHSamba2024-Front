"use client";

import { useRouter } from "next/navigation";
import { useConnectModal } from "@rainbow-me/rainbowkit";
// import Link from "next/link";
import type { NextPage } from "next";
import { FaUserDoctor } from "react-icons/fa6";
import { RiWallet3Line } from "react-icons/ri";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { openConnectModal } = useConnectModal();
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  if (connectedAddress) {
    router.push("/menuSaude");
  }

  const datalinks = [
    {
      title: "Contúdos",
      link: "",
    },
    {
      title: "Rede de Saúde",
      link: "",
    },
    {
      title: "Valida Certidão",
      link: "",
    },
    {
      title: "Cartilha de Vacina",
      link: "",
    },
    {
      title: "Fale Conosco",
      link: "",
    },
    {
      title: "Sobre o SUS",
      link: "",
    },
    {
      title: "Termos de Utilização",
      link: "",
    },
  ];

  return (
    <div className="flex flex-row bg-white flex-grow h-full">
      <div className="flex bg-white flex-col w-full max-w-[500px] items-center ">
        <div className="w-full flex flex-col items-center bg-[#505477] h-full text-white ">
          <div className="w-full max-w-[1200px] flex items-start flex-col px-7 py-16">
            <div id="titles">
              <h1 className="text-2xl font-semibold">Olá, Usuário!</h1>
              <p className=" text-base m-0">
                Entre com o seu código HASH e acesse todas as listas dinâmicas de espera de doação de orgãos
              </p>
            </div>
            <div className="w-full flex flex-col gap-y-5 mt-8" id="actions">
              <div className="line flex items-center gap-x-5">
                <span className="font-medium">Ações</span>
                <hr className="w-full bg-white "></hr>
              </div>
              <div className="flex gap-5 gap-y-2 items-start flex-wrap justify-start w-full lg:gap-7">
                {datalinks.map((link, index) => (
                  <div key={index} className="flex max-w-[60px] gap-y-2 flex-col justify-center items-center">
                    <div className="w-full aspect-square bg-white rounded-md p-2">
                      <div className="w-full h-full rounded-full bg-gray-200"></div>
                    </div>
                    <span className="text-center text-sm ">{link.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Você está conectrado no endereço */}
          {/* <div className="flex justify-center items-center space-x-2">
            <p className=" font-medium">Endereço conectado:</p>
            <Address address={connectedAddress} />
          </div> */}
          {/* Get patients from contract and show */}
          {/* <div className="flex justify-center flex-col items-center space-x-2">
            <p className=" font-medium">Pacientes:</p>
            <div className="flex flex-col gap-y-2">
              {data?.map((patient: any, index: number) => (
                <div key={index} className="w-full gap-x-10 flex items-center outline outline-white rounded-md p-3">
                  <span>{patient.name}</span>
                  <span>{patient.cpf}</span>
                  <span>{`${patient.necessity}`}</span>
                  <span>{`${patient.priority}`}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
        {/* <img src="/wave.svg" className=" w-full" alt="Onda" /> */}
      </div>
      <div className="flex flex-col px-[8%] py-[2%] w-full text-black gap-8">
        <div>
          <p className="text-5xl font-bold text-[#4b4e6d]">Entre na sua conta</p>
          <div className="border border-[#4b4e6d] mt-1 w-full h-0"></div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-normal text-lg">Estou esperando doação</p>
          <div
            onClick={openConnectModal}
            className="flex w-[500px] cursor-pointer hover:bg-[#f1f3ff]  text-center justify-start px-3 gap-x-6 items-center border border-[#6A6D86] rounded-lg"
          >
            <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#6A6D86]/50">
              <RiWallet3Line />
            </div>
            <p className="text-[#6A6D86] text-xl font-medium">Entrar com minha carteira</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-lg">Sou médico autorizado pelo Sistema Nacional de Transplantes (SNT)</p>
          <div className="flex w-[500px] text-center justify-start px-3 gap-x-6 items-center border border-[#6A6D86] rounded-lg">
            <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#6A6D86]/50">
              <FaUserDoctor />
            </div>
            <p className="text-[#6A6D86] text-xl font-bold">CRM Verification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
