import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styles from './HomeStyle.css'
import global from './globalStyle.css'

//RouteComponents
import Tutorial from './TutorialScene'

function Home() {

    return (
        <Router>
            <div styleName="Layout">

                <div styleName="HeaderCard">
                    <div styleName="HeaderBox"><Link to="/"><button><span styleName="styles.HomeHeaderContent">Empty</span></button></Link></div>
                    <div styleName="HeaderBox"><Link to="/movies"><button><span styleName="styles.HomeHeaderContent">Tutorial</span></button></Link></div>
                    <div styleName="HeaderBox"><Link to="/"><button><span styleName="styles.HomeHeaderContent">Empty</span></button></Link></div>
                </div>

                <div styleName="AppView">
                    <Switch>
                        {routes.map((route, i) =>
                            <Route key={i} {...route.routeParams} >{route.component}</Route>
                        )}
                    </Switch>
                </div>

            </div>
        </Router>
    )
}

const routes = [
    { routeParams: { path: '/movies' }, component: <Tutorial /> },
]

export default hot(Home)