// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import * as tnsOAuthModule from 'nativescript-oauth';
var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
  clientId: 'man',
  clientSecret: 'imdumb',
  scope: ['email'] //whatever other scopes you need
};

tnsOAuthModule.initFacebook(facebookInitOptions);

platformNativeScriptDynamic().bootstrapModule(AppModule);
