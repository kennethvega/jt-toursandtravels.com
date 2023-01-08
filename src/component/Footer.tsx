import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import Container from './utility/Container';
import { HashLink as Link } from 'react-router-hash-link';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className="p-10 pt-10 sm:p-2 bg-[#F5F5F5] w-full mx-auto">
      <Container>
        <div className="grid grid-cols-4-custom  gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-darkBlue">JT-Tours&Travels</h1>
            <span className="flex items-center gap-3 text-gray">
              <IoLocationSharp /> Philippines
            </span>
            <p className="text-sm mt-2 text-gray">Copyright © by JT-Tours&Travels, Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Contact us</p>
            <span className="flex items-center gap-3 text-gray">
              <AiOutlinePhone /> 09298418876
            </span>
            <span className="flex items-center gap-3 text-gray">
              <AiOutlineMail />
              <a href="mailto:jttraveltours2022@gmail.com" aria-label="jttraveltours2022@gmail.com">
                jttraveltours2022@gmail.com
              </a>
            </span>
          </div>

          <div>
            <p className="font-semibold">Useful links</p>
            <div className="flex gap-10">
              <ul className="flex flex-col gap-3 mt-2">
                <li>
                  <Link to="/#" className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#product" className="link ">
                    Travel packages
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="link ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#faq" className="link">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="link ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="font-semibold">Social links</p>
            <div className="flex gap-5 mt-6 text-xl text-gray">
              <a href="https://www.facebook.com/profile.php?id=100087892865927" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="cursor-pointer  hover:text-blue" />
              </a>
              <BsTwitter className="cursor-not-allowed" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
