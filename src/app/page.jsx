import Hero from "./_components/Hero";
import News from "./_components/news";
import Students from "./_components/Students";
import AboutUs from "./_components/AboutUs";
import Schools from "./_components/Schools";
import Sports from "./_components/Sports";
import AdmissionProcess from "./_components/Admission";
import Footer from "./_components/Footer";

import Divisor from "./_components/Divisor";
import GithubBar from "./_components/Github";

export default function Home() {
  return (
    <main className="w-full bg-white text-paramo-black overflow-hidden ">
      <div className="w-full h-screen bg-white dark:bg-paramo-black flex flex-col">
        <Hero />
      </div>
      <Divisor value="01/06" direction="left" />
      <News />
      <Divisor value="02/06" direction="right" />
      <Students />
      <Divisor value="03/06" direction="left" />
      <AboutUs />
      <Divisor value="04/06" direction="right" />
      <Schools />
      <Divisor value="05/06" direction="left" />
      <Sports />
      <Divisor value="06/06" direction="right" />
      <AdmissionProcess />
      <Footer />
      <GithubBar />
    </main>
  );
}
