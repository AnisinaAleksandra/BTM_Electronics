import style from "./FormComponent.module.scss";
import { useForm } from "react-hook-form";
import { AnyObject } from "@pbe/react-yandex-maps/typings/util/typing";
import { sendNotification } from "../../../shared/utils/telegram";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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

  const { t } = useTranslation();

  const [messageIsSend, setMessageIsSend] = useState(false);
  const handleSubmitForm = (data: AnyObject) => {
    const textMessage: string = `${data.name}, ${data.phone},${data.email},${data.message}`;
    sendNotification(textMessage, "html")
      .then((res) => {
        console.log(res);

        if (JSON.parse(res)["ok"]) {
          setMessageIsSend(JSON.parse(res)["ok"]);
        }
        if (!JSON.parse(res)["ok"]) {
          setMessageIsSend(JSON.parse(res)["ok"]);
        }
      })
      .catch((res) => {
        console.log(JSON.parse(res));

        setMessageIsSend(true);
      });
  };

  return (
    <div className={style.Form} data-aos="fade-up">
      {messageIsSend ? (
        <div className={style.form_container_message}>
          {messageIsSend ? t("message_sent") : "Error, please try again"}
        </div>
      ) : (
        <form
          className={style.form_container}
          onSubmit={handleSubmit((data) => handleSubmitForm(data))}
          style={{ display: "block" }}
        >
          <div className={style.form_title}>{t("Contact Us")}</div>

          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min lenght is 3" },
            })}
            style={{
              borderColor: errors.name?.message ? "#ff9a9a" : "#bef0e4",
            }}
            placeholder={t("Your name")}
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
            placeholder={t("Your email")}
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
            placeholder={t("Your phone")}
            style={{
              borderColor: errors.phone?.message ? "#ff9a9a" : "#bef0e4",
            }}
          />
          <span className={style.errorMessage}>{errors.phone?.message}</span>
          <textarea
            id="message"
            {...register("message")}
            placeholder={t("Message")}
          />

          <div className={style.button}>
            <button
              className={style.animatedButton}
              disabled={Object.keys(errors).length !== 0}
            >
              {t("Send Message")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default FormComponent;
