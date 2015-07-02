Template.contextmenuPlugin.onRendered(function () {
  this.$('.tree').jstree({
    core : {
      // so that create works
      check_callback : true
    },
    plugins : ['contextmenu']
  });
});
