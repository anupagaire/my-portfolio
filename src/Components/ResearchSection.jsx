import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { ResearchData } from '../data/researchdata.js';

const MAX_ITEMS = 4; // latest kati wota dekhaune (3 ya 4)
const MY_NAME = 'Anupa Gaire';

const statusStyle = {
  Published: 'text-green-700 border-green-600',
  Accepted: 'text-blue-700 border-blue-600',
  'In Review': 'text-amber-700 border-amber-600',
  Ongoing: 'text-gray-600 border-gray-400',
};

const Authors = ({ authors }) => (
  <span className="text-gray-700">
    {authors.map((a, i) => (
      <React.Fragment key={a}>
        <span className={a === MY_NAME ? 'font-bold text-black' : ''}>{a}</span>
        {i < authors.length - 1 && ', '}
      </React.Fragment>
    ))}
  </span>
);

const Item = ({ r }) => (
  <li className="relative pl-5 py-3 text-[15px] leading-relaxed text-gray-700 group">
    {/* small dot */}
    <span className="absolute left-0 top-[1.15rem] w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-black transition-colors" />

    <Authors authors={r.authors} />
    {'. '}
    {r.link ? (
      <a
        href={r.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-black hover:text-blue-700 hover:underline"
      >
        {r.title}
      </a>
    ) : (
      <span className="font-semibold text-black">{r.title}</span>
    )}
    {'. '}
    <em className="text-gray-600">{r.venue}</em>
    {r.volume && `, Vol. ${r.volume}`}
    {r.issue && `(${r.issue})`}
    {r.year && `, ${r.year}.`}

    <span
      className={`ml-2 align-middle text-[11px] font-medium border rounded px-1.5 py-px ${
        statusStyle[r.status] || statusStyle.Ongoing
      }`}
    >
      {r.status}
    </span>

    {(r.link || r.doi) && (
      <span className="ml-3 inline-flex items-center gap-4 text-sm">
        {r.link && (
          <a
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <FileText className="w-3.5 h-3.5" /> Paper
          </a>
        )}
        {r.doi && (
          <a
            href={r.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" /> DOI
          </a>
        )}
      </span>
    )}
  </li>
);

const ResearchSection = () => {
  // latest first: year desc, then id desc
  const latest = [...ResearchData]
    .sort((a, b) => (b.year || 0) - (a.year || 0) || b.id - a.id)
    .slice(0, MAX_ITEMS);

  if (latest.length === 0) return null;

  // group by year (already sorted newest first)
  const groups = [];
  latest.forEach((r) => {
    const y = r.year || 'Upcoming';
    const g = groups.find((x) => x.year === y);
    if (g) g.items.push(r);
    else groups.push({ year: y, items: [r] });
  });

  return (
    <section id="research" className="bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between border-b-2 border-black pb-3 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase mb-1">
              Publications
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Research</h2>
          </div>

          <Link
            to="/research"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black hover:text-blue-700 transition-colors"
          >
            See all
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Year-wise list */}
        <div className="space-y-6">
          {groups.map(({ year, items }) => (
            <div key={year} className="grid md:grid-cols-[80px_1fr] gap-x-6">
              <h3 className="text-xl font-bold text-gray-900 md:pt-2">{year}</h3>
              <ul className="divide-y divide-gray-200 border-l border-gray-200 md:pl-0">
                {items.map((r) => (
                  <Item key={r.id} r={r} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;