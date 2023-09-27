import { ChangeEvent, useState } from "react";
import style from "./FormComponent.module.scss";
import { sendNotification } from "../../../shared/utils/telegram";
import { useForm } from "react-hook-form";
import { AnyObject } from "@pbe/react-yandex-maps/typings/util/typing";

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const handleSubmitForm = (data: AnyObject) => {
    // event.preventDefault();
    console.log(data);

    const textMessage: string = `${formData.name}, ${formData.phone},${formData.email},${formData.message}`;
    sendNotification(textMessage, "html");
  };

  // useEffect(() => {
  //   checkIsErrorFields();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formData]);
  // const checkIsErrorFields = () => {
  //   if (formData.email === "" || validator.isEmail(formData.email) === false) {
  //     return setError(true);
  //   }
  //   if (
  //     formData.phone === "" ||
  //     validator.isMobilePhone(formData.phone) === false
  //   ) {
  //     return setError(true);
  //   }
  //   if (/[^A-Za-z]/gi.test(formData.name) || validator.isEmpty(formData.name)) {
  //     return setError(true);
  //   } else {
  //     return setError(false);
  //   }
  // };
  return (
    <div className={style.Form}>
      <form
        className={style.form_container}
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      >
        <input
          type="text"
          id="name"
          {...(register("name"),
          {
            required: "This is required",
            minLength: { value: 3, message: "Min lenght is 3" },
          })}
          placeholder="Your name"
          value={formData.name}
        />
        <input
          type="email"
          id="email"
          {...(register("email"), { required: "This is required" })}
          value={formData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <input
          type="tel"
          id="phone"
          {...(register("phone"), { required: "This is required" })}
          value={formData.phone}
          placeholder="Your phone"
        />

        <textarea
          id="message"
          placeholder="Message"
          {...register("message")}
          value={formData.message}
        />

        <div className={style.button}>
          <button className={style.animatedButton}>Send Message</button>
        </div>
      </form>
    </div>
  );
};
