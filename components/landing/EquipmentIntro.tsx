// components/landing/EquipmentIntro.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const EquipmentIntro = () => {
  return (
    <section className="py-20 sm:py-28 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-balance">
                Ella Rent: Uw betrouwbare partner in bouwapparatuur
              </h2>
              <p className="mt-4 text-dark-subtext text-balance">
                Ella Rent helpt u om bouwprocessen te stroomlijnen met hoogwaardige apparatuur en service. Ons team combineert ervaring in de branche met een pragmatische aanpak, zodat u keer op keer uitstekende resultaten behaalt. Onze kernwaarden: integriteit, klantgerichtheid en duurzaamheid.
              </p>
            </div>
            <div>
              <p className="text-dark-subtext mb-8 text-balance">
                Naast het verhuren van apparatuur bouwen we aan lange-termijnrelaties. We bieden flexibele prijsafspraken en maatwerkoplossingen om aan specifieke behoeften te voldoen. We geloven in duidelijke communicatie en snelle ondersteuning – wij denken mee in elke fase van uw project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">BEGIN UW PROJECT MET ONS</Link>
                </Button>
                <Button asChild variant="primary" size="lg">
                  <Link href="/offerte">OFFERTE AANVRAGEN</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentIntro;
