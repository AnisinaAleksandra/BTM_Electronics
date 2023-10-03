import style from "./FormComponent.module.scss";
import { useForm } from "react-hook-form";
import { AnyObject } from "@pbe/react-yandex-maps/typings/util/typing";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const handleSubmitForm = (data: AnyObject) => {
    console.log(errors, data);

    // const textMessage: string = `${formData.name}, ${formData.phone},${formData.email},${formData.message}`;
    // sendNotification(textMessage, "html");
  };

  return (
    <div className={style.Form} data-aos="fade-up">
      <form
        className={style.form_container}
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      >
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Min lenght is 3" },
          })}
          style={{ borderColor: errors.name?.message ? "#ff9a9a" : "#bef0e4" }}
          placeholder="Your name"
        />
        <span className={style.errorMessage}>{errors.name?.message}</span>

        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email Address is required",
            pattern:
              // eslint-disable-next-line no-useless-escape
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          style={{
            borderColor:
              errors.email?.type || errors.email?.message
                ? "#ff9a9a"
                : "#bef0e4",
          }}
          placeholder="Your email"
        />
        <span className={style.errorMessage}>{errors.email?.message}</span>
        {errors.email?.type && !errors.email?.message ? (
          <span className={style.errorMessage}>Email is not correct</span>
        ) : (
          ""
        )}
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: "Phone is required" })}
          placeholder="Your phone"
          style={{ borderColor: errors.phone?.message ? "#ff9a9a" : "#bef0e4" }}
        />
        <span className={style.errorMessage}>{errors.phone?.message}</span>
        <textarea id="message" placeholder="Message" {...register("message")} />

        <div className={style.button}>
          <button
            className={style.animatedButton}
            disabled={Object.keys(errors).length !== 0}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
