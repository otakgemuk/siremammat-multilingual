// SireMammat — i18n translations
const TRANSLATIONS = {
  en: {
    nav_hub: "Hub", nav_about: "About", nav_indicators: "Indicators",
    nav_tools: "Tools", nav_analysis: "Analysis", nav_calculator: "Calculator",
    nav_contact: "Contact", nav_coffee: "☕ Buy Me a Coffee",
    footer_edu: "Education", footer_connect: "Connect", footer_disclaimer: "Disclaimer",
    footer_disclaimer_text: "Trading involves substantial risk of loss. Past performance is not indicative of future results. All content is educational only.",
    footer_copy: "© 2026 Sire Mammat · All rights reserved",
    footer_sub: "Al Brooks Methodology · Free Education",
    lang_label: "Language",
  },
  zh: {
    nav_hub: "主页", nav_about: "关于", nav_indicators: "指标",
    nav_tools: "工具", nav_analysis: "分析", nav_calculator: "计算器",
    nav_contact: "联系", nav_coffee: "☕ 请我喝咖啡",
    footer_edu: "教育", footer_connect: "联系", footer_disclaimer: "免责声明",
    footer_disclaimer_text: "交易涉及重大损失风险。过往业绩不代表未来结果。所有内容仅供教育目的。",
    footer_copy: "© 2026 Sire Mammat · 保留所有权利",
    footer_sub: "Al Brooks 方法论 · 免费教育",
    lang_label: "语言",
  },
  hi: {
    nav_hub: "होम", nav_about: "परिचय", nav_indicators: "संकेतक",
    nav_tools: "उपकरण", nav_analysis: "विश्लेषण", nav_calculator: "कैलकुलेटर",
    nav_contact: "संपर्क", nav_coffee: "☕ कॉफी पिलाएं",
    footer_edu: "शिक्षा", footer_connect: "जुड़ें", footer_disclaimer: "अस्वीकरण",
    footer_disclaimer_text: "ट्रेडिंग में पर्याप्त नुकसान का जोखिम होता है। पिछला प्रदर्शन भविष्य के परिणामों का संकेत नहीं है। सभी सामग्री केवल शैक्षिक उद्देश्यों के लिए है।",
    footer_copy: "© 2026 Sire Mammat · सर्वाधिकार सुरक्षित",
    footer_sub: "Al Brooks पद्धति · मुफ़्त शिक्षा",
    lang_label: "भाषा",
  },
  es: {
    nav_hub: "Inicio", nav_about: "Acerca", nav_indicators: "Indicadores",
    nav_tools: "Herramientas", nav_analysis: "Análisis", nav_calculator: "Calculadora",
    nav_contact: "Contacto", nav_coffee: "☕ Invítame un café",
    footer_edu: "Educación", footer_connect: "Conectar", footer_disclaimer: "Aviso legal",
    footer_disclaimer_text: "El trading conlleva un riesgo sustancial de pérdida. El rendimiento pasado no indica resultados futuros. Todo el contenido es solo educativo.",
    footer_copy: "© 2026 Sire Mammat · Todos los derechos reservados",
    footer_sub: "Metodología Al Brooks · Educación Gratuita",
    lang_label: "Idioma",
  },
  fr: {
    nav_hub: "Accueil", nav_about: "À propos", nav_indicators: "Indicateurs",
    nav_tools: "Outils", nav_analysis: "Analyse", nav_calculator: "Calculateur",
    nav_contact: "Contact", nav_coffee: "☕ Offrez-moi un café",
    footer_edu: "Éducation", footer_connect: "Connexion", footer_disclaimer: "Avertissement",
    footer_disclaimer_text: "Le trading comporte un risque substantiel de perte. Les performances passées ne garantissent pas les résultats futurs. Tout le contenu est uniquement éducatif.",
    footer_copy: "© 2026 Sire Mammat · Tous droits réservés",
    footer_sub: "Méthodologie Al Brooks · Éducation Gratuite",
    lang_label: "Langue",
  },
  ar: {
    nav_hub: "الرئيسية", nav_about: "عن الموقع", nav_indicators: "المؤشرات",
    nav_tools: "الأدوات", nav_analysis: "التحليل", nav_calculator: "الحاسبة",
    nav_contact: "تواصل", nav_coffee: "☕ اشترِ لي قهوة",
    footer_edu: "التعليم", footer_connect: "تواصل", footer_disclaimer: "إخلاء المسؤولية",
    footer_disclaimer_text: "ينطوي التداول على مخاطر خسارة كبيرة. الأداء السابق لا يدل على النتائج المستقبلية. جميع المحتويات لأغراض تعليمية فقط.",
    footer_copy: "© 2026 Sire Mammat · جميع الحقوق محفوظة",
    footer_sub: "منهجية آل بروكس · تعليم مجاني",
    lang_label: "اللغة",
    dir: "rtl",
  },
  ja: {
    nav_hub: "ホーム", nav_about: "概要", nav_indicators: "インジケーター",
    nav_tools: "ツール", nav_analysis: "分析", nav_calculator: "計算機",
    nav_contact: "お問い合わせ", nav_coffee: "☕ コーヒーをおごる",
    footer_edu: "教育", footer_connect: "つながる", footer_disclaimer: "免責事項",
    footer_disclaimer_text: "トレーディングには多大な損失リスクが伴います。過去の実績は将来の結果を示すものではありません。すべてのコンテンツは教育目的のみです。",
    footer_copy: "© 2026 Sire Mammat · 全著作権所有",
    footer_sub: "Al Brooksメソドロジー · 無料教育",
    lang_label: "言語",
  },
};

