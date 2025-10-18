import "server-only";

export const defaultLocale = "en" as const;
export const locales = ["en", "zh", "ja", "ko", "fr", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  ja: "日本語",
  ko: "한국어",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  zh: "🇨🇳",
  ja: "🇯🇵",
  ko: "🇰🇷",
  fr: "🇫🇷",
  de: "🇩🇪",
  es: "🇪🇸",
};

export const localeHreflang: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
  fr: "fr-FR",
  de: "de-DE",
  es: "es-ES",
};

// SEO metadata configuration
export const seoConfig: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  en: {
    title: "OneKeymap — Keymap Configure once. Use everywhere.",
    description:
      "Unify your editor shortcuts across VS Code, Zed, IntelliJ IDEA, and Helix. Sync keybindings, boost productivity, and eliminate context switching between code editors.",
    keywords: [
      "keyboard shortcuts",
      "keybindings",
      "VS Code shortcuts",
      "IntelliJ shortcuts",
      "Zed editor",
      "Helix editor",
      "developer productivity",
      "code editor shortcuts",
      "macOS developer tools",
      "unified keymap",
      "sync shortcuts",
      "editor configuration",
    ],
  },
  zh: {
    title: "OneKeymap — 一次配置，随处使用",
    description:
      "在 VS Code、Zed、IntelliJ IDEA 和 Helix 之间统一你的编辑器快捷键。同步键位绑定，提升生产力，消除代码编辑器之间的上下文切换。",
    keywords: [
      "键盘快捷键",
      "按键绑定",
      "VS Code 快捷键",
      "IntelliJ 快捷键",
      "Zed 编辑器",
      "Helix 编辑器",
      "开发者生产力",
      "代码编辑器快捷键",
      "macOS 开发工具",
      "统一键位映射",
      "同步快捷键",
      "编辑器配置",
    ],
  },
  ja: {
    title: "OneKeymap — 一度設定すれば、どこでも使用可能",
    description:
      "VS Code、Zed、IntelliJ IDEA、Helixでエディターのショートカットを統一。キーバインドを同期し、生産性を向上させ、コードエディター間のコンテキストスイッチングを排除。",
    keywords: [
      "キーボードショートカット",
      "キーバインド",
      "VS Code ショートカット",
      "IntelliJ ショートカット",
      "Zed エディター",
      "Helix エディター",
      "開発者生産性",
      "コードエディターショートカット",
      "macOS 開発ツール",
      "統一キーマップ",
      "ショートカット同期",
      "エディター設定",
    ],
  },
  ko: {
    title: "OneKeymap — 한 번 설정하면 모든 곳에서 사용",
    description:
      "VS Code, Zed, IntelliJ IDEA, Helix에서 에디터 단축키를 통합하세요. 키 바인딩을 동기화하고 생산성을 높이며 코드 에디터 간 컨텍스트 전환을 제거하세요.",
    keywords: [
      "키보드 단축키",
      "키 바인딩",
      "VS Code 단축키",
      "IntelliJ 단축키",
      "Zed 에디터",
      "Helix 에디터",
      "개발자 생산성",
      "코드 에디터 단축키",
      "macOS 개발 도구",
      "통합 키맵",
      "단축키 동기화",
      "에디터 설정",
    ],
  },
  fr: {
    title: "OneKeymap — Configurez une fois, utilisez partout",
    description:
      "Unifiez vos raccourcis d'éditeur entre VS Code, Zed, IntelliJ IDEA et Helix. Synchronisez les raccourcis clavier, boostez la productivité et éliminez le changement de contexte entre les éditeurs de code.",
    keywords: [
      "raccourcis clavier",
      "raccourcis",
      "raccourcis VS Code",
      "raccourcis IntelliJ",
      "éditeur Zed",
      "éditeur Helix",
      "productivité développeur",
      "raccourcis éditeur de code",
      "outils développeur macOS",
      "keymap unifié",
      "synchroniser raccourcis",
      "configuration éditeur",
    ],
  },
  de: {
    title: "OneKeymap — Einmal konfigurieren, überall verwenden",
    description:
      "Vereinheitlichen Sie Ihre Editor-Shortcuts zwischen VS Code, Zed, IntelliJ IDEA und Helix. Synchronisieren Sie Tastenkombinationen, steigern Sie die Produktivität und eliminieren Sie Kontextwechsel zwischen Code-Editoren.",
    keywords: [
      "Tastaturkürzel",
      "Tastenkombinationen",
      "VS Code Shortcuts",
      "IntelliJ Shortcuts",
      "Zed Editor",
      "Helix Editor",
      "Entwicklerproduktivität",
      "Code-Editor-Shortcuts",
      "macOS Entwicklertools",
      "einheitliche Keymap",
      "Shortcuts synchronisieren",
      "Editor-Konfiguration",
    ],
  },
  es: {
    title: "OneKeymap — Configura una vez, usa en todas partes",
    description:
      "Unifica tus atajos de editor entre VS Code, Zed, IntelliJ IDEA y Helix. Sincroniza combinaciones de teclas, aumenta la productividad y elimina el cambio de contexto entre editores de código.",
    keywords: [
      "atajos de teclado",
      "combinaciones de teclas",
      "atajos VS Code",
      "atajos IntelliJ",
      "editor Zed",
      "editor Helix",
      "productividad desarrollador",
      "atajos editor de código",
      "herramientas desarrollador macOS",
      "keymap unificado",
      "sincronizar atajos",
      "configuración editor",
    ],
  },
};

// Dictionary type definition
export type Dictionary = {
  nav: {
    home: string;
    pricing: string;
    blog: string;
    download: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
  };
  footer: {
    copyright: string;
  };
};

// Dictionary loader
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
  ko: () => import("./dictionaries/ko.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]() as Promise<Dictionary>;
};

// Utility functions

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromUrl(url: string): Locale {
  const segments = url.split("/").filter(Boolean);
  const potentialLocale = segments[0];

  if (isValidLocale(potentialLocale)) {
    return potentialLocale;
  }

  return defaultLocale;
}

export function removeLocaleFromUrl(url: string, locale: Locale): string {
  if (locale === defaultLocale) return url;
  return url.replace(new RegExp(`^/${locale}`), "") || "/";
}

export function addLocaleToUrl(url: string, locale: Locale): string {
  if (locale === defaultLocale) return url;
  return `/${locale}${url === "/" ? "" : url}`;
}

// SEO helpers
export function generateHreflangLinks(
  currentPath: string,
  currentLocale: Locale,
) {
  return locales.map((locale) => ({
    rel: "alternate",
    hreflang: localeHreflang[locale],
    href: `${process.env.NEXT_PUBLIC_SITE_URL || "https://onekeymap.com"}${addLocaleToUrl(currentPath, locale)}`,
  }));
}

export function generateLocaleMetadata(locale: Locale) {
  const config = seoConfig[locale];
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      locale: localeHreflang[locale].replace("-", "_"),
    },
    twitter: {
      title: config.title,
      description: config.description,
    },
  };
}

// Language detection
export function detectBrowserLanguage(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const browserLang = navigator.language.toLowerCase();

  // Check for exact matches first
  for (const locale of locales) {
    if (browserLang === localeHreflang[locale].toLowerCase()) {
      return locale;
    }
  }

  // Check for partial matches (language code only)
  const langCode = browserLang.split("-")[0];
  for (const locale of locales) {
    if (langCode === localeHreflang[locale].toLowerCase().split("-")[0]) {
      return locale;
    }
  }

  return defaultLocale;
}
