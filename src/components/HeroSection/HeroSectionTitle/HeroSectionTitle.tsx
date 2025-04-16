import style from './HeroSectionTitle.module.css';

function HeroSectionTitle(
    {
        title = "Placeholder",
        year = "Soon",
        link = "#"
    }: {
        title?: string,
        year?: string,
        link?: string
    }) {

    return (
        <a href={link}>
            <h1 className={style.title} > {title} <span className={style.year}>{year}</span></h1>
        </a>
    );
}

export default HeroSectionTitle;