import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t border-outline-variant bg-surface py-space-xl">
      <div className="w-full max-w-7xl mx-auto px-gutter-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col items-center md:items-start gap-space-xs text-center md:text-left">
          <div className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
            {t.footer.brand}
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            {t.footer.tagline}
          </div>
        </div>
        <div className="flex items-center gap-space-lg">
          <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            {t.footer.copyright}
          </div>
          <a
            aria-label="Back to top"
            className="inline-flex items-center justify-center w-9 h-9 border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary hover:bg-primary hover:text-on-primary transition-colors"
            href="#top"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
