/* eslint-disable @next/next/no-img-element */
import { FaArrowRightLong } from "react-icons/fa6";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function AccountDetail({ children }: { children: React.ReactNode }) {
  const { address: connectedAddress } = useAccount();

  const { data } = useScaffoldContractRead({
    contractName: "MedicalContract",
    functionName: "getPatientByAddress",
    args: [connectedAddress],
  } as any);

  if (!connectedAddress) {
    return (
      <div className="flex bg-[#4b4e6d] flex-col w-full flex-grow h-full justify-center items-center">
        <img src="/logo.png" className="mb-5 w-[150px]"></img>
        <h3 className="text-white text-4xl font-bold text-center mb-8 max-w-[300px]">
          Conecte-se a uma conta para acessar os dados
        </h3>
        <RainbowKitCustomConnectButton />
      </div>
    );
  }
  //   console.log(data);
  if (!data) {
    return (
      <div className="flex bg-[#4b4e6d] flex-col w-full flex-grow h-full justify-center items-center">
        <img src="/logo.png" className="mb-5 w-[150px]"></img>
        <h3 className="text-white text-4xl font-bold text-center mb-8 max-w-[300px]">
          Parece que sua carteira não foi cadastrada na lista
        </h3>
        <RainbowKitCustomConnectButton />
      </div>
    );
  }

  return (
    <div className="flex bg-white flex-col w-full items-center h-full flex-grow">
      <div className="w-full flex flex-col items-center bg-[#4B4E6D] h-[200px]  p-5">
        <div id="wrapper" className="relative w-full h-full justify-center flex">
          <div className="w-full max-w-[800px] rounded-xl outline outline-[#bec1dc] outline-1 absolute bottom-[-50px] flex items-start flex-col px-6 py-6 bg-[#6a6d86]">
            <div className="rounded-full h-16 w-16 bg-gray-200"></div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col mt-2">
                <span className="text-lg text-white font-semibold">Nome_do_Paciente</span>
                <span className="text-sm text-white">Endereço do paciente: {connectedAddress.substring(0, 20)}...</span>
              </div>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
      <div className="text-black flex flex-col w-full max-w-[1200px] mx-auto">
        <div className="flex justify-center flex-col items-center space-x-2 mt-[60px]">{children}</div>
      </div>
    </div>
  );
}
