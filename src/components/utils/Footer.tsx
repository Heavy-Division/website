import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

type linkProp = {
    children: ReactNode,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-sky transition" icon={props.icon} size="xs" />
    </a>
);

export const ItemLink = (props: linkProp) => (
  <a href={props.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-sky">{props.children}</a>
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
                <div className="flex flex-col-3 justify-center gap-x-4">
                    <ItemLink href={"/"}>Source Code</ItemLink>
                    <ItemLink href={"/"}>Terms of Service</ItemLink>
                    <ItemLink href={"/privacy"}>Privacy Policy</ItemLink>
                </div>
            <p className="flex justify-center my-5 text-sm">© Heavy Division and its contributors 2020-2022</p>
        </footer>
    );
}
