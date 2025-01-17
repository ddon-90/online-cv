import Image from 'next/image';
import { MdEmail, MdLocationOn } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Diego Donaggio</h1> 
        <h2><em>Principal Solution Engineer</em></h2>

        <div className='email'>
          <MdEmail className='icon'/>
          <p>  diegodonaggio90@gmail.com</p>
        </div>

        <div className='location'>
          <MdLocationOn className='icon'/>
          <p>  London, UK</p>
        </div>
      </div>
      
      <div className="image-circle">
        <Image 
          src="/images/me.webp"
          alt="Circular Image"
          width={300}
          height={300}
        />
      </div>
    </header>
  );
};

export default Header;