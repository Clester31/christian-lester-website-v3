import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mx-auto ">
      <div className="lg:w-1/2 flex flex-col items-center">
        <h1 className="w-4/5 text-center text-md md:text-lg lg:text-xl">
          You can get in touch with me through the contact info listed below or
          you can use the form on the right to send me an email. I will respond
          to all requests as quickly as possible. Thank you!
        </h1>
        <div className="ml-4 mt-8 text-md md:text-lg lg:text-xl border border-(--color-border) py-4 px-8 xl:px-16 rounded-xl bg-(--color-card)">
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
      <div className="flex flex-col items-center mx-auto w-1/2">
        <h1 className="flex justify-center text-xl">Email Form</h1>
        <ContactForm />
      </div>
    </div>
  );
}
