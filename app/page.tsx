import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center px-16 md:px-48 py-24">
      <div className="flex flex-row md:gap-4">
        <div className="w-full flex flex-col justify-center font-lato">
          <h1 className="text-5xl my-4 text-brown-900 font-prata tracking-wider max-w-2xl mb-8">
            Think first
          </h1>
          <p className="mb-4 max-w-2xl">
            Charles Bukowski, the celebrated poet and author belief in
            spontaneity and authenticity led him to famously advise, "Don't
            try," underscoring the importance of writing without overthinking or
            over-editing.
          </p>
          <p className="mb-4 max-w-2xl">
            Here we embrace Bukowski's philosophy by encouraging writers to
            express their thoughts without the crutch of editing. Here, you
            can't delete what you've written, and typing to fast will make it go
            slower, urging you to think carefully before you type. This approach
            fosters introspective writing, helping you capture the true essence
            of your thoughts.
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
          <button className="w-full font-bold font-lato py-2 px-4 rounded-full my-8 shadow-button-shade-combi shadow-spacebar active:shadow-spacebar-press max-w-2xl">
            Start writing
          </button>
        </div>
        <div className="-mr-48">
          <img
            src="/keyboard-small-light.png"
            className="w-4/5 translate-x-1/4 h-auto"
            alt="close up of a keyboard, only the left half is visible"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between mt-16">
        <div className="flex flex-col">
          <h2 className="font-prata">one thing</h2>
          <p>
            Charles Bukowski, the celebrated poet and author, was known for his
            raw, unfiltered writing style and his unapologetic approach to life.
            His work, characterized by honesty and grit, rejected traditional
            literary norms in favor of capturing life as it is—unvarnished and
            real.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-prata">two thing</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="font-prata">three thing</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="font-prata">four thing</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="font-prata">five thing</h2>
        </div>
      </div>
    </main>
  );
}
