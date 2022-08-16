import { Container } from './Container';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faFacebook, faGithub, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-sky transition" icon={props.icon} size="sm" />
    </a>
);

export const Footer = () => {
   return (
        <footer>
                <div className="flex flex-col-4 justify-center gap-x-6 md:gap-x-4 text-5xl">
                    <FooterIconItem icon={faGithub} href="https://github.com/Heavy-Division" />
                    <FooterIconItem icon={faDiscord} href="https://discord.gg/ZtbHT7jkMW" />
                    <FooterIconItem icon={faTwitter} href="https://twitter.com/heavydivsim" />
                    <FooterIconItem icon={faYoutube} href="https://discord.gg/ZtbHT7jkMW" />
                </div>
                <div className="flex flex-col-3 justify-center gap-x-4 mt-3">
                    <a href="/" className="hover:underline hover:text-blue-sky">Source Code</a>
                    <a href="/" className="hover:underline hover:text-blue-sky">Terms of Service</a>
                    <a href="/privacy" className="hover:underline hover:text-blue-sky">Privacy Policy</a>
                </div>
            <p className="flex justify-center my-5 px-4 text-sm">© Heavy Division and its contributors 2020-2022</p>
        </footer>
    );
}
