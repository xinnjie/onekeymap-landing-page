export const metadata = {
  title: "OneKeymap End-User License Agreement",
  description:
    "Review the OneKeymap End-User License Agreement (EULA) and key legal terms.",
};

const sections = [
  {
    title: "Introduction",
    content: [
      "This End-User License Agreement ('this Agreement') is a legal agreement between you ('User' or 'you') and OneKeymap ('the Software' or 'we') regarding your download, installation, use of the Software, and related services.",
      "Please read and fully understand all the terms of this Agreement. Your installation and use of the software are deemed as your having read and agreed to be bound by this Agreement.",
      "If you are accepting this Agreement on behalf of an organization, you represent and warrant that you have the legal authority to bind that organization.",
    ],
  },
  {
    title: "1. License Grant",
    content: [
      "Subject to your compliance with the terms of this Agreement, we grant you a personal, non-transferable, non-exclusive, revocable, royalty-free limited license to install and use the Software on any Apple-branded macOS device that you own or control.",
      "This license is for personal and commercial use, for the purpose of managing your editor shortcut key configuration files through the Software.",
    ],
  },
  {
    title: "2. Restrictions on Use",
    content: [
      "You agree not to, and not to permit others to:",
      "Reverse engineer, decompile, disassemble, or attempt to discover the source code of the Software.",
      "Modify, adapt, translate, or create derivative works based on the Software.",
      "Copy the Software (except for backup purposes).",
      "Rent, lease, distribute, sublicense, or otherwise transfer your rights under the Software to any third party.",
      "Remove or alter any copyright, trademark, or other proprietary notices contained in the Software.",
      "Use the Software for any illegal activity or to violate any applicable laws or regulations.",
    ],
  },
  {
    title: "3. Ownership",
    content: [
      "The Software and all related intellectual property rights, including copyrights, patents, and trademarks, are owned by the owner of OneKeymap.",
      "All rights not expressly granted to you in this Agreement are reserved by us.",
    ],
  },
  {
    title: "4. User Data and Privacy",
    content: [
      "<strong>Local Data Storage:</strong> The core design philosophy of OneKeymap is to protect your privacy. All your shortcut key configuration data, editor file paths, and other information are stored only on your local device. The Software does not collect, upload, or share your personal configuration file content or any personally identifiable information with any third party.",
      "<strong>Anonymous Usage Analytics:</strong> To improve the functionality of the Software, we use OpenTelemetry technology to collect completely anonymous, aggregated usage data, such as feature usage frequency, application performance metrics, and anonymous error reports.",
      "<strong>Privacy Commitment:</strong> All analytics data we collect is strictly anonymous and does not contain any of your personally identifiable information. This data cannot be traced back to any specific user.",
      "<strong>Purpose of Collection:</strong> The sole purpose of analyzing this data is to understand which features are most popular and the stability of the application, thereby providing a basis for future development and improvements.",
      "<strong>Privacy Policy:</strong> For a more detailed explanation of how we handle information, please refer to our Privacy Policy.",
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    content: [
      'YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE SOFTWARE IS AT YOUR SOLE RISK. THE SOFTWARE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND.',
      "WE DO NOT WARRANT THAT: (A) THE SOFTWARE WILL MEET YOUR SPECIFIC REQUIREMENTS; (B) THE SOFTWARE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SOFTWARE WILL BE ACCURATE OR RELIABLE; (D) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.",
      "You are responsible for backing up your original configuration files. We are not liable for any configuration file corruption, data loss, or system damage resulting from the use of the Software.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ONEKEYMAP OR ITS OWNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.",
      "IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR THE SOFTWARE.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "This Agreement is effective from the date you accept it and continues until terminated.",
      "Your rights under this Agreement will terminate automatically without notice from us if you fail to comply with any of its terms.",
      "Upon termination of the Agreement, you must immediately cease all use of the Software and destroy all copies.",
    ],
  },
  {
    title: "8. Governing Law and Dispute Resolution",
    content: [
      "This Agreement shall be governed by the laws of the People's Republic of China.",
      "Any dispute arising from this Agreement shall first be resolved through friendly negotiation. If negotiation fails, either party has the right to submit the dispute to the people's court with jurisdiction in the developer's location.",
    ],
  },
  {
    title: "9. General Provisions",
    content: [
      "<strong>Changes to Agreement:</strong> We reserve the right to modify this Agreement at any time. Your continued use of the Software constitutes your acceptance of the revised agreement.",
      "<strong>Severability:</strong> If any provision of this Agreement is held to be illegal or unenforceable, the remaining provisions will remain in full force and effect.",
      "<strong>Entire Agreement:</strong> This Agreement constitutes the entire agreement between you and OneKeymap regarding the Software.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions about this Agreement, please contact us at support@onekeymap.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <header className="text-center">
        <p className="text-sm tracking-wide text-blue-500 uppercase">
          Last updated: 23 September 2025
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          OneKeymap End-User License Agreement
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to OneKeymap! This agreement outlines your rights and
          responsibilities when using our software.
        </p>
      </header>

      <section className="mt-16 space-y-12">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl bg-white p-8 ring-1 shadow-xl ring-gray-100"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {section.title}
            </h2>
            <ul className="mt-6 space-y-3 text-base text-gray-600">
              {section.content.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
