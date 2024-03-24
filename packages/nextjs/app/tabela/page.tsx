"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { TbClipboardText } from "react-icons/tb";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import pt_BR from "timeago.js/lib/lang/pt_BR";
import { useAccount } from "wagmi";
import AccountDetail from "~~/components/AccountDetail";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function Tabela() {
  const { address: connectedAddress } = useAccount();
  timeago.register("pt_BR", pt_BR);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [patient, setPatient] = useState("" as any);
  const { data } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getAllPatients",
  } as any);
  console.log(data);

  const { data: DataPerfil, refetch } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getPatientByAddress",
    args: [patient],
  } as any);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (patient && patient !== "") {
      setLoading(true);
      refetch();
      console.log("Loaded patient", DataPerfil);
    } else {
      console.log(patient);
    }
    setLoading(false);
  }, [patient, isOpen, refetch, DataPerfil]);

  function handlePatientClick(patientClicked: any, index: number) {
    setSelectedIndex(index);
    if (patientClicked != patient) {
      setPatient(patientClicked);
      setLoading(true);
    }

    onOpen();
  }

  return (
    <>
      <AccountDetail>
        <div className="flex justify-center flex-col items-center outline outline-gray-300 outline-1 bg-gray-100   py-0 pb-0 rounded-md  w-full max-w-[1500px]">
          <header className="w-full flex items-center text-base border-b-2  text-[#4B4E6D] font-medium  py-5 ">
            <span className="w-full text-center flex justify-center items-center  ">Posição</span>
            <span className="w-full text-center flex justify-center items-center  ">Identificador</span>
            <span className="w-full text-center lg:flex justify-center items-center ">Doença</span>
            <span className="w-full text-center lg:flex justify-center items-center hidden  ">Urgência</span>
            <span className="w-full text-center lg:flex justify-center items-center hidden ">Curabilidade</span>
            <span className="w-full text-center lg:flex justify-center items-center hidden ">ConstanteQ</span>
            <span className="w-full text-center flex justify-center items-center  ">Tempo Esperando</span>
          </header>

          <div className="flex flex-col w-full p-0">
            {(
              (data as unknown as any[])?.sort((a: any, b: any) => {
                const sumA = a.urgency + a.curability + a.qConstant;
                const sumB = b.urgency + b.curability + b.qConstant;
                if (sumA > sumB) return -1;
                if (sumA < sumB) return 1;
                if (a.queueEntryDate > b.queueEntryDate) return -1;
                if (a.queueEntryDate < b.queueEntryDate) return 1;
                return 0;
              }) || []
            ).map((patient: any, index: number) => (
              <div
                key={index}
                onClick={() => handlePatientClick(patient.patientWalletAddress, index)}
                className={`w-full border-b-2 cursor-pointer transition-all flex items-center   py-5 ${
                  //   patient.patientWalletAddress == connectedAddress
                  //     ? "bg-[#f1f2ff]"
                  //     :
                  index % 2 ? "hover:bg-black/10" : "bg-[#eeeeee] hover:bg-black/10"
                }`}
              >
                <span className={`w-full text-center flex justify-center items-center `}>
                  <span
                    className={`${patient.patientWalletAddress == connectedAddress && "bg-[#d3d6ee] px-3 rounded-md"}`}
                  >
                    {index + 1}° {patient.patientWalletAddress == connectedAddress && " - Você"}
                  </span>
                </span>
                <span className="w-full text-center gap-x-1 flex justify-center items-center text-white bg-[#4b4e6d] rounded-md">
                  {patient.patientWalletAddress.substring(0, 10)}...
                  <span className="text-white">
                    <TbClipboardText />
                  </span>
                </span>
                <span className="w-full text-center flex justify-center items-center ">{`${patient.disease}`}</span>
                <span className="w-full text-center lg:flex justify-center items-center hidden">{`${patient.urgency}`}</span>
                <span className="w-full text-center lg:flex justify-center items-center hidden">{`${patient.curability}`}</span>
                <span className="w-full text-center lg:flex justify-center items-center hidden">{`${patient.qConstant}`}</span>
                <span className="w-full text-center flex justify-center items-center">
                  <TimeAgo locale="pt_BR" datetime={`${new Date(Number(patient.queueEntryDate) * 1000)}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </AccountDetail>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Informações do Paciente</ModalHeader>
              <ModalBody>
                {loading && <p>Carregando...</p>}
                {!loading && (
                  <div className="flex flex-col">
                    <div className="flex gap-x-5 ">
                      <h3 className="text-5xl text-[#4b5079] font-semibold rounded-lg m-0">{selectedIndex + 1}°</h3>

                      <p className="bg-[#f5f6ff] m-0 break-all cursor-pointer transition-all hover:bg-[#e2e5ff] text-[#4b5079] p-1 px-3 rounded-md">
                        {String(DataPerfil?.[4] || "Carregando...")}
                      </p>
                    </div>
                    <Divider className="my-4" />

                    <div className="mb-2 flex flex-col p-2 px-4 bg-[#f5f6ff] rounded-md ">
                      <div className="flex gap-2">
                        <span className="font-semibold">Entrada:</span>
                        <span className="text-[#4b5079]">{`${new Date(
                          Number(DataPerfil?.[10]) * 1000,
                        ).toLocaleString()}`}</span>
                      </div>
                    </div>
                    <div className="flex flex-col p-2 px-4 bg-[#f5f6ff] rounded-md ">
                      {/* <div className="flex gap-2">
                        <span className="font-semibold">Nome:</span>
                            <span className="text-[#4b5079]"></span> 
                      </div> */}
                      <div className="flex gap-2">
                        <span className="font-semibold">Idade:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[2] || "Carregando...")}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Tipo Sanguíneo:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[5] || "Carregando...")}</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-semibold">Tamanho do Órgão:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[12] || "Carregando...")}</span>
                      </div>
                      {/* Idade do órgão */}
                      <div className="flex gap-2">
                        <span className="font-semibold">Idade do Órgão:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[6] || "Carregando...")}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Doença:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[11] || "Carregando...")}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Urgência:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[7] || "Carregando...")}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Curabilidade:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[8] || "Carregando...")}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Constante Q:</span>
                        <span className="text-[#4b5079]">{String(DataPerfil?.[9] || "Carregando...")}</span>
                      </div>
                    </div>
                    <Divider className="my-4" />
                    <span className="font-semibold">Últimas atualizações:</span>
                    <div className="gap-y-2 flex flex-col w-full">
                      {DataPerfil?.[13]?.slice(-3).map((item: any, index: number) => {
                        return (
                          <div className="flex flex-col p-2 px-4 bg-[#f5f6ff] rounded-md mt-2 " key={index}>
                            <div className="flex gap-2">
                              <span className="font-semibold">Data:</span>
                              <span className="text-[#4b5079]">{`${new Date(
                                Number(item.date) * 1000,
                              ).toLocaleString()}`}</span>
                            </div>

                            <div className="flex gap-2">
                              <span className="font-semibold">Tipo:</span>
                              <span className="text-[#4b5079] capitalize">{String(item.field || "Carregando...")}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="font-semibold">Valor Anterior:</span>
                              <span className="text-[#4b5079] capitalize">
                                {String(item.oldValue || "Carregando...")}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span className="font-semibold">Valor Atual:</span>
                              <span className="text-[#4b5079] capitalize">
                                {String(item.newValue || "Carregando...")}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span className="font-semibold">Médico:</span>
                              <span className="text-[#4b5079] break-all">
                                {String(item.doctorAddress || "Carregando...")}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
