import type { JSX } from "react";
import contactData from "../data/contacts";
import Footer from "../components/Footer";

function ContactSection(): JSX.Element {
  return (
    <div className="bg-primary text-light-text">
      <div className="container mx-auto mt-30 px-15" id="contact">
        <h2 className="font-poppins text-primary ml-0.5 text-2xl font-semibold tracking-widest">
          CONTACT
        </h2>
        <h3 className="font-poppins mt-5 text-4xl font-semibold text-white">
          Get In Touch
        </h3>
        <p className="font-inter pt-5 text-xl leading-loose">
          Connect with me using the links below:
        </p>
        <div className="font-inter mt-5 flex flex-col gap-6 text-xl md:flex-row">
          {contactData.map((contact, index) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");

            return (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-2 transition hover:text-white"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon /> {contact.label}
              </a>
            );
          })}
        </div>
        <hr className="border-light-text/45 mt-15 border-t pb-5"></hr>
      </div>
      <Footer />
    </div>
  );
}

export default ContactSection;
