// components/forms/OfferteForm.tsx
"use client";

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FormState = {
    [key: string]: string;
};
type Errors = {
    [key: string]: string | null;
};

const projectTypes = [
    'Woningbouw', 'Commerciële bouw', 'Industriële bouw', 'Renovatie', 
    'Infrastructuur', 'Landschapsarchitectuur', 'Anders'
];

const InputField = ({ id, label, type = 'text', value, onChange, error, limit, required = false, placeholder = '' }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}{required && ' *'}</label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-gray-900`}
            aria-describedby={error ? `${id}-error` : undefined}
        />
        {limit && <p className="mt-1 text-xs text-gray-500">Limiet is {limit} tekens.</p>}
        {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
);

const TextareaField = ({ id, label, value, onChange, error, limit, required = false, placeholder = '' }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}{required && ' *'}</label>
        <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            rows={5}
            placeholder={placeholder}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-gray-900`}
            aria-describedby={error ? `${id}-error` : undefined}
        />
        {limit && <p className="mt-1 text-xs text-gray-500">Limiet is {limit} woorden.</p>}
        {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
);

const OfferteForm = () => {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<FormStatus>('idle');
    const [formState, setFormState] = useState<FormState>({
        naam: '',
        bedrijfsnaam: '',
        email: '',
        emailBevestigen: '',
        telefoonnummer: '',
        projectAdres: '',
        bouwproject: '',
        startdatum: '',
        einddatum: '',
        apparatuur: '',
        verzoeken: '',
        privacy: 'false',
        company: '', // Honeypot
    });
    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const isCheckbox = type === 'checkbox';
        setFormState(prev => ({ ...prev, [name]: isCheckbox ? String((e.target as HTMLInputElement).checked) : value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };
    
    const validate = (): boolean => {
        const newErrors: Errors = {};
        
        if (!formState.naam.trim()) newErrors.naam = 'Uw naam is verplicht.';
        if (!formState.email.trim()) newErrors.email = 'E-mailadres is verplicht.';
        else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Ongeldig e-mailadres.';
        if (formState.email !== formState.emailBevestigen) newErrors.emailBevestigen = 'E-mailadressen komen niet overeen.';
        if (!formState.bouwproject) newErrors.bouwproject = 'Selecteer een type bouwproject.';
        if (!formState.startdatum) newErrors.startdatum = 'Startdatum is verplicht.';
        if (!formState.einddatum) newErrors.einddatum = 'Einddatum is verplicht.';
        if (!formState.apparatuur.trim()) newErrors.apparatuur = 'Apparatuur en kwantiteit is verplicht.';
        if (formState.projectAdres.length > 100) newErrors.projectAdres = 'Adres mag niet langer zijn dan 100 tekens.';
        if (formState.verzoeken.split(' ').filter(Boolean).length > 500) newErrors.verzoeken = 'Verzoeken mogen niet meer dan 500 woorden bevatten.';
        if (formState.privacy !== 'true') newErrors.privacy = 'U moet het privacybeleid accepteren.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        
        setStatus('loading');

        startTransition(async () => {
            try {
                if(formState.company) { // Honeypot check
                    console.log("Bot submission detected.");
                    setStatus('success'); // Fail silently
                    return;
                }
                const response = await fetch('/api/offerte', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formState)
                });
                if (!response.ok) {
                    throw new Error('Server error');
                }
                setStatus('success');
                setFormState({
                    naam: '', bedrijfsnaam: '', email: '', emailBevestigen: '', telefoonnummer: '', projectAdres: '',
                    bouwproject: '', startdatum: '', einddatum: '', apparatuur: '', verzoeken: '', privacy: 'false', company: ''
                });

            } catch (error) {
                setStatus('error');
            }
        });
    };

    if (status === 'success') {
        return (
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-green-600">Offerte aangevraagd!</h3>
                <p className="mt-4 text-gray-700">Bedankt voor uw aanvraag. We nemen zo snel mogelijk contact met u op.</p>
                <Button onClick={() => setStatus('idle')} variant="secondary" className="mt-6">Nog een offerte aanvragen</Button>
            </div>
        )
    }

    return (
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Vraag een vrijblijvende offerte aan</h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                 {/* Honeypot */}
                <input type="text" name="company" value={formState.company} onChange={handleChange} className="hidden" aria-hidden="true" />
                
                <InputField id="naam" label="Uw naam" value={formState.naam} onChange={handleChange} error={errors.naam} required />
                <InputField id="bedrijfsnaam" label="Bedrijfsnaam" value={formState.bedrijfsnaam} onChange={handleChange} error={errors.bedrijfsnaam} />
                <div className="grid md:grid-cols-2 gap-6">
                    <InputField id="email" label="Uw e-mailadres" type="email" value={formState.email} onChange={handleChange} error={errors.email} required />
                    <InputField id="emailBevestigen" label="E-mailadres bevestigen" type="email" value={formState.emailBevestigen} onChange={handleChange} error={errors.emailBevestigen} required />
                </div>
                <InputField id="telefoonnummer" label="Uw telefoonnummer" type="tel" value={formState.telefoonnummer} onChange={handleChange} error={errors.telefoonnummer} />
                <InputField id="projectAdres" label="Adres van het project" value={formState.projectAdres} onChange={handleChange} error={errors.projectAdres} limit={100} />
                
                <div>
                    <label className="block text-sm font-medium text-gray-700">Type bouwproject *</label>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                        {projectTypes.map((type) => (
                            <div key={type} className="flex items-center">
                                <input id={type} name="bouwproject" type="radio" value={type} checked={formState.bouwproject === type} onChange={handleChange} className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300" />
                                <label htmlFor={type} className="ml-3 block text-sm font-medium text-gray-700">{type}</label>
                            </div>
                        ))}
                    </div>
                    {errors.bouwproject && <p className="mt-1 text-xs text-red-600">{errors.bouwproject}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <InputField id="startdatum" label="Startdatum van het project" type="date" value={formState.startdatum} onChange={handleChange} error={errors.startdatum} required />
                    <InputField id="einddatum" label="(Geschatte) einddatum van het project" type="date" value={formState.einddatum} onChange={handleChange} error={errors.einddatum} required />
                </div>

                <TextareaField id="apparatuur" label="Apparatuur en kwantiteit" value={formState.apparatuur} onChange={handleChange} error={errors.apparatuur} required placeholder="Bijv. Graafmachine - 2, Trilplaat - 4, Aanhanger - 1" />
                <TextareaField id="verzoeken" label="Speciale verzoeken of additionele informatie" value={formState.verzoeken} onChange={handleChange} error={errors.verzoeken} limit={500} />

                <div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="privacy" name="privacy" type="checkbox" checked={formState.privacy === 'true'} onChange={handleChange} className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="privacy" className="font-medium text-gray-700">
                                Ik heb het <Link href="/privacy-policy" className="underline text-blue-600 hover:text-blue-800">Privacybeleid</Link> van Ella Rent gelezen en begrepen. Ik geef hierbij mijn toestemming voor de verzameling, opslag, verwerking en het gebruik van mijn persoonlijke gegevens zoals beschreven in dit beleid. Ik begrijp dat ik mijn toestemming op elk moment kan intrekken door contact op te nemen met Ella Rent.
                            </label>
                        </div>
                    </div>
                    {errors.privacy && <p className="mt-1 text-xs text-red-600">{errors.privacy}</p>}
                </div>
                
                {status === 'error' && <p className="text-sm text-red-600 text-center">Er is iets misgegaan. Probeer het later opnieuw.</p>}

                <Button type="submit" className="w-full !bg-red-500 hover:!bg-red-600" size="lg" disabled={isPending || status === 'loading'}>
                    {isPending || status === 'loading' ? 'AANVRAGEN...' : 'AANVRAGEN'}
                </Button>
            </form>
        </div>
    );
};

export default OfferteForm;
