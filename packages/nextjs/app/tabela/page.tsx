"use client";

import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { TbClipboardText } from "react-icons/tb";
import AccountDetail from "~~/components/AccountDetail";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function Tabela() {
  const [patient, setPatient] = useState("" as any);
  const { data } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getAllPatients",
  } as any);

  const { data: DataPerfil, refetch } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getPatientByAddress",
    args: [patient],
  } as any);

  //   console.log(data);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (patient && patient !== "") {
      setLoading(true);
      refetch();
      setSelectedPatient(DataPerfil);
      console.log("Loaded patient", DataPerfil);
    } else {
      console.log(patient);
    }
    setLoading(false);
  }, [patient, isOpen]);

  function handlePatientClick(patientClicked: any) {
    if (patientClicked != patient) {
      setPatient(patientClicked);
      setLoading(true);
    }

    onOpen();
  }

  return (
    <>
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
                onClick={() => handlePatientClick(patient.patientWalletAddress)}
                className={`w-full cursor-pointer transition-all flex items-center   py-3 ${
                  index % 2 ? "hover:bg-black/20" : "bg-[#d9d9d9] hover:bg-black/20"
                }`}
              >
                <span className="w-full text-center flex justify-center items-center">{index + 1}</span>
                <span className="w-full text-center gap-x-1 flex justify-center items-center text-white bg-[#4b4e6d] rounded-md">
                  {patient.patientWalletAddress.substring(0, 10)}...
                  <span className="text-white">
                    <TbClipboardText />
                  </span>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {loading && <p>Loading...</p>}
                <p>
                  {selectedPatient[0]}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
