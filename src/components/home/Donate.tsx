import { Button, Container } from '../utils';
import { BiDonateHeart } from 'react-icons/bi';


export const Donate = () => {
    return (
        <section id="Donate" className="bg-white h-1/2 w-screen py-12">
                <div className="md:flex md:flex-col md:justify-items-center grid gap-y-4 grid-rows-3 place-items-center">
                    <p className="flex justify-center font-extrabold text-5xl gap-x-4 text-navy">
                        Donate <BiDonateHeart className="text-6xl text-navy"/>
                    </p>
                    <p className="text-navy text-xl w-2/3">
                        Contributions enable us to sustain and grow the project through operating expenses such as
                        hosting and serving downloads. We use Open Collective to make all donations and expenses
                        transparent, which means you can see exactly how we utilize donated* funds anytime.
                    </p>
                    <p className="text-navy text-opacity-80 w-1/2">
                        *No profit is generated from donations. Donating does not guarantee access to additional content
                        nor its exclusivity if such content is ever given.
                    </p>
                    <Button className="border-2 border-navy text-navy p-3 h-16 w-48 text-2xl
                     hover:bg-navy hover:text-white">
                        <a href="https://opencollective.com/heavy-division-simulations">Donate</a>
                    </Button>
                </div>
        </section>
    );
};


