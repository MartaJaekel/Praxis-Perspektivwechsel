import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { name, email, message, subject };

    // Send the form data to the backend API
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setShowModal(true);
      // Optionally reset the form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="kontakt" className="p-8 lg:p-32 bg-[#c56b00] gap-8">
      <div>
        <h2 className="text-2xl text-left md:text-4xl text-white font-bold mb-8 lg:text-5xl">
          KONTAKTIEREN SIE UNS
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-28 lg:mt-8">
          <div className="lg:w-1/2">
            <p className="text-lg text-white mb-6">
              Vereinbaren Sie ein kostenloses Erstgespräch (ca. 45 Min). <br />
              Wir freuen uns auf Ihren Anruf oder auf Ihre Mail.
            </p>

            {/* Contact Information */}
            <h3 className="font-semibold text-[#FFFFFF]">Andrea Kompatzki</h3>
            <p className="text-[#FFFFFF]">Tel: 0177 838 2423</p>
            <p className="mb-4 text-[#FFFFFF]">
              E-mail: andrea.kompatzki@praxis-perspektivwechsel.berlin
            </p>

            <h3 className="font-semibold text-[#FFFFFF]">Levent Gülfirat</h3>
            <p className="text-[#FFFFFF]">Tel: 0177 939 0564</p>
            <p className="mb-4 text-[#FFFFFF]">
              E-mail: guelfirat@praxis-perspektivwechsel.berlin
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-40">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="flex flex-col ">
                  <label className="text-sm font-semibold text-[#FFEEDB] mb-1">
                    Namen eingeben *
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="focus-visible:ring-transparent border-b border-gray-300 border-l-0 border-r-0 border-t-0 p-2 bg-transparent rounded-none placeholder-gray-400 focus:border-b focus:border-[#FFEEDB] text-[#FFEEDB]"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="text-sm font-semibold text-[#FFEEDB] mb-1">
                    E-Mail-Adresse eingeben *
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus-visible:ring-transparent border-b border-gray-300 border-l-0 border-r-0 border-t-0 p-2 bg-transparent rounded-none placeholder-gray-400 focus:border-b focus:border-[#FFEEDB] text-[#FFEEDB]"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <label className="text-sm font-semibold text-[#FFEEDB] mb-1">
                  Betreff *
                </label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="focus-visible:ring-transparent border-b border-gray-300 border-l-0 border-r-0 border-t-0 p-2 bg-transparent rounded-none placeholder-gray-400 focus:border-b focus:border-[#FFEEDB] text-[#FFEEDB] lg:mt-10"
                  required
                />
              </div>

              <div className="flex flex-col mt-6">
                <label className="text-sm font-semibold text-[#FFEEDB] mb-1">
                  Nachricht eingeben *
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="focus-visible:ring-transparent border-b border-gray-300 border-l-0 border-r-0 border-t-0 p-2 bg-transparent rounded-none placeholder-gray-400 focus:border-b focus:border-[#FFEEDB] text-[#FFEEDB] lg:mt-10"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-[#5a6e58] hover:bg-[#4c5c4c] text-white py-2 px-6 rounded mt-8"
              >
                EINREICHEN
              </Button>
            </form>

            {/* Status Message */}
          </div>
          {showModal && (
            <div
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 "
            >
              <div className="bg-white p-8 rounded-lg shadow-lg m-4">
                <h2 className="text-2xl font-bold text-[#5a6e58] mb-4">
                  Vielen Dank für Ihre Nachricht!
                </h2>
                <p className="text-lg text-[#5a6e58]">
                  Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
                <Button
                  onClick={() => setShowModal(false)}
                  className="bg-[#5a6e58] hover:bg-[#4c5c4c] text-white py-2 px-6 rounded mt-8"
                >
                  SCHLIESSEN
                </Button>
              </div>
            </div>
          )}

          {/* Address and Map */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Address Information */}
            <div className="flex flex-col p-4">
              <h2 className="text-2xl text-[#FFEEDB] mb-4">ADRESSE</h2>
              <p className="text-lg text-[#FFEEDB] flex items-center gap-2 mb-2">
                Praxis Samson
              </p>
              <p className="text-lg text-[#FFEEDB] flex items-center gap-2 mb-2">
                Odenwaldstraße 23
              </p>
              <p className="text-lg text-[#FFEEDB] flex items-center gap-2 mb-4">
                12161 Berlin
              </p>
              <p className="text-lg text-[#FFEEDB] flex items-center gap-2 mb-4">
                Linker Eingang, Erdgeschoss
              </p>

              <div>
                <h3 className="font-extrabold text-lg text-[#FFEEDB] mb-2">
                  Öffentliche Verkehrsmittel:
                </h3>
                <p className="text-lg text-[#FFEEDB] flex items-center gap-2 mb-2">
                  U-Bahn U3, Station Podbielskiallee
                </p>
                <p className="text-lg text-[#FFEEDB] flex items-center gap-2 mb-2">
                  Bus 285, Station Curtiusstraße
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4861.234987695652!2d13.322962698623302!3d52.467954481341756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8507f27eddf6f%3A0xd6ba64517dd1896f!2sOdenwaldstra%C3%9Fe%2023%2C%2012161%20Berlin!5e0!3m2!1sde!2sde!4v1736255700820!5m2!1sde!2sde"
                width="100%"
                height="400"
                loading="lazy"
                className="rounded-lg shadow-md border border-gray-200"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
