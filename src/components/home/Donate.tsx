import { BiDonateHeart } from 'react-icons/bi';
import Link from 'next/link';
import { Button } from '../utils';

export const Donate = () => (
    <section id="Donate" className="w-screen bg-white pb-12">
        <div className="grid grid-rows-3 place-items-center md:justify-center">
            <p className="flex justify-center gap-x-4 text-5xl font-extrabold text-navy mt-8">
                Donate
                {' '}
                <BiDonateHeart className="text-6xl text-navy" />
            </p>
            <p className="-my-7 w-2/3 text-xl text-navy sm:my-0">
                Contributions enable us to sustain and grow the project through operating expenses such as
                hosting and serving downloads. We use Open Collective to make all donations and expenses
                transparent, which means you can see exactly how we utilize donated* funds anytime.
            </p>
            <p className="w-1/2 text-navy text-opacity-80">
                *No profit is generated from donations. Donating does not guarantee access to additional content
                nor its exclusivity if such content is ever given.
            </p>
            <Button className="h-16 w-48 border-2 border-navy p-3 text-2xl text-navy
                     hover:bg-navy hover:text-white"
            >
                <Link href="https://opencollective.com/heavy-division-simulations">Donate</Link>
            </Button>
        </div>
    </section>
);
