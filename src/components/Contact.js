import "../css/tailwind.css";
import "../css/style.css";

function Contact() {
  return (
    <div className="bg-stabilo py-8 text-black">
      <p className="text-4xl text-center">My Contact</p>
      <div className="line-black mx-auto mt-3"></div>
      <ul className="flex items-center justify-center gap-x-10 text-2xl pt-5 pb-2">
        <li>
          <a
            className="hover:text-cyan-700"
            href="https://www.google.com/intl/id/gmail/about/"
            target={"_blank"}
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
        >
          Intan Meilanie Nugraha
        </a>{" "}
        $
      </p>
    </div>
  );
}

export default Contact;
