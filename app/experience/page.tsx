"use client"

import resume from '@/data/resume.json'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react';

export default function ExperiencePage() {
	const searchParams = useSearchParams()
    const experience = useMemo (() => {
        const id = searchParams.get('id');
        return resume.experience.find(exp => exp.id === id);
    }, [searchParams]);

	return (
		<section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
            <h1 className="text-3xl font-bold mb-6">{experience?.title}</h1>
		</section>
	);
}