import style from './HeroSectionTitle.module.css';

function HeroSectionTitle({ title = "Placeholder", year = "Soon" }: { title?: string, year?: string }) {
    return (
        <h1 className={style.title}> {title} <span className={style.year}>{year}</span></h1>
    );
}

export default HeroSectionTitle;