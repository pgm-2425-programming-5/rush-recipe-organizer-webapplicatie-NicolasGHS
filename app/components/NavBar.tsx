import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <Link href="/recipe" className="text-lg font-semibold">
          Recepten
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
