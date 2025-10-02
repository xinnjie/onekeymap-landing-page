export const metadata = {
  title: "OneKeymap Pricing",
  description: "Choose the OneKeymap plan that fits you best.",
};

type PricingFeature = {
  text: string;
};

type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  recommanded?: boolean;
};

function PricingCard({
  name,
  description,
  price,
  priceSuffix,
  features,
  ctaLabel,
  ctaHref,
  recommanded,
}: PricingCardProps) {
  const isRecommanded = Boolean(recommanded);
  const containerClassName = isRecommanded
    ? "bg-gray-900 text-white shadow-2xl ring-1 ring-gray-800"
    : "bg-white text-gray-900 shadow-xl ring-1 ring-gray-100";
  const headingClassName = isRecommanded
    ? "text-2xl font-semibold"
    : "text-2xl font-semibold text-gray-900";
  const descriptionClassName = isRecommanded ? "text-gray-200" : "text-gray-600";
  const priceWrapperClassName = isRecommanded ? "text-white" : "text-gray-900";
  const priceSuffixClassName = isRecommanded ? "text-gray-300" : "text-gray-600";
  const featuresClassName = isRecommanded ? "text-gray-200" : "text-gray-600";
  const ctaClassName = isRecommanded
    ? "bg-white text-gray-900 hover:bg-gray-100"
    : "bg-blue-500 text-white hover:bg-blue-600";
  return (
    <section className={`flex h-full flex-col rounded-3xl p-10 ${containerClassName}`}>
      <div>
        <h2 className={headingClassName}>{name}</h2>
        <p className={`mt-3 ${descriptionClassName}`}>{description}</p>
      </div>
      <div className={`mt-8 flex items-baseline gap-2 ${priceWrapperClassName}`}>
        <span className="text-5xl font-bold">{price}</span>
        <span className={`text-lg ${priceSuffixClassName}`}>{priceSuffix}</span>
      </div>
      <ul className={`mt-8 space-y-3 text-sm ${featuresClassName}`}>
        {features.map((feature) => {
          const dotClassName = isRecommanded
            ? "bg-blue-300"
            : "bg-blue-400";

          return (
            <li key={feature.text} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dotClassName}`} />
              {feature.text}
            </li>
          );
        })}
      </ul>
      <a
        className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition ${ctaClassName}`}
        href={ctaHref}
      >
        {ctaLabel}
      </a>
    </section>
  );
}

export default function PricingPage() {
  const plans: PricingCardProps[] = [
    {
      name: "Monthly",
      description: "Flexible access to OneKeymap with a subscription you can cancel anytime.",
      price: "$0.99",
      priceSuffix: "per month",
      features: [
        { text: "Sync shortcuts across every supported editor" },
        { text: "Monthly updates and new features" },
      ],
      ctaLabel: "Start monthly plan",
      ctaHref: "#download-app-store",
    },
    {
      name: "Yearly",
      description: "Best balance of value and flexibility, with priority access to new features.",
      price: "$3.99",
      priceSuffix: "per year",
      features: [
        { text: "Sync shortcuts across every supported editor" },
        { text: "1 year of updates and new features" },
      ],
      ctaLabel: "Start yearly plan",
      ctaHref: "#download-app-store",
      recommanded: true,
    },
    {
      name: "Lifetime",
      description: "Own OneKeymap forever with a single payment and lock in future updates.",
      price: "$12.99",
      priceSuffix: "one-time",
      features: [
        { text: "Sync shortcuts across every supported editor" },
        { text: "Lifetime updates and new features" },
      ],
      ctaLabel: "Get lifetime license",
      ctaHref: "#download-app-store",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pick the OneKeymap plan that suits you
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          OneKeymap is a native macOS app that keeps your shortcuts in sync.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 items-start gap-10 md:grid-cols-3">
        {plans.map((plan) => {
          const isRecommended = plan.recommanded;
          return (
            <div key={plan.name} className="relative flex flex-col">
              {isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm">
                    Recommended
                  </div>
                </div>
              )}
              <div className="flex-grow pt-6">
                <PricingCard {...plan} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
