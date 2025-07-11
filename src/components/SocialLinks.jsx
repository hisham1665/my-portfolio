import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 items-center justify-center text-4xl sm:text-5xl md:text-5xl">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/hisham-k-h-29061428a"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        title="LinkedIn"
      >
        <FaLinkedin className="text-[#0077B5]" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/_hisham_007_/?igsh=ZXZ1bTR5enp1ajhz#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        title="Instagram"
      >
        <FaInstagram className="text-[#E1306C]" />
      </a>

      {/* Email */}
      <a
        href="mailto:hishamkhofficial@gmail.com"
        className="hover:scale-110 transition-transform"
        title="Email"
      >
        <MdEmail className="text-[#D44638]" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+917736211665"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        title="WhatsApp"
      >
        <FaWhatsapp className="text-[#25D366]" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/hisham1665"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        title="GitHub"
      >
        <FaGithub className="text-black " />
      </a>
    </div>
  );
};

export default SocialLinks;
