"use client"

import resume from "@/data/resume.json";
import { Github, Linkedin, MapPin, Globe, Mail, Phone, BookOpen } from "lucide-react";
import { FR, CA } from "country-flag-icons/react/3x2";
import { useMemo } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { name, title, contact, summary, experience, education, languages } = resume;
  const router = useRouter();
  const skills = useMemo(() => {
    const skillSet = new Set<string>();
    experience.forEach((job) => {
      job.skills?.forEach((skill) => skillSet.add(skill));
    });
    return skillSet;
  }, [experience]);
  const spotlight = experience.slice(0, 3);

  const getCountryFlag = (location: string) => {
    if (location.includes("Canada")) return <CA title="Canada" style={{ height: "24px", width: "32px" }} />;
    if (location.includes("France")) return <FR title="France" style={{ height: "24px", width: "32px" }} />;
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f9f8f5] text-zinc-900">
      <div className="drift absolute -left-28 top-14 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
      <div className="drift delay-2 absolute -right-16 top-24 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="drift delay-1 absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-200/18 blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 py-10 sm:px-8 lg:py-14">
        <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <article className="reveal rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-stone-100 via-zinc-50 to-slate-100 p-7 shadow-[0_20px_60px_rgba(30,41,59,0.12)] sm:p-10">
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-6xl">
              {name}
            </h1>
            <p className="mt-2 text-xl font-semibold text-zinc-700">{title}</p>

            <div className="mt-5 rounded-2xl border border-amber-300/70 bg-amber-50/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-800">Current Position</p>
              <p className="mt-2 text-base font-bold text-zinc-900">{experience[0].title}</p>
              <p className="text-sm text-zinc-700">{experience[0].company}</p>
              <p className="mt-1 text-xs font-medium text-zinc-500">{experience[0].period}</p>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">{summary}</p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-900 px-5 py-2 text-zinc-900 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <span className="flex items-center gap-2 rounded-full bg-white/75 px-5 py-2 text-zinc-700">
                <MapPin size={18} />
                {getCountryFlag(contact.location)}
                {contact.location}
              </span>
            </div>
          </article>

          <aside className="grid gap-4">
            <article className="reveal delay-2 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg">
              <h2 className="text-xl font-black text-zinc-900">Toolkit</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from(skills).map((skill, index) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${skillStyles[index % skillStyles.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="reveal delay-3 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg">
              <h2 className="text-xl font-black text-zinc-900">About my self</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {languages.map((language) => (
                  <li key={language} className="flex items-center gap-2">
                    <Globe size={16} className="text-slate-500" />
                    {language}
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-500" />
                  <a href={`mailto:${contact.email}`} className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-2">{contact.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-slate-500" />
                  {contact.phone}
                </li>
              </ul>

              <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                  <BookOpen size={14} />
                  Education
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">{education[0].degree}</p>
                <p className="text-sm text-zinc-700">{education[0].institution}</p>
              </div>
            </article>
          </aside>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {spotlight.map((job, index) => (
            <article
              onClick={() => router.push(`/experience?id=${job.id}`)}
              key={job.company}
              className={`cursor-pointer reveal rounded-3xl border bg-white/90 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 ${
                index === 0
                  ? "border-zinc-200"
                  : index === 1
                    ? "border-slate-200"
                    : "border-stone-200"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{job.period}</p>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">{job.company}</h3>
              <p className="mt-1 text-sm font-medium text-zinc-600">{job.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">{job.bullets[0]}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6">
          <article className="reveal delay-1 rounded-3xl border border-zinc-200/80 bg-white/85 p-7 shadow-lg sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-zinc-900">Trajectory</h2>
            <p className="mt-2 text-sm text-zinc-600">
              A quick path through the teams and products I have helped build.
            </p>

            <ol className="mt-6 space-y-5 border-l-2 border-zinc-200 pl-5">
              {experience.map((job, index) => (
                <li key={`${job.company}-${job.period}`} className="relative">
                  <span
                    className={`absolute -left-[1.8rem] top-1.5 h-3 w-3 rounded-full ${
                      index % 3 === 0
                        ? "bg-zinc-500"
                        : index % 3 === 1
                          ? "bg-slate-500"
                          : "bg-stone-500"
                    }`}
                  />
                  <p className="text-sm font-semibold text-zinc-500">{job.period}</p>
                  <p className="text-lg font-bold text-zinc-900">{job.title}</p>
                  <p className="flex items-center gap-1 text-sm text-zinc-700">
                    {job.company} · {getCountryFlag(job.location)} {job.location}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </section>
      </main>
    </div>
  );
}
