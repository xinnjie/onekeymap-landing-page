export const metadata = {
  title: "OneKeymap Terms of Service",
  description: "Review the OneKeymap End-User License Agreement and key legal terms.",
};

const sections = [
  {
    title: "License Grant",
    content: [
      "We provide you with a personal, non-transferable, non-exclusive license to install and use OneKeymap on Apple-branded macOS devices that you own or control.",
      "The licensed use covers both personal and commercial workflows focused on managing editor shortcut configurations.",
    ],
  },
  {
    title: "Restrictions",
    content: [
      "Do not reverse engineer, decompile, disassemble, or attempt to derive the source code of the app.",
      "Do not rent, lease, sublicense, redistribute, or transfer your rights to any third party.",
      "Do not remove or modify any proprietary notices contained within the software.",
      "Do not use the software for any illegal purpose or in violation of applicable laws and regulations.",
    ],
  },
  {
    title: "Ownership",
    content: [
      "All intellectual property rights in OneKeymap, including images, text, code, and UI design, are owned by the OneKeymap team.",
      "No rights are granted to you beyond the limited license described in this agreement.",
    ],
  },
  {
    title: "User Data and Privacy",
    content: [
      "Your keymap configurations and related data stay on your local device. We do not upload or share personal configuration data with third parties.",
      "We collect anonymous, aggregated telemetry (such as feature usage frequency and performance metrics) to improve the product.",
      "All analytics data are strictly anonymized and cannot identify you. You can manage telemetry preferences from the app when available.",
      "For more details, refer to our Privacy Policy.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      "OneKeymap is provided on an \"as is\" basis without warranties of any kind.",
      "We do not guarantee that the app will meet your requirements, operate uninterrupted, or be error-free.",
      "You are responsible for backing up your editor configuration files. We are not liable for any data loss or damages resulting from the use of the app.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the software.",
      "Our total liability is limited to the amount you paid for the software, if any.",
    ],
  },
  {
    title: "Termination",
    content: [
      "This agreement remains in effect until terminated. Your rights terminate automatically if you fail to comply with the terms.",
      "Upon termination you must stop using OneKeymap and delete any copies in your possession.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "This agreement is governed by the laws of the People\'s Republic of China.",
      "Disputes should be resolved amicably where possible. Otherwise, either party may submit the dispute to the competent court in the developer\'s jurisdiction.",
    ],
  },
  {
    title: "Changes to this Agreement",
    content: [
      "We may update this agreement at any time. Revised terms will be posted in the app or on our website.",
      "Your continued use of OneKeymap after changes take effect constitutes acceptance of the updated agreement.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have questions about this agreement, contact us at support@onekeymap.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <header className="text-center">
        <p className="text-sm uppercase tracking-wide text-blue-500">Last updated: 23 September 2025</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          OneKeymap Terms of Service
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          These terms explain your rights and responsibilities when using OneKeymap.
        </p>
      </header>

      <section className="mt-16 space-y-12">
        {sections.map((section) => (
          <article key={section.title} className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
            <ul className="mt-6 space-y-3 text-base text-gray-600">
              {section.content.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
