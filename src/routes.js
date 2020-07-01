import * as React from "react";
import { Route, Switch, Redirect /*, withRouter */ } from "react-router";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Loadable from "react-loadable";

import "./styles.css";

import ImageStyle from "./pages/base-image-style/index";
import Imagemaker from "./pages/imagemaker-second-degree/index";
import Interior from "./pages/interior-design/index.js";
// import Political from "./pages/political-style/index.js";
import InteriorProfi from "./pages/living-interior-design-and-decoration/index.js";
import Vitrinism from "./pages/visual-merchandising-and-showcases-design/index.js";
// import About from "./pages/about/index";
import Contacts from "./pages/contacts/index";
import Shedule from "./pages/shedule/index";
import Order from "./pages/order/index";
import FashionStyling from "./pages/fashion-styling/index";
import SocConcept from "./pages/concepts-of-fashion/index";
import Franchising from "./pages/fashion-franchising/index";
import GraduateCourses from "./pages/shedule/graduate-courses";
import TrainingSchedule from "./pages/shedule/training";
import MasterClassesSchedule from "./pages/shedule/master-classes";
import CoursesSchedule from "./pages/shedule/courses";
// import LauncherStartup from "./pages/launch-technology-startup/index";
import PersonalBrand from "./pages/personal-brand/index";
// import Advertising from "./pages/advertising-as-a-communication/index";
// import Internship from "./pages/internship-in-milan/index";
import MasterKlass from "./pages/master-class/index";
// import MilanDesignWeek from "./pages/milan-design-week/index";
import JapanFashion from "./pages/japanese-fashion-philosophy/index";
import RootTest2 from "./pages/root-test2/index";
import PreRaphaelites from "./pages/preraphaelites/index";
import ImageConsaltingTest from "./pages/image-consulting/index";
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
    <Route path="/image-style" component={ImageStyle} />

    <Redirect from="/imagemaker-second-degree" to="/second-degree-imagemaker" />
    <Route path="/second-degree-imagemaker" component={Imagemaker} />

    <Route path="/interior-design" component={Interior} />
    {/* <Route path="/political-style" component={Political} /> */}
    <Route
      path="/living-interior-design-and-decoration"
      component={InteriorProfi}
    />
    <Route
      path="/visual-merchandising-and-showcases-design"
      component={Vitrinism}
    />
    {/* <Route path="/about" component={About} /> */}

    <Route path="/contacts" component={Contacts} />
    <Route path="/shedule" component={Shedule} />
    <Route path="/order" component={Order} />
    <Route path="/fashion-styling" component={FashionStyling} />
    <Route path="/fashion-franchising" component={Franchising} />
    <Route path="/concepts_of_fashion" component={SocConcept} />
    <Route path="/schedule/graduate-courses" component={GraduateCourses} />
    <Route path="/schedule/training" component={TrainingSchedule} />
    <Route path="/schedule/master-classes" component={MasterClassesSchedule} />
    {/* <Route path="/launch-technology-startup" component={LauncherStartup} /> */}
    {/* <Route path="/advertising-as-a-communication" component={Advertising} /> */}
    <Route path="/personal-brand" component={PersonalBrand} />
    <Route path="/schedule/courses" component={CoursesSchedule} />
    {/* <Route path="/internship-in-milan" component={Internship} /> */}
    <Route path="/master-class" component={MasterKlass} />
    {/* <Route path="/milan-design-week" component={MilanDesignWeek} /> */}
    <Route path="/japanese-fashion-philosophy" component={JapanFashion} />
    <Route path="/root-test2" component={RootTest2} />
    <Route path="/pre-raphaelites" component={PreRaphaelites} />
    <Route path="/image-consulting" component={ImageConsaltingTest} />
    <Route path="/career" component={CareerTest} />
    <Route path="/pr-education" component={PrEducation} />
    <Route path="/fashion-education" component={FashionEducation} />
    <Route path="/interior-education" component={InteriorEducation} />
    <Route path="/fashion-retail" component={FashionRetail} />
    <Route path="/video" component={Video} />
    <Route path="/practice" component={Practice} />
    <Route path="/pro-education" component={ProEducation} />

    <Route path="/home" component={RootTest2} />
    <Route component={RootTest2} />
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
