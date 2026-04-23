"use client";

import Link from "next/link";
import resume from "@/data/resume.json";
import { ArrowLeft, Building2, CalendarRange, MapPin, Sparkles } from "lucide-react";
import { FR, CA } from "country-flag-icons/react/3x2";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const getCountryFlag = (location: string) => {
	if (location.includes("Canada")) return <CA title="Canada" style={{ height: "20px", width: "28px" }} />;
	if (location.includes("France")) return <FR title="France" style={{ height: "20px", width: "28px" }} />;
	return null;
};

const skillStyles = [
	"bg-zinc-100 text-zinc-700 border-zinc-300",
	"bg-stone-100 text-stone-700 border-stone-300",
	"bg-slate-100 text-slate-700 border-slate-300",
	"bg-neutral-100 text-neutral-700 border-neutral-300",
	"bg-gray-100 text-gray-700 border-gray-300",
	"bg-blue-50 text-blue-700 border-blue-200",
];

export default function ExperiencePage() {
	const searchParams = useSearchParams();
	const experiences = resume.experience;

	const selectedExperience = useMemo(() => {
		const id = searchParams.get("id");
		return experiences.find((exp) => exp.id === id);
	}, [searchParams, experiences]);

	if (!selectedExperience) {
		return (
			<div className="relative min-h-screen overflow-hidden bg-[#f9f8f5] text-zinc-900">
				<p className="text-center text-xl font-semibold text-zinc-700">Experience not found</p>
			</div>
		);
	}

	return (
		<div className="relative min-h-screen overflow-hidden bg-[#f9f8f5] text-zinc-900">
			<div className="drift absolute -left-28 top-14 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
			<div className="drift delay-2 absolute -right-16 top-24 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
			<div className="drift delay-1 absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-200/18 blur-3xl" />

			<main className="relative mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 py-10 sm:px-8 lg:py-14">
				<section className="reveal rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-stone-100 via-zinc-50 to-slate-100 p-7 shadow-[0_20px_60px_rgba(30,41,59,0.12)] sm:p-10">
					<Link
						href="/"
						className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-700 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
					>
						<ArrowLeft size={16} />
						Back to homepage
					</Link>

					<p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Career Journey</p>
					<h1 className="mt-2 text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl">
						{selectedExperience.title}
					</h1>
					<p className="mt-3 flex flex-wrap items-center gap-2 text-base font-medium text-zinc-700">
						<Building2 size={17} className="text-zinc-500" />
						{selectedExperience.company}
						<span className="text-zinc-400">•</span>
						<MapPin size={17} className="text-zinc-500" />
						{getCountryFlag(selectedExperience.location)}
						{selectedExperience.location}
					</p>
				</section>

				<section className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
					<article className="reveal delay-1 rounded-3xl border border-zinc-200/80 bg-white/90 p-7 shadow-lg sm:p-8">
						<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300/70 bg-amber-50/80 p-4">
							<p className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
								<CalendarRange size={17} className="text-amber-700" />
								{selectedExperience.period}
							</p>
							<span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
								Current focus
							</span>
						</div>

						<h2 className="mt-6 text-2xl font-black tracking-tight text-zinc-900">Key Contributions</h2>
						<ul className="mt-4 space-y-3 text-zinc-700">
							{selectedExperience.bullets.map((bullet) => (
								<li key={bullet} className="flex items-start gap-3 leading-relaxed">
									<Sparkles size={16} className="mt-1 shrink-0 text-slate-500" />
									<span>{bullet}</span>
								</li>
							))}
						</ul>

						<h3 className="mt-7 text-lg font-black text-zinc-900">Stack Used</h3>
						<div className="mt-3 flex flex-wrap gap-2">
							{selectedExperience.skills?.map((skill, index) => (
								<span
									key={skill}
									className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${skillStyles[index % skillStyles.length]}`}
								>
									{skill}
								</span>
							))}
						</div>
					</article>

					<aside className="grid gap-4">
						<article className="reveal delay-2 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg">
							<h2 className="text-xl font-black text-zinc-900">All Roles</h2>
							<ol className="mt-4 space-y-3">
								{experiences.map((job, index) => {
									const isActive = job.id === selectedExperience.id;

									return (
										<li key={job.id}>
											<Link
												href={`/experience?id=${job.id}`}
												className={`block rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
													isActive
														? "border-zinc-400 bg-zinc-50 shadow-sm"
														: index % 2 === 0
															? "border-slate-200 bg-white"
															: "border-stone-200 bg-white"
												}`}
											>
												<p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">{job.period}</p>
												<p className="mt-1 text-sm font-bold text-zinc-900">{job.title}</p>
												<p className="text-sm text-zinc-700">{job.company}</p>
											</Link>
										</li>
									);
								})}
							</ol>
						</article>

						<article className="reveal delay-3 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg">
							<h2 className="text-xl font-black text-zinc-900">What This Page Shows</h2>
							<p className="mt-3 text-sm leading-relaxed text-zinc-700">
								This section summarizes practical outcomes from each role: product ownership, delivery quality,
								and technical choices that improved reliability and speed.
							</p>
						</article>
					</aside>
				</section>
			</main>
		</div>
	);
}