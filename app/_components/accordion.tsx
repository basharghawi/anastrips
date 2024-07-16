"use client"

import Image from "next/image";
import { useState } from "react";

export default function Accordion({children, title}: Readonly<{children: React.ReactNode;title: string}>) {
  const [accState, setAccState] = useState(false);

  return (
    <div className="border-y border-b-0 border-slate-300 py-3 px-2">
      <button className="flex items-center justify-between w-full text-left"
        onClick={() => setAccState(!accState)}
      >
        {title}
        <div className={accState? 'scale-y-[-1]' : ''}>
          <Image src="/images/chevron.png" alt="chevron" width={30} height={30} />
        </div>
      </button>
      <div className={"h-0 overflow-hidden" + (accState? ' h-auto pt-7': '')}>
        <div className="text-sm text-slate-300">
          {children}
        </div>
      </div>
    </div>
  )
}