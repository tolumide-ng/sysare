import * as React from "react";

interface IProps {
    isIntersecting: boolean;
    intersectionRatio: number;
}

export const useIntersectionObserver = (ancestorElem?: Element) => {
    const [converge, setConverge] = React.useState(false);

    React.useEffect(() => {}, [converge]);

    function createScrollObserver() {
        const options = {
            threshold: 1,
            root: ancestorElem ?? null,
            rootMargin: "0px",
        };

        return new IntersectionObserver(executeJob, options);
    }

    function executeJob(entries: ReadonlyArray<IProps>) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setConverge(true);
            }
        });
    }

    return {
        createScrollObserver,
        converge,
        setConverge,
    };
};
