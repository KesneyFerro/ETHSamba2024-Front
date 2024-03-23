"use client";

import AccountDetail from "~~/components/AccountDetail";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function Tabela() {
  const { data } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getAllPatients",
    args: [""],
  } as any);

  console.log(data);
  return (
    <AccountDetail>
      <div className="flex justify-center flex-col items-center space-x-2">
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
      </div>
    </AccountDetail>
  );
}
