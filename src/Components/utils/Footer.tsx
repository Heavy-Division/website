import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';


export const FooterIconItem = () => (
    <a href="src/Components/utils/Footer" target="_blank" rel="noreferrer">
        a
    </a>
);

const year = new Date().getFullYear();

export const Footer = () => (
    <footer className="py-8 bg-blue-dark">
        <Container className="flex flex-col space-y-2">

            <div className="flex gap-x-4 justify-center">
              a
            </div>

            <div className="flex gap-x-4 justify-center text-center">
                <a
                    className="hover:underline"
                    href="src/Components/utils/Footer"
                    target="_blank"
                    rel="noreferrer"
                >
                    Source Code
                </a>
                <span className="hover:underline cursor-pointer">
                    <Link href="/tos">
                        Terms of Service
                    </Link>
                </span>
                <span className="hover:underline cursor-pointer">
                    <Link href="/src/pages/privacy">
                        Privacy Policy
                    </Link>
                </span>
            </div>

            <a
                className="flex justify-center"
                href="src/Components/utils/Footer?utm_source=flybywiresim&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
            >
                Powered by
                <span className="mx-2">
                    <Image src="/svg/vercel.svg" alt="Vercel" width={60} height={20} />
                </span>
            </a>
            <em className="text-center text-teal-100">&copy; Heavy Division and its contributors {year}</em>
        </Container>
    </footer>
);
