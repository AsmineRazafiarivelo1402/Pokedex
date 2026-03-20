
interface Props {
  setSearchName: (value: string) => void;
  setSearchColor: (value: string) => void;
}

export default function Navbaar({ setSearchName, setSearchColor }: Props) {
  return (
    <>
      <nav className="bg-blue-400 w-[80vw] rounded-[10px] p-5 m-auto mt-10 ">
        <div className="flex justify-between px-5 items-center ">
          <h1 className="font-serif hover:text-white">
            POKEDEX
          </h1>

          <div className="flex gap-4">

            {/* search name */}
            <input
              type="text"
              placeholder="Search name"
              onChange={(e) => setSearchName(e.target.value)}
              className="p-2 rounded-md"
            />

            {/* search color */}
            <input
              type="text"
              placeholder="Search color"
              onChange={(e) => setSearchColor(e.target.value)}
              className="p-2 rounded-md"
            />

          </div>
        </div>
      </nav>
    </>
  );
}