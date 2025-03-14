import Image from "next/image";
import logo from "../../public/logos/logo.png";
import Link from "next/link";

const Logobar = () => {
  return (
    <div 
      // className="mr-[10px]"  
      className=""
      style={{ userSelect: 'none', cursor: 'pointer' }}  // Prevent text selection
    >
      {/* GDG Logo */}
      {/* <Link
        href="/" 
        className="flex items-center p-4 py-[12px] rounded-full bg-white outline-none outline-1 outline-black outline-offset-0"
        draggable="false"  // Make link undraggable
      >
        <Image
          src={logo}
          alt="GDG"
          width={40}
          height={40.67}
          draggable="false"  // Make image undraggable
        />
      </Link> */}
      <Link
          href="/" 
          className="flex items-center h-[48px] px-4 rounded-full bg-white outline-none outline-1 outline-black outline-offset-0"
      >
          <Image src={logo} alt="GDG" width={40} height={40} className="max-w-[40px] max-h-[40px]"/>
      </Link>
    </div>
  );
};

export default Logobar;