import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

const people = [
  {
    name: "Andrea Kompatzki",
    description: (
      <>
        <p>
          Ich (Jahrgang 1971) habe an der Freien Universität Berlin - Pädagogik
          (Diplom) mit den Nebenfächern Psychologie und Soziologie studiert.
          Seit Abschluss meines Studiums arbeite ich bei unterschiedlichen
          Trägern der sozialen Arbeit mit Kindern, Jugendlichen, Erwachsenen und
          Familien und als Familientherapeutin.
        </p>
        <p>
          Am Context Institut für systemische Beratung und Therapie habe ich
          2013 meine Ausbildung zur systemischen Therapeutin{" "}
          für Einzelne, Paare und Familien abgeschlossen. Beim Gesundheitsamt
          Tempelhof-Schöneberg habe ich die Prüfung zum{" "}
          HP für Psychotherapie.
          abgelegt.
        </p>
      </>
    ),
    image: "/images/Andrea.webp",
  },
  {
    name: "Levent Gülfirat",
    description: (
      <>
        <p>
          Ich (Jahrgang 1967) habe an der Freien Universität Berlin - Pädagogik
          (Diplom) mit den Nebenfächern Psychologie und Soziologie studiert.
          Seit Abschluss meines Studiums arbeite ich bei unterschiedlichen
          Trägern der sozialen Arbeit mit Kindern, Jugendlichen, Erwachsenen und
          Familien.
        </p>
        <p>
        Meine Ausbildung zum Systemischen Kinder- und Jugendlichentherapeuten habe ich bei der GST (Gesellschaft für systemische Therapie und Beratung) abgeschlossen. Meine Ausbildung  zum Familienratkoordinator habe ich beim Jakus e.V. und meine Ausbildung zur Fachkarft für Kinderschutz (IseF) am SFBB (Sozialpädagogisches Fortbildungsintitut Berlin Brandenburg) absolviert. 
 
        </p>
      </>
    ),
    image: "/images/Levent.webp",
  },
];

export default function About() {
  return (
    <>
      <div className="container font-serif max-w-[1800px]">
        <div
          className="text-center mx-auto w-full h-[136px] flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/images/g.jpg)",
            backgroundPosition: "10% 10%",
          }}
        >
          <Navigation />
          <div className="max-w-xs mx-auto h-[40vh]"></div>
        </div>
        <section className="max-w-[1000px] mx-auto my-20 p-11 flex flex-col gap-14 ">
          <h1 className="text-[#e6bc6d] text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
            ÜBER UNS
          </h1>

          {people.map((person, index) => (
           <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 items-start">
              <div className="flex justify-center">
                <Image
                  src={person.image}
                  height={400}
                  width={400}
                  alt={person.name}
                  className="rounded shadow-md hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-[#e6bc6d] mb-4">
                  {person.name}
                </h2>
                <div className="text-lg text-gray-700 space-y-6">
                  {person.description}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
