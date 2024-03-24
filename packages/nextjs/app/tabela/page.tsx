"use client";

import AccountDetail from "~~/components/AccountDetail";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function Tabela() {
  const { data } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getAllPatients",
  } as any);

  console.log(data);
  return (
    <AccountDetail>
      <div className="flex flex-row">
        <div className="flex justify-start flex-col items-center bg-gray-100 py-5 rounded-md  w-full w-[75vw]">
          <header className="w-full flex items-center text-xl text-[#4B4E6D] font-medium mb-3 ">
            <span className="w-full text-center flex justify-center items-center  ">Posição</span>
            <span className="w-full text-center flex justify-center items-center  ">Identificador</span>
            <span className="w-full text-center lg:flex justify-center items-center hidden invisible">Doença</span>
            <span className="w-full text-center lg:flex justify-center items-center">Urgência</span>
            <span className="w-full text-center lg:flex justify-center items-center hidden invisible">
              Curabilidade
            </span>
            <span className="w-full text-center lg:flex justify-center items-center hidden invisible">ConstanteQ</span>
            <span className="w-full text-center flex justify-center items-center  ">Tempo Esperando</span>
          </header>
          <div className="flex flex-col w-full p-0 mt-2">
            {data?.map((patient: any, index: number) => (
              <div
                key={index}
                className={`w-full cursor-pointer transition-all flex items-center   py-3 ${
                  index % 2 ? "hover:bg-black/20" : "bg-[#d9d9d9] hover:bg-black/20"
                }`}
              >
                <span className="w-full text-center flex justify-center items-center">{index + 1}</span>
                <span className="w-full text-center flex justify-center items-center text-white bg-[#4b4e6d] rounded-md">
                  {patient.patientWalletAddress.substring(0, 12)}...
                </span>
                <span className="w-full text-center lg:flex justify-center items-center hidden invisible">{`${patient.disease}`}</span>
                <span className="w-full text-center flex justify-center items-center ">{`${patient.urgency}`}</span>
                <span className="w-full text-center lg:flex justify-center items-center hidden invisible">{`${patient.curability}`}</span>
                <span className="w-full text-center lg:flex justify-center items-center hidden invisible">{`${patient.qConstant}`}</span>
                <span className="w-full text-center flex justify-center items-center">{`${patient.priority}`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-items-center text-center align-items-center w-[25vw] bg-[#d9d9d9] pt-10">
          <h1 className="text-[#6A6D86] text-7xl font-semibold">2°</h1>
          <div className="flex flex-col border-2 space-y-0">
            <p className="m-0">Gravidade</p>
            <p className="text-[#6A6D86] text-3xl font-semibold">Altíssima</p>
          </div>
          <div className="flex flex-col border-2 justify-items-center">
            <p className="m-0">Possui doença transmissível?</p>
            <p className="text-[#6A6D86] text-3xl font-semibold">Não</p>
          </div>
          <div className="flex flex-col justify-items-center space-y-0">
            <p className="m-0">Data</p>
            <p className="text-[#6A6D86] text-3xl font-semibold">23/03/2024</p>
          </div>
        </div>
      </div>
    </AccountDetail>
  );
}
