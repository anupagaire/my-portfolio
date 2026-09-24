import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, FileText, ExternalLink, Quote, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ResearchData } from '../data/researchdata.js';

const MY_NAME = 'Anupa Gaire'; // this author gets bolded

const statusStyle = {
  Published: 'text-green-700 border-green-700',
  Accepted: 'text-blue-700 border-blue-700',
  'In Review': 'text-amber-700 border-amber-700',
  Ongoing: 'text-gray-600 border-gray-500',
};

const buildCitation = (r) =>
  `${r.authors.join(', ')} (${r.year}). ${r.title}. ${r.venue}, ${r.volume}${
    r.issue ? `(${r.issue})` : ''
  }.`;

const Authors = ({ authors }) => (
  <p className="text-sm text-gray-700">
    {authors.map((a, i) => (
      <React.Fragment key={a}>
        <span className={a === MY_NAME ? 'font-bold text-black underline underline-offset-2' : ''}>
          {a}
        </span>
        {i < authors.length - 1 && ', '}
      </React.Fragment>
    ))}
  </p>
);

const ResearchItem = ({ research }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(buildCitation(research));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <article className="py-6 border-b border-gray-200">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-semibold text-black leading-snug">
         {research.link ? (
  <a
    href={research.link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 hover:underline"
  >
    {research.title}
  </a>
) : (
  research.title
)}
        </h3>
        <span
          className={`shrink-0 text-xs font-medium border rounded px-2 py-0.5 ${
            statusStyle[research.status] || statusStyle.Ongoing
          }`}
        >
          {research.status}
        </span>
      </div>

      <div className="mt-1">
        <Authors authors={research.authors} />
      </div>

      <p className="mt-1 text-sm text-gray-600">
        <em>{research.venue}</em>
        {research.volume && `, Vol. ${research.volume}`}
        {research.issue && `, Issue ${research.issue}`}
        {research.year && `, ${research.year}`}
        {research.publisher && ` · ${research.publisher}`}
      </p>

      {research.keywords?.length > 0 && (
        <p className="mt-2 text-xs text-gray-500">
          <span className="font-semibold text-gray-700">Keywords:</span>{' '}
          {research.keywords.join(' · ')}
        </p>
      )}

      {/* Action links */}
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {research.link && (
          <a
            href={research.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <FileText className="w-4 h-4" /> Paper
          </a>
        )}
        {research.doi && (
          <a
            href={research.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <ExternalLink className="w-4 h-4" /> DOI
          </a>
        )}
        {research.abstract && (
          <button
            onClick={() => setShowAbstract((s) => !s)}
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform ${showAbstract ? 'rotate-180' : ''}`}
            />
            Abstract
          </button>
        )}
        <button
          onClick={copyCitation}
          className="inline-flex items-center gap-1 text-blue-700 hover:underline"
        >
          <Quote className="w-4 h-4" /> {copied ? 'Copied!' : 'Cite'}
        </button>
      </div>

      {showAbstract && research.abstract && (
        <p className="mt-3 text-sm text-gray-800 leading-relaxed bg-gray-50 border-l-4 border-gray-300 p-3">
          {research.abstract}
        </p>
      )}
    </article>
  );
};

const Research = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return ResearchData.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.authors.some((a) => a.toLowerCase().includes(q)) ||
        (r.keywords || []).some((k) => k.toLowerCase().includes(q)) ||
        (r.venue || '').toLowerCase().includes(q)
    );
  }, [searchTerm]);

  // group by year, newest first
  const byYear = useMemo(() => {
    const groups = {};
    filtered.forEach((r) => {
      const y = r.year || 'Upcoming';
      (groups[y] = groups[y] || []).push(r);
    });
    return Object.entries(groups).sort((a, b) => String(b[0]).localeCompare(String(a[0])));
  }, [filtered]);

  const publishedCount = ResearchData.filter((r) => r.status === 'Published').length;

  return (
    <div className="min-h-screen bg-white text-black">
<div className="max-w-4xl mx-auto px-6 pt-28 pb-12">
          {/* Header */}
        <header className="mb-8 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold">Research & Publications</h1>
          <p className="mt-2 text-gray-600">
            {ResearchData.length} total · {publishedCount} published · Areas: Deep Learning,
            Computer Vision, Symbolic Computation
          </p>
        </header>

    
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, author, keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-black placeholder-gray-400 focus:outline-none focus:border-black"
          />
        </div>

        {/* List grouped by year */}
        {byYear.map(([year, items]) => (
          <section key={year} className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mt-6">{year}</h2>
            {items.map((r) => (
              <ResearchItem key={r.id} research={r} />
            ))}
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p>No research found.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-blue-700 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Back */}
        <div className="mt-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Research;