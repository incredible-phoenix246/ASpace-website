import { Poppins, Raleway, Unica_One, Work_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const raleway = Raleway({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  display: "auto",
  variable: "--font-raleway",
});

const unica = Unica_One({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "auto",
  weight: "400",
  variable: "--font-unica",
  fallback: ["monserrat"],
});

export { raleway, unica, poppins, workSans };
