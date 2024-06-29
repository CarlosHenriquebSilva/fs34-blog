export default function PostBody ({children, className }) {
    return (
        <div className="">
            <h1 className="text-2xl font-bold">Aprenda finalmente como centralizar</h1>
            <div className="flex items-center gap-4">
            <p className="line-clamp-4 w-1/3 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src="profile.jpg" className="rounded w-[100px] h-[100px] object-cover object-top ml-3" ></img>
            </div>
          
          
        </div>
    );
}