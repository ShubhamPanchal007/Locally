import Head from "next/head";
import Footer from "../Components/Footer";
import HomePage from "../Components/HomePage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section  className="min-h-screen" >
          <HomePage />
        </section>
       
          <Footer/>
      </main>
    </div>
  );
}