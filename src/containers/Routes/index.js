// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

// Components
import RoutesWrapper from 'layout/UI/RoutesWrapper';
import Homepage from 'containers/Homepage';
import AboutUs from 'containers/AboutUs';

const Routes = (props) => {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <RoutesWrapper>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route path="/hello-world" render={() => <div>Hello world!</div>} />
      </Switch>
    </RoutesWrapper>
  );
};

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

// const StyledRoutesWrapper = styled.section`
//   display: flex;
//   flex-flow: column;
//   width: 100%;
//   min-height: 100%;
//   animation: fade-in 300ms ease 0ms;

//   @keyframes fade-in {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `;

export default withRouter(Routes);
