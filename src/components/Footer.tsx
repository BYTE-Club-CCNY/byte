import {redirect} from 'next/navigation'
import {IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoDiscord} from 'react-icons/io5';

export default function Footer() {

    return (
        <footer className="flex justify-end sm:justify-end p-2 pb-10 flex-col-reverse sm:flex-row">
            <div>
                <a href="https://discord.gg/k8dd4yMTRx" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoDiscord className="h-15 w-15"/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/fahadfaruqi42/" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoLinkedin className="h-15 w-15"/>
                    </button>
                </a>
                <a href="https://github.com/BYTE-Club-CCNY" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoGithub className="h-15 w-15"/>
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <button>
                        <IoLogoInstagram className="h-15 w-15"/>
                    </button>
                </a>
            </div>
        </footer>
    );
};
// Needed: instagram link
