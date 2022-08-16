import { Container } from '../utils';

export const Donate = () => {
    return (
        <section id="Donate">
            <Container className="max-w-6xl">
                <div className="grid grid-col-6 gap-12 px-24">
                    <h1 className="font-semibold col-start-1">Donate</h1>
                    <p>Contributions enable us to sustain and grow the project through operating expenses such as hosting and serving downloads.</p>
                    <p>We use Open Collective to make all donations and expenses transparent, which means you can see exactly how we utilze donated funds anytime.</p>
                </div>
            </Container>
        </section>
    );
};
