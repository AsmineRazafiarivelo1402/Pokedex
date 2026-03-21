
import { useRef } from "react";

interface props {
  name: string;
  cries: string;
  
  image: string;
}

function PokemonCard({ image, name, cries}: props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    audioRef.current?.play();
  };

  return (
    <>
      <div className="border-2 border-blue-400 rounded-[10px] max-w-[20vw] m-auto p-5 shadow-lg grid gap-5 place-items-center">

        <img
          src={image}
          alt="pokemon image"
          className="h-40 object-cover"
        />

        <div className="text-center">
          <h1>{name}</h1>

          <h1
            onClick={playSound}
            className="cursor-pointer text-blue-500"
          >
            Play
          </h1>

          <audio ref={audioRef} src={cries} />

         
        </div>

      </div>
    </>
  );
}

export default PokemonCard;