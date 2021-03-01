"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostCreateComponent = void 0;
var core_1 = require("@angular/core");
var post_model_1 = require("../../models/post.model");
var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.mode = 'create';
        this.postId = '';
        this.post = new post_model_1.post();
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId') || '';
                _this.post = _this.postService.getPost(_this.postId);
            }
            else {
                _this.mode = 'create';
                _this.postId = '';
            }
        });
    };
    PostCreateComponent.prototype.onAddPost = function (form) {
        if (form.invalid) {
            return;
        }
        var title = form.value.entereTitle;
        var content = form.value.enteredContent;
        var post = ({ title: title, content: content });
        this.postService.addPost(post);
    };
    PostCreateComponent = __decorate([
        core_1.Component({
            templateUrl: './post-create.component.html',
            selector: 'app-post-create',
            styleUrls: ['./post-create.component.css']
        })
    ], PostCreateComponent);
    return PostCreateComponent;
}());
exports.PostCreateComponent = PostCreateComponent;
