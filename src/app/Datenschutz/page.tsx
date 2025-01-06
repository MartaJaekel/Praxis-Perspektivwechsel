import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Datenschutz() {
    return (
      <>
        <div className="text-gray-800">
          <Link href="/">
            <img src="/svg/back.svg" width={50} height={50} className="absolute top-3" />
          </Link>
          <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Datenschutz</h1>
            <section className="mb-8">
              <p className="mb-2 font-semibold">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>
            </section>
          </div>
  
          <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Server-Log-Files</h1>
            <section className="mb-8">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p>
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
              </p>
            </section>
          </div>
  
          <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Widerspruch Werbe-Mails</h1>
            <section className="mb-8">
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </section>
  
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Cookies</h1>
            <section className="mb-8">
              <p>
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              </p>
            </section>
  
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Verantwortliche</h1>
            <section className="mb-8">
              <p>Andrea Kompatzki</p>
              <p>E-Mail: <a href="mailto:andrea.kompatzki@web.de" className="text-blue-500 underline">andrea.kompatzki@web.de</a></p>
              <p>
                Praxis Perspektivwechsel<br />
                c/o Andrea Kompatzki<br />
                Reinacher Zeile 20<br />
                12205 Berlin
              </p>
            </section>
  
            <p className="text-sm text-gray-500">Quelle: eRecht24</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  