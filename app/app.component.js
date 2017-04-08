"use strict";
var login_service_1 = require("./login.service");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
    }
    AppComponent.prototype.onLogin = function () {
        this.loginService.login();
    };
    AppComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
        styleUrls: [
            'app.component.css'
        ]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUErQztBQUMvQyxzQ0FBMEM7QUFTMUMsSUFBYSxZQUFZO0lBR3ZCLHNCQUFtQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM3QyxDQUFDO0lBQ0QsOEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUU7WUFDVCxtQkFBbUI7U0FDcEI7S0FDRixDQUFDO3FDQUlpQyw0QkFBWTtHQUhsQyxZQUFZLENBV3hCO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ2FwcC5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpbWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcbiAgfVxuICBvbkxvZ2luKCkge1xuICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKCk7XG4gIH1cbiAgb25Mb2dvdXQoKSB7XG4gICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==