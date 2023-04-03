import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-stabilo py-8 text-black">
      <p className="text-4xl text-center">My Contact</p>
      <div className="line-black mx-auto mt-3"></div>
      <ul className="flex items-center justify-center gap-x-10 text-2xl pt-5 pb-2">
        <li>
          <a
            className="hover:text-cyan-700"
            href="https://www.google.com/intl/id/gmail/about/"
            target={"_blank"}
            rel="noreferrer"
          >
            Email
          </a>
        </li>
        <li>
          <p>/</p>
        </li>
        <li>
          <a
            className="hover:text-cyan-700"
            href="https://instagram.com/intannmn?igshid=ZDdkNTZiNTM="
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <p>/</p>
        </li>
        <li>
          <a
            className="hover:text-cyan-700"
            href="https://www.whatsapp.com/?lang=id"
            target={"_blank"}
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </ul>
      <p className="text-xl text-center">
        $ Arranged by -{" "}
        <a
          className="hover:text-cyan-700"
          href="https://instagram.com/intannmn"
          target={"_blank"}
          rel="noreferrer"
        >
          Intan Meilanie Nugraha
        </a>{" "}
        $
      </p>
    </section>
  );
}

export default Contact;
