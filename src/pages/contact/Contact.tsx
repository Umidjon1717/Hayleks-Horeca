import { useState } from "react";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+998");
  const [contactMethod, setContactMethod] = useState("Telegram");
  const [isChecked, setIsChecked] = useState(false);

interface FormatPhoneNumberParams {
    value: string;
}

const formatPhoneNumber = ({ value }: FormatPhoneNumberParams): string => {
    let cleaned = value.replace(/\D/g, "");
    if (countryCode === "+998") {
        return cleaned.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4").slice(0, 14);
    } else if (countryCode === "+7") {
        return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4").slice(0, 15);
    } else if (countryCode === "+1") {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3").slice(0, 14);
    } else if (countryCode === "+44") {
        return cleaned.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3").slice(0, 13);
    }
    return cleaned;
};

const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(formatPhoneNumber({ value: e.target.value }));
};

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h2 className="w-full max-w-xl text-2xl font-semibold text-black text-center leading-snug">
        Buyurtma qoldiring va kerakli uskunalarni tez va qulay xarid qiling!
      </h2>

      <div className="w-full max-w-xl p-6 mt-6">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ism familiya"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:border-[#FF6418] focus:ring-2 focus:ring-[#FF6418] outline-none w-full text-gray-800"
          />

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <select
                value={countryCode}
                onChange={(e) => {
                  setCountryCode(e.target.value);
                  setPhone("");
                }}
                className="bg-transparent text-gray-700 text-sm focus:outline-none font-medium pr-2"
              >
                <option value="+998">🇺🇿 +998</option>
                <option value="+7">🇷🇺 +7</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>
            </div>
            <input
              type="tel"
              placeholder="Telefon raqam"
              value={phone}
              onChange={handlePhoneChange}
              className="border border-gray-300 rounded-lg pl-28 pr-4 py-3 w-full text-gray-800 shadow-sm focus:border-[#FF6418] focus:ring-2 focus:ring-[#FF6418] outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:border-[#FF6418] focus:ring-2 focus:ring-[#FF6418] outline-none w-full text-gray-800"
          />

          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-gray-600 text-sm font-medium">
              Siz bilan bog‘lanishning qulay usuli:
            </legend>
            <div className="flex flex-col gap-3 mt-2">
              {["Telegram", "WhatsApp", "Email", "Qo‘ng‘iroq"].map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value={method}
                    checked={contactMethod === method}
                    onChange={() => setContactMethod(method)}
                    className="accent-[#FF6418]"
                  />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>


          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mt-1 accent-[#FF6418] cursor-pointer"
            />
            <span>
              Tugmani bosish orqali siz maxfiylik siyosatiga rozilik bildirasiz,
              shaxsiy ma'lumotlarni qayta ishlashga rozilik berasiz.
            </span>
          </label>

          <button
            type="submit"
            disabled={!isChecked}
            className={`w-full text-lg font-semibold py-3 rounded-full transition ${
              isChecked
                ? "bg-[#FF6418] text-white hover:bg-[#e55a10]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            So‘rov yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
