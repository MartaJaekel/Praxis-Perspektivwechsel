import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="p-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-[#e6bc6d]">KONTAKTIEREN SIE UNS</h2>
          <p>
            vereinbaren ein kostenloses Erstgespräch (ca. 45 Min). Wir freuen
            uns auf Ihren Anruf oder auf Ihre Mail.
          </p>
          <h2 className="text-1xl text-[#e6bc6d]">SO ERREICHEN SIE UNS</h2>
          <div className="m-4">
            <Phone size={50} className="text-[#e6bc6d]" />
          </div>
          <p>Andrea Kompatzki: 0176 620 44 620</p>
          <p>Levent Gülfirat: 01779390564</p>
          <div className="m-4">
            <Mail size={50} className="text-[#e6bc6d]" />
          </div>
          <p>andrea.kompatzki@web.de</p>
          <p> guelfirat@yahoo.de</p>
        </div>
      </section>

      <div
        style={{
          backgroundPosition: "right",
        }}
        className="p-8"
      >
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl text-[#1f1e19]">KONTAKTFORMULAR</h2>
          <Input placeholder="Name" />
          <Input placeholder="email" />
          <Textarea placeholder="Nachricht" className="h-32" />
          <Button className="bg-[#dead63]">Senden</Button>
        </section>
      </div>
      <section className="p-6">
        <Image
          src="/images/saloon.webp"
          height={400}
          width={400}
          alt="image"
        ></Image>
      </section>
      <section className="flex flex-col items-center gap-4 p-8">
        <h2 className="text-2xl text-[#e6bc6d]"> ADRESSE</h2>

        <p>KORONA - Raum für Selbstwahrnehmung</p>
        <p>Curtiusstraße 10</p>
        <p>12205 Berlin-Lichterfeld</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.0241125167204!2d13.291938777304681!3d52.44247797204096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85a5c889362a5%3A0x1245edd668ad4d94!2sCurtiusstra%C3%9Fe%2010%2C%2012205%20Berlin!5e0!3m2!1sit!2sde!4v1729080163778!5m2!1sit!2sde"
          width="350"
          height="250"
          loading="lazy"
        ></iframe>
        <h3 className="font-extrabold">Öffentliche Verkehrsmittel:</h3>
        <p>U-Bahn U3, Station Podbielskiallee</p>
        <p>Bus 285, Station Curtiusstraße</p>
      </section>
    </>
  );
}
