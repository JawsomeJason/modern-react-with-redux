module.exports = {
  // locals: function(options) {
    // // Return custom template variables here.
    // return {};
  // },

  fileMapTokens(options) {
    // Return custom tokens to be replaced in your files
    return {
      __dumb__(options) {
        // logic to determine value goes here
        return options.settings.getSetting('dumbPath');
      },
    };
  },

  // Should probably never need to be overriden
  //
  // filesPath: function() {
    // return path.join(this.path, 'files');
  // },

  // beforeInstall: function(options) {},
  // afterInstall: function(options) {},
};
