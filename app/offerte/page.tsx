// app/offerte/page.tsx
import OfferteForm from '@/components/forms/OfferteForm';

export default function OffertePage() {
  return (
    <div className="bg-dark-bg">
        <section 
            className="relative py-20 sm:py-24 text-center bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/placeholder-hero-2.jpg')" }}
        >
            <div className="absolute inset-0 bg-dark-bg/70" />
            <div className="relative container mx-auto px-4">
                <p className="font-semibold text-red-400">Heeft u interesse?</p>
                <h1 className="mt-2 text-4xl sm:text-5xl font-bold font-display text-white">
                    Van Concept tot Constructie: Ella Rent is uw Bouwpartner
                </h1>
            </div>
        </section>
        
        <div className="relative -mt-16 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <OfferteForm />
                </div>
            </div>
        </div>
    </div>
  );
}
