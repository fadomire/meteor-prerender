/* eslint-meteor-env server */

var prerenderio = Npm.require('prerender-node');
var prerenderToken;
var prerenderServiceUrl;

if (
  typeof(Meteor.settings.PrerenderIO) === 'object' &&
  Meteor.settings.PrerenderIO.token
) {
  prerenderToken = Meteor.settings.PrerenderIO.token;
  prerenderio.set('prerenderToken', prerenderToken);
  if (Meteor.settings.PrerenderIO.prerenderServiceUrl) {
    prerenderServiceUrl = Meteor.settings.PrerenderIO.prerenderServiceUrl;
    prerenderio.set('prerenderServiceUrl', prerenderServiceUrl);
  }
}

WebApp.rawConnectHandlers.use(prerenderio);