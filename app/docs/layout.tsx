import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "OneKeymap Documentation",
  description:
    "Complete documentation for OneKeymap - The unified keyboard shortcut solution for macOS",
};

const banner = (
  <Banner storageKey="release-notice">
    OneKeymap.app v1.4.0 is released 🎉
  </Banner>
);

const navbar = (
  <Navbar
    logo={<b>OneKeymap</b>}
    projectLink="https://github.com/xinnjie/onekeymap-cli"
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © OneKeymap.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = (await getPageMap()).filter(
    (ele) => !("name" in ele && ele.name === "[lang]"),
  );
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/xinnjie/onekeymap-page/tree/main/app/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
