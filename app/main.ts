// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import * as tnsOAuthModule from 'nativescript-oauth';
var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
  clientId: '1949423728625116',
  clientSecret: '82b4c92d5a3f9cb0d3397683ce7c4abb',
  scope: ['email'] //whatever other scopes you need
};

tnsOAuthModule.initFacebook(facebookInitOptions);

platformNativeScriptDynamic().bootstrapModule(AppModule);
