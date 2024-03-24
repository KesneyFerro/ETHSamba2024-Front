"use client";

// import Link from "next/link";
import type { NextPage } from "next";

// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";1
// import { Address } from "~~/components/scaffold-eth";
// import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  // const { data } = useScaffoldContractRead({
  //   contractName: "MedicalContract",
  //   functionName: "getAllPatients",
  //   // args: ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
  // });

  // const { address: connectedAddress } = useAccount();
  // console.log(data);

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
    <div className="flex  bg-white flex-col w-full items-center h-full flex-grow">
      <div className="w-full flex flex-col items-center bg-[#505477] ">
        <div className="w-full max-w-[1200px] flex items-start flex-col px-7 py-16">
          <div id="titles">
            <h1 className="text-white text-2xl font-semibold">Olá, Usuário!</h1>
            <p className=" text-lg m-0 text-white">
              Entre com o seu código HASH e acesse todas as listas dinâmicas de espera de doação de orgãos
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-5 mt-8" id="actions">
            <div className="text-white line flex items-center gap-x-5">
              <span className="font-medium">Ações</span>
              <hr className="w-full bg-white "></hr>
            </div>
            <div className="text-white flex gap-8 gap-y-2 items-start flex-wrap justify-start w-full lg:gap-12">
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
      <img src="/wave.svg" className=" w-full"></img>
    </div>
  );
};

export default Home;
