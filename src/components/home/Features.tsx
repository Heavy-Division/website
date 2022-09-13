import { Container } from '../utils';
import { Card } from '../utils';
import { desc } from '../../data';

export const Features = () => {

    return (
        <section id="features" className="w-screen bg-white md:py-8 md:px-12">
                <div className="grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3 gap-4 md:px-6">
                    <div className="h-[270px] p-12">
                        <div>
                           <p className="flex justify-center text-5xl text-navy font-extrabold underline underline-offset-8 decoration-8 decoration-blue-tailwind">
                               Features
                            </p>
                            <p className="flex justify-center text-navy font-semibold text-center text-3xl mt-4">
                                Enhancements B78XH brings to your flying experience
                            </p>
                        </div>

                    </div>
                    <Card title={"LNAV"} body={desc.lnav} url={"/svg/lnav.svg"} className="bg-navy" />
                    <Card title={"VNAV"} body={desc.lnav} url={"/svg/VNAV.svg"} className="md:bg-navy md:text-white text-navy" />
                    <Card title={"Hold"} body={desc.lnav} url={"/svg/Hold.svg"} className="bg-navy" />
                    <Card title={"FMGC"} body={desc.lnav} url={"/svg/CDU.svg"} className="md:bg-navy md:text-white text-navy" />
                    <Card title={"PFD"} body={desc.lnav} url={"/svg/PFD.svg" } className="bg-navy" />
                    <Card title={"MFD"} body={desc.lnav} url={"/svg/MFD.svg"}  className="md:bg-navy md:text-white text-navy" />
                    <Card title={"Sounds"} body={desc.lnav} url={"/svg/lnav.svg"} className="bg-navy" />
                </div>
        </section>
    )
};

