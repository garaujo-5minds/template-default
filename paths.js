module.exports = {
  build: {
    scripts: 'build/assets/js/',
    styles: 'build/assets/css/',
    images: 'build/assets/images/',
    fonts: 'build/assets/fonts/',
    sprites: 'build/assets/images/sprites/',
    svg: 'build/assets/svg/',
    videos: 'build/assets/video/',
    public: 'build/'
  },
  src: {
    scripts: 'web/assets/js/bundle.js',
    styles: 'web/assets/sass/*.*',
    images: 'web/assets/images/**/*.*',
    imagesInline: 'web/assets/images/inline/',
    fonts: 'web/assets/fonts/**/*.*',
    sprites: 'web/assets/images/sprites/*.png',
    svg: 'web/assets/svg/**/*.svg',
    videos: 'web/assets/video/**/*.*',
    public: 'web/assets/public/**/*.*'
  },
  watch: {
    scripts: 'web/assets/js/**/*.js',
    styles: 'web/assets/**/*.{sass,scss}',
    images: 'web/assets/images/**/*.*',
    fonts: 'web/assets/fonts/**/*.*',
    sprites: 'web/assets/images/sprites/*.png',
    svg: 'web/assets/svg/**/*.svg',
    videos: 'web/assets/video/**/*.*',
    public: 'web/assets/public/**/*.*'
  },
  clean: 'build/'
}
