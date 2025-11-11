import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-row gap-8 mx-auto">
      <div className="w-1/2 flex flex-col text-xl items-center my-auto">
        <h1 className="w-3/4 text-center">
          You can get in touch with me through the contact info listed below or
          you can use the form on the right to send me an email. I will respond to all requests as quickly as possible. Thank you!
        </h1>
        <div className="ml-4 mt-8 text-xl border border-(--color-border) py-4 px-16 rounded-xl bg-(--color-card)">
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row items-center gap-2">
              <i className="fa-solid fa-envelope" />
              <h1>christianlester114@gmail.com</h1>
            </li>
            <li className="flex flex-row items-center gap-2">
              <i className="fa-solid fa-phone" />
              <h1>+1 (724) 986-6094</h1>
            </li>
            <li className="flex flex-row items-center underline text-(--color-accent) cursor-pointer gap-2">
              <i className="fa-brands fa-linkedin" />
              <a
                href="https://www.linkedin.com/in/christian-lester-b71412239/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex flex-row items-center underline text-(--color-accent) cursor-pointer gap-2 hover:text-(--color-accent-hover) transition-all duration-150 ease-in-out">
              <i className="fa-brands fa-instagram" />
              <a
                href="https://www.instagram.com/the_chester14/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
