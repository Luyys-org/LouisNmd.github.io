import resume from "@/data/resume.json";

export default function Home() {
  const { name, title, contact, summary, experience, education, skills, languages } = resume;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans py-12 px-4">
      <main className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 shadow-sm rounded-lg p-10 flex flex-col gap-10">

        {/* Header */}
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {name}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">{title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <span>{contact.location}</span>
            <a href={contact.github} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              {contact.github.replace("https://", "")}
            </a>
            <a href={contact.linkedin} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              {contact.linkedin.replace("https://", "")}
            </a>
          </div>
        </header>

        <hr className="border-zinc-200 dark:border-zinc-700" />

        {/* Summary */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Summary
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{summary}</p>
        </section>

        {/* Experience */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Experience
          </h2>
          {experience.map((job, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{job.title}</h3>
                <span className="text-sm text-zinc-400 dark:text-zinc-500 shrink-0">{job.period}</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.company} · {job.location}</p>
              <ul className="mt-2 list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed space-y-1">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{edu.degree}</h3>
                <span className="text-sm text-zinc-400 dark:text-zinc-500 shrink-0">{edu.period}</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution} · {edu.location}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Languages
          </h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed space-y-1">
            {languages.map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}
