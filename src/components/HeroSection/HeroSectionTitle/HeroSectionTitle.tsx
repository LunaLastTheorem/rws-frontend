import style from './HeroSectionTitle.module.css';

function HeroSectionTitle(
    {
        title = "Placeholder",
        year = "Soon",
        link = "#",
        onHover,
    }: {
        title?: string,
        year?: string,
        link?: string,
        onHover?: (title: string) => void,
    }) {

    const handleMouseEnter = () => {
        console.log(`hovering on ${title}`);
        if (onHover && title) onHover(title);
    };
    return (
        <a href={link} onMouseEnter={handleMouseEnter} >
            <h1 className={style.title} > {title} <span className={style.year}>{year}</span></h1>
        </a>
    );
}

export default HeroSectionTitle;