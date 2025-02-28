import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
        GayBnb
        </Link>
        <div>
          <Link href="/login" className="text-white mx-2">
            Login
          </Link>
          <Link href="/register" className="text-white mx-2">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
