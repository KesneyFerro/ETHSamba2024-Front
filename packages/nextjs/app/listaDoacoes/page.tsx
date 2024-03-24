"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
      <div className="flex justify-end flex-row items-end pb-10 w-full max-w-[800px]">
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex flex-row space-x-1 my-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-1/2 cursor-pointer hover:bg-[#e4e4ec] bg-[#efeff4] rounded-tl-3xl"
            >
              {/* <Link href="/tabela/coracao"> */}
              <div className="p-10 flex flex-row">
                <div className="flex text-[#4b4e6d] gap-y-2 w-full flex-col justify-center items-center">
                  <span className="text-[50px]">
                    <GiHeartOrgan />
                  </span>
                  <h1 className="text-xl">Coração</h1>
                </div>
              </div>
              {/* </Link> */}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-1/2 cursor-pointer hover:bg-[#e4e4ec] bg-[#efeff4] rounded-tr-3xl"
            >
              <Link href="/tabela/pulmao">
                <div className="p-10 flex flex-row">
                  <div className="flex text-[#4b4e6d] gap-y-2 w-full flex-col justify-center items-center">
                    <span className="text-[50px]">
                      <BsLungsFill />
                    </span>
                    <h1 className="text-xl">Pulmão</h1>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-row space-x-1 my-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-1/2 cursor-pointer hover:bg-[#e4e4ec] bg-[#efeff4]"
            >
              <div className="p-10 flex flex-row">
                <div className="flex text-[#4b4e6d] gap-y-2 w-full flex-col justify-center items-center">
                  <span className="text-[50px]">
                    <GiLiver />
                  </span>
                  <h1 className="text-xl">Fígado</h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-1/2 cursor-pointer hover:bg-[#e4e4ec] bg-[#efeff4]"
            >
              <div className="p-10 flex flex-row">
                <div className="flex text-[#4b4e6d] gap-y-2 w-full flex-col justify-center items-center">
                  <span className="text-[50px]">
                    <GiKidneys />
                  </span>
                  <h1 className="text-xl">Rim</h1>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-row space-x-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-1/2 cursor-pointer hover:bg-[#e4e4ec] bg-[#efeff4] rounded-bl-3xl"
            >
              <div className="p-10 flex flex-row">
                <div className="flex text-[#4b4e6d] gap-y-2 w-full flex-col justify-center items-center">
                  <span className="text-[50px]">
                    <GiMazeCornea />
                  </span>
                  <h1 className="text-xl">Córneas</h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-1/2 cursor-pointer hover:bg-[#e4e4ec] bg-[#efeff4] rounded-br-3xl"
            >
              <div className="p-10 flex flex-row">
                <div className="flex text-[#4b4e6d] gap-y-2 w-full flex-col justify-center items-center">
                  <span className="text-[50px]">
                    <LiaBoneSolid />
                  </span>
                  <h1 className="text-xl text-center">Medula Óssea</h1>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AccountDetail>
  );
}
