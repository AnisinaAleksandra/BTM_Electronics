import { ChangeEvent, FormEvent, useState } from "react";
import style from "./FormComponent.module.scss";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          {" "}
          <a href="#" className={style.animatedButton}>
            Register
          </a>{" "}
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
