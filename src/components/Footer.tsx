import { redirect } from "next/navigation";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoDiscord,
} from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex sm:justify-end mt-1.5 sm:flex-row">
            <div>
                <a href="https://discord.gg/k8dd4yMTRx" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoDiscord className="h-12 w-12 mr-10"/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/fahadfaruqi42/" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoLinkedin className="h-12 w-12 mr-10"/>
                    </button>
                </a>
                <a href="https://github.com/BYTE-Club-CCNY" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoGithub className="h-12 w-12 mr-10"/>
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoInstagram className="h-12 w-12 mr-10"/>
                    </button>
                </a>
            </div>
        </footer>
    );
};
// Needed: instagram link
