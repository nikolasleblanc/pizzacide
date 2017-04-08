"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var tnsOAuthModule = require("nativescript-oauth");
var LoginService = (function () {
    function LoginService(http) {
        var _this = this;
        this.http = http;
        this._userInfo = new BehaviorSubject_1.BehaviorSubject({});
        this._email = new BehaviorSubject_1.BehaviorSubject('');
        this._name = new BehaviorSubject_1.BehaviorSubject('');
        this.email = this._email.asObservable();
        this.name = this._name.asObservable();
        this.loggedIn = false;
        this._userInfo
            .filter(function (e) { return e !== {}; })
            .map(function (e) { return e.email; })
            .subscribe(function (e) { return _this._email.next(e); });
        this._userInfo
            .filter(function (e) { return e !== {}; })
            .map(function (e) { return e.name; })
            .subscribe(function (e) { return _this._name.next(e); });
    }
    LoginService.prototype.setToken = function (token) {
        this.token = token;
    };
    LoginService.prototype.getToken = function () {
        return this.token;
    };
    LoginService.prototype.login = function () {
        var _this = this;
        tnsOAuthModule.login()
            .then(function (token) {
            _this.setToken(token);
            _this.populateUserInfo();
            _this.loggedIn = true;
        })
            .catch(function (er) {
            //do something with the error
        });
    };
    LoginService.prototype.logout = function () {
        this._userInfo.next({});
        this.loggedIn = false;
        // this.token = '';
    };
    LoginService.prototype.populateUserInfo = function () {
        var _this = this;
        this.http.get('https://graph.facebook.com/me?fields=name,email', {
            params: {
                'access_token': this.token
            }
        })
            .map(function (res) {
            console.log(JSON.stringify(res.json()));
            return res.json();
        })
            .subscribe(function (res) {
            _this._userInfo.next(res);
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsaUNBQStCO0FBQy9CLG9DQUFrQztBQUNsQyx3REFBdUQ7QUFHdkQsbURBQXFEO0FBR3JELElBQWEsWUFBWTtJQVN2QixzQkFBbUIsSUFBVTtRQUE3QixpQkFTQztRQVRrQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBUDdCLGNBQVMsR0FBeUIsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELFdBQU0sR0FBeUIsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELFVBQUssR0FBeUIsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELFVBQUssR0FBb0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwRCxTQUFJLEdBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd4QixJQUFJLENBQUMsU0FBUzthQUNYLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxFQUFFLEVBQVIsQ0FBUSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDO2FBQ2pCLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVM7YUFDWCxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssRUFBRSxFQUFSLENBQVEsQ0FBQzthQUNyQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQzthQUNoQixTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFUQyxjQUFjLENBQUMsS0FBSyxFQUFFO2FBQ25CLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDUixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEVBQUU7WUFDTiw2QkFBNkI7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFtQjtJQUNyQixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsRUFBc0I7WUFDbkYsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSzthQUMzQjtTQUNGLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRCxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBNURZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FVYyxXQUFJO0dBVGxCLFlBQVksQ0E0RHhCO0FBNURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cC9zcmMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAqIGFzIHRuc09BdXRoTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICB0b2tlbjogc3RyaW5nO1xuICBfdXNlckluZm86IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIF9lbWFpbDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgX25hbWU6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIGVtYWlsOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9lbWFpbC5hc09ic2VydmFibGUoKTtcbiAgbmFtZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fbmFtZS5hc09ic2VydmFibGUoKTtcbiAgbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuICAgIHRoaXMuX3VzZXJJbmZvXG4gICAgICAuZmlsdGVyKGUgPT4gZSAhPT0ge30pXG4gICAgICAubWFwKGUgPT4gZS5lbWFpbClcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLl9lbWFpbC5uZXh0KGUpKTtcbiAgICB0aGlzLl91c2VySW5mb1xuICAgICAgLmZpbHRlcihlID0+IGUgIT09IHt9KVxuICAgICAgLm1hcChlID0+IGUubmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLl9uYW1lLm5leHQoZSkpO1xuICB9XG5cbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VuO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdG5zT0F1dGhNb2R1bGUubG9naW4oKVxuICAgICAgLnRoZW4oKHRva2VuKT0+e1xuICAgICAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAgIHRoaXMucG9wdWxhdGVVc2VySW5mbygpO1xuICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXIpPT57XG4gICAgICAgICAgLy9kbyBzb21ldGhpbmcgd2l0aCB0aGUgZXJyb3JcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuX3VzZXJJbmZvLm5leHQoe30pO1xuICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAvLyB0aGlzLnRva2VuID0gJyc7XG4gIH1cblxuICBwb3B1bGF0ZVVzZXJJbmZvKCkge1xuICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL21lP2ZpZWxkcz1uYW1lLGVtYWlsJywgPFJlcXVlc3RPcHRpb25zQXJncz57XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2FjY2Vzc190b2tlbic6IHRoaXMudG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIC5tYXAoKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzLmpzb24oKSkpO1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuX3VzZXJJbmZvLm5leHQocmVzKTtcbiAgICB9KVxuICB9XG59XG4iXX0=