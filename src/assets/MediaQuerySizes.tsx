import { useMediaQuery } from "react-responsive";

export const Sizes = () => {
    const isBigScreen = useMediaQuery({ minWidth: 1824 });
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' });

    return {
        isMobile,
        isTablet,
        isDesktopOrLaptop,
        isBigScreen,
        isPortrait
    }
}
