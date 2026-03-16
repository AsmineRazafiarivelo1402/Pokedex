export default function Navbaar() {
  return (
    <>
      <nav className="bg-blue-400 w-[80vw] rounded-[10px] p-5 m-auto mt-10 ">
        <div className="flex flex-column justify-between px-5 items-center ">
        <h1 className="text-fw-semibold font-serif  hover:text-white ">
          POKEDEX shuuuuuuuuuuut!
        </h1>
        <div>
          <div className="mt-2">
            <div className="flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-white has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            
              <input
                id="price"
                name="price"
                type="text"
                placeholder="seacrh"
                className="block min-w-0 grow  py-1.5 pr-3 pl-1 text-base text-white placeholder:text-black focus:outline-none sm:text-sm/6"
              />
            
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
