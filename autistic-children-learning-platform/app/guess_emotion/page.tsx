export default function Page() {
  return (
    <div>
      <h1 className="text-center text-2xl text-accent-500">Guess my Emotion</h1>
      <div className="flex justify-center mt-10">
        <iframe
          src="/godot-game/Autism.html"
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
    </div>
  );
}
