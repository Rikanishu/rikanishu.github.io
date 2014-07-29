define("hbs!templates/UserProfile/profile",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),'<div class="container">\n    <div id="profileLeftSideRegion" class="col-md-2">\n\n    </div>\n    <div class="col-md-10">\n        <h3 class="profile-title">User profile</h3>\n        <div id="profileMainRegion">\n\n        </div>\n    </div>\n</div>'});return n}),define("modules/UserProfile/Layout/Profile",["marionette","hbs!templates/UserProfile/profile"],function(e,t){var n=e.Layout.extend({template:t,regions:{leftSideRegion:"#profileLeftSideRegion",profileMainRegion:"#profileMainRegion"}});return n}),define("hbs!templates/UserProfile/main_block",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),'<div class="profile-main-card">\n    <h4>Recently orders</h4>\n    <div class="orders-region">\n\n    </div>\n    <div class="fill-list-link">\n        <a href="#profile/orders">Show full list</a>\n    </div>\n</div>\n<div class="profile-main-card">\n    <h4>Your wish list</h4>\n    <div class="wishlist-region">\n\n    </div>\n    <div class="fill-list-link">\n        <a href="#profile/wishlist">Show full list</a>\n    </div>\n</div>'});return n}),define("modules/UserProfile/Layout/MainBlock",["marionette","hbs!templates/UserProfile/main_block"],function(e,t){var n=e.Layout.extend({template:t,regions:{ordersRegion:".orders-region",wishListRegion:".wishlist-region"}});return n}),define("hbs!templates/UserProfile/side",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){function c(e,t){var n="",r;return n+='\n            <img class="img-rounded img-responsive" src="'+f((r=(r=e&&e.user,r==null||r===!1?r:r.avatar),typeof r===a?r.apply(e):r))+'" />\n        ',n}function h(e,t){return'\n            <img class="img-rounded img-responsive" src="static/img/users/default.png" />\n        '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers);var s="",o,u,a="function",f=this.escapeExpression,l=this;s+='<div class="user-profile-card">\n    <div class="avatar">\n        ',u=n["if"].call(t,(o=t&&t.user,o==null||o===!1?o:o.avatar),{hash:{},inverse:l.program(3,h,i),fn:l.program(1,c,i)});if(u||u===0)s+=u;return s+='\n    </div>\n    <div class="user-title">\n        ',(u=n.username)?u=u.call(t,{hash:{}}):(u=t&&t.username,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'\n    </div>\n</div>\n<hr/>\n<div class="profile-links">\n    <a href="#profile/orders">Orders</a>\n    <a href="#profile/favbooks">Favorite books</a>\n    <a href="#profile/wishlist">Wish list</a>\n    <a href="#profile/settings">Settings</a>\n</div>',s});return n}),define("modules/UserProfile/View/SideBlock",["marionette","hbs!templates/UserProfile/side"],function(e,t){var n=e.ItemView.extend({template:t,regions:{leftSideRegion:"#profileLeftSideRegion",profileMainRegion:"#profileMainRegion"}});return n}),define("hbs!templates/UserProfile/order/item",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers);var s="",o,u,a="function",f=this.escapeExpression;return s+='<div class="order-item">\n    <div class="inner">\n        <div class="cover">\n            <a href="#bookinfo/',(o=n.bookId)?o=o.call(t,{hash:{}}):(o=t&&t.bookId,o=typeof o===a?o.call(t,{hash:{}}):o),s+=f(o)+'">\n                <img src="'+f((o=(o=t&&t.cover,o==null||o===!1?o:o.preview),typeof o===a?o.apply(t):o))+'" class="img-responsive img-thumbnail" />\n            </a>\n        </div>\n        <div class="description">\n            <div class="author"><a href="#author/',(u=n.authorId)?u=u.call(t,{hash:{}}):(u=t&&t.authorId,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'">',(u=n.authorTitle)?u=u.call(t,{hash:{}}):(u=t&&t.authorTitle,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'</a></div>\n            <div class="title"><a href="#bookinfo/',(u=n.bookId)?u=u.call(t,{hash:{}}):(u=t&&t.bookId,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'">',(u=n.bookTitle)?u=u.call(t,{hash:{}}):(u=t&&t.bookTitle,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'</a></div>\n        </div>\n    </div>\n    <div class="price-value">',(u=n.price)?u=u.call(t,{hash:{}}):(u=t&&t.price,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+"</div>\n</div>",s});return n}),define("modules/UserProfile/View/Order/Item",["marionette","hbs!templates/UserProfile/order/item"],function(e,t){var n=e.ItemView.extend({template:t});return n}),define("hbs!templates/UserProfile/order/widget",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers);var s="",o,u="function",a=this.escapeExpression;return s+='<div class="order-block clearfix">\n    <div class="order-items col-md-10 clearfix">\n        <div class="inner-container clearfix">\n            <div class="items-nav back">\n                <span class="chevron glyphicon glyphicon-chevron-left"></span>\n            </div>\n            <div class="items">\n            </div>\n            <div class="items-nav forward">\n                <span class="chevron glyphicon glyphicon-chevron-right"></span>\n            </div>\n        </div>\n    </div>\n    <div class="summary col-md-2">\n        <div class="title">\n            '+a((o=(o=t&&t.order,o==null||o===!1?o:o.title),typeof o===u?o.apply(t):o))+'\n        </div>\n        <div class="status">\n            '+a((o=(o=t&&t.order,o==null||o===!1?o:o.status),typeof o===u?o.apply(t):o))+'\n        </div>\n        <div class="price">\n            '+a((o=(o=t&&t.order,o==null||o===!1?o:o.price),typeof o===u?o.apply(t):o))+'\n        </div>\n        <div class="actions">\n            <div class="action-cancel">\n                <button class="btn btn-warning">Show extended info</button>\n\n            </div>\n            <div class="action-cancel">\n                <button class="btn btn-danger">Cancel order</button>\n            </div>\n        </div>\n    </div>\n\n</div>',s});return n}),define("modules/UserProfile/View/Order/Widget",["marionette","backbone","modules/UserProfile/View/Order/Item","hbs!templates/UserProfile/order/widget"],function(e,t,n,r){var i=e.CompositeView.extend({itemView:n,itemViewContainer:".order-items .items",template:r,events:{"click .back":"onBackClick","click .forward":"onForwardClick"},ui:{backButton:".back",forwardButton:".forward",itemsContainer:".items"},options:{itemsCount:5},templateHelpers:function(){return{order:this.orderData}},_currentActiveIndex:0,initialize:function(){this.collection=new t.Collection(this.model.get("items")),this.orderData={id:this.model.get("orderId"),price:this.model.get("price"),title:this._getOrderTitle(),status:this._getOrderStatus()}},onBackClick:function(){this._currentActiveIndex>0&&(--this._currentActiveIndex,this.showActiveItems())},onForwardClick:function(){this._currentActiveIndex<this.children.length-1&&(++this._currentActiveIndex,this.showActiveItems())},showActiveItems:function(){var e=this.options.itemsCount,t=this._currentActiveIndex,n=t+e;this.children.each(function(e,r){r>=t&&r<n?e.$el.show():e.$el.hide()})},onShow:function(){this.showActiveItems(),this.checkSinglePage()},checkSinglePage:function(){this.collection.length<=this.options.itemsCount?(this.ui.backButton.hide(),this.ui.forwardButton.hide(),this.ui.itemsContainer.addClass("single-page")):(this.ui.backButton.show(),this.ui.forwardButton.show(),this.ui.itemsContainer.removeClass("single-page"))},_getOrderTitle:function(){return"Order #"+this.model.get("orderId")},_getOrderStatus:function(){var e=this.model.get("status");switch(e){case"new":return"New";case"inprogress":return"In progress";case"payed":return"Payed";case"confirmed":return"Confirmed";default:return"Unknown"}}});return i}),define("modules/UserProfile/View/OrdersList",["marionette","modules/UserProfile/View/Order/Widget"],function(e,t){var n=e.CollectionView.extend({itemView:t});return n}),define("hbs!templates/UserProfile/covers/item",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers);var s="",o,u,a="function",f=this.escapeExpression;return s+='<div class="order-item">\n    <div class="inner">\n        <div class="cover">\n            <a href="#bookinfo/',(o=n.bookId)?o=o.call(t,{hash:{}}):(o=t&&t.bookId,o=typeof o===a?o.call(t,{hash:{}}):o),s+=f(o)+'">\n                <img src="'+f((o=(o=t&&t.cover,o==null||o===!1?o:o.preview),typeof o===a?o.apply(t):o))+'" class="img-responsive img-thumbnail" />\n            </a>\n        </div>\n        <div class="description">\n            <div class="author"><a href="#author/',(u=n.authorId)?u=u.call(t,{hash:{}}):(u=t&&t.authorId,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'">',(u=n.authorTitle)?u=u.call(t,{hash:{}}):(u=t&&t.authorTitle,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'</a></div>\n            <div class="title"><a href="#bookinfo/',(u=n.bookId)?u=u.call(t,{hash:{}}):(u=t&&t.bookId,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'">',(u=n.bookTitle)?u=u.call(t,{hash:{}}):(u=t&&t.bookTitle,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'</a></div>\n        </div>\n    </div>\n    <div class="rating"><i class="star ',(u=n.ratingClasses)?u=u.call(t,{hash:{}}):(u=t&&t.ratingClasses,u=typeof u===a?u.call(t,{hash:{}}):u),s+=f(u)+'"></i></div>\n</div>',s});return n}),define("modules/UserProfile/View/Covers/Item",["marionette","hbs!templates/UserProfile/covers/item"],function(e,t){var n=e.ItemView.extend({template:t,templateHelpers:function(e){return{ratingClasses:this._getRatingClasses(e)}},_ratingOptions:{ratingLimit:5},_getRatingClasses:function(e){var t=[],n=this.model.get("userRating");if(n){var r=parseFloat(n);if(r||r>0||r<=this._ratingOptions.ratingLimit){var i=Math.floor(r);i>0&&t.push("star-"+i);var s=r-i;return s>0&&(s<.33?t.push("star-qtr"):s>.66?t.push("star-3qtr"):t.push("star-half")),t.join(" ")}}return""}});return n}),define("hbs!templates/UserProfile/covers/widget",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),'<div class="order-block clearfix">\n    <div class="order-items clearfix">\n        <div class="inner-container clearfix">\n            <div class="items-nav back">\n                <span class="chevron glyphicon glyphicon-chevron-left"></span>\n            </div>\n            <div class="items">\n            </div>\n            <div class="items-nav forward">\n                <span class="chevron glyphicon glyphicon-chevron-right"></span>\n            </div>\n        </div>\n    </div>\n</div>'});return n}),define("modules/UserProfile/View/Covers/Widget",["marionette","backbone","modules/UserProfile/View/Covers/Item","hbs!templates/UserProfile/covers/widget"],function(e,t,n,r){var i=e.CompositeView.extend({itemView:n,itemViewContainer:".order-items .items",template:r,options:{itemsCount:6},events:{"click .back":"onBackClick","click .forward":"onForwardClick"},ui:{backButton:".back",forwardButton:".forward",itemsContainer:".items"},_currentActiveIndex:0,onBackClick:function(){this._currentActiveIndex>0&&(--this._currentActiveIndex,this.showActiveItems())},onForwardClick:function(){this._currentActiveIndex<this.children.length-1&&(++this._currentActiveIndex,this.showActiveItems())},showActiveItems:function(){var e=this.options.itemsCount,t=this._currentActiveIndex,n=t+e;this.children.each(function(e,r){r>=t&&r<n?e.$el.show():e.$el.hide()})},onShow:function(){this.showActiveItems(),this.checkSinglePage()},checkSinglePage:function(){this.collection.length<=this.options.itemsCount?(this.ui.backButton.hide(),this.ui.forwardButton.hide(),this.ui.itemsContainer.addClass("single-page")):(this.ui.backButton.show(),this.ui.forwardButton.show(),this.ui.itemsContainer.removeClass("single-page"))}});return i}),define("hbs!templates/Common/loading",["hbs","hbs/handlebars"],function(e,t){var n=t.template(function(e,t,n,r,i){function l(e,t){var r="",i;return r+="\n    <h4>",(i=n.title)?i=i.call(e,{hash:{}}):(i=e&&e.title,i=typeof i===u?i.call(e,{hash:{}}):i),r+=a(i)+"</h4>\n",r}function c(e,t){var r="",i;return r+="\n    <p>",(i=n.message)?i=i.call(e,{hash:{}}):(i=e&&e.message,i=typeof i===u?i.call(e,{hash:{}}):i),r+=a(i)+"</p>\n",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers);var s="",o,u="function",a=this.escapeExpression,f=this;o=n["if"].call(t,t&&t.title,{hash:{},inverse:f.noop,fn:f.program(1,l,i)});if(o||o===0)s+=o;s+="\n",o=n["if"].call(t,t&&t.message,{hash:{},inverse:f.noop,fn:f.program(3,c,i)});if(o||o===0)s+=o;return s+='\n<div class="spinner">\n    <img src="static/img/common/spinner.gif"/>\n</div>\n',s});return n}),define("modules/Common/View/Loading",["marionette","spin","hbs!templates/Common/loading"],function(e,t,n){var r=e.ItemView.extend({template:n,tagName:"div",className:"spinner-container",serializeData:function(){return{title:this.options.title,message:this.options.message}},onShow:function(){}});return r}),define("modules/Common/MultiPromises",["jquery","underscore"],function(e,t){var n=function(e){var n=this;this.promises=e||{},this.result={},t.each(e,function(e,t){if(!e.promise)throw new Error("Promise is required parameter");var r=e.context||this,i=e.promise;e.done&&i.done(function(){n.result[t]=e.done.apply(r,arguments)}),e.fail&&i.fail(function(){n.result[t]=e.fail.apply(r,arguments)}),e.always&&i.always(function(){n.result[t]=e.always.apply(r,arguments)})})};return n.prototype={onFinished:function(n){var r=this;e.when.apply(e,t.pluck(this.promises,"promise")).always(function(){n.apply(r,[r.result,r.promises])})}},n}),define("modules/UserProfile/Controller",["marionette","backbone","jquery","modules/UserProfile/Layout/Profile","modules/UserProfile/Layout/MainBlock","modules/UserProfile/View/SideBlock","modules/UserProfile/View/OrdersList","modules/UserProfile/View/Covers/Widget","modules/Common/View/Loading","modules/Common/MultiPromises","modules/app"],function(e,t,n,r,i,s,o,u,a,f,l){var c=e.Controller.extend({openUserProfile:function(e){},openOwnProfile:function(){this._showProfile({username:"Default User"})},_showProfile:function(e){var t=new r;t.render(),l.contentRegion.show(t),this._showSideBlock(t,e),this._showSummary(t,e)},_showSummary:function(e,n){e.profileMainRegion.show(new a({message:"Loading profile details..."}));var r=new f({userOrders:{promise:l.request("Orders:getUserOrders",n.userId),done:function(e){return new o({collection:new t.Collection(e)})}},wishList:{promise:l.request("Books:getWishList",n.userId),done:function(e){return new u({collection:new t.Collection(e)})}}});r.onFinished(function(t){var n=new i;n.render(),e.profileMainRegion.show(n),t.userOrders&&n.ordersRegion.show(t.userOrders),t.wishList&&n.wishListRegion.show(t.wishList)})},_showSideBlock:function(e,n){e.leftSideRegion.show(new s({model:new t.Model(n)}))}});return c.Router=e.AppRouter.extend({appRoutes:{"profile/:id":"openUserProfile",profile:"openOwnProfile"}}),c}),define("modules/UserProfile/Module",["marionette","modules/UserProfile/Controller","modules/app"],function(e,t,n){n.module("UserProfile",function(e){var n=new t;n.routerInstance=new t.Router({controller:n})})});