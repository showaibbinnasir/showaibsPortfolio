import { Helmet } from "react-helmet";
import Experience from "./Experience";
import ExperienceAndEducation from "./ExperienceAndEducation";
import Overview from "./Overview";
import QualityServices from "./QualityServices";
import RecentWorks from "./RecentWorks";
import SkillsSet from "./SkillsSet";
import Testimonials from "./Testimonials";
const HomePage = () => {
    document.title = "Showaib bin Nasir | Portfolio 2024"
    return (
        <div>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Showaib bin Nasir | Portfolio 2024</title>

                </Helmet>
            </div>
            <Overview></Overview>
            <Experience></Experience>
            <QualityServices></QualityServices>
            <RecentWorks></RecentWorks>
            <ExperienceAndEducation></ExperienceAndEducation>
            <SkillsSet></SkillsSet>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;