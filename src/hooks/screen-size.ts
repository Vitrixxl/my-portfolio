import * as React from 'react';

const MOBILE_BREAKPOINT = 768;
const SM_BREAKPOINT = 640;
const MD_BREAKPOINT = 768;
const LG_BREAKPOINT = 1024;
const XL_BREAKPOINT = 1280;
const XXL_BREAKPOINT = 1536;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    // window.innerWidth < MOBILE_BREAKPOINT,
    true,
  );
  const [isSm, setIsSm] = React.useState<boolean>(
    // window.innerWidth >= SM_BREAKPOINT,
    true,
  );
  const [isMd, setIsMd] = React.useState<boolean>(
    // window.innerWidth >= MD_BREAKPOINT,
    true,
  );
  const [isLg, setIsLg] = React.useState<boolean>(
    // window.innerWidth >= LG_BREAKPOINT,
    true,
  );
  const [isXl, setIsXl] = React.useState<boolean>(
    // window.innerWidth >= XL_BREAKPOINT,
    true,
  );
  const [isXxl, setIsXxl] = React.useState<boolean>(
    // window.innerWidth >= XXL_BREAKPOINT,
    true,
  );

  React.useEffect(() => {
    // Définir les media queries pour chaque breakpoint
    const mqlMobile = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
    );
    const mqlSm = window.matchMedia(`(min-width: ${SM_BREAKPOINT}px)`);
    const mqlMd = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const mqlLg = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    const mqlXl = window.matchMedia(`(min-width: ${XL_BREAKPOINT}px)`);
    const mqlXxl = window.matchMedia(`(min-width: ${XXL_BREAKPOINT}px)`);

    // Fonction de mise à jour de l'état en fonction des media queries
    const updateMediaQueryStates = () => {
      setIsMobile(mqlMobile.matches);
      setIsSm(mqlSm.matches);
      setIsMd(mqlMd.matches);
      setIsLg(mqlLg.matches);
      setIsXl(mqlXl.matches);
      setIsXxl(mqlXxl.matches);
    };

    // Initialiser les états au moment où le composant est monté
    updateMediaQueryStates();

    // Ajouter des écouteurs d'événements pour suivre les changements
    mqlMobile.addEventListener('change', updateMediaQueryStates);
    mqlSm.addEventListener('change', updateMediaQueryStates);
    mqlMd.addEventListener('change', updateMediaQueryStates);
    mqlLg.addEventListener('change', updateMediaQueryStates);
    mqlXl.addEventListener('change', updateMediaQueryStates);
    mqlXxl.addEventListener('change', updateMediaQueryStates);

    // Nettoyage des écouteurs d'événements lors du démontage
    return () => {
      mqlMobile.removeEventListener('change', updateMediaQueryStates);
      mqlSm.removeEventListener('change', updateMediaQueryStates);
      mqlMd.removeEventListener('change', updateMediaQueryStates);
      mqlLg.removeEventListener('change', updateMediaQueryStates);
      mqlXl.removeEventListener('change', updateMediaQueryStates);
      mqlXxl.removeEventListener('change', updateMediaQueryStates);
    };
  }, []);

  return {
    isMobile,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
  };
}
