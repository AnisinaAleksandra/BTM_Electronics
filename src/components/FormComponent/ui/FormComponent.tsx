import { ChangeEvent, FormEvent, useState } from "react";
import style from "./FormComponent.module.scss";
import { sendNotification } from "../../../shared/utils/telegram";
// import validator from "validator";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // const [isError, setIsError] = useState({
  //   name: "",
  //   error: false,
  // });
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    // if (!/[^A-Za-z]/gi.test(formData.name)) {
    //   setIsError((prev) => ({
    //     ...prev,
    //     error: true,
    //   }));
    // }
    //  if (/[^A-Za-z]/gi.test(formData.name)) {
    //    setIsError((prev) => ({
    //      ...prev,
    //      name: "",
    //      error: false,
    //    }));
    //  }
    // if (!validator.isEmail(formData.email)) {
    //   setIsError((prev) => ({
    //     ...prev,
    //     ["error"]: true,
    //   }));
    // }
    // if (validator.isEmail(formData.email)) {
    //   setIsError((prev) => ({
    //     ...prev,
    //     name: 'email',
    //     error: false,
    //   }));
    // }
    // if (!validator.isMobilePhone(formData.phone)) {
    //   setIsError((prev) => ({
    //     ...prev,
    //     ["error"]: true,
    //   }));
    // }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textMessage: string = `${formData.name}, ${formData.phone},${formData.email},${formData.message}`;
    sendNotification(textMessage, "html");
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <div className={style.Form}>
      <form className={style.form_container} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="Your phone"
          onChange={handleChange}
        />

        <textarea
          id="message"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <div className={style.button}>
          <button className={style.animatedButton}>Send Message</button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
