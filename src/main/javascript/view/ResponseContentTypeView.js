'use strict';

SwaggerUi.Views.ResponseContentTypeView = Backbone.View.extend({
  initialize: function(){},

  render: function(){
    if (this.model.consumes.length > 1) {
      $(this.el).html(Handlebars.templates.response_content_type(this.model));
    }
    //$('label[for=responseContentType]', $(this.el)).text('Response Content Type');

    return this;
  }
});
