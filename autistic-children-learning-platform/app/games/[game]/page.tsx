import { auth } from "@app/_lib/auth";
import Rate from "@app/_components/Rate";

interface PageProps {
  params: {
    game: string;
  };
}

export default async function Page({ params }: PageProps) {
  const session = await auth();

  return (
    <div>
      {/* <h1 className="text-center text-5xl text-accent-500">Guess How I Feel!</h1> */}
      <div className="flex justify-center mt-10">
        <iframe
          src={`/godot-game/${params.game}/index.html`}
          width="1000"
          height="600"
          style={{
            border: "none",
            maxWidth: "100%",
            height: "",
          }}
          title="Godot Game"
        ></iframe>
      </div>

      {session ? (
        <div>
          <h2 className="text-2xl text-accent-500 text-center mt-10">
            Rate the game
          </h2>
          <div className="flex justify-center">
            <Rate />
          </div>
        </div>
      ) : null}
    </div>
  );
}
