"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var toolbar_1 = require("@angular/material/toolbar");
var expansion_1 = require("@angular/material/expansion");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var post_create_component_1 = require("./post/post-create/post-create.component");
var animations_1 = require("@angular/platform-browser/animations");
var header_component_1 = require("./header/header.component");
var post_list_component_1 = require("./post/post-list/post-list.component");
//product
var product_list_component_1 = require("./product/product-list/product-list.component");
var product_create_component_1 = require("./product/product-create/product-create.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                post_create_component_1.PostCreateComponent,
                post_list_component_1.PostListComponent,
                product_list_component_1.ProductListComponent,
                product_create_component_1.ProductCreateComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                toolbar_1.MatToolbarModule,
                expansion_1.MatExpansionModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
