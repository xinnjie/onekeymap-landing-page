export const metadata = {
  title: "OneKeymap Pricing",
  description: "Choose the OneKeymap plan that fits you best.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pick the OneKeymap plan that suits you
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          OneKeymap is a native macOS app that keeps your shortcuts in sync.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <section className="flex h-full flex-col rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-100">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Yearly</h2>
            <p className="mt-3 text-gray-600">
              Best for trying OneKeymap with the flexibility to cancel anytime.
            </p>
          </div>
          <div className="mt-8 flex items-baseline gap-2 text-gray-900">
            <span className="text-5xl font-bold">$2.99</span>
            <span className="text-lg text-gray-600">per year</span>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Sync shortcuts across every supported editor
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              1 year of updates and new features
            </li>
          </ul>
          <a
            className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
            href="#download-app-store"
          >
            Start yearly plan
          </a>
        </section>

        <section className="flex h-full flex-col rounded-3xl bg-gray-900 p-10 text-white shadow-2xl ring-1 ring-gray-800">
          <div>
            <h2 className="text-2xl font-semibold">Lifetime</h2>
            <p className="mt-3 text-gray-200">
              Own OneKeymap forever with a single payment and lock in future updates.
            </p>
          </div>
          <div className="mt-8 flex items-baseline gap-2">
            <span className="text-5xl font-bold">$9.99</span>
            <span className="text-lg text-gray-300">one-time</span>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Sync shortcuts across every supported editor
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Lifetime updates and new features
            </li>
          </ul>
          <a
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100"
            href="#download-app-store"
          >
            Get lifetime license
          </a>
        </section>
      </div>
    </main>
  );
}
