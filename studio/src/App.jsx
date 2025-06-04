import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";

const LanguageContext = createContext();
const translations = {
  ru: {
    change_language: "Сменить язык",
    mainTitle: "Мобильные прокси премиум-класса",
    mainDescription:
      "IPv4 из мобильных сетей операторов США, Европы, Азии и других регионов.",
    mainDescription2:
      "Никаких дата-центров — только чистые, высокоранжированные IP с мобильной репутацией.",
    mainDescription3:
      "Возможна выдача прокси по API — удобно для автоматизации и работы команд.",
    lineText: "Поддержка всех популярных протоколов:",
    h2Block2: "🔍 Гибкая фильтрация и точный выбор IP:",
    block2Text1: "По ZIP-коду",
    block2Text2: "По мобильному оператору",
    block2Text3: "По стране, региону и городу",
    block2Text4: "По типу подключения (4G / 5G)",
    block2Text5: "По скорости, ротации и другим параметрам",
    block3Text1: "📈 Решения для бизнеса и профессионалов:",
    block3Text2: "Сбор данных, scraping и антидетект-работа",
    block3Text3: "Мультиаккаунтинг и SMM",
    block3Text4: "Аналитика и трекинг рекламы",
    block3Text5: "SEO и проверка поисковой выдачи",
    block3Text6: "A/B тестирование и мониторинг цен",
    block3Text7: "Анонимный доступ и защита трафика",
    block4Text1: "🤝 Партнёрская программа — 25%",
    block4Text2: "Зарабатывайте 25% с каждой оплаты приглашённых клиентов.",
    block4Text3:
      "Выплаты без задержек, прозрачная статистика, высокая конверсия.",
    block5Text1: "💎 Почему выбирают нас:",
    block5Text2: "IP с высоким уровнем доверия",
    block5Text3: "Настоящая мобильная репутация — без банов и капч",
    block5Text4: "Естественное поведение в сети",
    block5Text5: "Гибкая настройка ротации",
    block5Text6: "Поддержка всех стран и уровней трафика",
    block6Text1: "💸 Честная модель оплаты",
    block6Text2:
      "Вы платите только за трафик — никаких подписок или скрытых сборов.",
    block6Text3:
      "Цена за 1 ГБ зависит от региона и объёма — уточняйте при подключении.",
    block7Text1: "🌎 Максимальный геоохват",
    block7Text2: "Работаем со всеми странами Tier 1, Tier 2, Tier 3",
    block7Text3: "США, Канада, ЕС, Азия, Латинская Америка и другие.",
    block7Text4: "Прокси доступны по запросу в более чем 100 странах мира.",
    block8Text1: "🎁 Бесплатный тест-доступ",
    block8Text2:
      "Протестируйте наш сервис бесплатно — оцените скорость, стабильность и качество IP до покупки.",
    privacyPolicy: "Политика Конфиденциальности",
  },
  en: {
    change_language: "Change language",
    mainTitle: "Premium Mobile Proxies",
    mainDescription:
      "IPv4 from mobile networks in the US, Europe, Asia, and other regions.",
    mainDescription2:
      "No datacenters — only clean, high-ranking IPs with genuine mobile reputation.",
    mainDescription3:
      "Proxy access via API is available — perfect for automation and team workflows.",
    lineText: "Support for all popular protocols:",
    h2Block2: "🔍 Flexible filtering and precise IP selection:",
    block2Text1: "By ZIP code",
    block2Text2: "By mobile carrier",
    block2Text3: "By country, region, and city",
    block2Text4: "By connection type (4G / 5G)",
    block2Text5: "By speed, rotation settings, and other parameters",
    block3Text1: "📈 Solutions for Businesses & Professionals:",
    block3Text2: "Data scraping & anti-detect operations",
    block3Text3: "Multi-accounting & SMM",
    block3Text4: "Ad analytics & tracking",
    block3Text5: "SEO & SERP checks",
    block3Text6: "A/B testing & price monitoring",
    block3Text7: "Anonymous browsing & traffic protection",
    block4Text1: "🤝 Affiliate Program — 25%",
    block4Text2: "Earn 25% from every payment made by referred clients.",
    block4Text3:
      "Instant payouts, transparent stats, and high conversion rates.",
    block5Text1: "💎 Why Choose Us:",
    block5Text2: "High-trust IPs",
    block5Text3: "True mobile reputation — no bans or captchas",
    block5Text4: "Natural online behavior",
    block5Text5: "Flexible rotation settings",
    block5Text6: "Global coverage and scalable traffic options",
    block6Text1: "💸 Fair Pricing Model",
    block6Text2:
      "You pay only for the data you use — no subscriptions, no hidden fees.",
    block6Text3:
      "The price per GB depends on region and volume — contact us for details.",
    block7Text1: "🌎 Maximum Geo-Coverage",
    block7Text2: "We support all Tier 1, Tier 2, and Tier 3 countries:",
    block7Text3: "USA, Canada, EU, Asia, Latin America, and more.",
    block7Text4:
      "Proxies available on request in over 100 countries worldwide.",
    block8Text1: "🎁 Free Trial Access",
    block8Text2:
      "Test our service for free — experience the speed, stability, and IP quality before you buy.",
    privacyPolicy: "Privacy Policy",
  },
};
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ru");

  const translate = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
}
function useLanguage() {
  return useContext(LanguageContext);
}
function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <div>
        {/* Preloader Start */}
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <img src="images/loader.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Preloader End */}

        {/* Header Start */}
        <header className="main-header">
          <div className="header-sticky">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                {/* Logo Start */}
                <a className="navbar-brand" href="./">
                  <img src="images/logo.svg" alt="Logo" />
                </a>
                {/* Logo End */}

                {/* Main Menu Start */}
                <div className="collapse navbar-collapse main-menu">
                  {/* Header Social Box Start */}
                  <div className="header-social-box d-inline-flex">
                    {/* Header Social Links Start */}
                    <div className="header-social-links">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="link-language"
                            onClick={() => {
                              language === "ru"
                                ? setLanguage("en")
                                : setLanguage("ru");
                            }}
                          >
                            <svg
                              viewBox="-0.5 0 25 25"
                              fill="#14daf5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25px"
                              height="25px"
                            >
                              <path
                                d="M12 22.3201C17.5228 22.3201 22 17.8429 22 12.3201C22 6.79722 17.5228 2.32007 12 2.32007C6.47715 2.32007 2 6.79722 2 12.3201C2 17.8429 6.47715 22.3201 12 22.3201Z"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2 12.3201H22"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 22.3201C13.933 22.3201 15.5 17.8429 15.5 12.3201C15.5 6.79722 13.933 2.32007 12 2.32007C10.067 2.32007 8.5 6.79722 8.5 12.3201C8.5 17.8429 10.067 22.3201 12 22.3201Z"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                            <span>{t("change_language")}</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">Sign Up</a>
                        </li>
                        <li>
                          <a href="#">Sign In</a>
                        </li>
                      </ul>
                    </div>
                    {/* Header Social Links End */}
                  </div>
                  {/* Header Social Box End */}
                </div>
                {/* Main Menu End */}
                <div className="navbar-toggle"></div>
              </div>
            </nav>
            <div className="responsive-menu"></div>
          </div>
        </header>
        {/* Header End */}

        {/* Hero Section Start*/}
        <div className="hero">
          {/* Video Start */}
          <div className="hero-bg-video">
            {/* Selfhosted Video Start */}
            {/* <video autoplay muted loop id="myVideo"><source src="images/hero-bg-video.mp4" type="video/mp4"></video> */}
            <VideoComponent></VideoComponent>
            {/* Selfhosted Video End */}
            {/* Youtube Video Start */}
            {/* <div id="herovideo" className="player" data-property="{videoURL:'74DWwSxsVSs',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
            {/* Youtube Video End */}
          </div>
          {/* Video End */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Hero Content Start */}
                <div className="hero-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <div className="typing-title">
                      <p>Digital World</p>
                      <p>Social Marketing</p>
                      <p>Art & Design</p>
                    </div>
                    <h1 className="text-anime-style-2" data-cursor="-opaque">
                      {t("mainTitle")} <span className="typed-title"></span>
                    </h1>
                  </div>
                  {/* Section Title End */}

                  {/* Hero Content Body Start */}
                  <div className="hero-content-body">
                    {/* Hero Content Video Start */}
                    <div className="hero-content-video">
                      {/* Video Play Button Start */}
                      <div className="video-play-button">
                        <a
                          href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                          className="popup-video"
                          data-cursor-text="Play"
                        >
                          <i className="fa-solid fa-play"></i>
                        </a>
                      </div>
                      {/* Video Play Button End */}

                      {/* Learn More Circle Start */}
                      <div className="learn-more-circle">
                        <img src="images/learn-more-circle.svg" alt="" />
                      </div>
                      {/* Learn More Circle End */}
                    </div>
                    {/* Hero Content Video End */}

                    {/* Hero Video Content Start */}
                    <div className="hero-video-content wow fadeInUp">
                      <p>{t("mainDescription")}</p>
                      <p>{t("mainDescription2")}</p>
                      <p>{t("mainDescription3")}</p>
                    </div>
                    {/* Hero Video Content End */}
                  </div>
                  {/* Hero Content Body End */}

                  {/* Hero Button Start */}
                  <div className="hero-btn wow fadeInUp" data-wow-delay="0.25s">
                    <a href="contact.html" className="btn-default">
                      Sign Up
                    </a>
                  </div>
                  {/* Hero Button End */}
                </div>
                {/* Hero Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}

        {/* Scrolling Ticker Section Start */}
        <div className="our-scrolling-ticker">
          {/* Scrolling Ticker Start */}
          <div className="scrolling-ticker-box">
            <div className="scrolling-content">
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                {t("lineText")}
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                HTTPS / SOCKS5
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                TCP
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                DNS
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                UDP
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                Quick Connect
              </span>
            </div>

            <div className="scrolling-content">
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                {t("lineText")}
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                HTTPS / SOCKS5
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                TCP
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                DNS
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                UDP
              </span>
              <span>
                <img src="images/asterisk-icon.svg" alt="" />
                Quick Connect
              </span>
            </div>
          </div>
        </div>
        {/* Scrolling Ticker Section End */}

        {/* About Agency Section Start */}
        <div className="about-agency">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* About Agency Content Start */}
                <div className="about-agency-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    {/* <h3 className="wow fadeInUp">about agency</h3> */}
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      {t("h2Block2")}
                    </h2>
                  </div>
                  {/* Section Title End */}

                  {/* Section btn Start */}
                  {/* <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                    <a href="about.html" className="btn-default">
                      more about
                    </a>
                  </div> */}
                  {/* Section btn End */}
                </div>
                {/* About Agency Content End */}
              </div>

              <div className="col-lg-6">
                {/* About Agency List Start */}
                <div className="about-agency-list">
                  {/* About Agency Item Start */}
                  <div className="about-agency-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="images/icon-about-agency-1.svg" alt="" />
                    </div>
                    <div className="agency-item-content">
                      {/* <h3>your success, our mission </h3> */}
                      <h3>{t("block2Text1")}</h3>
                    </div>
                  </div>
                  {/* About Agency Item End */}

                  {/* About Agency Item Start */}
                  <div
                    className="about-agency-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-about-agency-2.svg" alt="" />
                    </div>
                    <div className="agency-item-content">
                      {/* <h3>creators of digital excellence </h3> */}
                      <h3>{t("block2Text2")}</h3>
                    </div>
                  </div>
                  {/* About Agency Item End */}

                  {/* About Agency Item Start */}
                  <div
                    className="about-agency-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-about-agency-3.svg" alt="" />
                    </div>
                    <div className="agency-item-content">
                      {/* <h3>innovating the digital landscape</h3> */}
                      <h3>{t("block2Text3")}</h3>
                    </div>
                  </div>
                  {/* About Agency Item End */}

                  {/* About Agency Item Start */}
                  <div
                    className="about-agency-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-about-agency-4.svg" alt="" />
                    </div>
                    <div className="agency-item-content">
                      {/* <h3>helping brands thrive online</h3> */}
                      <h3>{t("block2Text4")}</h3>
                    </div>
                  </div>
                  {/* About Agency Item End */}

                  {/* About Agency Item Start */}
                  <div
                    className="about-agency-item wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-service-1.svg" alt="" />
                    </div>
                    <div className="agency-item-content">
                      {/* <h3>helping brands thrive online</h3> */}
                      <h3>{t("block2Text5")}</h3>
                    </div>
                  </div>
                  {/* About Agency Item End */}
                </div>
                {/* About Agency List End */}
              </div>
            </div>
          </div>
        </div>
        {/* About Us Section End */}

        {/* Our Services Section Start */}
        <div className="our-services">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("block3Text1")}
                  </h2>
                </div>
                {/* Section Title End */}
              </div>

              <div className="col-lg-5">
                {/* Section Content Button Start */}
                <div className="section-content-btn">
                  {/* Section Title Content Start */}
                  {/* <div
                    className="section-title-content wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <p>
                      Our digital services empower brands with innovative
                      strategies and solutions for sustainable growth and
                      engagement.
                    </p>
                  </div> */}
                  {/* Section Title Content End */}

                  {/* Section Button Start */}
                  {/* <div
                    className="section-btn wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <a href="services.html" className="btn-default">
                      all services
                    </a>
                  </div> */}
                  {/* Section Button End */}
                </div>
                {/* Section Content Button End */}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp">
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="icon-box">
                      <img src="images/icon-service-1.svg" alt="" />
                    </div>

                    {/* <div className="service-arrow">
                      <a href="service-single.html">
                        <img src="images/arrow-accent.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                  {/* Service Item Header End */}

                  {/* Service Item Body Start */}
                  <div className="service-item-body">
                    <h3>{t("block3Text2")}</h3>
                  </div>
                  {/* Service Item Body End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="icon-box">
                      <img src="images/icon-service-2.svg" alt="" />
                    </div>

                    {/* <div className="service-arrow">
                      <a href="service-single.html">
                        <img src="images/arrow-accent.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                  {/* Service Item Header End */}

                  {/* Service Item Body Start */}
                  <div className="service-item-body">
                    <h3>{t("block3Text3")}</h3>
                  </div>
                  {/* Service Item Body End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="icon-box">
                      <img src="images/icon-service-3.svg" alt="" />
                    </div>

                    {/* <div className="service-arrow">
                      <a href="service-single.html">
                        <img src="images/arrow-accent.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                  {/* Service Item Header End */}

                  {/* Service Item Body Start */}
                  <div className="service-item-body">
                    <h3>{t("block3Text4")}</h3>
                  </div>
                  {/* Service Item Body End */}
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="icon-box">
                      <img
                        src="images/icon-testimonial-benefits-1.svg"
                        alt=""
                      />
                    </div>

                    {/* <div className="service-arrow">
                      <a href="service-single.html">
                        <img src="images/arrow-accent.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                  {/* Service Item Header End */}

                  {/* Service Item Body Start */}
                  <div className="service-item-body">
                    <h3>{t("block3Text5")}</h3>
                  </div>
                  {/* Service Item Body End */}
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="icon-box">
                      <img
                        src="images/icon-testimonial-benefits-2.svg"
                        alt=""
                      />
                    </div>

                    {/* <div className="service-arrow">
                      <a href="service-single.html">
                        <img src="images/arrow-accent.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                  {/* Service Item Header End */}

                  {/* Service Item Body Start */}
                  <div className="service-item-body">
                    <h3>{t("block3Text6")}</h3>
                  </div>
                  {/* Service Item Body End */}
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Service Item Header Start */}
                  <div className="service-item-header">
                    <div className="icon-box">
                      <img
                        src="images/icon-testimonial-benefits-3.svg"
                        alt=""
                      />
                    </div>

                    {/* <div className="service-arrow">
                      <a href="service-single.html">
                        <img src="images/arrow-accent.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                  {/* Service Item Header End */}

                  {/* Service Item Body Start */}
                  <div className="service-item-body">
                    <h3>{t("block3Text7")}</h3>
                  </div>
                  {/* Service Item Body End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-12">
                <div
                  className="service-footer wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  {/* <p>
                    Let's make something great work together.{" "}
                    <a href="contact.html">get free quote</a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Services Section End */}

        {/* Digital Success Section Start */}
        <div className="digital-success">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Digital Success Box Start */}
                <div className="digital-success-box">
                  {/* Digital Success Content Start */}
                  <div className="digital-success-content">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        {t("block4Text1")}
                      </h2>
                    </div>
                    {/* Section Title End */}

                    {/* Success Counter Box Start */}
                    <div className="success-counter-box">
                      {/* Success Counter Item Start */}
                      {/* <div className="success-counter-item">
                        <h2>
                          +<span className="counter">60</span>%
                        </h2>
                        <p>By optimizing your website for search engines.</p>
                      </div> */}
                      {/* Success Counter Item End */}

                      {/* Success Counter Item Start */}
                      <div className="success-counter-item">
                        {/* <h2>
                          +<span className="counter">30</span>%
                        </h2>
                        <p>
                          Rise in revenue as more visitors convert into paying
                          customers.
                        </p> */}
                      </div>
                      {/* Success Counter Item End */}
                    </div>
                    {/* Success Counter Box End */}
                  </div>
                  {/* Digital Success Content End */}

                  <div className="digital-success-list">
                    <div className="success-list-item wow fadeInUp">
                      <p>{t("block4Text2")}</p>
                    </div>

                    <div
                      className="success-list-item wow fadeInUp"
                      data-wow-delay="0.25s"
                    >
                      <p>{t("block4Text3")}</p>
                    </div>
                  </div>
                </div>
                {/* Digital Success Box End */}
              </div>
            </div>
          </div>
        </div>
        {/* Digital Success Section End */}

        {/* Why Choose us Section Start */}
        <div className="why-choose-us">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("block5Text1")}
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
            </div>

            <div className="row align-items-center">
              <div>
                {/* Why Choose Content Start */}
                <div className="why-choose-content">
                  {/* Why Choose Item Start */}
                  <div className="why-choose-item active wow fadeInUp">
                    <h3>{t("block5Text2")}</h3>
                  </div>
                  {/* Why Choose Item End */}

                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <h3>{t("block5Text3")}</h3>
                  </div>
                  {/* Why Choose Item End */}

                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h3>{t("block5Text4")}</h3>
                  </div>
                  {/* Why Choose Item End */}

                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h3>{t("block5Text5")}</h3>
                  </div>
                  {/* Why Choose Item End */}

                  {/* Why Choose Item Start */}
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h3>{t("block5Text6")}</h3>
                  </div>
                  {/* Why Choose Item End */}
                </div>
                {/* Why Choose Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose us Section End */}

        {/* Join Agency Section Start */}
        <div className="join-agency">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("block6Text1")}
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* Agency Social Item Start */}
                <div className="agency-social-item wow fadeInUp">
                  {/* Icon Box Start */}
                  <div className="icon-box">
                    <img src="/images/icon-service-2.svg" alt="" />
                  </div>
                  {/* Icon Box End */}

                  {/* Agency Social Content Start */}
                  <div className="agency-social-content">
                    <p> {t("block6Text2")}</p>
                  </div>
                  {/* Agency Social Content End */}

                  {/* Social Readmore Button Start */}
                  {/* <div className="agency-social-btn">
                    <a href="contact.html" className="readmore-btn">
                      <img src="images/arrow-white.svg" alt="" />
                    </a>
                  </div> */}
                  {/* Social Readmore Button End */}
                </div>
                {/* Agency Social Item End */}
              </div>

              <div className="col-md-6">
                {/* Agency Social Item Start */}
                <div
                  className="agency-social-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  {/* Icon Box Start */}
                  <div className="icon-box">
                    <img src="/images/icon-service-1.svg" alt="" />
                  </div>
                  {/* Icon Box End */}

                  {/* Agency Social Content Start */}
                  <div className="agency-social-content">
                    <p> {t("block6Text3")}</p>
                  </div>
                  {/* Agency Social Content End */}

                  {/* Social Readmore Button Start */}
                  {/* <div className="agency-social-btn">
                    <a href="contact.html" className="readmore-btn">
                      <img src="images/arrow-white.svg" alt="" />
                    </a>
                  </div> */}
                  {/* Social Readmore Button End */}
                </div>
                {/* Agency Social Item End */}
              </div>
            </div>
          </div>
        </div>
        {/* Join Agency Section End */}

        {/* Agency Benefits Section Start */}
        <div className="agency-benefits">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("block7Text1")}
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* Benefits Steps Item Start */}
                <div className="benefits-steps-item wow fadeInUp">
                  <div className="benefits-steps-no">
                    <h3>01</h3>
                  </div>
                  <div className="benefits-steps-content">
                    <h3>{t("block7Text2")}</h3>
                  </div>
                </div>
                {/* Benefits Steps Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Benefits Steps Item Start */}
                <div
                  className="benefits-steps-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="benefits-steps-no">
                    <h3>02</h3>
                  </div>

                  <div className="benefits-steps-content">
                    <h3>{t("block7Text3")}</h3>
                  </div>
                </div>
                {/* Benefits Steps Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Benefits Steps Item Start */}
                <div
                  className="benefits-steps-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="benefits-steps-no">
                    <h3>03</h3>
                  </div>
                  <div className="benefits-steps-content">
                    <div className="benefits-steps-content">
                      <h3>{t("block7Text4")}</h3>
                    </div>
                  </div>
                </div>
                {/* Benefits Steps Item End */}
              </div>
            </div>
          </div>
        </div>
        {/* Agency Benefits Section End */}

        {/* Our Blog Section Start */}
        <div className="our-blog">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("block8Text1")}
                  </h2>
                </div>
                {/* Section Title End */}
              </div>

              <div className="col-lg-5">
                {/* Section Title Content Start */}
                <div
                  className="section-title-content wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <p>{t("block8Text2")}</p>
                </div>
                {/* Section Title Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Blog Section End */}

        {/* Footer Start */}
        <footer className="main-footer">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              {/* Footer Copyright Section Start */}
              <div className="footer-copyright">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    {/* Footer Copyright Start */}
                    <div className="footer-copyright-text">
                      <a href="#" style={{ color: "white" }}>
                        {t("privacyPolicy")}
                      </a>
                      <p>Copyright © 2025 All Rights Reserved.</p>
                    </div>
                    {/* Footer Copyright End */}
                  </div>
                </div>
              </div>
              {/* Footer Copyright Section End */}
            </div>
          </div>
          {/* Footer Main End */}
        </footer>
      </div>
    </div>
  );
}

function VideoComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Автовоспроизведение запрещено:", error);
        // Можно показать кнопку для ручного воспроизведения
      });
    }
  }, []);

  return (
    <video autoPlay muted loop playsInline id="myVideo">
      <source src="/video/artistic-video.mp4" type="video/mp4" />
    </video>
  );
}
function App() {
  return (
    <>
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    </>
  );
}

export default App;
