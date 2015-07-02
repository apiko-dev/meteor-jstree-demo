Template.darkTheme.onRendered(function () {
  this.$('.tree').jstree({
    core: {
      themes: {
        name: 'default-dark',
        dots: true,
        icons: true
      }
    }
  });
});