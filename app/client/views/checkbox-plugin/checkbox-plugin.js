Template.checkboxPlugin.onRendered(function () {
  this.$('.tree').jstree({
    checkbox: {
      keep_selected_style: false
    },
    plugins: ['checkbox']
  });
});
