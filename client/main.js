import '/imports/startup/client';
import '/imports/startup/both';

import { Meteor } from 'meteor/meteor'
import React  from 'react';
import ReactDOM, { render } from 'react-dom';
import App  from './../imports/ui/components/App'



Meteor.startup(() => {
   render(<App />, document.getElementById('render-target'));
});





