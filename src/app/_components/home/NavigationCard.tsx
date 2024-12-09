import React from "react";
import Link from "next/link";

interface NavigationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  title,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex rounded-lg border border-gray-200 p-6 transition-colors duration-200 hover:border-gray-300"
    >
      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="text-2xl">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};
