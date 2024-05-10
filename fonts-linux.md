# Font Settings in Linux Distros Suck – Write Your Own *font.conf*

- You can write your own font configuration file —
  `fonts.conf` — and change default settings.
- You can also use it to specify what fonts will be rendered on websites.
- Store `fonts.conf` at `$XDG_CONFIG_HOME/fontconfig/`,
  which probably means `$HOME/.config/fontconfig/`.
- Common places for storing fonts in Linux systems are
  `$HOME/.local/share/fonts` and `/usr/local/share/fonts`.

## Fonts on Linux and the Web

When you're visiting a website with *font-face* configured as
*serif* or *sans-serif*, or more specifically, *Helvetica, Arial*,
you can see one of the Linux world's not-so-good sides.
Your visual experience is likely worst than those who actually can
see *Helvetica* or even *Arial*.
You probably got something like *Liberation Sans*, *DejaVu Sans*, or *Ubuntu*,
which often don't look good on a page made with something else in mind.

To give you a better example, I picked some common settings from the Web:

- `Arial, sans-serif`
  — used at google.com.
- `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`
  — at GitHub.
- `-apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif`
  — at StackOverflow.

Pretty safe bets, but I don't think *GitHub* or *StackOverflow*
fonts are all same quality and look.
A typical Linux system will most likely select its default *sans-serif*
in those cases.
It will work OK, but might not be what you want aesthetically.

But it is Linux, so you can change that.

## Picking a Typeface

There are **good, free, and open-source** typefaces that
blend better in the web context than many default choices.

It's good to pick the ones that look clean and familiar.
The main goals for your default serif and sans-serif are
legibility and predictable behavior, then style.

Test them in a real context — a navigation bar is a different beast than body text.

Put your downloaded fonts into one of those places:

- `$HOME/.local/share/fonts`
- `/usr/local/share/fonts`

Here are my favorites:

Sans-serif:

- [Roboto](https://fonts.google.com/specimen/Roboto)
  (used often at Google's sites)
- [Inter](https://rsms.me/inter/)
- [IBM Plex Sans](https://github.com/IBM/plex)

Serif:

- [Merriweather](https://fonts.google.com/specimen/Merriweather)
- [IBM Plex Serif](https://github.com/IBM/plex)

BTW, *Ubuntu* (obviously common pre-installed typeface) is a good UI font.
The problem is that it looks “original”,
so it shouldn't serve as a default sans-serif
that will be used in a browser.

## Configuration File

Here's an exemplary *font.conf* file content.
It uses [Fontconfig](https://www.freedesktop.org/wiki/Software/fontconfig/),
a library for system-wide font configuration.

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">
<!-- $XDG_CONFIG_HOME/fontconfig/fonts.conf for per-user font configuration -->
<fontconfig>

<!-- basic aliases -->
<alias>
  <family>sans-serif</family>
  <prefer><family>Roboto</family></prefer>
</alias>
<alias>
  <family>serif</family>
  <prefer><family>IBM Plex Serif</family></prefer>
</alias>
<alias>
  <family>monospace</family>
  <prefer><family>IBM Plex Mono</family></prefer>
</alias>

<!-- If you don't want something, use something else instead -->
<match target="pattern">
  <test qual="any" name="family">
    <string>Arial</string>
  </test>
  <edit name="family" mode="assign" binding="same">
    <string>Roboto</string>
  </edit>
</match>
<match target="pattern">
  <test qual="any" name="family">
    <string>Georgia</string>
  </test>
  <edit name="family" mode="assign" binding="same">
    <string>IBM Plex Serif</string>
  </edit>
</match>
<match target="pattern">
  <test qual="any" name="family">
    <string>Times New Roman</string>
  </test>
  <edit name="family" mode="assign" binding="same">
    <string>IBM Plex Serif</string>
  </edit>
</match>
</fontconfig>
```

A file like this should be placed at
`$XDG_CONFIG_HOME/fontconfig/`.

## Docs

Need more info?

- [Official documentation](https://www.freedesktop.org/software/fontconfig/fontconfig-user.html).
- [ArchLinux docs](https://wiki.archlinux.org/title/font_configuration)
  have good tips too.

## Potential Problem

This piece of code will cause replacement of *Times New Roman*
for *Merriweather*:

```
<match target="pattern">
  <test qual="any" name="family">
    <string>Times New Roman</string>
  </test>
  <edit name="family" mode="assign" binding="same">
    <string>Merriweather</string>
  </edit>
</match>
```

This one, not necessarily:

```
<alias>
  <family>Times New Roman</family>
  <prefer>
    <family>Merriweather</family>
  </prefer>
</alias>
```

It will work only if there's no *Times New Roman* in your system.

## Quick sum-up

- Store your fonts at `$HOME/.local/share/fonts` or `/usr/local/share/fonts`
- Configuration stuff write into `$XDG_CONFIG_HOME/fontconfig/fonts.conf`
  file. (`$XDG_CONFIG_HOME` most likely means `$HOME/.config/`.)
- Use fonts that look clean and standard — you need **predictable behavior**.

`2021-12-18`
