import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Locale } from "@/i18n-config";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
  lang: Locale;
}

export function Breadcrumb({ items, lang }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-muted-foreground mx-1" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
