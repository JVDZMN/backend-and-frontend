"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PostListComponent = void 0;
var core_1 = require("@angular/core");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
        this.postsisEmpty = true;
        this.posts = [];
    }
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts();
        this.postsSub = this.postService.getPostUpdateListener()
            .subscribe(function (posts) {
            if (posts.length >= 0)
                _this.postsisEmpty = false;
            _this.posts = posts;
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        if (!postId)
            postId = '';
        this.postService.deletePost(postId);
        if (__spreadArrays(this.posts))
            this.postsisEmpty = false;
        else
            this.postsisEmpty = true;
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.css']
        })
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
