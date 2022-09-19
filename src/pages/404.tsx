const URL_404 = 'https://media.discordapp.net/attachments/429734269838032898/1007065744737050624/404.png.png?width=959&height=682';
const Custom404 = () => (
    <section id="404">
        <div className="mx-auto flex min-h-screen flex-col justify-center text-center">
            <h3 className="text-8xl font-semibold">404</h3>
            <h4 className="text-5xl font-medium">Lost your way?</h4>
            <h4 className="text-3xl font-medium">Sorry, we can&apos;t find that page. Try vectoring back to the home page.</h4>
            <a href="/" className="mt-3 cursor-pointer border-gray-light text-3xl underline">Back</a>
        </div>
        <img src={URL_404} className="absolute top-0 -z-10 h-screen w-screen object-cover opacity-40" alt="404" />
    </section>
);

export default Custom404;
