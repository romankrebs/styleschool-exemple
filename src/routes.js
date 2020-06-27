import * as React from "react";
import { Route, Switch, Redirect /*, withRouter */ } from "react-router";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Loadable from "react-loadable";

import "./styles.css";

import History from "./pages/fashion-history/index.js";
import ImageStyle from "./pages/base-image-style/index";
import Imagemaker from "./pages/imagemaker-second-degree/index";
import Interior from "./pages/interior-design/index.js";
import Political from "./pages/political-style/index.js";
import InteriorProfi from "./pages/living-interior-design-and-decoration/index.js";
import Vitrinism from "./pages/visual-merchandising-and-showcases-design/index.js";
import Profashion from "./pages/profashion/index.js";
import About from "./pages/about/index";
import Teachers from "./pages/teachers/index";
import Gorskyh from "./pages/teachers/gorskyh";
import Migranov from "./pages/teachers/migranov";
import Fomina from "./pages/teachers/fomina";
import Kostarnova from "./pages/teachers/kostarnova";
import Kononets from "./pages/teachers/kononets";
import Varakina from "./pages/teachers/varakina";
import Bahova from "./pages/teachers/bahova";
import Bonetskaya from "./pages/teachers/bonetskaya";
import Britsova from "./pages/teachers/britsova";
import Kachalina from "./pages/teachers/kachalina";
import Shved from "./pages/teachers/shved";
import Rodina from "./pages/teachers/rodina";
import Cherednichenko from "./pages/teachers/cherednichenko";
import Iskhakova from "./pages/teachers/iskhakova";
import Thurman from "./pages/teachers/thurman";
import Zhilova from "./pages/teachers/zhilova";
import Troepolskaya from "./pages/teachers/troepolskaya";
import Antonova from "./pages/teachers/antonova";
import Mikhailenko from "./pages/teachers/mikhailenko";
import Ahmetova from "./pages/teachers/yana-ahmetova";
import Sargsyan from "./pages/teachers/sargsyan";
import Olyushina from "./pages/teachers/oljga-olyushina";
import Info from "./pages/info/index";
import Rules from "./pages/info/rules";
import Security from "./pages/info/politic";
import Agree from "./pages/info/agree";
import Contacts from "./pages/contacts/index";
import Shedule from "./pages/shedule/index";
import Root from "./pages/root/index";
import SelfStyle from "./pages/self-style/index";
import Order from "./pages/order/index";
import Elearning from "./pages/elearning/index";
import Information from "./pages/information-about-educational-organization/index";
import Dokumenty from "./pages/information-about-educational-organization/dokumenty";
import FinansHoz from "./pages/information-about-educational-organization/finansovo-hozyaystvennaya-deyateljnostj";
import MatTechOsnaschenie from "./pages/information-about-educational-organization/materialjno-tehnicheskoe-osnaschenie";
import Programmy from "./pages/information-about-educational-organization/obrazovateljnye-programmy";
import Standarty from "./pages/information-about-educational-organization/obrazovateljnye-standarty";
import Svedeniya from "./pages/information-about-educational-organization/osnovnye-svedeniya";
import PlatnyeUslugi from "./pages/information-about-educational-organization/platnye-obrazovateljnye-uslugi";
import Rukovodstvo from "./pages/information-about-educational-organization/rukovodstvo-i-pedagogicheskiy-sostav";
import Stipendii from "./pages/information-about-educational-organization/stipendii";
import Struktura from "./pages/information-about-educational-organization/struktura-i-organy-upravleniya";
import Vakant from "./pages/information-about-educational-organization/vakantnye-mesta-dlya-priema";
import Crisis from "./pages/crisis-management-fashion-butik/index";
import FashionStyling from "./pages/fashion-styling/index";
import SocConcept from "./pages/concepts-of-fashion/index";
import HowFranchise from "./pages/how-to-choose-a-franchise/index";
import Franchising from "./pages/fashion-franchising/index";
import HowCreateFranchise from "./pages/how-to-create-a-franchise/index";
import PsychologyStyle from "./pages/psychology-of-style/index";
import Lamonova from "./pages/teachers/lamonova";
import Hlestova from "./pages/teachers/hlestova";
import Rotar from "./pages/teachers/rotar";
import InternationalCommunications from "./pages/international-communications/index";
import GraduateCourses from "./pages/shedule/graduate-courses";
import TrainingSchedule from "./pages/shedule/training";
import MasterClassesSchedule from "./pages/shedule/master-classes";
import CoursesSchedule from "./pages/shedule/courses";
import LauncherStartup from "./pages/launch-technology-startup/index";
import PersonalBrand from "./pages/personal-brand/index";
import Advertising from "./pages/advertising-as-a-communication/index";
import Internship from "./pages/internship-in-milan/index";
import MasterKlass from "./pages/master-class/index";
import Prohorovich from "./pages/teachers/prohorovich";
import ErikaNenasheva from "./pages/teachers/nenasheva";
import FutureOfFashion from "./pages/future-of-fashion/index";
import MilanDesignWeek from "./pages/milan-design-week/index";
import JapanFashion from "./pages/japanese-fashion-philosophy/index";
import RootTest2 from "./pages/root-test2/index";
import PreRaphaelites from "./pages/preraphaelites/index";
import ImageConsaltingTest from "./pages/image-consulting/index";
import EducationDoc from "./pages/educationdoc/index";
import EducationOnline from "./pages/educationdonline/index";
import Islamova from "./pages/teachers/islamova";
import ImageManagement from "./pages/imagemanagement/index";
import CareerTest from "./pages/career-test/index";
import PrEducation from "./pages/pr-education/index";
import FashionEducation from "./pages/fashion-education/index";
import InteriorEducation from "./pages/interior-education/index";
import FashionRetail from "./pages/fashion-retail/index";
import Video from "./pages/video/index";
import Practice from "./pages/practice/index";
import ProEducation from "./pages/pro-education/index";

