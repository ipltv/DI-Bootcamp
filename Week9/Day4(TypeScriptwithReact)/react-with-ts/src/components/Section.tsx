import type { ReactNode } from "react";

type SectionProps = {
    children: ReactNode;
    place: string;
}

const Section = ({ children, place }: SectionProps): ReactNode => {
    return (
        <>
            {children}
            {place}
        </>
    )
}

export default Section;