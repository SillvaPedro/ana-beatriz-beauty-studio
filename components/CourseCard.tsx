import Image from "next/image";
import { site } from "@/lib/site";
import type { course } from "@/lib/types";

export default function CourseCard({ course }: { course: course }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-blush-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={`/images/courses/${course.slug}.svg`}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-blush-700">
          {course.level}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{course.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{course.description}</p>
        <ul className="mt-4 space-y-1.5">
          {course.highlights.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" fill="currentColor">
                <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-end justify-between border-t border-blush-100 pt-4">
          <div>
            {course.oldPrice && (
              <p className="text-xs text-ink/50 line-through">{course.oldPrice}</p>
            )}
            <p className="text-lg font-bold text-blush-700">{course.price}</p>
            <p className="text-xs text-ink/60">
              {course.duration} · {course.lessons} aulas
            </p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blush-600 to-gold-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Comprar
          </a>
        </div>
      </div>
    </article>
  );
}
