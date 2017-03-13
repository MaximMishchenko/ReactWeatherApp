import React from 'react'
import { render } from 'react-dom'
import { Route, Router, IndexRoute, browserHistory, hashHistory } from 'react-router'

//components
import Main from './components/Main'
import Weather from './components/Weather'
import About from './components/About'
import Examples from './components/Examples'
import NotFound from './components/NotFound'

//import App from './components/App'

const app = document.getElementById('app')

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
		<Route path='*' component={NotFound} />
	</Router>,
	app
	)