// import Analitics from "./analitics";

export const routes = (
  <Switch>
    <Route path="/fashion-history" component={History} />
    <Route path="/image-style" component={ImageStyle} />

    <Redirect from="/imagemaker-second-degree" to="/second-degree-imagemaker" />
    <Route path="/second-degree-imagemaker" component={Imagemaker} />

    <Route path="/interior-design" component={Interior} />
    <Route path="/political-style" component={Political} />
    <Route
      path="/living-interior-design-and-decoration"
      component={InteriorProfi}
    />
    <Route
      path="/visual-merchandising-and-showcases-design"
      component={Vitrinism}
    />
    <Route path="/profashion" component={Profashion} />
    <Route path="/about" component={About} />
    <Route path="/teachers" component={Teachers} />
    <Route path="/natalya_gorskyh" component={Gorskyh} />
    <Route path="/ruslan_migranov" component={Migranov} />
    <Route path="/tatiana_fomina" component={Fomina} />
    <Route path="/marina_kostarnova" component={Kostarnova} />
    <Route path="/svetlana_kononets" component={Kononets} />
    <Route path="/galina_varakina" component={Varakina} />
    <Route path="/liana_bahova" component={Bahova} />
    <Route path="/troepolskaya" component={Troepolskaya} />
    <Route path="/marina_bonetskaya" component={Bonetskaya} />
    <Route path="/catherine_britsova" component={Britsova} />
    <Route path="/anna_kachalina" component={Kachalina} />
    <Route path="/natalia_shved" component={Shved} />
    <Route path="/maria_rodina" component={Rodina} />
    <Route path="/valery_cherednichenko" component={Cherednichenko} />
    <Route path="/nadezhda_iskhakova" component={Iskhakova} />
    <Route path="/rosemary_thurman" component={Thurman} />
    <Route path="/emilia_zhilova" component={Zhilova} />
    <Route path="/anna_antonova" component={Antonova} />
    <Route path="/svetlana_mikhailenko" component={Mikhailenko} />
    <Route path="/mary_sargsyan" component={Sargsyan} />
    <Route path="/yana_ahmetova" component={Ahmetova} />
    <Route path="/oljga_olyushina" component={Olyushina} />
    <Route path="/islamova" component={Islamova} />
    <Route path="/information/rules" component={Rules} />
    <Route path="/information/agree" component={Agree} />
    <Route path="/information/politic" component={Security} />
    <Route path="/information" component={Info} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/shedule" component={Shedule} />
    <Route path="/self_style" component={SelfStyle} />
    <Route path="/self-style" component={SelfStyle} />
    <Route path="/order" component={Order} />
    <Route path="/elearning" component={Elearning} />
    <Route
      path="/information-about-educational-organization"
      component={Information}
    />
    <Route path="/dokumenty" component={Dokumenty} />
    <Route
      path="/finansovo-hozyaystvennaya-deyateljnostj"
      component={FinansHoz}
    />
    <Route
      path="/materialjno-tehnicheskoe-osnaschenie"
      component={MatTechOsnaschenie}
    />
    <Route path="/obrazovateljnye-programmy" component={Programmy} />
    <Route path="/obrazovateljnye-standarty" component={Standarty} />
    <Route path="/osnovnye-svedeniya" component={Svedeniya} />
    <Route path="/platnye-obrazovateljnye-uslugi" component={PlatnyeUslugi} />
    <Route
      path="/rukovodstvo-i-pedagogicheskiy-sostav"
      component={Rukovodstvo}
    />
    <Route path="/stipendii" component={Stipendii} />
    <Route path="/struktura-i-organy-upravleniya" component={Struktura} />
    <Route path="/vakantnye-mesta-dlya-priema" component={Vakant} />
    <Route path="/fashion-styling" component={FashionStyling} />
    <Route path="/crisis_management_fashion_butik" component={Crisis} />
    <Route path="/fashion-franchising" component={Franchising} />
    <Route path="/concepts_of_fashion" component={SocConcept} />
    <Route path="/how-to-choose-a-franchise" component={HowFranchise} />
    <Route path="/how-to-create-a-franchise" component={HowCreateFranchise} />
    <Route path="/psychology-of-style" component={PsychologyStyle} />
    <Route path="/elena-lamonova" component={Lamonova} />
    <Route path="/margarita-hlestova" component={Hlestova} />
    <Route path="/tatyana_rotar" component={Rotar} />
    <Route
      path="/international-communications"
      component={InternationalCommunications}
    />
    <Route path="/schedule/graduate-courses" component={GraduateCourses} />
    <Route path="/schedule/training" component={TrainingSchedule} />
    <Route path="/schedule/master-classes" component={MasterClassesSchedule} />
    <Route path="/launch-technology-startup" component={LauncherStartup} />
    <Route path="/advertising-as-a-communication" component={Advertising} />
    <Route path="/personal-brand" component={PersonalBrand} />
    <Route path="/schedule/courses" component={CoursesSchedule} />
    <Route path="/internship-in-milan" component={Internship} />
    <Route path="/master-class" component={MasterKlass} />
    <Route path="/elena-prohorovich" component={Prohorovich} />
    <Route path="/erika_nenasheva" component={ErikaNenasheva} />
    <Route path="/future_of_fashion" component={FutureOfFashion} />
    <Route path="/milan-design-week" component={MilanDesignWeek} />
    <Route path="/japanese-fashion-philosophy" component={JapanFashion} />
    <Route path="/root-test2" component={RootTest2} />
    <Route path="/pre-raphaelites" component={PreRaphaelites} />
    <Route path="/image-consulting" component={ImageConsaltingTest} />
    <Route path="/educationdoc" component={EducationDoc} />
    <Route path="/educationonline" component={EducationOnline} />
    <Route path="/imagemanagement" component={ImageManagement} />
    <Route path="/career-test" component={CareerTest} />
    <Route path="/career" component={CareerTest} />
    <Route path="/pr-education" component={PrEducation} />
    <Route path="/fashion-education" component={FashionEducation} />
    <Route path="/interior-education" component={InteriorEducation} />
    <Route path="/fashion-retail" component={FashionRetail} />
    <Route path="/video" component={Video} />
    <Route path="/practice" component={Practice} />
    <Route path="/pro-education" component={ProEducation} />

    <Route path="/home" component={Root} />
    <Route component={Root} />
  </Switch>
);

class Routes extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {/* <Analitics /> */}
        {routes}
      </div>
    );
  }
}

export default Routes;
