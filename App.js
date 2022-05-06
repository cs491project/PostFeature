//import React, { Postcomp } from 'react';

import './App.css'

import Postlist from './Postcomp/Postlist'
import Postform from './Postcomp/Postform'
import Postcomp from 'react';
export {Postcomp} from 'react'

class App extends Postcomp {
	render() {
		return (
			<div className="App"> 
				<Postform />
				{ <Postlist /> }

			</div>
		)
	}
}
export default App