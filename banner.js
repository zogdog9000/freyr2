import esMain from 'es-main';

const banner = [
  '\x1b[38;5;63m \x1b[39m\x1b[38;5;63m  \x1b[39m\x1b[38;5;69m__\x1b[39m\x1b[38;5;75m                   \x1b[39m\x1b[38;5;81m___\x1b[39m\x1b[38;5;87m ___\x1b[39m',
  '\x1b[38;5;63m \x1b[39m\x1b[38;5;63m/ \x1b[39m\x1b[38;5;69m_| \x1b[39m\x1b[38;5;75m                 \x1b[39m\x1b[38;5;81m|_ \x1b[39m\x1b[38;5;87m |  _|\x1b[39m',
  '\x1b[38;5;63m|\x1b[39m\x1b[38;5;63m |_ \x1b[39m\x1b[38;5;69m_ __ ___ \x1b[39m\x1b[38;5;75m_   _ \x1b[39m\x1b[38;5;81m_ __\x1b[39m\x1b[38;5;87m| |\x1b[39m\x1b[38;5;123m |\x1b[39m',
  "\x1b[38;5;63m|\x1b[39m\x1b[38;5;63m  _|\x1b[39m\x1b[38;5;69m '__/ _ \\ \x1b[39m\x1b[38;5;75m| | |\x1b[39m\x1b[38;5;81m '__|\x1b[39m\x1b[38;5;87m | |\x1b[39m",
  '\x1b[38;5;63m|\x1b[39m\x1b[38;5;63m | |\x1b[39m\x1b[38;5;69m | |  __/\x1b[39m\x1b[38;5;75m |_| |\x1b[39m\x1b[38;5;81m |  |\x1b[39m\x1b[38;5;87m | |\x1b[39m',
  '\x1b[38;5;63m|_|\x1b[39m\x1b[38;5;69m| |_|\x1b[39m\x1b[38;5;75m  \\___|\\\x1b[39m\x1b[38;5;81m__,_|\x1b[39m\x1b[38;5;87m_| |\x1b[39m\x1b[38;5;123m |_|\x1b[39m',
  '\x1b[38;5;63m                \x1b[39m\x1b[38;5;69m__/ |\x1b[39m\x1b[38;5;75m  |\x1b[39m\x1b[38;5;81m___|\x1b[39m\x1b[38;5;87m___|\x1b[39m',
  '\x1b[38;5;63m               \x1b[39m\x1b[38;5;69m|___/\x1b[39m             ',
];

export default banner;

if (esMain(import.meta)) console.log(banner.join('\n'));

/*
To generate the banner:
  $ unset COLORTERM
  $ figlet -fslant freyr \
    | lolcat -p 0.5 -S 35 -f \
    | sed 's/\\/\\\\/g;s/\x1b/\\x1b/g'

To record logo:
  $ GIFSICLE_OPTS=--lossy=80 asciicast2gif \
    -t tango -s 2 -w 28 -h 6 logo.cast logo.gif
*/
