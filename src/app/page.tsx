"use client";
import Navigation from "@/components/Navigation/Navigation";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Einzelberatung und Therapie Paarberatung",

      content:
        "Sie suchen nach neuen Lösungswegen und wollen etwas in Ihrem Leben verändern? In der Einzeltherapie bieten wir Ihnen Hilfe bei der Bewältigung von persönlichen Lebenskrisen, Ängsten und Konflikten. Wir beraten Sie auch bei Partnerschaftsproblemen, familiären Schwierigkeiten und Erziehungsfragen. In unserer gemeinsamen Arbeit unterstützen wir Sie beim Finden und Erleben von neuen Perspektiven, wenn Sie das Gefühl haben, sich in einer Sackgasse zu befinden und kein Licht mehr am Ende des Tunnels sehen... Wir stehen Ihnen hilfreich zur Seite beim Finden von Auswegen, wenn Sie sich erschöpft fühlen und mehr innere Balance, Wohlbefinden und verbesserte Leistungsfähigkeit erreichen wollen.  ",
    },
    {
      title: "Paartherapie",

      content:
        "Therapie zur Förderung der Kommunikation und des Verständnisses in Beziehungen.",
    },
    {
      title: "Familientherapie",

      content:
        "Unterstützung und Therapie für die gesamte Familie zur Stärkung familiärer Beziehungen.",
    },
    {
      title: "Kinder und Jugendlichentherapie",

      content:
        "Spezialisierte Therapie für Kinder und Jugendliche zur Unterstützung ihrer emotionalen Entwicklung.",
      image: "/images/vertrauen.webp",
    },
    {
      title: "Coaching",

      content:
        "Persönliches Coaching für Ihre berufliche und persönliche Weiterentwicklung.",
    },
  ];
  return (
    <div className="container font-serif max-w-[1800px]">
      <main>
        <div
          className="text-center mx-auto w-full h-[80vh] flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/images/g.jpg)" }}
        >
          <Navigation />

          <div className="max-w-xs mx-auto h-[40vh]">
            <p className=" font-serif text-lg leading-6 text-[#595959] italic ">
              Jedes Ding hat drei Seiten: eine, die Du siehst, eine, die ich
              sehe und eine, die wir beide nicht sehen. <br />
              <p className="mt-4">
                <strong>Chinesische Weisheit</strong>
              </p>
            </p>
          </div>
        </div>

        <div className="text-left px-8 mt-8 flex flex-col gap-5">
          <h2 className=" text-[#e6bc6d] text-4xl font-extrabold tracking-tight lg:text-4xl">
            Unser Ansatz
          </h2>
          <p className="text-gray-600">
            In unserer Praxis unterstützen wir Einzelpersonen, Paare, Kinder,
            Jugendliche und Familien in schwierigen Lebenssituationen dabei,
            <strong>Kraft</strong>, <strong>Vertrauen </strong>und{" "}
            <strong>Klarheit</strong> zu finden, um neue Wege zu gehen. Wenn Sie
            sich persönlich weiterentwickeln oder ihre Lebensqualität verbessern
            möchten, stehen wir ihnen gern als Beraterin/Berater oder
            Therapeutin / Therapeut zur Seite. Unsere Settings finden in Co-Team
            statt und bei Bedarf auch mit einem Beraterin/Berater-Therapeutin /
            Therapeut.{" "}
          </p>
          <p>
            {" "}
            Wir sind davon überzeugt, dass Sie über alle Fähigkeiten und
            Ressourcen verfügen, um dauerhafte und konstruktive Lösungen für
            sich entwickeln und umzusetzen zu können. Ziel unserer gemeinsamen
            Arbeit ist es, diese Ressourcen zu aktivieren und nutzbringend
            einzusetzen. Ein Perspektivwechsel hilft oft, den Blick für Neues zu
            öffnen und Klarheit zu finden.
          </p>

          <p>
            Kontaktieren Sie uns und vereinbaren ein kostenloses Erstgespräch
            (ca. 45 Min). Wir freuen uns auf Ihren Anruf oder auf Ihre Mail.
          </p>
        </div>

        <section className="px-8 mt-8">
          <h2 className="text-4xl font-extrabold text-[#e6bc6d]">Angebote</h2>
          <div className="mt-4">
            {services.map((service, index) => (
              <div key={index} className="mb-2 border-b border-gray-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left text-grey py-4 text-lg font-semibold"
                >
                  {service.title}
                </button>
                {activeIndex === index && (
                  <div className="pl-5 pt-2 text-gray-600">
                    <p>{service.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
     <Footer />
    </div>
  );
}
