import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-sky transition" icon={props.icon} size="xs" />
    </a>
);

export const Footer = () => {
    const year = new Date().getFullYear();
   return (
        <footer>
                <div className="flex flex-col-4 justify-center gap-x-6 sm:gap-x-4 text-4xl">
                    <FooterIconItem icon={faGithub} href="https://github.com/Heavy-Division" />
                    <FooterIconItem icon={faDiscord} href="https://discord.gg/ZtbHT7jkMW" />
                    <FooterIconItem icon={faTwitter} href="https://twitter.com/heavydivsim" />
                    <FooterIconItem icon={faYoutube} href="https://discord.gg/ZtbHT7jkMW" />
                </div>
                <div className="flex flex-col-3 justify-center gap-x-4 px-3 text-xs md:text-lg">
                    <span className="hover:underline cursor-pointer hover:text-blue-sky">
                        <Link href={"/"}>Source Code</Link>
                    </span>

                    <span className="hover:underline cursor-pointer hover:text-blue-sky">
                    <Link href={"/"}>Terms of Service</Link>
                    </span>

                    <span className="hover:underline cursor-pointer hover:text-blue-sky">
                    <Link href={"/privacy"}>Privacy Policy</Link>
                    </span>
                </div>
            <p className="flex justify-center my-4 text-sm px-3">© Heavy Division and its contributors 2020-{year}</p>
        </footer>
    );
}
