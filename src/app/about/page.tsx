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
      <section className="max-w-[800px] mx-auto my-20 flex flex-col gap-6 items-center bg-[#faebd7] p-11">
        <h1 className=" text-[#e6bc6d] text-6xl font-extrabold tracking-tight lg:text-4xl text-center">Über Uns</h1>
        <div className="my-8 flex flex-col items-center gap-10">
        <Image
          src="/images/Andrea.webp"
          height={400}
          width={400}
          alt="person"
        ></Image>
       
        <h2 className="text-2xl">Andrea Kompatzki</h2>
        <p>
          Ich (Jahrgang 1971) habe an der Freien Universität Berlin - Pädagogik
          (Diplom) mit den Nebenfächern Psychologie und Soziologie studiert.
          Seit Abschluss meines Studiums arbeite ich bei unterschiedlichen
          Trägern der sozialen Arbeit mit Kindern, Jugendlichen, Erwachsenen und
          Familien und als Familientherapeutin. ​ 
        </p>
        <p>Am Context Institut für
          systemische Beratung und Therapie habe ich 2013 meine Ausbildung zur
          systemischen Therapeutin für Einzelne, Paare und Familien
          abgeschlossen. Beim Gesundheitsamt Tempelhof-Schöneberg habe ich die
          Prüfung zum HP für Psychotherapie abgelegt. Seit Anfang 2014 arbeite
          ich in meiner eigenen Praxis. Ich bin aktives Mitglied der Deutschen
          Gesellschaft für Systemische Therapie, Beratung und Familientherapie
          (DGSF) und der Regionalgruppe Berlin Brandenburg.</p>
          <p> Um mich fachlich
          weiterzuentwickeln, nehme ich regelmäßig an Fortbildungen teil. Die
          Teilnahme an Supervisionen und Intervisionen sind für mich
          selbstverständlich, um meine Arbeit zu reflektieren.</p>
   
        </div>
        <div className="my-8 flex flex-col items-center gap-10">
        <Image
          src="/images/Levent.webp"
          height={400}
          width={400}
          alt="person"
        ></Image>
        <h2 className="text-2xl">Levent Gülfirat</h2>
        <p>
          Ich (Jahrgang 1967) habe an der Freien Universität Berlin - Pädagogik
          (Diplom) mit den Nebenfächern Psychologie und Soziologie studiert.
          Seit Abschluss meines Studiums arbeite ich bei unterschiedlichen
          Trägern der sozialen Arbeit mit Kindern, Jugendlichen, Erwachsenen und
          Familien. 
        </p>
        <p>Am INSA GmbH, Institut für systemische Beratung und Therapie
          habe ich meine Ausbildung zum systemischen Therapeuten für Einzelne,
          Paare und Familien abgeschlossen (zertifiziert durch die Deutsche
          Gesellschaft für Systemische Therapie, Beratung und Familientherapie -
          DGSF). Am GST - GESELLSCHAFT FÜR SYSTEMISCHE THERAPIE UND BERATUNG
          habe meine Ausbildung zum systemischen Kinder- und
          Jugendlichetherapeuten abgeschlossen (zertifiziert durch die Deutsche
          Gesellschaft für Systemische Therapie, Beratung und Familientherapie -
          DGSF). Des Weiteren bin ich ausgebildete insoweit erfahrene Fachkraft
          für Kinderschutz nach §8a (Fortbildungsakademie - SFBB). Zur Zeit
          arbeite ich als Familien-, Paar-, Kinder- und Jugendlichetherapeut.</p>
          </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
