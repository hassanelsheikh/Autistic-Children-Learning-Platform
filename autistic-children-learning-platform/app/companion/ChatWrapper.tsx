"use client";

import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@app/_components/Chat"), {
  ssr: false,
});

export default function ChatWrapper({ accessToken }: { accessToken: string }) {
  return <Chat accessToken={accessToken} />;
}
