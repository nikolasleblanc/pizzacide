"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var tnsOAuthModule = require("nativescript-oauth");
var facebookInitOptions = {
    clientId: '1949423728625116',
    clientSecret: '82b4c92d5a3f9cb0d3397683ce7c4abb',
    scope: ['email'] //whatever other scopes you need
};
tnsOAuthModule.initFacebook(facebookInitOptions);
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRywwREFBNEU7QUFFNUUsMkNBQXlDO0FBRXpDLG1EQUFxRDtBQUNyRCxJQUFJLG1CQUFtQixHQUE2QztJQUNsRSxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFlBQVksRUFBRSxrQ0FBa0M7SUFDaEQsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsZ0NBQWdDO0NBQ2xELENBQUM7QUFFRixjQUFjLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFakQsc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuaW1wb3J0ICogYXMgdG5zT0F1dGhNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoJztcbnZhciBmYWNlYm9va0luaXRPcHRpb25zIDogdG5zT0F1dGhNb2R1bGUuSVRuc09BdXRoT3B0aW9uc0ZhY2Vib29rID0ge1xuICBjbGllbnRJZDogJzE5NDk0MjM3Mjg2MjUxMTYnLFxuICBjbGllbnRTZWNyZXQ6ICc4MmI0YzkyZDVhM2Y5Y2IwZDMzOTc2ODNjZTdjNGFiYicsXG4gIHNjb3BlOiBbJ2VtYWlsJ10gLy93aGF0ZXZlciBvdGhlciBzY29wZXMgeW91IG5lZWRcbn07XG5cbnRuc09BdXRoTW9kdWxlLmluaXRGYWNlYm9vayhmYWNlYm9va0luaXRPcHRpb25zKTtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=