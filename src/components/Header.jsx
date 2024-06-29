export default function Header({ children, className }) {
    return (
        <header className={className}>
                <h1 className="ml-5 font-bold">FS34Blog</h1>
          <form className="ml-5">
            <input className="rounded-[5px] border border-black text-left text-sm px-2 py-1 ml-2" type="text" placeholder="Digite aqui"></input>
            <button className="rounded border border-black text-center text-[14px] px-2 py-1 ml-2 font-bold">Pesquisar</button>
          </form>
        </header>
    )
  }