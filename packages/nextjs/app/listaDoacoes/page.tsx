"use client";

import Link from "next/link";
import { BsLungsFill } from "react-icons/bs";
import { GiHeartOrgan } from "react-icons/gi";
import { GiLiver } from "react-icons/gi";
import { GiKidneys } from "react-icons/gi";
import { GiMazeCornea } from "react-icons/gi";
import { LiaBoneSolid } from "react-icons/lia";
import AccountDetail from "~~/components/AccountDetail";

export default function Doacoes() {
  return (
    <AccountDetail>
      <div className="flex justify-end flex-row items-end pb-10">
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row space-x-1 my-0">
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-tl-3xl">
              <Link href="/tabela">
                <div className="p-10 flex flex-row">
                  <div className="flex flex-col justify-center">
                    <GiHeartOrgan className="w-12 h-12 ml-11" />
                    <h1 className="text-2xl ml-6">Coração</h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-1/2 bg-[#C9CADA]/30 rounded-tr-3xl">
              <div className="p-10 flex flex-row">
                <div className="flex flex-col justify-center">
                  <BsLungsFill className="w-12 h-12 ml-10" />
                  <h1 className="text-2xl ml-6">Pulmão</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-1 my-5">
            <div className="w-1/2 bg-[#C9CADA]/30">
              <div className="p-10 flex flex-row">
                <div className=" flex flex-col justify-center">
                  <GiLiver className="w-12 h-12 ml-10" />
                  <h1 className="text-2xl ml-7">Fígado</h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#C9CADA]/30">
              <div className="p-10 flex flex-row">
                <div className="flex flex-col justify-center">
                  <GiKidneys className="w-12 h-12 ml-9" />
                  <h1 className="text-2xl ml-10">Rim</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-1">
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-bl-3xl">
              <div className="p-10 flex flex-row">
                <div className=" flex flex-col justify-center">
                  <GiMazeCornea className="w-12 h-12 ml-11" />
                  <h1 className="text-2xl ml-6">Córneas</h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#C9CADA]/30 rounded-br-3xl">
              <div className="p-10 flex flex-row">
                <div className="flex flex-col justify-center">
                  <LiaBoneSolid className="w-12 h-12 ml-11" />
                  <h1 className="text-2xl text-center">Medula Óssea</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountDetail>
  );
}
