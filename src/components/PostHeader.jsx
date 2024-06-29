export default function PostHeader ({children, className }) {
    return (
        <div className="flex items-center gap-2">
          <img src="profile.jpg" 
            className="rounded-full w-12 h-12 object-cover object-top"ml-3 ></img>
          <a href="#" className="underline">Fulano de Tal</a>
          <spam>-</spam>
          <span>20/10/2024</span>
        </div>
    );
}