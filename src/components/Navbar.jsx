import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Akash.Dev</h1>
            <ul className="flex gap-6 text-lg">
                <li><Link to="/" className="hover:bg-green-500 p-1 rounded">Home</Link></li>
                <li><Link to="/project" className=" hover:bg-green-500 p-1 rounded">Project</Link></li>
                <li><Link to="/about" className=" hover:bg-green-500 p-1 rounded">About</Link></li>
                <li><Link to="/contact" className="hover:bg-green-500 p-1 rounded ">Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;