const LANG_NAMES = {
  en: "English", zh: "中文", hi: "हिन्दी",
  es: "Español", fr: "Français", ar: "العربية", ja: "日本語"
};

let currentLang = localStorage.getItem('sm_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('sm_lang', lang);
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Direction
  document.documentElement.setAttribute('dir', t.dir || 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Nav links
  const navMap = {
    nav_hub: 0, nav_about: 1, nav_indicators: 2,
    nav_tools: 3, nav_analysis: 4, nav_calculator: 5, nav_contact: 6
  };
  const navLinks = document.querySelectorAll('.nav-links li a:not(.nav-cta)');
  const keys = ['nav_hub','nav_about','nav_indicators','nav_tools','nav_analysis','nav_calculator','nav_contact'];
  navLinks.forEach((a, i) => { if (keys[i] && t[keys[i]]) a.textContent = t[keys[i]]; });
  const cta = document.querySelector('.nav-cta');
  if (cta) cta.textContent = t.nav_coffee;

  // Footer
  const footerHeadings = document.querySelectorAll('.footer-col h4');
  if (footerHeadings[0]) footerHeadings[0].textContent = t.footer_edu;
  if (footerHeadings[1]) footerHeadings[1].textContent = t.footer_connect;
  if (footerHeadings[2]) footerHeadings[2].textContent = t.footer_disclaimer;
  const disclaimerP = document.querySelector('.footer-col:last-child p');
  if (disclaimerP) disclaimerP.textContent = t.footer_disclaimer_text;
  const footerBottom = document.querySelectorAll('.footer-bottom span');
  if (footerBottom[0]) footerBottom[0].textContent = t.footer_copy;
  if (footerBottom[1]) footerBottom[1].textContent = t.footer_sub;

  // i18n tagged elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update active button in lang switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function buildLangSwitcher() {
  const container = document.querySelector('.lang-switcher');
  if (!container) return;
  container.innerHTML = Object.entries(LANG_NAMES).map(([code, name]) =>
    `<button class="lang-btn${code === currentLang ? ' active' : ''}" data-lang="${code}" onclick="applyLang('${code}')">${name}</button>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  buildLangSwitcher();
  applyLang(currentLang);
});
