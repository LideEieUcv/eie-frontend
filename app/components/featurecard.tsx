import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
  badge?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, href, backgroundImage, badge }) => {
  return (
    <Link href={href} className="group block">
      <article
        className="relative h-72 rounded-2xl overflow-hidden border border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/45 transition duration-300 group-hover:bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 h-full p-6 flex flex-col justify-between">
          <div>
            {badge && (
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/20 text-white border border-white/40">
                {badge}
              </span>
            )}
            <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/90 leading-relaxed">{description}</p>
          </div>

          <span className="text-sm font-semibold text-white underline decoration-white/70">Ver más →</span>
        </div>
      </article>
    </Link>
  );
};

export default FeatureCard;
