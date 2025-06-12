import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "For Clients & Talent",
      description:
        "A platform designed for businesses seeking top talent and professionals looking for great opportunities.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Effortless Collaboration",
      description:
        "Easily connect, communicate, and manage projects with a seamless user experience for both sides.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear, competitive rates for every project. No hidden fees, no surprises—just straightforward value.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Always Reliable",
      description: "Count on our platform for uninterrupted access and support, whenever you need it.",
      icon: <IconCloud />,
    },
    {
      title: "Flexible Engagements",
      description: "Choose from short-term gigs, long-term contracts, or one-off projects to fit your needs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support",
      description:
        "Our team is here to help you succeed, day or night, with responsive support for clients and talent.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "If you’re not satisfied, we’ll work with you to make it right. Your success is our priority.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "A Thriving Community",
      description:
        "Join a network of trusted professionals and businesses, all working together to achieve more.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
