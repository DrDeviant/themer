# @themer/wallpaper-circuits

A wallpaper template for [themer](https://github.com/mjswensen/themer).

Shown here with [@themer/colors-green-as-a-whistle](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-green-as-a-whistle):

![mobile dark](https://cdn.jsdelivr.net/gh/mjswensen/themer@62eb2382e1ecadfc711256d8ed27c83970bdd65e/cli/packages/wallpaper-circuits/assets/themer-wallpaper-circuits-dark-750x1334.png)

![mobile light](https://cdn.jsdelivr.net/gh/mjswensen/themer@62eb2382e1ecadfc711256d8ed27c83970bdd65e/cli/packages/wallpaper-circuits/assets/themer-wallpaper-circuits-light-750x1334.png)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themer/wallpaper-circuits

Then pass `@themer/wallpaper-circuits` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themer/wallpaper-circuits -o gen

`@themer/wallpaper-circuits` will generate PNG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `@themer/wallpaper-circuits` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`@themer/wallpaper-circuits` adds the following argument to `themer`:

    --themer-wallpaper-circuits-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themer/wallpaper-circuits --themer-wallpaper-circuits-size 1024x768 --themer-wallpaper-circuits-size 320x960 -o gen
