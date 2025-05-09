import React, { forwardRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Ваше Ім'я є обов'язковим"),
  phone: yup.string().required("Номер телефону є обов'язковим"),
  date: yup
    .string()
    .required("Виберіть дату")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Невірний формат дати (рррр-мм-дд)"),
  time: yup.string().required("Виберіть час"),
  people: yup
    .number()
    .typeError("Введіть кількість людей")
    .required("Кількість людей є обов'язковою")
    .positive()
    .integer(),
  option: yup.string().required("Оберіть опцію"),
  notes: yup.string().optional(),
});

type FormValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: number;
  option: string;
  notes?: string;
  email?: string;
};
type ReservationFormProps = React.HTMLAttributes<HTMLFormElement>;

const ReservationForm = forwardRef<HTMLFormElement, ReservationFormProps>(
  (props, ref) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    // Submit handler for the form
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
      try {
        data.email = "andri0667365973@gmail.com";
        await emailjs.send(
          "service_lh9iwva",
          "template_198hiki",
          data,
          "tE13dfmPRhzhec7Vd"
        );
        reset();
        toast.success("Резервація успішно надіслана");
      } catch (error) {
        console.error("Помилка надсилання:", error);
        toast.error("Помилка надсилання");
      }
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg space-y-4 mb-30 mt-20"
      >
        <h2 className="text-2xl font-bold text-center">Забронювати столик</h2>

        <div>
          <label className="block text-gray-700">Ваше Ім'я</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block text-gray-700">Номер телефону</label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        <div>
          <label className="block text-gray-700">Дата</label>
          <input
            type="date"
            {...register("date")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.date?.message}</p>
        </div>

        <div>
          <label className="block text-gray-700">Час</label>
          <input
            type="time"
            {...register("time")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.time?.message}</p>
        </div>

        <div>
          <label className="block text-gray-700">Кількість людей</label>
          <input
            type="number"
            {...register("people")}
            className="w-full border rounded p-2"
          />
          <p className="text-red-500 text-sm">{errors.people?.message}</p>
        </div>

        <div>
          <label className="block text-gray-700">Оберіть опцію:</label>
          <select {...register("option")} className="w-full border rounded p-2">
            <option value="">Оберіть...</option>
            <option value="Звичайний столик">Звичайний столик</option>
            <option value="Столик на терасі (за наявності)">
              Столик на терасі (за наявності)
            </option>
            <option value="Оренда будиночка (200 грн)">
              Оренда будиночка (200 грн)
            </option>
          </select>
          <p className="text-red-500 text-sm">{errors.option?.message}</p>
        </div>

        <div>
          <label className="block text-gray-700">Примітки</label>
          <textarea
            {...register("notes")}
            className="w-full border rounded p-2"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-400 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Надіслати
        </button>
      </form>
    );
  }
);

export default ReservationForm;
