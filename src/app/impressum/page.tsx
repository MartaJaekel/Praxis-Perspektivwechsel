import Footer from "@/components/Footer/Footer";
import Link from "next/link";
export default function Impressum() {
   


    return (
        <>
        <div className=" text-gray-800">
            <Link href="/">
            <img src="/svg/back.svg" width={50} height={50} className="absolute top-3"></img>
            </Link>
          <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Impressum</h1>
    
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mb-2 font-semibold">
                Andrea Kompatzki / Dr. Levent Gülfirat
              </p>
              <p>Praxis Perspektivwechsel</p>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Telefon:</span> 01778382423 /
                  01779390564
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span>{" "}
                  <a
                    href="mailto:andrea.kompatzki@web.de"
                    className="text-blue-500 hover:underline"
                  >
                    andrea.kompatzki@web.de
                  </a>{" "}
                  /{" "}
                  <a
                    href="mailto:guelfirat@yahoo.def"
                    className="text-blue-500 hover:underline"
                  >
                    guelfirat@yahoo.def
                  </a>
                </p>
              </div>
            </section>
    
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Aufsichtsbehörde
              </h2>
              <p>
                Landesamt für Gesundheit und Soziales Berlin, I A 320 Fehrbelliner
                Platz 1, 10707 Berlin
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Berufsbezeichnung
              </h2>
              <p className="mb-2">
                Systemische TherapeutInnen, Dipl. PädagogInnen, NF Psychologie und
                Soziologie, HP für Psychotherapie, systemische Kinder- und
                Jugendlichetherapeuten, Insoweit erfahrener Fachkraft für
                Kinderschutz nach §8a
              </p>
              <p>
                <span className="font-semibold">Berufsrechtliche Regelungen:</span>{" "}
                „Gesetz über die berufsmäßige Ausübung der Heilkunde ohne
                Bestallung, Heilpraktikergesetz“
              </p>
              <p>
                Regelungen einsehbar unter:{" "}
                <a
                  href="https://www.gesetze-im-internet.de/heilprg/BJNR002510939.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Heilpraktikergesetz
                </a>
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Datenschutz
              </h2>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-2">
                Weitere Informationen zur Nutzung Ihrer Daten finden Sie in unserer
                vollständigen Datenschutzerklärung.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte keine Gewähr übernehmen.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Urheberrecht
              </h2>
              <p>
                Die durch uns erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser
                Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                gestattet.
              </p>
            </section>
          </div>
        </div>
        <Footer />
        </>
      );
    }
    
