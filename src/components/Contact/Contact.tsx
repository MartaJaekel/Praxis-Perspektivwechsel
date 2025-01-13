import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { Mail, Phone, MapPin, Train, Bus } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
          action: "submit",
        })
        .then(async function (token: string) {
          const formData = { name, email, message, subject, token };
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
            setStatus(
              "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut."
            );
          }
        });
    });
  };

  return (
    <section id="kontakt" className="p-8 lg:p-32 bg-gradient-to-r  from-[#b45827] to-[#d47b38] gap-8">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div>
        <h2 className="text-2xl text-left md:text-4xl text-white font-bold mb-8 lg:text-5xl">
          KONTAKTIEREN SIE UNS
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-28 lg:mt-8">
          <div className="lg:w-1/2">
            {[
              {
                name: "Andrea Kompatzki",
                phone: "0177 838 2423",
                email: "andrea.kompatzki@praxis-perspektivwechsel.berlin",
              },
              {
                name: "Levent Gülfirat",
                phone: "0177 939 0564",
                email: "guelfirat@praxis-perspektivwechsel.berlin",
              },
            ].map((contact) => (
              <div
                key={contact.name}
                className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 mb-5"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {contact.name}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors group"
                  >
                    <Phone className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Tel: {contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start space-x-2 text-white/80 hover:text-white transition-colors group"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="break-words">E-mail: {contact.email}</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-20 md:mt-30"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="flex flex-col ">
                  <label className="text-sm font-semibold text-[#FFEEDB] mb-1">
                    Namen eingeben *
                  </label>
                  <Input
                    id="name"
                    aria-label="Namen eingeben"
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
                    id="email"
                    aria-label="Email eingeben"
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
                  id="betreff"
                  aria-label="Betreff eingeben"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="focus-visible:ring-transparent border-b border-gray-300 border-l-0 border-r-0 border-t-0 p-2 bg-transparent rounded-none placeholder-gray-400 focus:border-b focus:border-[#FFEEDB] text-[#FFEEDB] lg:mt-10"
                  required
                />
              </div>

              <div className="flex flex-col mt-6">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#FFEEDB] mb-1"
                >
                  Nachricht eingeben *
                </label>
                <Textarea
                  id="message"
                  aria-label="Nachricht eingeben"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="focus-visible:ring-transparent border-b border-gray-300 border-l-0 border-r-0 border-t-0 p-2 bg-transparent rounded-none placeholder-gray-400 focus:border-b focus:border-[#FFEEDB] text-[#FFEEDB] lg:mt-10"
                  required
                />
              </div>
              {status && <p className="text-white text-sm mt-4">{status}</p>}
              <Button
                type="submit"
                className="bg-[#5a6e58] hover:bg-[#4c5c4c] text-white py-2 px-6 rounded mt-8"
              >
                EINREICHEN
              </Button>
            </form>
          </div>
          {showModal && (
            <div
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 "
            >
              <div className="bg-white p-8 rounded-lg shadow-lg m-[3rem] md:m-4">
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
            <section className="w-full py-12">
      <div className="container px-4 max-w-3xl mx-auto text-white/90">
        <h2 className="text-3xl font-bold mb-8 text-white">ADRESSE</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Praxis Samson</h3>
            <a 
              href="https://maps.google.com/?q=Odenwaldstraße+23,+12161+Berlin"
              className="hover:text-white block mt-2"
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Odenwaldstraße 23
              <br />
              <span className="ml-6">12161 Berlin</span>
            </a>
            <p className="mt-2 ml-6">Linker Eingang, Erdgeschoss</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Öffentliche Verkehrsmittel:</h3>
            <p className="flex items-center gap-2 mb-2">
              <Train className="w-4 h-4" />
              U-Bahn U3, Station Podbielskiallee
            </p>
            <p className="flex items-center gap-2">
              <Bus className="w-4 h-4" />
              Bus 285, Station Curtiusstraße
            </p>
          </div>
        </div>
      </div>
    </section>

            {/* Map */}
            <div className="w-full">
              <iframe
                title="Google Maps"
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
