import Herosection from "@/components/Herosection";
import Cards from "@/components/Cards"
import Balance from "@/components/Balance"
import Footer from "@/components/Footer"

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Herosection />
        <Cards />
        <Balance />
        <Footer />
      </main>
  );
}
