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
      <div className="flex justify-center flex-col items-center bg-gray-100   py-5 rounded-md  w-full max-w-[1500px]">
        <header className="w-full flex items-center text-xl text-[#4B4E6D] font-medium mb-3 ">
          <span className="w-full text-center flex justify-center items-center  ">Posição</span>
          <span className="w-full text-center flex justify-center items-center  ">Identificador</span>
          <span className="w-full text-center lg:flex justify-center items-center ">Doença</span>
          <span className="w-full text-center lg:flex justify-center items-center hidden  ">Urgência</span>
          <span className="w-full text-center lg:flex justify-center items-center hidden ">Curabilidade</span>
          <span className="w-full text-center lg:flex justify-center items-center hidden ">ConstanteQ</span>
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
              <span className="w-full text-center lg:flex justify-center items-center hidden">{`${patient.disease}`}</span>
              <span className="w-full text-center flex justify-center items-center ">{`${patient.urgency}`}</span>
              <span className="w-full text-center lg:flex justify-center items-center hidden">{`${patient.curability}`}</span>
              <span className="w-full text-center lg:flex justify-center items-center hidden">{`${patient.qConstant}`}</span>
              <span className="w-full text-center flex justify-center items-center">{`${patient.priority}`}</span>
            </div>
          ))}
        </div>
      </div>
    </AccountDetail>
  );
}
