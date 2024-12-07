import { getHumeAccessToken } from "@app/_lib/utils/getHumeAccessToken";
import ChatWrapper from "./ChatWrapper";
import Image from "next/image";
import chat_bg from "../../public/chat_bg.jpg";

export default async function Page() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error("Access token not available.");
  }

  return (
    <div className="relative grow flex flex-col min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src={chat_bg}
          placeholder="blur"
          fill
          quality={100}
          alt="kids playing"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col grow">
        <ChatWrapper accessToken={accessToken} />
      </div>
    </div>
  );
}
