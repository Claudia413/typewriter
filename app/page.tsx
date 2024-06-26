import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center px-8 md:px-16 md:pb-12 lg:px-24 xl:px-48 py-24 text-brown-900">
      <div className="flex flex-row gap-0 lg:gap-4">
        <div className="w-full flex flex-col justify-center font-lato">
          <h1 className="text-5xl my-4 font-prata tracking-wider max-w-2xl mb-8">
            Think first
          </h1>
          <h2 className="font-prata text-3xl mb-8">
            <span className="border-b border-solid border-current w-1/3 xl:w-72 inline-block relative bottom-3"></span>{" "}
            Write second
          </h2>
          <p className="mb-4 max-w-2xl">
            Charles Bukowski, the celebrated poet and author belief in
            spontaneity and authenticity led him to famously advise,{" "}
            <q>Don&#39;t try,</q> underscoring the importance of writing without
            overthinking or over-editing.
          </p>
          <p className="mb-4 max-w-2xl">
            Here we embrace Bukowski&#39;s philosophy by encouraging writers to
            express their thoughts without the crutch of editing. Here, you
            can&#39;t delete what you&#39;ve written, urging you to think
            carefully before you type. This approach fosters introspective
            writing, helping you capture the true essence of your thoughts.
          </p>
          {/* <p>
            Charles Bukowski, a renowned poet and author, was celebrated for his
            raw, unfiltered writing style and his unapologetic approach to life.
            Known for his eccentric and often abrasive personality, Bukowski's
            work was characterized by its honesty, grit, and refusal to conform
            to traditional literary norms.
          </p>
          <p>
            Bukowski believed in capturing the essence of his thoughts and
            emotions without overthinking or over-editing. He once said, "Don't
            try," emphasizing the importance of spontaneity and authenticity in
            writing. Bukowski's disdain for overly polished work stemmed from
            his desire to present life as it is—unvarnished and real.
          </p>
          <p>
            At Think First, we embrace Bukowski's philosophy by encouraging
            writers to express their thoughts without the crutch of editing.
            Here, you can't delete what you've written, and the text appears
            with a deliberate delay, urging you to think carefully before you
            type. This unique approach fosters a more genuine and introspective
            writing process, helping you capture the true essence of your
            thoughts.
          </p>
          <p>
            Join us in celebrating the spirit of Bukowski and discover the power
            of raw, unfiltered expression.
          </p> */}
          <Link
            href={"/typewriter"}
            className="w-full font-bold font-lato text-center py-2 px-4 rounded-3 my-8 shadow-button-shade-combi shadow-spacebar active:shadow-spacebar-press active:translate-x-px max-w-2xl"
          >
            Start writing
          </Link>
        </div>
        <div className="md:-mr-16 lg:-mr-24 xl:-mr-48 hidden md:block">
          <img
            src="/keyboard-small-light.png"
            className="w-4/5 translate-x-1/4 h-auto"
            alt="cut-out close up of a keyboard, only the left half is visible"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between mt-16 font-lato gap-7 text-center">
        <div className="flex flex-col w-full items-center">
          <h2 className="font-prata text-xl mb-4">Charles Bukowski</h2>
          <p className="text-sm leading-relaxed">
            the celebrated poet and author, was known for his raw, unfiltered
            writing style and his unapologetic approach to life. His work,
            characterized by honesty and grit, rejected traditional literary
            norms in favor of capturing life as it is—unvarnished and real.
          </p>
        </div>
        <div className="flex flex-col w-full items-center">
          <h2 className="font-prata text-xl mb-4">Your best work</h2>
          <p className="text-sm leading-relaxed">
            Write your best work with supporting options and ignore the things
            that hold you back.
          </p>
        </div>
        <div className="flex flex-col-reverse md:px-11 w-full items-center">
          <h2 className="font-prata text-xl mt-4">- Charles Bukowski</h2>
          <q className="text-sm leading-relaxed">
            An intellectual says a simple thing in a hard way. An artist says a
            hard thing in a simple way.
          </q>
          <p className="text-sm leading-relaxed">And</p>
          <q className="text-sm leading-relaxed">
            Some people never go crazy. What truly horrible lives they must
            lead.
          </q>
        </div>
        <div className="flex flex-col w-full items-center">
          <h2 className="font-prata text-xl mb-4">Reset</h2>
          <p className="text-sm leading-relaxed">
            Made with love for the age where everything is permanently being
            edited. Making you think before you write, or risk having to start
            over...
          </p>
        </div>
        <div className="flex flex-col w-full items-center">
          <h2 className="font-prata text-xl mb-4">Say hi!</h2>
          <p className="text-sm leading-relaxed">
            This is a project made for fun, but if it is helping you, or it
            could help you better with a tweak. I&#39;m happy to hear from you!
            You can reach me by{" "}
            <Link
              href={"mailto:cmjengelsman@gmail.com?subject=Think first is..."}
            >
              email{" "}
            </Link>
            or on{" "}
            <Link href={"https://www.linkedin.com/in/claudia-engelsman/"}>
              LinkedIn{" "}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
