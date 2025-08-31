import type { JSX } from "react";
import Section from "../components/Section";
import contactData from "../data/contacts";

function ContactSection(): JSX.Element {
  return (
    <Section id="contact">
      <Section.Heading heading="Contact Me" />
      <p className="-mt-8 mb-10 text-center">
        Connect with me using the links below:
      </p>
      <div className="flex flex-col items-center justify-center gap-6 text-lg md:flex-row">
        {contactData.map((contact, index) => {
          const Icon = contact.icon;
          const isExternal = contact.href.startsWith("http");

          return (
            <a
              key={index}
              href={contact.href}
              className="flex items-center gap-2 hover:text-gray-200"
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon /> {contact.label}
            </a>
          );
        })}
      </div>
    </Section>
  );
}

export default ContactSection;
