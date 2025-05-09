import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <div className="w-full">
        {/* Main Footer Section */}
        <div className="flex  gap-12 items-center justify-center bg-[#1c1c1c] w-full py-14 flex-col sm:flex-row">
          {/* Block 1 */}
          <div className=" sm:w-1/3 text-center items-center justify-center">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Marck Script', cursive" }}
            >
              Завітайте
            </h3>
            <p>м.Київ, вул. Шумского 3</p>
          </div>

          {/* Block 2 */}
          <div className=" sm:w-1/3 text-center">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Marck Script', cursive" }}
            >
              Вподобайте
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Block 3 */}
          <div className="w-full sm:w-1/3 text-center">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Marck Script', cursive" }}
            >
              Напишіть
            </h3>
            <p>
              <a
                href="mailto:info@ukrainski-stravy.com.ua"
                className="hover:underline"
              >
                info@ukrainski-stravy.com.ua
              </a>
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="w-full flex items-center justify-center py-10 bg-[#141414]">
          <div className="flex flex-col gap-10 items-center justify-center">
            <div className="w-full  flex justify-center items-center">
              <img src="/logo.png" alt="UKR Stravy Logo" className="h-16" />
            </div>
            <div className="text-neutral-200">© 2019 Design by A-Agency</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
