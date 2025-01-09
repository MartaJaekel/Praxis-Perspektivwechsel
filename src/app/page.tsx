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
      title: "Einzeltherapie und Beratung",

      content:
        "Sie suchen nach neuen Lösungswegen und Sie haben den Wunsch etwas in ihrem Leben zu verändern? In der Einzeltherapie bieten wir Ihnen Hilfe bei der Bewältigung von persönlichen Lebenskrisen, Ängsten und Konflikten. Wir beraten Sie auch bei Partnerschaftsproblemen, familiären Schwierigkeiten und Erziehungsfragen. In unserer gemeinsamen Arbeit unterstützen wir Sie beim Finden und Erleben von neuen Perspektiven, wenn Sie das Gefühl haben, sich in einer Sackgasse zu befinden und kein Licht mehr am Ende des Tunnels sehen... Wir stehen Ihnen hilfreich zur Seite beim Finden von Auswegen, wenn Sie sich erschöpft fühlen und mehr innere Balance, Wohlbefinden und verbesserte Leistungsfähigkeit erreichen wollen.  ",
      image: "/images/vertrauen.webp",
    },
    {
      title: "Paarberatung/Paartherapie",

      content: `
    Sie sehnen sich nach einer glücklichen, erfüllten und stabilen Partnerschaft?

    Wir stehen Ihnen hilfreich zur Seite, wenn Sie als Paar gemeinsam Lösungen finden möchten oder Sie das Gefühl haben, mit Ihrem/Ihrer Partner/Partnerin in Problemen (fest)zustecken. Gemeinsam erarbeiten wir individuelle Lösungen und hilfreiche Handlungsstrategien und schaffen die Grundlage für echte Nähe und erfüllende Begegnungen mit Ihrem/Ihrer Partner/Partnerin.

    Wir unterstützen Sie als Paar bei der Verbesserung der Kommunikationsfähigkeit, wenn Sprachlosigkeit, Entfremdung oder Streitigkeiten Ihre Beziehung belasten.

    Gemeinsam finden wir neue Wege und Entlastung, wenn außergewöhnliche Ereignisse wie Krankheit, eine Affäre oder die Geburt von Kindern die Partnerschaft aus dem Gleichgewicht bringen.

    Ziel der Paarberatung oder Paartherapie kann auch sein, den Weg von Trennung oder Scheidung (TUB - Trennungs- und Umgangsberatung) in respektvollem Umgang zu gehen und verantwortungsvolle Eltern zu bleiben.
`,
      image: "/images/puzzle.jpg",
    },
    {
      title: "Familientherapie",

      content: `
      Sie wünschen sich ein zufriedenes, ausgeglichenes Familienleben und suchen nach Lösungen für Konflikte mit ihren Kindern und/oder Ihrem Partner?

Wir bieten Beistand für Familien, Alleinerziehende, Patchwork-, Pflege- und Adoptivfamilien.

Wir unterstützen Sie beim Auflösen von Missverständnissen und Konflikten zum besseren, gegenseitigen Verstehen der unterschiedlichen Sichtweisen - ohne Vorwürfe und Schuldzuweisungen. In der Beratung stehen wir Ihnen hilfreich zur Seite beim gemeinsamen (neu) Entdecken familiärer Stärken und Ressourcen und der Entwicklung passender Handlungsalternativen.

In der Familientherapie unterstützen wir Sie bei der Klärung von Erziehungsfragen und der Stärkung Ihrer Erziehungskomptenz, wenn Sie sich in ihrer Elternrolle (wieder) wohler fühlen möchten. 

Themen unserer gemeinsamen Arbeit können sein: Umgang mit der Pubertät, Schulprobleme, Überforderung in der Elternrolle, Konkurrenz zwischen Geschwistern oder bestimmte Verhaltensweisen Ihrer Kinder, die Ihnen Sorgen bereiten, Eltern - Kind-Beziehung.
  `,
      image: "/images/familie.webp",
    },
    {
      title: "Kinder und Jugendlichentherapie",

      content: `
    Bei Kindern können, wie auch bei Erwachsenen, durch  herausfordernden Themen (wie z.B. Schule, Familie, Trennung, Krieg, Tod, Identitätsunsicherheiten, exzessive Mediennutzung) auch Ängste und Traumata ausgelöst werden. Kinder können wie Erwachsene unter Störungen wie Depressionen, Angststörungen und Essstörungen leiden. Wir begleiten Kinder und Jugendliche in ihrer psychisch emotionalen Entwicklung und stärken sie in ihrer Persönlichkeit. Wenn Kinder oder Jugendliche in ihrem Verhalten und emotionalen Entwicklung „auffallen“, kann dies häufig für sie selbst und für die Eltern oder Bezugspersonen eine enorme Belastung bedeuten, Fragen aufwerfen und sogar Sorgen bereiten. Viele scheuen davor zurück, sich fachliche Unterstützung zu suchen, und so liegt bereits häufig ein langer Weg hinter den Betroffenen, wenn sie bei uns ankommen. Wir haben das große Bestreben, eine möglichst umfassende Einschätzung der Problematik zu geben, damit das Kind oder der Jugendliche und die Familie schnell und nachhaltig unterstützt werden können.

​
`,
      image: "/images/kinder.jpg",
    },
    {
      title: "Coaching",

      content: `
    Sie wollen im Beruf und im persönlichen Leben erfüllt und erfolgreich sein? Sie sind persönlich oder beruflich an einem Wendepunkt?

    Im Coaching bieten wir Ihnen Unterstützung bei der Klärung Ihrer beruflichen und persönlichen Ziele.
    
    Wir begleiten Sie konstruktiv und ressourcenorientiert bei Veränderungsprozessen und Entscheidungen. Gemeinsam erarbeiten wir Perspektiven für die Umsetzung neuer Ideen.
    
    Beim Coaching entwickeln wir Strategien, um Ihre Leistungsfähigkeit und Arbeitszufriedenheit zu erhalten oder wiederzuerlangen.
`,
      image: "/images/coaching.png",
    },
  ];
  return (
    <div className="container font-serif max-w-[1800px]">
      <main>
        <div
          className="text-center mx-auto w-full h-[80vh] flex flex-col items-center justify-between bg-top bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/images/g.jpg)",
            backgroundPosition: "10% 10%",
          }}
        >
          <Navigation />

          <div className="max-w-xs mx-auto h-[40vh]">
            <p className=" font-serif text-lg leading-6 text-[#595959] italic ">
              Jedes Ding hat drei Seiten: eine, die Du siehst, eine, die ich
              sehe und eine, die wir beide nicht sehen. <br />
              <span className="mt-4">
                <strong>Chinesische Weisheit</strong>
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto my-20">
          <div className="text-left px-8 mt-8 flex flex-col gap-5">
            <h2 className=" text-[#e6bc6d] text-4xl font-extrabold tracking-tight lg:text-4xl">
              Unser Ansatz
            </h2>
            <p className="text-gray-600">
              In unserer Praxis unterstützen wir Einzelpersonen, Paare, Kinder,
              Jugendliche und Familien in schwierigen Lebenssituationen dabei,{" "}
              <strong>Kraft</strong>, <strong>Vertrauen </strong>und{" "}
              <strong>Klarheit</strong> zu finden, um neue Wege zu gehen. Wenn
              Sie sich persönlich weiterentwickeln oder ihre Lebensqualität
              verbessern möchten, stehen wir ihnen gern als Beraterin/Berater
              oder Therapeutin / Therapeut zur Seite. Unsere Settings finden mit
              einer/einem BeraterIn/TherapeutIn statt.{" "}
            </p>
            <p>
              {" "}
              Wir sind davon überzeugt, dass Sie über alle Fähigkeiten und
              Ressourcen verfügen, um dauerhafte und konstruktive Lösungen für
              sich entwickeln und umzusetzen zu können. Ziel unserer gemeinsamen
              Arbeit ist es, diese Ressourcen zu aktivieren und nutzbringend
              einzusetzen. Ein Perspektivwechsel hilft oft, den Blick für Neues
              zu öffnen und Klarheit zu finden.
            </p>

            <p>
              Kontaktieren Sie uns und vereinbaren ein kostenloses Erstgespräch
              (ca. 45 Min). Wir freuen uns auf Ihren Anruf oder auf Ihre Mail.
            </p>
          </div>
        </div>
        <div id="angebote" className="w-full mx-auto bg-white">
          <section className="px-[1rem] mt-8 max-w-[900px] m-auto py-24">
            <h2 className="text-4xl font-extrabold text-[#e6bc6d]">Angebote</h2>
            <div className="mt-4">
              {services.map((service, index) => (
                <div key={index} className="mb-2 border-b border-gray-300">
                  <div
                    onClick={() => toggleAccordion(index)}
                    className=" relative w-full text-left  py-4 font-semibold"
                  >
                    <p className="text-grey break-words  text-[1rem] lg:text-[1.5rem]">{service.title}</p>
                    <img
                      src="/svg/plus.svg"
                      height={20}
                      width={20}
                      className="absolute right-0 bottom-[21px]"
                    ></img>
                  </div>
                  {activeIndex === index && (
                    <div className=" pt-2 text-gray-600 flex flex-col gap-4 pb-3">
                      <img src={service.image} className="" />
                      <p className="py-5">{service.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
        <div id="preise" className="max-w-[900px] mx-auto py-16">
          <div className="text-left px-8 mt-8 flex flex-col gap-5">
            <h2 className=" text-[#e6bc6d] text-4xl font-extrabold tracking-tight lg:text-4xl">
              Kosten & Erstattung
            </h2>
            <p className="text-gray-600">
              Die Systemische Therapie ist vom Wissenschaftlichen Beirat für
              Psychotherapie als Verfahren anerkannt, kann aber momentan in
              Deutschland noch nicht über die gesetzliche Krankenkasse
              abgerechnet werden. Sie können jedoch die Kosten in der
              Steuererklärung als außergewöhnliche Belastung geltend machen.
              Einige private Krankenkassen erstatten die Kosten, bitte
              informieren Sie sich im Vorfeld bei ihrer Kasse. Vorteile der
              Selbstzahlung bei Therapie: Sie erhalten sehr schnell einen Termin
              und müssen nicht u.U. mehrere Monate auf ein erstes Gespräch
              warten. Es erscheint in keiner Akte, dass Sie beraterische oder
              therapeutische Hilfe in Anspruch genommen haben.
            </p>
            <p>
              Die Therapie von Kindern und Jugendlichen mit ihren Eltern kann
              ebenso wie Familientherapie beim Jugendamt beantragt und über das
              KJHG (Kinder- und Jugendhilfe-Gesetz) finanziert werden. Gern
              informieren wir Sie dazu im Vorfeld. Aufgrund der überwiegend
              lösungsorientiert ausgerichteten Arbeit ist die Stundenanzahl
              unserer gemeinsamen Arbeit meist sehr niedrig.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Einzelberatung, - Einzeltherapie, Coaching:</strong> 90
                Minuten: 130 EUR - inkl. Mwst. (ein Berater/Therapeut)
              </li>
              <li>
                <strong>Paartherapie 90 Minuten:</strong> 210 EUR - inkl. Mwst.
                (zwei Berater/Therapeuten)
              </li>
              <li>
                <strong>Familientherapie 90 Minuten:</strong> 210 Euro - inkl.
                Mwst. (zwei Berater/Therapeuten)
              </li>
            </ul>
            <p>
              Bitte sagen Sie vereinbarte Termine, die Sie nicht einhalten
              können, spätestens 48 Stunden vorher ab, da wir die für Sie
              reservierte Zeit ansonsten in Rechnung stellen müssen. Wir bitten
              um Ihr Verständnis!
            </p>
          </div>
        </div>
        <div className="w-full mx-auto py-16 bg-white">
          <div className="text-left px-8 m-auto mt-8 flex flex-col gap-5 max-w-[900px]">
            <h2 className=" text-[#e6bc6d] text-[2rem] font-extrabold tracking-tight lg:text-4xl break-words">
              Literatur
              <wbr />
              -empfehlungen
            </h2>
            <h3 className="text-[1.3rem]">Für Paare</h3>
            <ul>
              <li>
                <strong>John Gottman (2003):</strong>{" "}
                <i>Die 7 Geheimnisse der glücklichen Ehe</i>, Ullstein Verlag
                München
              </li>
              <li>
                <strong>Eva-Maria Zurhorst (2009):</strong>{" "}
                <i>Liebe dich selbst und es ist egal, wen du heiratest</i>,
                Goldmann Verlag München
              </li>
              <li>
                <strong>Hans Jellouschek (1992):</strong>{" "}
                <i>Die Kunst als Paar zu leben</i>, Kreuz Verlag Stuttgart
              </li>
              <li>
                <strong>Hans Jellouschek (1998):</strong>{" "}
                <i>Wie Partnerschaft gelingt – Spielregeln der Liebe</i>, Herder
                Verlag Freiburg
              </li>
              <li>
                {" "}
                <strong>Hans Jellouschek (2004):</strong>{" "}
                <i>Liebe auf Dauer. Die Kunst ein Paar zu bleiben</i>, Kreuz
                Verlag Stuttgart
              </li>
              <li>
                {" "}
                <strong>Michael Lukas Möller (1988):</strong>{" "}
                <i>Die Wahrheit beginnt zu zweit. Das Paar im Gespräch</i>,
                Rowohlt Verlag Reinbek
              </li>
              <li>
                <strong>Roland Weber (2007):</strong>{" "}
                <i>Wenn die Liebe Hilfe braucht</i>, Klett-Cotta Stuttgart
              </li>
              <li>
                <strong>Jürg Willi (1993):</strong>{" "}
                <i>Was hält Paare zusammen?</i>, Rowohlt Verlag Reinbek
              </li>
              <li>
                <strong>Erich H. Witte/Helga Wallschlag (2006):</strong>{" "}
                <i>Die fünf Säulen der Liebe. Wie Paare glücklich bleiben</i>,
                Herder Verlag Freiburg
              </li>
            </ul>
            <h3 className="text-2xl">Für Eltern</h3>

            <ul>
              <li>
                <strong>Jesper Juul (2009):</strong> Grenzen, Nähe, Respekt Auf
                dem Weg zur kompetenten Eltern-Kind-Beziehung, Rowohlt Verlag
                Reinbek
              </li>
            </ul>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
