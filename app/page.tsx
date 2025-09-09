// app/page.tsx
import HeroSlider from "@/components/hero/HeroSlider";
import { ServiceBlock, TestimonialCard } from "@/components/ui/Card";
import EquipmentIntro from "@/components/landing/EquipmentIntro";
import SectorsCarousel from "@/components/carousels/SectorsCarousel";
import { CheckCircle, Briefcase, Users, Cog } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const stats = [
    { value: '35+', label: 'Jaar ervaring' },
    { value: '512+', label: 'Tevreden klanten' },
    { value: '1120+', label: 'Afgeronde projecten' },
    { value: '1520+', label: 'Succesvolle plaatsingen' },
];

const testimonials = [
    {
      author: 'Anouk',
      role: 'Verpleegkundige',
      quote: 'Ella Personeelsdiensten bood uitstekende ondersteuning bij het vinden van mijn droombaan in de zorg. Ze zijn professioneel en zeer betrokken.',
    },
    {
      author: 'Martijn',
      role: 'Elektricien',
      quote: 'Ik ben zeer tevreden over de service. Ze vonden snel een perfect passende uitdaging in de elektrotechniek.',
    },
    {
      author: 'Alex',
      role: 'Metselaar',
      quote: 'Als jonge professional zonder veel ervaring, gaven ze mij de kans om te starten als leerling-metselaar. Een geweldige start van mijn carrière!',
    },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-20 sm:py-28 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold font-display">Waarom Ella Personeelsdiensten?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-dark-subtext">
                    Met jarenlange ervaring in uitzenden en detacheren zijn wij uw ideale partner.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-white/5">
                        <p className="text-4xl sm:text-5xl font-bold text-accent-cyan">{stat.value}</p>
                        <p className="mt-2 text-sm text-dark-subtext">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <SectorsCarousel />

      <section className="py-20 sm:py-28">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold font-display">Onze Diensten</h2>
                <p className="mt-4 max-w-2xl mx-auto text-dark-subtext">
                    Wij bieden een compleet pakket aan HR-oplossingen.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceBlock title="Begeleiding" icon={<Users />} description="Persoonlijke begeleiding tijdens het hele sollicitatieproces." />
                <ServiceBlock title="Jobcoaching" icon={<Briefcase />} description="Professioneel advies om uw carrièrepad te ontwikkelen." />
                <ServiceBlock title="Verloning" icon={<CheckCircle />} description="Wij nemen de volledige salarisadministratie uit handen." />
                <ServiceBlock title="Maatwerk" icon={<Cog />} description="Flexibele oplossingen, perfect afgestemd op uw organisatie." />
            </div>
         </div>
      </section>

      <EquipmentIntro />

      <section className="py-20 sm:py-28 bg-white/5">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold font-display">Wat onze professionals zeggen</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                    <TestimonialCard key={i} {...testimonial} />
                ))}
            </div>
         </div>
      </section>

      <section className="py-20 sm:py-28 text-center">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">Klaar om samen te werken?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-dark-subtext">
                Of u nu personeel zoekt of een nieuwe uitdaging, wij staan voor u klaar.
            </p>
            <div className="mt-8">
                 {/* FIX: Changed `as` prop to `asChild` and wrapped children in a `Link` component. */}
                 <Button asChild variant="primary">
                    <Link href="/contact">Neem contact op</Link>
                 </Button>
            </div>
         </div>
      </section>
    </>
  );
}