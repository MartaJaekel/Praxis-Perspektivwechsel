import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <section className=" p-8 md:p-32 bg-[#ffe3c2]   gap-8 ">
        <h2 className="text-3xl text-left md:text-4xl text-[#6e6c6c] font-bold  mb-8">
          KONTAKTIEREN SIE UNS
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mt-36">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Vereinbaren Sie ein kostenloses Erstgespräch (ca. 45 Min). <br />{" "}
              Wir freuen uns auf Ihren Anruf oder auf Ihre Mail.
            </p>
            <h3 className="font-semibold">Andrea Kompatzki</h3>
            <p>Tel: 0176 620 44 620</p>
            <p className="mb-4">E-mail: andrea.kompatzki@web.de</p>

            <h3 className="font-semibold">Levent Gülfirat</h3>
            <p>Tel: 0177 939 0564</p>
            <p className="mb-4">E-mail: guelfirat@yahoo.de</p>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">
                  Namen eingeben *
                </label>
                <Input
                  placeholder="Name"
                  className="border-b border-gray-300 p-2 bg-transparent rounded-none placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">
                  E-Mail-Adresse eingeben *
                </label>
                <Input
                  placeholder="E-Mail-Adresse"
                  className="border-b border-gray-300 p-2 bg-transparent rounded-none placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                Nachricht eingeben *
              </label>
              <Textarea
                placeholder="Schreiben Sie Ihre Anfrage"
                className="h-32 border-b border-gray-300 p-2 bg-transparent rounded-none placeholder-gray-400"
              />
            </div>

            <Button className="bg-[#5a6e58] hover:bg-[#4c5c4c] text-white py-2 px-6 rounded mt-8">
              EINREICHEN
            </Button>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 py-16 ">
        <div className=" flex flex-col gap-20 justify-center items-start p-4">
          <div>
            <h2 className="text-2xl text-[#e6bc6d] mb-4">ADRESSE</h2>
            <p className="text-lg mb-2">KORONA - Raum für Selbstwahrnehmung</p>
            <p className="text-lg mb-2">Curtiusstraße 10</p>
            <p className="text-lg mb-4">12205 Berlin-Lichterfeld</p>
          </div>
          <div>
            <h3 className="font-extrabold text-lg mb-2">
              Öffentliche Verkehrsmittel:
            </h3>
            <p className="text-lg mb-2">U-Bahn U3, Station Podbielskiallee</p>
            <p className="text-lg mb-2">Bus 285, Station Curtiusstraße</p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.0241125167204!2d13.291938777304681!3d52.44247797204096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85a5c889362a5%3A0x1245edd668ad4d94!2sCurtiusstra%C3%9Fe%2010%2C%2012205%20Berlin!5e0!3m2!1sit!2sde!4v1729080163778!5m2!1sit!2sde"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg shadow-md mb-6"
          ></iframe>
        </div>
      </div>
    </>
  );
}
