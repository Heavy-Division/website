const Custom404 = () => (
  <section>
      <div className="fixed top-20 left-30 justify-center mx-auto max-w-md min-h-screen text-center md:max-w-4xl">
          <h5 className="text-9xl font-bold text-black">404</h5>
          <h2 className="mt-8 text-4xl font-semibold text-black">
              Uh oh, our compass seems to broken. The requested URL does not exist.
          </h2>
          <h1 className="mt-4 text-xl font-medium text-black">
              Send a message to us on our 
               <a href="https://discord.gg/J5WUczcM"> Discord server </a>
               if you believe this was a mistake.
          </h1>
      </div>

      <img className="object-cover absolute top-0 w-screen h-screen opacity-40" src="https://cdn.discordapp.com/attachments/820431837901750282/967120842385412126/unknown.png"></img>
     
  </section>
);

export default Custom404;

