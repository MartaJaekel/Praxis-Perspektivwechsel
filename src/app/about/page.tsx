import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function About() {
  return (
    <>
    <div className="container font-serif max-w-[1800px]">
      <div
        className="text-center mx-auto w-full h-[80vh] flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/images/g.jpg)", backgroundPosition:"10% 10%" }}
      >
    <Navigation />
<div className="max-w-xs mx-auto h-[40vh]">
          <p className="font-serif text-lg leading-6 text-[#595959] italic">
            Jedes Ding hat drei Seiten: eine, die Du siehst, eine, die ich sehe
            und eine, die wir beide nicht sehen. <br />
            <span className="mt-4">
              <strong>Chinesische Weisheit</strong>
            </span>
          </p>
        </div>
      </div>
      <section className="max-w-[1000px] mx-auto my-20 p-11 flex flex-col gap-14 items-center ">
  <h1 className="text-[#e6bc6d] text-4xl font-extrabold tracking-tight text-center lg:text-5xl">Über Uns</h1>
  
  <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10 my-10">
    <Image
      src="/images/Andrea.webp"
      height={400}
      width={400}
      alt="Andrea Kompatzki"
      className="rounded shadow-md hover:scale-105 transition-transform duration-300"
    />
    <div className="text-left">
      <h2 className="text-3xl font-bold text-[#e6bc6d] mb-4">Andrea Kompatzki</h2>
      <p className="text-lg leading-7 text-gray-700">
        Ich (Jahrgang 1971) habe an der Freien Universität Berlin - Pädagogik
        (Diplom) mit den Nebenfächern Psychologie und Soziologie studiert. Seit
        Abschluss meines Studiums arbeite ich bei unterschiedlichen Trägern der
        sozialen Arbeit mit Kindern, Jugendlichen, Erwachsenen und Familien und
        als Familientherapeutin. ​
      </p>
      <p className="text-lg leading-7 text-gray-700 mt-4">
        Am Context Institut für systemische Beratung und Therapie habe ich 2013 meine
        Ausbildung zur systemischen Therapeutin für Einzelne, Paare und Familien
        abgeschlossen. Beim Gesundheitsamt Tempelhof-Schöneberg habe ich die
        Prüfung zum HP für Psychotherapie abgelegt.
      </p>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10 my-10">
    <Image
      src="/images/Levent.webp"
      height={400}
      width={400}
      alt="Levent Gülfirat"
      className="rounded shadow-md hover:scale-105 transition-transform duration-300"
    />
    <div className="text-left">
      <h2 className="text-3xl font-bold text-[#e6bc6d] mb-4">Levent Gülfirat</h2>
      <p className="text-lg leading-7 text-gray-700">
        Ich (Jahrgang 1967) habe an der Freien Universität Berlin - Pädagogik
        (Diplom) mit den Nebenfächern Psychologie und Soziologie studiert. Seit
        Abschluss meines Studiums arbeite ich bei unterschiedlichen Trägern der
        sozialen Arbeit mit Kindern, Jugendlichen, Erwachsenen und Familien. ​
      </p>
      <p className="text-lg leading-7 text-gray-700 mt-4">
        Am INSA GmbH, Institut für systemische Beratung und Therapie habe ich meine
        Ausbildung zum systemischen Therapeuten für Einzelne, Paare und Familien
        abgeschlossen (zertifiziert durch die DGSF).
      </p>
    </div>
  </div>
</section>
    </div>
    <Footer />
    </>
  );
}
