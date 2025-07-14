
// todo: add more emojies, not in AngularJS Emoji Picker
// https://unicode.org/emoji/charts/full-emoji-list.html
// https://www.w3schools.com/charsets/ref_utf_symbols.asp

/*
 * utf code for emojis:

// struct in Dec
&#9728;

// Dec example
128513
&#128513;

// Unicode is in Hex, convert to Dec to use in code.
https://apps.timwhitlock.info/emoji/tables/unicode
https://apps.timwhitlock.info/unicode/inspect/dec/128513

// more options:
https://www.w3schools.com/charsets/ref_utf_symbols.asp
https://www.w3schools.com/charsets/ref_html_utf8.asp
*/

var emojies = {
  "face-smiling": [
    {
      utf8Code: "U+1F600",
      utfChar: "😀",
      CLDRShortName: "grinning face",
    },
    {
      utf8Code: "U+1F603",
      utfChar: "😃",
      CLDRShortName: "grinning face with big eyes",
    },
    {
      utf8Code: "U+1F604",
      utfChar: "😄",
      CLDRShortName: "grinning face with smiling eyes",
    },
    {
      utf8Code: "U+1F601",
      utfChar: "😁",
      CLDRShortName: "beaming face with smiling eyes",
    },
    {
      utf8Code: "U+1F606",
      utfChar: "😆",
      CLDRShortName: "grinning squinting face",
    },
    {
      utf8Code: "U+1F605",
      utfChar: "😅",
      CLDRShortName: "grinning face with sweat",
    },
    {
      utf8Code: "U+1F923",
      utfChar: "🤣",
      CLDRShortName: "rolling on the floor laughing",
    },
    {
      utf8Code: "U+1F602",
      utfChar: "😂",
      CLDRShortName: "face with tears of joy",
    },
    {
      utf8Code: "U+1F642",
      utfChar: "🙂",
      CLDRShortName: "slightly smiling face",
    },
    {
      utf8Code: "U+1F643",
      utfChar: "🙃",
      CLDRShortName: "upside-down face",
    },
    {
      utf8Code: "U+1FAE0",
      utfChar: "🫠",
      CLDRShortName: "⊛ melting face",
    },
    {
      utf8Code: "U+1F609",
      utfChar: "😉",
      CLDRShortName: "winking face",
    },
    {
      utf8Code: "U+1F60A",
      utfChar: "😊",
      CLDRShortName: "smiling face with smiling eyes",
    },
    {
      utf8Code: "U+1F607",
      utfChar: "😇",
      CLDRShortName: "smiling face with halo",
    },
  ],
  "face-affection": [
    {
      utf8Code: "U+1F970",
      utfChar: "🥰",
      CLDRShortName: "smiling face with hearts",
    },
    {
      utf8Code: "U+1F60D",
      utfChar: "😍",
      CLDRShortName: "smiling face with heart-eyes",
    },
    {
      utf8Code: "U+1F929",
      utfChar: "🤩",
      CLDRShortName: "star-struck",
    },
    {
      utf8Code: "U+1F618",
      utfChar: "😘",
      CLDRShortName: "face blowing a kiss",
    },
    {
      utf8Code: "U+1F617",
      utfChar: "😗",
      CLDRShortName: "kissing face",
    },
    {
      utf8Code: "U+263A",
      utfChar: "☺",
      CLDRShortName: "smiling face",
    },
    {
      utf8Code: "U+1F61A",
      utfChar: "😚",
      CLDRShortName: "kissing face with closed eyes",
    },
    {
      utf8Code: "U+1F619",
      utfChar: "😙",
      CLDRShortName: "kissing face with smiling eyes",
    },
    {
      utf8Code: "U+1F972",
      utfChar: "🥲",
      CLDRShortName: "smiling face with tear",
    },
  ],
  "face-tongue": [
    {
      utf8Code: "U+1F60B",
      utfChar: "😋",
      CLDRShortName: "face savoring food",
    },
    {
      utf8Code: "U+1F61B",
      utfChar: "😛",
      CLDRShortName: "face with tongue",
    },
    {
      utf8Code: "U+1F61C",
      utfChar: "😜",
      CLDRShortName: "winking face with tongue",
    },
    {
      utf8Code: "U+1F92A",
      utfChar: "🤪",
      CLDRShortName: "zany face",
    },
    {
      utf8Code: "U+1F61D",
      utfChar: "😝",
      CLDRShortName: "squinting face with tongue",
    },
    {
      utf8Code: "U+1F911",
      utfChar: "🤑",
      CLDRShortName: "money-mouth face",
    },
  ],
  "face-hand": [
    {
      utf8Code: "U+1F917",
      utfChar: "🤗",
      CLDRShortName: "smiling face with open hands",
    },
    {
      utf8Code: "U+1F92D",
      utfChar: "🤭",
      CLDRShortName: "face with hand over mouth",
    },
    {
      utf8Code: "U+1FAE2",
      utfChar: "🫢",
      CLDRShortName: "⊛ face with open eyes and hand over mouth",
    },
    {
      utf8Code: "U+1FAE3",
      utfChar: "🫣",
      CLDRShortName: "⊛ face with peeking eye",
    },
    {
      utf8Code: "U+1F92B",
      utfChar: "🤫",
      CLDRShortName: "shushing face",
    },
    {
      utf8Code: "U+1F914",
      utfChar: "🤔",
      CLDRShortName: "thinking face",
    },
    {
      utf8Code: "U+1FAE1",
      utfChar: "🫡",
      CLDRShortName: "⊛ saluting face",
    },
  ],
  "face-neutral-skeptical": [
    {
      utf8Code: "U+1F910",
      utfChar: "🤐",
      CLDRShortName: "zipper-mouth face",
    },
    {
      utf8Code: "U+1F928",
      utfChar: "🤨",
      CLDRShortName: "face with raised eyebrow",
    },
    {
      utf8Code: "U+1F610",
      utfChar: "😐",
      CLDRShortName: "neutral face",
    },
    {
      utf8Code: "U+1F611",
      utfChar: "😑",
      CLDRShortName: "expressionless face",
    },
    {
      utf8Code: "U+1F636",
      utfChar: "😶",
      CLDRShortName: "face without mouth",
    },
    {
      utf8Code: "U+1FAE5",
      utfChar: "🫥",
      CLDRShortName: "⊛ dotted line face",
    },
    {
      utf8Code: "U+1F636 U+200D U+1F32B U+FE0F",
      utfChar: "😶‍🌫️",
      CLDRShortName: "face in clouds",
    },
    {
      utf8Code: "U+1F60F",
      utfChar: "😏",
      CLDRShortName: "smirking face",
    },
    {
      utf8Code: "U+1F612",
      utfChar: "😒",
      CLDRShortName: "unamused face",
    },
    {
      utf8Code: "U+1F644",
      utfChar: "🙄",
      CLDRShortName: "face with rolling eyes",
    },
    {
      utf8Code: "U+1F62C",
      utfChar: "😬",
      CLDRShortName: "grimacing face",
    },
    {
      utf8Code: "U+1F62E U+200D U+1F4A8",
      utfChar: "😮‍💨",
      CLDRShortName: "face exhaling",
    },
    {
      utf8Code: "U+1F925",
      utfChar: "🤥",
      CLDRShortName: "lying face",
    },
  ],
  "face-sleepy": [
    {
      utf8Code: "U+1F60C",
      utfChar: "😌",
      CLDRShortName: "relieved face",
    },
    {
      utf8Code: "U+1F614",
      utfChar: "😔",
      CLDRShortName: "pensive face",
    },
    {
      utf8Code: "U+1F62A",
      utfChar: "😪",
      CLDRShortName: "sleepy face",
    },
    {
      utf8Code: "U+1F924",
      utfChar: "🤤",
      CLDRShortName: "drooling face",
    },
    {
      utf8Code: "U+1F634",
      utfChar: "😴",
      CLDRShortName: "sleeping face",
    },
  ],
  "face-unwell": [
    {
      utf8Code: "U+1F637",
      utfChar: "😷",
      CLDRShortName: "face with medical mask",
    },
    {
      utf8Code: "U+1F912",
      utfChar: "🤒",
      CLDRShortName: "face with thermometer",
    },
    {
      utf8Code: "U+1F915",
      utfChar: "🤕",
      CLDRShortName: "face with head-bandage",
    },
    {
      utf8Code: "U+1F922",
      utfChar: "🤢",
      CLDRShortName: "nauseated face",
    },
    {
      utf8Code: "U+1F92E",
      utfChar: "🤮",
      CLDRShortName: "face vomiting",
    },
    {
      utf8Code: "U+1F927",
      utfChar: "🤧",
      CLDRShortName: "sneezing face",
    },
    {
      utf8Code: "U+1F975",
      utfChar: "🥵",
      CLDRShortName: "hot face",
    },
    {
      utf8Code: "U+1F976",
      utfChar: "🥶",
      CLDRShortName: "cold face",
    },
    {
      utf8Code: "U+1F974",
      utfChar: "🥴",
      CLDRShortName: "woozy face",
    },
    {
      utf8Code: "U+1F635",
      utfChar: "😵",
      CLDRShortName: "face with crossed-out eyes",
    },
    {
      utf8Code: "U+1F635 U+200D U+1F4AB",
      utfChar: "😵‍💫",
      CLDRShortName: "face with spiral eyes",
    },
    {
      utf8Code: "U+1F92F",
      utfChar: "🤯",
      CLDRShortName: "exploding head",
    },
  ],
  "face-hat": [
    {
      utf8Code: "U+1F920",
      utfChar: "🤠",
      CLDRShortName: "cowboy hat face",
    },
    {
      utf8Code: "U+1F973",
      utfChar: "🥳",
      CLDRShortName: "partying face",
    },
    {
      utf8Code: "U+1F978",
      utfChar: "🥸",
      CLDRShortName: "disguised face",
    },
  ],
  "face-glasses": [
    {
      utf8Code: "U+1F60E",
      utfChar: "😎",
      CLDRShortName: "smiling face with sunglasses",
    },
    {
      utf8Code: "U+1F913",
      utfChar: "🤓",
      CLDRShortName: "nerd face",
    },
    {
      utf8Code: "U+1F9D0",
      utfChar: "🧐",
      CLDRShortName: "face with monocle",
    },
  ],
  "face-concerned": [
    {
      utf8Code: "U+1F615",
      utfChar: "😕",
      CLDRShortName: "confused face",
    },
    {
      utf8Code: "U+1FAE4",
      utfChar: "🫤",
      CLDRShortName: "⊛ face with diagonal mouth",
    },
    {
      utf8Code: "U+1F61F",
      utfChar: "😟",
      CLDRShortName: "worried face",
    },
    {
      utf8Code: "U+1F641",
      utfChar: "🙁",
      CLDRShortName: "slightly frowning face",
    },
    {
      utf8Code: "U+2639",
      utfChar: "☹",
      CLDRShortName: "frowning face",
    },
    {
      utf8Code: "U+1F62E",
      utfChar: "😮",
      CLDRShortName: "face with open mouth",
    },
    {
      utf8Code: "U+1F62F",
      utfChar: "😯",
      CLDRShortName: "hushed face",
    },
    {
      utf8Code: "U+1F632",
      utfChar: "😲",
      CLDRShortName: "astonished face",
    },
    {
      utf8Code: "U+1F633",
      utfChar: "😳",
      CLDRShortName: "flushed face",
    },
    {
      utf8Code: "U+1F97A",
      utfChar: "🥺",
      CLDRShortName: "pleading face",
    },
    {
      utf8Code: "U+1F979",
      utfChar: "🥹",
      CLDRShortName: "⊛ face holding back tears",
    },
    {
      utf8Code: "U+1F626",
      utfChar: "😦",
      CLDRShortName: "frowning face with open mouth",
    },
    {
      utf8Code: "U+1F627",
      utfChar: "😧",
      CLDRShortName: "anguished face",
    },
    {
      utf8Code: "U+1F628",
      utfChar: "😨",
      CLDRShortName: "fearful face",
    },
    {
      utf8Code: "U+1F630",
      utfChar: "😰",
      CLDRShortName: "anxious face with sweat",
    },
    {
      utf8Code: "U+1F625",
      utfChar: "😥",
      CLDRShortName: "sad but relieved face",
    },
    {
      utf8Code: "U+1F622",
      utfChar: "😢",
      CLDRShortName: "crying face",
    },
    {
      utf8Code: "U+1F62D",
      utfChar: "😭",
      CLDRShortName: "loudly crying face",
    },
    {
      utf8Code: "U+1F631",
      utfChar: "😱",
      CLDRShortName: "face screaming in fear",
    },
    {
      utf8Code: "U+1F616",
      utfChar: "😖",
      CLDRShortName: "confounded face",
    },
    {
      utf8Code: "U+1F623",
      utfChar: "😣",
      CLDRShortName: "persevering face",
    },
    {
      utf8Code: "U+1F61E",
      utfChar: "😞",
      CLDRShortName: "disappointed face",
    },
    {
      utf8Code: "U+1F613",
      utfChar: "😓",
      CLDRShortName: "downcast face with sweat",
    },
    {
      utf8Code: "U+1F629",
      utfChar: "😩",
      CLDRShortName: "weary face",
    },
    {
      utf8Code: "U+1F62B",
      utfChar: "😫",
      CLDRShortName: "tired face",
    },
    {
      utf8Code: "U+1F971",
      utfChar: "🥱",
      CLDRShortName: "yawning face",
    },
  ],
  "face-negative": [
    {
      utf8Code: "U+1F624",
      utfChar: "😤",
      CLDRShortName: "face with steam from nose",
    },
    {
      utf8Code: "U+1F621",
      utfChar: "😡",
      CLDRShortName: "pouting face",
    },
    {
      utf8Code: "U+1F620",
      utfChar: "😠",
      CLDRShortName: "angry face",
    },
    {
      utf8Code: "U+1F92C",
      utfChar: "🤬",
      CLDRShortName: "face with symbols on mouth",
    },
    {
      utf8Code: "U+1F608",
      utfChar: "😈",
      CLDRShortName: "smiling face with horns",
    },
    {
      utf8Code: "U+1F47F",
      utfChar: "👿",
      CLDRShortName: "angry face with horns",
    },
    {
      utf8Code: "U+1F480",
      utfChar: "💀",
      CLDRShortName: "skull",
    },
    {
      utf8Code: "U+2620",
      utfChar: "☠",
      CLDRShortName: "skull and crossbones",
    },
  ],
  "face-costume": [
    {
      utf8Code: "U+1F4A9",
      utfChar: "💩",
      CLDRShortName: "pile of poo",
    },
    {
      utf8Code: "U+1F921",
      utfChar: "🤡",
      CLDRShortName: "clown face",
    },
    {
      utf8Code: "U+1F479",
      utfChar: "👹",
      CLDRShortName: "ogre",
    },
    {
      utf8Code: "U+1F47A",
      utfChar: "👺",
      CLDRShortName: "goblin",
    },
    {
      utf8Code: "U+1F47B",
      utfChar: "👻",
      CLDRShortName: "ghost",
    },
    {
      utf8Code: "U+1F47D",
      utfChar: "👽",
      CLDRShortName: "alien",
    },
    {
      utf8Code: "U+1F47E",
      utfChar: "👾",
      CLDRShortName: "alien monster",
    },
    {
      utf8Code: "U+1F916",
      utfChar: "🤖",
      CLDRShortName: "robot",
    },
  ],
  "cat-face": [
    {
      utf8Code: "U+1F63A",
      utfChar: "😺",
      CLDRShortName: "grinning cat",
    },
    {
      utf8Code: "U+1F638",
      utfChar: "😸",
      CLDRShortName: "grinning cat with smiling eyes",
    },
    {
      utf8Code: "U+1F639",
      utfChar: "😹",
      CLDRShortName: "cat with tears of joy",
    },
    {
      utf8Code: "U+1F63B",
      utfChar: "😻",
      CLDRShortName: "smiling cat with heart-eyes",
    },
    {
      utf8Code: "U+1F63C",
      utfChar: "😼",
      CLDRShortName: "cat with wry smile",
    },
    {
      utf8Code: "U+1F63D",
      utfChar: "😽",
      CLDRShortName: "kissing cat",
    },
    {
      utf8Code: "U+1F640",
      utfChar: "🙀",
      CLDRShortName: "weary cat",
    },
    {
      utf8Code: "U+1F63F",
      utfChar: "😿",
      CLDRShortName: "crying cat",
    },
    {
      utf8Code: "U+1F63E",
      utfChar: "😾",
      CLDRShortName: "pouting cat",
    },
  ],
  "monkey-face": [
    {
      utf8Code: "U+1F648",
      utfChar: "🙈",
      CLDRShortName: "see-no-evil monkey",
    },
    {
      utf8Code: "U+1F649",
      utfChar: "🙉",
      CLDRShortName: "hear-no-evil monkey",
    },
    {
      utf8Code: "U+1F64A",
      utfChar: "🙊",
      CLDRShortName: "speak-no-evil monkey",
    },
  ],
  emotion: [
    {
      utf8Code: "U+1F48B",
      utfChar: "💋",
      CLDRShortName: "kiss mark",
    },
    {
      utf8Code: "U+1F48C",
      utfChar: "💌",
      CLDRShortName: "love letter",
    },
    {
      utf8Code: "U+1F498",
      utfChar: "💘",
      CLDRShortName: "heart with arrow",
    },
    {
      utf8Code: "U+1F49D",
      utfChar: "💝",
      CLDRShortName: "heart with ribbon",
    },
    {
      utf8Code: "U+1F496",
      utfChar: "💖",
      CLDRShortName: "sparkling heart",
    },
    {
      utf8Code: "U+1F497",
      utfChar: "💗",
      CLDRShortName: "growing heart",
    },
    {
      utf8Code: "U+1F493",
      utfChar: "💓",
      CLDRShortName: "beating heart",
    },
    {
      utf8Code: "U+1F49E",
      utfChar: "💞",
      CLDRShortName: "revolving hearts",
    },
    {
      utf8Code: "U+1F495",
      utfChar: "💕",
      CLDRShortName: "two hearts",
    },
    {
      utf8Code: "U+1F49F",
      utfChar: "💟",
      CLDRShortName: "heart decoration",
    },
    {
      utf8Code: "U+2763",
      utfChar: "❣",
      CLDRShortName: "heart exclamation",
    },
    {
      utf8Code: "U+1F494",
      utfChar: "💔",
      CLDRShortName: "broken heart",
    },
    {
      utf8Code: "U+2764 U+FE0F U+200D U+1F525",
      utfChar: "❤️‍🔥",
      CLDRShortName: "heart on fire",
    },
    {
      utf8Code: "U+2764 U+FE0F U+200D U+1FA79",
      utfChar: "❤️‍🩹",
      CLDRShortName: "mending heart",
    },
    {
      utf8Code: "U+2764",
      utfChar: "❤",
      CLDRShortName: "red heart",
    },
    {
      utf8Code: "U+1F9E1",
      utfChar: "🧡",
      CLDRShortName: "orange heart",
    },
    {
      utf8Code: "U+1F49B",
      utfChar: "💛",
      CLDRShortName: "yellow heart",
    },
    {
      utf8Code: "U+1F49A",
      utfChar: "💚",
      CLDRShortName: "green heart",
    },
    {
      utf8Code: "U+1F499",
      utfChar: "💙",
      CLDRShortName: "blue heart",
    },
    {
      utf8Code: "U+1F49C",
      utfChar: "💜",
      CLDRShortName: "purple heart",
    },
    {
      utf8Code: "U+1F90E",
      utfChar: "🤎",
      CLDRShortName: "brown heart",
    },
    {
      utf8Code: "U+1F5A4",
      utfChar: "🖤",
      CLDRShortName: "black heart",
    },
    {
      utf8Code: "U+1F90D",
      utfChar: "🤍",
      CLDRShortName: "white heart",
    },
    {
      utf8Code: "U+1F4AF",
      utfChar: "💯",
      CLDRShortName: "hundred points",
    },
    {
      utf8Code: "U+1F4A2",
      utfChar: "💢",
      CLDRShortName: "anger symbol",
    },
    {
      utf8Code: "U+1F4A5",
      utfChar: "💥",
      CLDRShortName: "collision",
    },
    {
      utf8Code: "U+1F4AB",
      utfChar: "💫",
      CLDRShortName: "dizzy",
    },
    {
      utf8Code: "U+1F4A6",
      utfChar: "💦",
      CLDRShortName: "sweat droplets",
    },
    {
      utf8Code: "U+1F4A8",
      utfChar: "💨",
      CLDRShortName: "dashing away",
    },
    {
      utf8Code: "U+1F573",
      utfChar: "🕳",
      CLDRShortName: "hole",
    },
    {
      utf8Code: "U+1F4A3",
      utfChar: "💣",
      CLDRShortName: "bomb",
    },
    {
      utf8Code: "U+1F4AC",
      utfChar: "💬",
      CLDRShortName: "speech balloon",
    },
    {
      utf8Code: "U+1F441 U+FE0F U+200D U+1F5E8 U+FE0F",
      utfChar: "👁️‍🗨️",
      CLDRShortName: "eye in speech bubble",
    },
    {
      utf8Code: "U+1F5E8",
      utfChar: "🗨",
      CLDRShortName: "left speech bubble",
    },
    {
      utf8Code: "U+1F5EF",
      utfChar: "🗯",
      CLDRShortName: "right anger bubble",
    },
    {
      utf8Code: "U+1F4AD",
      utfChar: "💭",
      CLDRShortName: "thought balloon",
    },
    {
      utf8Code: "U+1F4A4",
      utfChar: "💤",
      CLDRShortName: "zzz",
    },
  ],
  "hand-fingers-open": [
    {
      utf8Code: "U+1F44B",
      utfChar: "👋",
      CLDRShortName: "waving hand",
    },
    {
      utf8Code: "U+1F91A",
      utfChar: "🤚",
      CLDRShortName: "raised back of hand",
    },
    {
      utf8Code: "U+1F590",
      utfChar: "🖐",
      CLDRShortName: "hand with fingers splayed",
    },
    {
      utf8Code: "U+270B",
      utfChar: "✋",
      CLDRShortName: "raised hand",
    },
    {
      utf8Code: "U+1F596",
      utfChar: "🖖",
      CLDRShortName: "vulcan salute",
    },
    {
      utf8Code: "U+1FAF1",
      utfChar: "🫱",
      CLDRShortName: "⊛ rightwards hand",
    },
    {
      utf8Code: "U+1FAF2",
      utfChar: "🫲",
      CLDRShortName: "⊛ leftwards hand",
    },
    {
      utf8Code: "U+1FAF3",
      utfChar: "🫳",
      CLDRShortName: "⊛ palm down hand",
    },
    {
      utf8Code: "U+1FAF4",
      utfChar: "🫴",
      CLDRShortName: "⊛ palm up hand",
    },
  ],
  "hand-fingers-partial": [
    {
      utf8Code: "U+1F44C",
      utfChar: "👌",
      CLDRShortName: "OK hand",
    },
    {
      utf8Code: "U+1F90C",
      utfChar: "🤌",
      CLDRShortName: "pinched fingers",
    },
    {
      utf8Code: "U+1F90F",
      utfChar: "🤏",
      CLDRShortName: "pinching hand",
    },
    {
      utf8Code: "U+270C",
      utfChar: "✌",
      CLDRShortName: "victory hand",
    },
    {
      utf8Code: "U+1F91E",
      utfChar: "🤞",
      CLDRShortName: "crossed fingers",
    },
    {
      utf8Code: "U+1FAF0",
      utfChar: "🫰",
      CLDRShortName: "⊛ hand with index finger and thumb crossed",
    },
    {
      utf8Code: "U+1F91F",
      utfChar: "🤟",
      CLDRShortName: "love-you gesture",
    },
    {
      utf8Code: "U+1F918",
      utfChar: "🤘",
      CLDRShortName: "sign of the horns",
    },
    {
      utf8Code: "U+1F919",
      utfChar: "🤙",
      CLDRShortName: "call me hand",
    },
  ],
  "hand-single-finger": [
    {
      utf8Code: "U+1F448",
      utfChar: "👈",
      CLDRShortName: "backhand index pointing left",
    },
    {
      utf8Code: "U+1F449",
      utfChar: "👉",
      CLDRShortName: "backhand index pointing right",
    },
    {
      utf8Code: "U+1F446",
      utfChar: "👆",
      CLDRShortName: "backhand index pointing up",
    },
    {
      utf8Code: "U+1F595",
      utfChar: "🖕",
      CLDRShortName: "middle finger",
    },
    {
      utf8Code: "U+1F447",
      utfChar: "👇",
      CLDRShortName: "backhand index pointing down",
    },
    {
      utf8Code: "U+261D",
      utfChar: "☝",
      CLDRShortName: "index pointing up",
    },
    {
      utf8Code: "U+1FAF5",
      utfChar: "🫵",
      CLDRShortName: "⊛ index pointing at the viewer",
    },
  ],
  "hand-fingers-closed": [
    {
      utf8Code: "U+1F44D",
      utfChar: "👍",
      CLDRShortName: "thumbs up",
    },
    {
      utf8Code: "U+1F44E",
      utfChar: "👎",
      CLDRShortName: "thumbs down",
    },
    {
      utf8Code: "U+270A",
      utfChar: "✊",
      CLDRShortName: "raised fist",
    },
    {
      utf8Code: "U+1F44A",
      utfChar: "👊",
      CLDRShortName: "oncoming fist",
    },
    {
      utf8Code: "U+1F91B",
      utfChar: "🤛",
      CLDRShortName: "left-facing fist",
    },
    {
      utf8Code: "U+1F91C",
      utfChar: "🤜",
      CLDRShortName: "right-facing fist",
    },
  ],
  hands: [
    {
      utf8Code: "U+1F44F",
      utfChar: "👏",
      CLDRShortName: "clapping hands",
    },
    {
      utf8Code: "U+1F64C",
      utfChar: "🙌",
      CLDRShortName: "raising hands",
    },
    {
      utf8Code: "U+1FAF6",
      utfChar: "🫶",
      CLDRShortName: "⊛ heart hands",
    },
    {
      utf8Code: "U+1F450",
      utfChar: "👐",
      CLDRShortName: "open hands",
    },
    {
      utf8Code: "U+1F932",
      utfChar: "🤲",
      CLDRShortName: "palms up together",
    },
    {
      utf8Code: "U+1F91D",
      utfChar: "🤝",
      CLDRShortName: "handshake",
    },
    {
      utf8Code: "U+1F64F",
      utfChar: "🙏",
      CLDRShortName: "folded hands",
    },
  ],
  "hand-prop": [
    {
      utf8Code: "U+270D",
      utfChar: "✍",
      CLDRShortName: "writing hand",
    },
    {
      utf8Code: "U+1F485",
      utfChar: "💅",
      CLDRShortName: "nail polish",
    },
    {
      utf8Code: "U+1F933",
      utfChar: "🤳",
      CLDRShortName: "selfie",
    },
  ],
  "body-parts": [
    {
      utf8Code: "U+1F4AA",
      utfChar: "💪",
      CLDRShortName: "flexed biceps",
    },
    {
      utf8Code: "U+1F9BE",
      utfChar: "🦾",
      CLDRShortName: "mechanical arm",
    },
    {
      utf8Code: "U+1F9BF",
      utfChar: "🦿",
      CLDRShortName: "mechanical leg",
    },
    {
      utf8Code: "U+1F9B5",
      utfChar: "🦵",
      CLDRShortName: "leg",
    },
    {
      utf8Code: "U+1F9B6",
      utfChar: "🦶",
      CLDRShortName: "foot",
    },
    {
      utf8Code: "U+1F442",
      utfChar: "👂",
      CLDRShortName: "ear",
    },
    {
      utf8Code: "U+1F9BB",
      utfChar: "🦻",
      CLDRShortName: "ear with hearing aid",
    },
    {
      utf8Code: "U+1F443",
      utfChar: "👃",
      CLDRShortName: "nose",
    },
    {
      utf8Code: "U+1F9E0",
      utfChar: "🧠",
      CLDRShortName: "brain",
    },
    {
      utf8Code: "U+1FAC0",
      utfChar: "🫀",
      CLDRShortName: "anatomical heart",
    },
    {
      utf8Code: "U+1FAC1",
      utfChar: "🫁",
      CLDRShortName: "lungs",
    },
    {
      utf8Code: "U+1F9B7",
      utfChar: "🦷",
      CLDRShortName: "tooth",
    },
    {
      utf8Code: "U+1F9B4",
      utfChar: "🦴",
      CLDRShortName: "bone",
    },
    {
      utf8Code: "U+1F440",
      utfChar: "👀",
      CLDRShortName: "eyes",
    },
    {
      utf8Code: "U+1F441",
      utfChar: "👁",
      CLDRShortName: "eye",
    },
    {
      utf8Code: "U+1F445",
      utfChar: "👅",
      CLDRShortName: "tongue",
    },
    {
      utf8Code: "U+1F444",
      utfChar: "👄",
      CLDRShortName: "mouth",
    },
    {
      utf8Code: "U+1FAE6",
      utfChar: "🫦",
      CLDRShortName: "⊛ biting lip",
    },
  ],
  person: [
    {
      utf8Code: "U+1F476",
      utfChar: "👶",
      CLDRShortName: "baby",
    },
    {
      utf8Code: "U+1F9D2",
      utfChar: "🧒",
      CLDRShortName: "child",
    },
    {
      utf8Code: "U+1F466",
      utfChar: "👦",
      CLDRShortName: "boy",
    },
    {
      utf8Code: "U+1F467",
      utfChar: "👧",
      CLDRShortName: "girl",
    },
    {
      utf8Code: "U+1F9D1",
      utfChar: "🧑",
      CLDRShortName: "person",
    },
    {
      utf8Code: "U+1F471",
      utfChar: "👱",
      CLDRShortName: "person: blond hair",
    },
    {
      utf8Code: "U+1F468",
      utfChar: "👨",
      CLDRShortName: "man",
    },
    {
      utf8Code: "U+1F9D4",
      utfChar: "🧔",
      CLDRShortName: "person: beard",
    },
    {
      utf8Code: "U+1F9D4 U+200D U+2642 U+FE0F",
      utfChar: "🧔‍♂️",
      CLDRShortName: "man: beard",
    },
    {
      utf8Code: "U+1F9D4 U+200D U+2640 U+FE0F",
      utfChar: "🧔‍♀️",
      CLDRShortName: "woman: beard",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9B0",
      utfChar: "👨‍🦰",
      CLDRShortName: "man: red hair",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9B1",
      utfChar: "👨‍🦱",
      CLDRShortName: "man: curly hair",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9B3",
      utfChar: "👨‍🦳",
      CLDRShortName: "man: white hair",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9B2",
      utfChar: "👨‍🦲",
      CLDRShortName: "man: bald",
    },
    {
      utf8Code: "U+1F469",
      utfChar: "👩",
      CLDRShortName: "woman",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9B0",
      utfChar: "👩‍🦰",
      CLDRShortName: "woman: red hair",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9B0",
      utfChar: "🧑‍🦰",
      CLDRShortName: "person: red hair",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9B1",
      utfChar: "👩‍🦱",
      CLDRShortName: "woman: curly hair",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9B1",
      utfChar: "🧑‍🦱",
      CLDRShortName: "person: curly hair",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9B3",
      utfChar: "👩‍🦳",
      CLDRShortName: "woman: white hair",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9B3",
      utfChar: "🧑‍🦳",
      CLDRShortName: "person: white hair",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9B2",
      utfChar: "👩‍🦲",
      CLDRShortName: "woman: bald",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9B2",
      utfChar: "🧑‍🦲",
      CLDRShortName: "person: bald",
    },
    {
      utf8Code: "U+1F471 U+200D U+2640 U+FE0F",
      utfChar: "👱‍♀️",
      CLDRShortName: "woman: blond hair",
    },
    {
      utf8Code: "U+1F471 U+200D U+2642 U+FE0F",
      utfChar: "👱‍♂️",
      CLDRShortName: "man: blond hair",
    },
    {
      utf8Code: "U+1F9D3",
      utfChar: "🧓",
      CLDRShortName: "older person",
    },
    {
      utf8Code: "U+1F474",
      utfChar: "👴",
      CLDRShortName: "old man",
    },
    {
      utf8Code: "U+1F475",
      utfChar: "👵",
      CLDRShortName: "old woman",
    },
  ],
  "person-gesture": [
    {
      utf8Code: "U+1F64D",
      utfChar: "🙍",
      CLDRShortName: "person frowning",
    },
    {
      utf8Code: "U+1F64D U+200D U+2642 U+FE0F",
      utfChar: "🙍‍♂️",
      CLDRShortName: "man frowning",
    },
    {
      utf8Code: "U+1F64D U+200D U+2640 U+FE0F",
      utfChar: "🙍‍♀️",
      CLDRShortName: "woman frowning",
    },
    {
      utf8Code: "U+1F64E",
      utfChar: "🙎",
      CLDRShortName: "person pouting",
    },
    {
      utf8Code: "U+1F64E U+200D U+2642 U+FE0F",
      utfChar: "🙎‍♂️",
      CLDRShortName: "man pouting",
    },
    {
      utf8Code: "U+1F64E U+200D U+2640 U+FE0F",
      utfChar: "🙎‍♀️",
      CLDRShortName: "woman pouting",
    },
    {
      utf8Code: "U+1F645",
      utfChar: "🙅",
      CLDRShortName: "person gesturing NO",
    },
    {
      utf8Code: "U+1F645 U+200D U+2642 U+FE0F",
      utfChar: "🙅‍♂️",
      CLDRShortName: "man gesturing NO",
    },
    {
      utf8Code: "U+1F645 U+200D U+2640 U+FE0F",
      utfChar: "🙅‍♀️",
      CLDRShortName: "woman gesturing NO",
    },
    {
      utf8Code: "U+1F646",
      utfChar: "🙆",
      CLDRShortName: "person gesturing OK",
    },
    {
      utf8Code: "U+1F646 U+200D U+2642 U+FE0F",
      utfChar: "🙆‍♂️",
      CLDRShortName: "man gesturing OK",
    },
    {
      utf8Code: "U+1F646 U+200D U+2640 U+FE0F",
      utfChar: "🙆‍♀️",
      CLDRShortName: "woman gesturing OK",
    },
    {
      utf8Code: "U+1F481",
      utfChar: "💁",
      CLDRShortName: "person tipping hand",
    },
    {
      utf8Code: "U+1F481 U+200D U+2642 U+FE0F",
      utfChar: "💁‍♂️",
      CLDRShortName: "man tipping hand",
    },
    {
      utf8Code: "U+1F481 U+200D U+2640 U+FE0F",
      utfChar: "💁‍♀️",
      CLDRShortName: "woman tipping hand",
    },
    {
      utf8Code: "U+1F64B",
      utfChar: "🙋",
      CLDRShortName: "person raising hand",
    },
    {
      utf8Code: "U+1F64B U+200D U+2642 U+FE0F",
      utfChar: "🙋‍♂️",
      CLDRShortName: "man raising hand",
    },
    {
      utf8Code: "U+1F64B U+200D U+2640 U+FE0F",
      utfChar: "🙋‍♀️",
      CLDRShortName: "woman raising hand",
    },
    {
      utf8Code: "U+1F9CF",
      utfChar: "🧏",
      CLDRShortName: "deaf person",
    },
    {
      utf8Code: "U+1F9CF U+200D U+2642 U+FE0F",
      utfChar: "🧏‍♂️",
      CLDRShortName: "deaf man",
    },
    {
      utf8Code: "U+1F9CF U+200D U+2640 U+FE0F",
      utfChar: "🧏‍♀️",
      CLDRShortName: "deaf woman",
    },
    {
      utf8Code: "U+1F647",
      utfChar: "🙇",
      CLDRShortName: "person bowing",
    },
    {
      utf8Code: "U+1F647 U+200D U+2642 U+FE0F",
      utfChar: "🙇‍♂️",
      CLDRShortName: "man bowing",
    },
    {
      utf8Code: "U+1F647 U+200D U+2640 U+FE0F",
      utfChar: "🙇‍♀️",
      CLDRShortName: "woman bowing",
    },
    {
      utf8Code: "U+1F926",
      utfChar: "🤦",
      CLDRShortName: "person facepalming",
    },
    {
      utf8Code: "U+1F926 U+200D U+2642 U+FE0F",
      utfChar: "🤦‍♂️",
      CLDRShortName: "man facepalming",
    },
    {
      utf8Code: "U+1F926 U+200D U+2640 U+FE0F",
      utfChar: "🤦‍♀️",
      CLDRShortName: "woman facepalming",
    },
    {
      utf8Code: "U+1F937",
      utfChar: "🤷",
      CLDRShortName: "person shrugging",
    },
    {
      utf8Code: "U+1F937 U+200D U+2642 U+FE0F",
      utfChar: "🤷‍♂️",
      CLDRShortName: "man shrugging",
    },
    {
      utf8Code: "U+1F937 U+200D U+2640 U+FE0F",
      utfChar: "🤷‍♀️",
      CLDRShortName: "woman shrugging",
    },
  ],
  "person-role": [
    {
      utf8Code: "U+1F9D1 U+200D U+2695 U+FE0F",
      utfChar: "🧑‍⚕️",
      CLDRShortName: "health worker",
    },
    {
      utf8Code: "U+1F468 U+200D U+2695 U+FE0F",
      utfChar: "👨‍⚕️",
      CLDRShortName: "man health worker",
    },
    {
      utf8Code: "U+1F469 U+200D U+2695 U+FE0F",
      utfChar: "👩‍⚕️",
      CLDRShortName: "woman health worker",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F393",
      utfChar: "🧑‍🎓",
      CLDRShortName: "student",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F393",
      utfChar: "👨‍🎓",
      CLDRShortName: "man student",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F393",
      utfChar: "👩‍🎓",
      CLDRShortName: "woman student",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F3EB",
      utfChar: "🧑‍🏫",
      CLDRShortName: "teacher",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F3EB",
      utfChar: "👨‍🏫",
      CLDRShortName: "man teacher",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F3EB",
      utfChar: "👩‍🏫",
      CLDRShortName: "woman teacher",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+2696 U+FE0F",
      utfChar: "🧑‍⚖️",
      CLDRShortName: "judge",
    },
    {
      utf8Code: "U+1F468 U+200D U+2696 U+FE0F",
      utfChar: "👨‍⚖️",
      CLDRShortName: "man judge",
    },
    {
      utf8Code: "U+1F469 U+200D U+2696 U+FE0F",
      utfChar: "👩‍⚖️",
      CLDRShortName: "woman judge",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F33E",
      utfChar: "🧑‍🌾",
      CLDRShortName: "farmer",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F33E",
      utfChar: "👨‍🌾",
      CLDRShortName: "man farmer",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F33E",
      utfChar: "👩‍🌾",
      CLDRShortName: "woman farmer",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F373",
      utfChar: "🧑‍🍳",
      CLDRShortName: "cook",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F373",
      utfChar: "👨‍🍳",
      CLDRShortName: "man cook",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F373",
      utfChar: "👩‍🍳",
      CLDRShortName: "woman cook",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F527",
      utfChar: "🧑‍🔧",
      CLDRShortName: "mechanic",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F527",
      utfChar: "👨‍🔧",
      CLDRShortName: "man mechanic",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F527",
      utfChar: "👩‍🔧",
      CLDRShortName: "woman mechanic",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F3ED",
      utfChar: "🧑‍🏭",
      CLDRShortName: "factory worker",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F3ED",
      utfChar: "👨‍🏭",
      CLDRShortName: "man factory worker",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F3ED",
      utfChar: "👩‍🏭",
      CLDRShortName: "woman factory worker",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F4BC",
      utfChar: "🧑‍💼",
      CLDRShortName: "office worker",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F4BC",
      utfChar: "👨‍💼",
      CLDRShortName: "man office worker",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F4BC",
      utfChar: "👩‍💼",
      CLDRShortName: "woman office worker",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F52C",
      utfChar: "🧑‍🔬",
      CLDRShortName: "scientist",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F52C",
      utfChar: "👨‍🔬",
      CLDRShortName: "man scientist",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F52C",
      utfChar: "👩‍🔬",
      CLDRShortName: "woman scientist",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F4BB",
      utfChar: "🧑‍💻",
      CLDRShortName: "technologist",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F4BB",
      utfChar: "👨‍💻",
      CLDRShortName: "man technologist",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F4BB",
      utfChar: "👩‍💻",
      CLDRShortName: "woman technologist",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F3A4",
      utfChar: "🧑‍🎤",
      CLDRShortName: "singer",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F3A4",
      utfChar: "👨‍🎤",
      CLDRShortName: "man singer",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F3A4",
      utfChar: "👩‍🎤",
      CLDRShortName: "woman singer",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F3A8",
      utfChar: "🧑‍🎨",
      CLDRShortName: "artist",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F3A8",
      utfChar: "👨‍🎨",
      CLDRShortName: "man artist",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F3A8",
      utfChar: "👩‍🎨",
      CLDRShortName: "woman artist",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+2708 U+FE0F",
      utfChar: "🧑‍✈️",
      CLDRShortName: "pilot",
    },
    {
      utf8Code: "U+1F468 U+200D U+2708 U+FE0F",
      utfChar: "👨‍✈️",
      CLDRShortName: "man pilot",
    },
    {
      utf8Code: "U+1F469 U+200D U+2708 U+FE0F",
      utfChar: "👩‍✈️",
      CLDRShortName: "woman pilot",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F680",
      utfChar: "🧑‍🚀",
      CLDRShortName: "astronaut",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F680",
      utfChar: "👨‍🚀",
      CLDRShortName: "man astronaut",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F680",
      utfChar: "👩‍🚀",
      CLDRShortName: "woman astronaut",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F692",
      utfChar: "🧑‍🚒",
      CLDRShortName: "firefighter",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F692",
      utfChar: "👨‍🚒",
      CLDRShortName: "man firefighter",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F692",
      utfChar: "👩‍🚒",
      CLDRShortName: "woman firefighter",
    },
    {
      utf8Code: "U+1F46E",
      utfChar: "👮",
      CLDRShortName: "police officer",
    },
    {
      utf8Code: "U+1F46E U+200D U+2642 U+FE0F",
      utfChar: "👮‍♂️",
      CLDRShortName: "man police officer",
    },
    {
      utf8Code: "U+1F46E U+200D U+2640 U+FE0F",
      utfChar: "👮‍♀️",
      CLDRShortName: "woman police officer",
    },
    {
      utf8Code: "U+1F575",
      utfChar: "🕵",
      CLDRShortName: "detective",
    },
    {
      utf8Code: "U+1F575 U+FE0F U+200D U+2642 U+FE0F",
      utfChar: "🕵️‍♂️",
      CLDRShortName: "man detective",
    },
    {
      utf8Code: "U+1F575 U+FE0F U+200D U+2640 U+FE0F",
      utfChar: "🕵️‍♀️",
      CLDRShortName: "woman detective",
    },
    {
      utf8Code: "U+1F482",
      utfChar: "💂",
      CLDRShortName: "guard",
    },
    {
      utf8Code: "U+1F482 U+200D U+2642 U+FE0F",
      utfChar: "💂‍♂️",
      CLDRShortName: "man guard",
    },
    {
      utf8Code: "U+1F482 U+200D U+2640 U+FE0F",
      utfChar: "💂‍♀️",
      CLDRShortName: "woman guard",
    },
    {
      utf8Code: "U+1F977",
      utfChar: "🥷",
      CLDRShortName: "ninja",
    },
    {
      utf8Code: "U+1F477",
      utfChar: "👷",
      CLDRShortName: "construction worker",
    },
    {
      utf8Code: "U+1F477 U+200D U+2642 U+FE0F",
      utfChar: "👷‍♂️",
      CLDRShortName: "man construction worker",
    },
    {
      utf8Code: "U+1F477 U+200D U+2640 U+FE0F",
      utfChar: "👷‍♀️",
      CLDRShortName: "woman construction worker",
    },
    {
      utf8Code: "U+1FAC5",
      utfChar: "🫅",
      CLDRShortName: "⊛ person with crown",
    },
    {
      utf8Code: "U+1F934",
      utfChar: "🤴",
      CLDRShortName: "prince",
    },
    {
      utf8Code: "U+1F478",
      utfChar: "👸",
      CLDRShortName: "princess",
    },
    {
      utf8Code: "U+1F473",
      utfChar: "👳",
      CLDRShortName: "person wearing turban",
    },
    {
      utf8Code: "U+1F473 U+200D U+2642 U+FE0F",
      utfChar: "👳‍♂️",
      CLDRShortName: "man wearing turban",
    },
    {
      utf8Code: "U+1F473 U+200D U+2640 U+FE0F",
      utfChar: "👳‍♀️",
      CLDRShortName: "woman wearing turban",
    },
    {
      utf8Code: "U+1F472",
      utfChar: "👲",
      CLDRShortName: "person with skullcap",
    },
    {
      utf8Code: "U+1F9D5",
      utfChar: "🧕",
      CLDRShortName: "woman with headscarf",
    },
    {
      utf8Code: "U+1F935",
      utfChar: "🤵",
      CLDRShortName: "person in tuxedo",
    },
    {
      utf8Code: "U+1F935 U+200D U+2642 U+FE0F",
      utfChar: "🤵‍♂️",
      CLDRShortName: "man in tuxedo",
    },
    {
      utf8Code: "U+1F935 U+200D U+2640 U+FE0F",
      utfChar: "🤵‍♀️",
      CLDRShortName: "woman in tuxedo",
    },
    {
      utf8Code: "U+1F470",
      utfChar: "👰",
      CLDRShortName: "person with veil",
    },
    {
      utf8Code: "U+1F470 U+200D U+2642 U+FE0F",
      utfChar: "👰‍♂️",
      CLDRShortName: "man with veil",
    },
    {
      utf8Code: "U+1F470 U+200D U+2640 U+FE0F",
      utfChar: "👰‍♀️",
      CLDRShortName: "woman with veil",
    },
    {
      utf8Code: "U+1F930",
      utfChar: "🤰",
      CLDRShortName: "pregnant woman",
    },
    {
      utf8Code: "U+1FAC3",
      utfChar: "🫃",
      CLDRShortName: "⊛ pregnant man",
    },
    {
      utf8Code: "U+1FAC4",
      utfChar: "🫄",
      CLDRShortName: "⊛ pregnant person",
    },
    {
      utf8Code: "U+1F931",
      utfChar: "🤱",
      CLDRShortName: "breast-feeding",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F37C",
      utfChar: "👩‍🍼",
      CLDRShortName: "woman feeding baby",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F37C",
      utfChar: "👨‍🍼",
      CLDRShortName: "man feeding baby",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F37C",
      utfChar: "🧑‍🍼",
      CLDRShortName: "person feeding baby",
    },
  ],
  "person-fantasy": [
    {
      utf8Code: "U+1F47C",
      utfChar: "👼",
      CLDRShortName: "baby angel",
    },
    {
      utf8Code: "U+1F385",
      utfChar: "🎅",
      CLDRShortName: "Santa Claus",
    },
    {
      utf8Code: "U+1F936",
      utfChar: "🤶",
      CLDRShortName: "Mrs. Claus",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F384",
      utfChar: "🧑‍🎄",
      CLDRShortName: "mx claus",
    },
    {
      utf8Code: "U+1F9B8",
      utfChar: "🦸",
      CLDRShortName: "superhero",
    },
    {
      utf8Code: "U+1F9B8 U+200D U+2642 U+FE0F",
      utfChar: "🦸‍♂️",
      CLDRShortName: "man superhero",
    },
    {
      utf8Code: "U+1F9B8 U+200D U+2640 U+FE0F",
      utfChar: "🦸‍♀️",
      CLDRShortName: "woman superhero",
    },
    {
      utf8Code: "U+1F9B9",
      utfChar: "🦹",
      CLDRShortName: "supervillain",
    },
    {
      utf8Code: "U+1F9B9 U+200D U+2642 U+FE0F",
      utfChar: "🦹‍♂️",
      CLDRShortName: "man supervillain",
    },
    {
      utf8Code: "U+1F9B9 U+200D U+2640 U+FE0F",
      utfChar: "🦹‍♀️",
      CLDRShortName: "woman supervillain",
    },
    {
      utf8Code: "U+1F9D9",
      utfChar: "🧙",
      CLDRShortName: "mage",
    },
    {
      utf8Code: "U+1F9D9 U+200D U+2642 U+FE0F",
      utfChar: "🧙‍♂️",
      CLDRShortName: "man mage",
    },
    {
      utf8Code: "U+1F9D9 U+200D U+2640 U+FE0F",
      utfChar: "🧙‍♀️",
      CLDRShortName: "woman mage",
    },
    {
      utf8Code: "U+1F9DA",
      utfChar: "🧚",
      CLDRShortName: "fairy",
    },
    {
      utf8Code: "U+1F9DA U+200D U+2642 U+FE0F",
      utfChar: "🧚‍♂️",
      CLDRShortName: "man fairy",
    },
    {
      utf8Code: "U+1F9DA U+200D U+2640 U+FE0F",
      utfChar: "🧚‍♀️",
      CLDRShortName: "woman fairy",
    },
    {
      utf8Code: "U+1F9DB",
      utfChar: "🧛",
      CLDRShortName: "vampire",
    },
    {
      utf8Code: "U+1F9DB U+200D U+2642 U+FE0F",
      utfChar: "🧛‍♂️",
      CLDRShortName: "man vampire",
    },
    {
      utf8Code: "U+1F9DB U+200D U+2640 U+FE0F",
      utfChar: "🧛‍♀️",
      CLDRShortName: "woman vampire",
    },
    {
      utf8Code: "U+1F9DC",
      utfChar: "🧜",
      CLDRShortName: "merperson",
    },
    {
      utf8Code: "U+1F9DC U+200D U+2642 U+FE0F",
      utfChar: "🧜‍♂️",
      CLDRShortName: "merman",
    },
    {
      utf8Code: "U+1F9DC U+200D U+2640 U+FE0F",
      utfChar: "🧜‍♀️",
      CLDRShortName: "mermaid",
    },
    {
      utf8Code: "U+1F9DD",
      utfChar: "🧝",
      CLDRShortName: "elf",
    },
    {
      utf8Code: "U+1F9DD U+200D U+2642 U+FE0F",
      utfChar: "🧝‍♂️",
      CLDRShortName: "man elf",
    },
    {
      utf8Code: "U+1F9DD U+200D U+2640 U+FE0F",
      utfChar: "🧝‍♀️",
      CLDRShortName: "woman elf",
    },
    {
      utf8Code: "U+1F9DE",
      utfChar: "🧞",
      CLDRShortName: "genie",
    },
    {
      utf8Code: "U+1F9DE U+200D U+2642 U+FE0F",
      utfChar: "🧞‍♂️",
      CLDRShortName: "man genie",
    },
    {
      utf8Code: "U+1F9DE U+200D U+2640 U+FE0F",
      utfChar: "🧞‍♀️",
      CLDRShortName: "woman genie",
    },
    {
      utf8Code: "U+1F9DF",
      utfChar: "🧟",
      CLDRShortName: "zombie",
    },
    {
      utf8Code: "U+1F9DF U+200D U+2642 U+FE0F",
      utfChar: "🧟‍♂️",
      CLDRShortName: "man zombie",
    },
    {
      utf8Code: "U+1F9DF U+200D U+2640 U+FE0F",
      utfChar: "🧟‍♀️",
      CLDRShortName: "woman zombie",
    },
    {
      utf8Code: "U+1F9CC",
      utfChar: "🧌",
      CLDRShortName: "⊛ troll",
    },
  ],
  "person-activity": [
    {
      utf8Code: "U+1F486",
      utfChar: "💆",
      CLDRShortName: "person getting massage",
    },
    {
      utf8Code: "U+1F486 U+200D U+2642 U+FE0F",
      utfChar: "💆‍♂️",
      CLDRShortName: "man getting massage",
    },
    {
      utf8Code: "U+1F486 U+200D U+2640 U+FE0F",
      utfChar: "💆‍♀️",
      CLDRShortName: "woman getting massage",
    },
    {
      utf8Code: "U+1F487",
      utfChar: "💇",
      CLDRShortName: "person getting haircut",
    },
    {
      utf8Code: "U+1F487 U+200D U+2642 U+FE0F",
      utfChar: "💇‍♂️",
      CLDRShortName: "man getting haircut",
    },
    {
      utf8Code: "U+1F487 U+200D U+2640 U+FE0F",
      utfChar: "💇‍♀️",
      CLDRShortName: "woman getting haircut",
    },
    {
      utf8Code: "U+1F6B6",
      utfChar: "🚶",
      CLDRShortName: "person walking",
    },
    {
      utf8Code: "U+1F6B6 U+200D U+2642 U+FE0F",
      utfChar: "🚶‍♂️",
      CLDRShortName: "man walking",
    },
    {
      utf8Code: "U+1F6B6 U+200D U+2640 U+FE0F",
      utfChar: "🚶‍♀️",
      CLDRShortName: "woman walking",
    },
    {
      utf8Code: "U+1F9CD",
      utfChar: "🧍",
      CLDRShortName: "person standing",
    },
    {
      utf8Code: "U+1F9CD U+200D U+2642 U+FE0F",
      utfChar: "🧍‍♂️",
      CLDRShortName: "man standing",
    },
    {
      utf8Code: "U+1F9CD U+200D U+2640 U+FE0F",
      utfChar: "🧍‍♀️",
      CLDRShortName: "woman standing",
    },
    {
      utf8Code: "U+1F9CE",
      utfChar: "🧎",
      CLDRShortName: "person kneeling",
    },
    {
      utf8Code: "U+1F9CE U+200D U+2642 U+FE0F",
      utfChar: "🧎‍♂️",
      CLDRShortName: "man kneeling",
    },
    {
      utf8Code: "U+1F9CE U+200D U+2640 U+FE0F",
      utfChar: "🧎‍♀️",
      CLDRShortName: "woman kneeling",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9AF",
      utfChar: "🧑‍🦯",
      CLDRShortName: "person with white cane",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9AF",
      utfChar: "👨‍🦯",
      CLDRShortName: "man with white cane",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9AF",
      utfChar: "👩‍🦯",
      CLDRShortName: "woman with white cane",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9BC",
      utfChar: "🧑‍🦼",
      CLDRShortName: "person in motorized wheelchair",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9BC",
      utfChar: "👨‍🦼",
      CLDRShortName: "man in motorized wheelchair",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9BC",
      utfChar: "👩‍🦼",
      CLDRShortName: "woman in motorized wheelchair",
    },
    {
      utf8Code: "U+1F9D1 U+200D U+1F9BD",
      utfChar: "🧑‍🦽",
      CLDRShortName: "person in manual wheelchair",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F9BD",
      utfChar: "👨‍🦽",
      CLDRShortName: "man in manual wheelchair",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F9BD",
      utfChar: "👩‍🦽",
      CLDRShortName: "woman in manual wheelchair",
    },
    {
      utf8Code: "U+1F3C3",
      utfChar: "🏃",
      CLDRShortName: "person running",
    },
    {
      utf8Code: "U+1F3C3 U+200D U+2642 U+FE0F",
      utfChar: "🏃‍♂️",
      CLDRShortName: "man running",
    },
    {
      utf8Code: "U+1F3C3 U+200D U+2640 U+FE0F",
      utfChar: "🏃‍♀️",
      CLDRShortName: "woman running",
    },
    {
      utf8Code: "U+1F483",
      utfChar: "💃",
      CLDRShortName: "woman dancing",
    },
    {
      utf8Code: "U+1F57A",
      utfChar: "🕺",
      CLDRShortName: "man dancing",
    },
    {
      utf8Code: "U+1F574",
      utfChar: "🕴",
      CLDRShortName: "person in suit levitating",
    },
    {
      utf8Code: "U+1F46F",
      utfChar: "👯",
      CLDRShortName: "people with bunny ears",
    },
    {
      utf8Code: "U+1F46F U+200D U+2642 U+FE0F",
      utfChar: "👯‍♂️",
      CLDRShortName: "men with bunny ears",
    },
    {
      utf8Code: "U+1F46F U+200D U+2640 U+FE0F",
      utfChar: "👯‍♀️",
      CLDRShortName: "women with bunny ears",
    },
    {
      utf8Code: "U+1F9D6",
      utfChar: "🧖",
      CLDRShortName: "person in steamy room",
    },
    {
      utf8Code: "U+1F9D6 U+200D U+2642 U+FE0F",
      utfChar: "🧖‍♂️",
      CLDRShortName: "man in steamy room",
    },
    {
      utf8Code: "U+1F9D6 U+200D U+2640 U+FE0F",
      utfChar: "🧖‍♀️",
      CLDRShortName: "woman in steamy room",
    },
    {
      utf8Code: "U+1F9D7",
      utfChar: "🧗",
      CLDRShortName: "person climbing",
    },
    {
      utf8Code: "U+1F9D7 U+200D U+2642 U+FE0F",
      utfChar: "🧗‍♂️",
      CLDRShortName: "man climbing",
    },
    {
      utf8Code: "U+1F9D7 U+200D U+2640 U+FE0F",
      utfChar: "🧗‍♀️",
      CLDRShortName: "woman climbing",
    },
  ],
  "person-sport": [
    {
      utf8Code: "U+1F93A",
      utfChar: "🤺",
      CLDRShortName: "person fencing",
    },
    {
      utf8Code: "U+1F3C7",
      utfChar: "🏇",
      CLDRShortName: "horse racing",
    },
    {
      utf8Code: "U+26F7",
      utfChar: "⛷",
      CLDRShortName: "skier",
    },
    {
      utf8Code: "U+1F3C2",
      utfChar: "🏂",
      CLDRShortName: "snowboarder",
    },
    {
      utf8Code: "U+1F3CC",
      utfChar: "🏌",
      CLDRShortName: "person golfing",
    },
    {
      utf8Code: "U+1F3CC U+FE0F U+200D U+2642 U+FE0F",
      utfChar: "🏌️‍♂️",
      CLDRShortName: "man golfing",
    },
    {
      utf8Code: "U+1F3CC U+FE0F U+200D U+2640 U+FE0F",
      utfChar: "🏌️‍♀️",
      CLDRShortName: "woman golfing",
    },
    {
      utf8Code: "U+1F3C4",
      utfChar: "🏄",
      CLDRShortName: "person surfing",
    },
    {
      utf8Code: "U+1F3C4 U+200D U+2642 U+FE0F",
      utfChar: "🏄‍♂️",
      CLDRShortName: "man surfing",
    },
    {
      utf8Code: "U+1F3C4 U+200D U+2640 U+FE0F",
      utfChar: "🏄‍♀️",
      CLDRShortName: "woman surfing",
    },
    {
      utf8Code: "U+1F6A3",
      utfChar: "🚣",
      CLDRShortName: "person rowing boat",
    },
    {
      utf8Code: "U+1F6A3 U+200D U+2642 U+FE0F",
      utfChar: "🚣‍♂️",
      CLDRShortName: "man rowing boat",
    },
    {
      utf8Code: "U+1F6A3 U+200D U+2640 U+FE0F",
      utfChar: "🚣‍♀️",
      CLDRShortName: "woman rowing boat",
    },
    {
      utf8Code: "U+1F3CA",
      utfChar: "🏊",
      CLDRShortName: "person swimming",
    },
    {
      utf8Code: "U+1F3CA U+200D U+2642 U+FE0F",
      utfChar: "🏊‍♂️",
      CLDRShortName: "man swimming",
    },
    {
      utf8Code: "U+1F3CA U+200D U+2640 U+FE0F",
      utfChar: "🏊‍♀️",
      CLDRShortName: "woman swimming",
    },
    {
      utf8Code: "U+26F9",
      utfChar: "⛹",
      CLDRShortName: "person bouncing ball",
    },
    {
      utf8Code: "U+26F9 U+FE0F U+200D U+2642 U+FE0F",
      utfChar: "⛹️‍♂️",
      CLDRShortName: "man bouncing ball",
    },
    {
      utf8Code: "U+26F9 U+FE0F U+200D U+2640 U+FE0F",
      utfChar: "⛹️‍♀️",
      CLDRShortName: "woman bouncing ball",
    },
    {
      utf8Code: "U+1F3CB",
      utfChar: "🏋",
      CLDRShortName: "person lifting weights",
    },
    {
      utf8Code: "U+1F3CB U+FE0F U+200D U+2642 U+FE0F",
      utfChar: "🏋️‍♂️",
      CLDRShortName: "man lifting weights",
    },
    {
      utf8Code: "U+1F3CB U+FE0F U+200D U+2640 U+FE0F",
      utfChar: "🏋️‍♀️",
      CLDRShortName: "woman lifting weights",
    },
    {
      utf8Code: "U+1F6B4",
      utfChar: "🚴",
      CLDRShortName: "person biking",
    },
    {
      utf8Code: "U+1F6B4 U+200D U+2642 U+FE0F",
      utfChar: "🚴‍♂️",
      CLDRShortName: "man biking",
    },
    {
      utf8Code: "U+1F6B4 U+200D U+2640 U+FE0F",
      utfChar: "🚴‍♀️",
      CLDRShortName: "woman biking",
    },
    {
      utf8Code: "U+1F6B5",
      utfChar: "🚵",
      CLDRShortName: "person mountain biking",
    },
    {
      utf8Code: "U+1F6B5 U+200D U+2642 U+FE0F",
      utfChar: "🚵‍♂️",
      CLDRShortName: "man mountain biking",
    },
    {
      utf8Code: "U+1F6B5 U+200D U+2640 U+FE0F",
      utfChar: "🚵‍♀️",
      CLDRShortName: "woman mountain biking",
    },
    {
      utf8Code: "U+1F938",
      utfChar: "🤸",
      CLDRShortName: "person cartwheeling",
    },
    {
      utf8Code: "U+1F938 U+200D U+2642 U+FE0F",
      utfChar: "🤸‍♂️",
      CLDRShortName: "man cartwheeling",
    },
    {
      utf8Code: "U+1F938 U+200D U+2640 U+FE0F",
      utfChar: "🤸‍♀️",
      CLDRShortName: "woman cartwheeling",
    },
    {
      utf8Code: "U+1F93C",
      utfChar: "🤼",
      CLDRShortName: "people wrestling",
    },
    {
      utf8Code: "U+1F93C U+200D U+2642 U+FE0F",
      utfChar: "🤼‍♂️",
      CLDRShortName: "men wrestling",
    },
    {
      utf8Code: "U+1F93C U+200D U+2640 U+FE0F",
      utfChar: "🤼‍♀️",
      CLDRShortName: "women wrestling",
    },
    {
      utf8Code: "U+1F93D",
      utfChar: "🤽",
      CLDRShortName: "person playing water polo",
    },
    {
      utf8Code: "U+1F93D U+200D U+2642 U+FE0F",
      utfChar: "🤽‍♂️",
      CLDRShortName: "man playing water polo",
    },
    {
      utf8Code: "U+1F93D U+200D U+2640 U+FE0F",
      utfChar: "🤽‍♀️",
      CLDRShortName: "woman playing water polo",
    },
    {
      utf8Code: "U+1F93E",
      utfChar: "🤾",
      CLDRShortName: "person playing handball",
    },
    {
      utf8Code: "U+1F93E U+200D U+2642 U+FE0F",
      utfChar: "🤾‍♂️",
      CLDRShortName: "man playing handball",
    },
    {
      utf8Code: "U+1F93E U+200D U+2640 U+FE0F",
      utfChar: "🤾‍♀️",
      CLDRShortName: "woman playing handball",
    },
    {
      utf8Code: "U+1F939",
      utfChar: "🤹",
      CLDRShortName: "person juggling",
    },
    {
      utf8Code: "U+1F939 U+200D U+2642 U+FE0F",
      utfChar: "🤹‍♂️",
      CLDRShortName: "man juggling",
    },
    {
      utf8Code: "U+1F939 U+200D U+2640 U+FE0F",
      utfChar: "🤹‍♀️",
      CLDRShortName: "woman juggling",
    },
  ],
  "person-resting": [
    {
      utf8Code: "U+1F9D8",
      utfChar: "🧘",
      CLDRShortName: "person in lotus position",
    },
    {
      utf8Code: "U+1F9D8 U+200D U+2642 U+FE0F",
      utfChar: "🧘‍♂️",
      CLDRShortName: "man in lotus position",
    },
    {
      utf8Code: "U+1F9D8 U+200D U+2640 U+FE0F",
      utfChar: "🧘‍♀️",
      CLDRShortName: "woman in lotus position",
    },
    {
      utf8Code: "U+1F6C0",
      utfChar: "🛀",
      CLDRShortName: "person taking bath",
    },
    {
      utf8Code: "U+1F6CC",
      utfChar: "🛌",
      CLDRShortName: "person in bed",
    },
  ],
  family: [
    {
      utf8Code: "U+1F9D1 U+200D U+1F91D U+200D U+1F9D1",
      utfChar: "🧑‍🤝‍🧑",
      CLDRShortName: "people holding hands",
    },
    {
      utf8Code: "U+1F46D",
      utfChar: "👭",
      CLDRShortName: "women holding hands",
    },
    {
      utf8Code: "U+1F46B",
      utfChar: "👫",
      CLDRShortName: "woman and man holding hands",
    },
    {
      utf8Code: "U+1F46C",
      utfChar: "👬",
      CLDRShortName: "men holding hands",
    },
    {
      utf8Code: "U+1F48F",
      utfChar: "💏",
      CLDRShortName: "kiss",
    },
    {
      utf8Code: "U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468",
      utfChar: "👩‍❤️‍💋‍👨",
      CLDRShortName: "kiss: woman, man",
    },
    {
      utf8Code: "U+1F468 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468",
      utfChar: "👨‍❤️‍💋‍👨",
      CLDRShortName: "kiss: man, man",
    },
    {
      utf8Code: "U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F469",
      utfChar: "👩‍❤️‍💋‍👩",
      CLDRShortName: "kiss: woman, woman",
    },
    {
      utf8Code: "U+1F491",
      utfChar: "💑",
      CLDRShortName: "couple with heart",
    },
    {
      utf8Code: "U+1F469 U+200D U+2764 U+FE0F U+200D U+1F468",
      utfChar: "👩‍❤️‍👨",
      CLDRShortName: "couple with heart: woman, man",
    },
    {
      utf8Code: "U+1F468 U+200D U+2764 U+FE0F U+200D U+1F468",
      utfChar: "👨‍❤️‍👨",
      CLDRShortName: "couple with heart: man, man",
    },
    {
      utf8Code: "U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469",
      utfChar: "👩‍❤️‍👩",
      CLDRShortName: "couple with heart: woman, woman",
    },
    {
      utf8Code: "U+1F46A",
      utfChar: "👪",
      CLDRShortName: "family",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F469 U+200D U+1F466",
      utfChar: "👨‍👩‍👦",
      CLDRShortName: "family: man, woman, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F469 U+200D U+1F467",
      utfChar: "👨‍👩‍👧",
      CLDRShortName: "family: man, woman, girl",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466",
      utfChar: "👨‍👩‍👧‍👦",
      CLDRShortName: "family: man, woman, girl, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466",
      utfChar: "👨‍👩‍👦‍👦",
      CLDRShortName: "family: man, woman, boy, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467",
      utfChar: "👨‍👩‍👧‍👧",
      CLDRShortName: "family: man, woman, girl, girl",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F468 U+200D U+1F466",
      utfChar: "👨‍👨‍👦",
      CLDRShortName: "family: man, man, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F468 U+200D U+1F467",
      utfChar: "👨‍👨‍👧",
      CLDRShortName: "family: man, man, girl",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466",
      utfChar: "👨‍👨‍👧‍👦",
      CLDRShortName: "family: man, man, girl, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F468 U+200D U+1F466 U+200D U+1F466",
      utfChar: "👨‍👨‍👦‍👦",
      CLDRShortName: "family: man, man, boy, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F467",
      utfChar: "👨‍👨‍👧‍👧",
      CLDRShortName: "family: man, man, girl, girl",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F469 U+200D U+1F466",
      utfChar: "👩‍👩‍👦",
      CLDRShortName: "family: woman, woman, boy",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F469 U+200D U+1F467",
      utfChar: "👩‍👩‍👧",
      CLDRShortName: "family: woman, woman, girl",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466",
      utfChar: "👩‍👩‍👧‍👦",
      CLDRShortName: "family: woman, woman, girl, boy",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466",
      utfChar: "👩‍👩‍👦‍👦",
      CLDRShortName: "family: woman, woman, boy, boy",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467",
      utfChar: "👩‍👩‍👧‍👧",
      CLDRShortName: "family: woman, woman, girl, girl",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F466",
      utfChar: "👨‍👦",
      CLDRShortName: "family: man, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F466 U+200D U+1F466",
      utfChar: "👨‍👦‍👦",
      CLDRShortName: "family: man, boy, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F467",
      utfChar: "👨‍👧",
      CLDRShortName: "family: man, girl",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F467 U+200D U+1F466",
      utfChar: "👨‍👧‍👦",
      CLDRShortName: "family: man, girl, boy",
    },
    {
      utf8Code: "U+1F468 U+200D U+1F467 U+200D U+1F467",
      utfChar: "👨‍👧‍👧",
      CLDRShortName: "family: man, girl, girl",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F466",
      utfChar: "👩‍👦",
      CLDRShortName: "family: woman, boy",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F466 U+200D U+1F466",
      utfChar: "👩‍👦‍👦",
      CLDRShortName: "family: woman, boy, boy",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F467",
      utfChar: "👩‍👧",
      CLDRShortName: "family: woman, girl",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F467 U+200D U+1F466",
      utfChar: "👩‍👧‍👦",
      CLDRShortName: "family: woman, girl, boy",
    },
    {
      utf8Code: "U+1F469 U+200D U+1F467 U+200D U+1F467",
      utfChar: "👩‍👧‍👧",
      CLDRShortName: "family: woman, girl, girl",
    },
  ],
  "person-symbol": [
    {
      utf8Code: "U+1F5E3",
      utfChar: "🗣",
      CLDRShortName: "speaking head",
    },
    {
      utf8Code: "U+1F464",
      utfChar: "👤",
      CLDRShortName: "bust in silhouette",
    },
    {
      utf8Code: "U+1F465",
      utfChar: "👥",
      CLDRShortName: "busts in silhouette",
    },
    {
      utf8Code: "U+1FAC2",
      utfChar: "🫂",
      CLDRShortName: "people hugging",
    },
    {
      utf8Code: "U+1F463",
      utfChar: "👣",
      CLDRShortName: "footprints",
    },
  ],
  "hair-style": [
    {
      utf8Code: "U+1F9B0",
      utfChar: "🦰",
      CLDRShortName: "red hair",
    },
    {
      utf8Code: "U+1F9B1",
      utfChar: "🦱",
      CLDRShortName: "curly hair",
    },
    {
      utf8Code: "U+1F9B3",
      utfChar: "🦳",
      CLDRShortName: "white hair",
    },
    {
      utf8Code: "U+1F9B2",
      utfChar: "🦲",
      CLDRShortName: "bald",
    },
  ],
  "animal-mammal": [
    {
      utf8Code: "U+1F435",
      utfChar: "🐵",
      CLDRShortName: "monkey face",
    },
    {
      utf8Code: "U+1F412",
      utfChar: "🐒",
      CLDRShortName: "monkey",
    },
    {
      utf8Code: "U+1F98D",
      utfChar: "🦍",
      CLDRShortName: "gorilla",
    },
    {
      utf8Code: "U+1F9A7",
      utfChar: "🦧",
      CLDRShortName: "orangutan",
    },
    {
      utf8Code: "U+1F436",
      utfChar: "🐶",
      CLDRShortName: "dog face",
    },
    {
      utf8Code: "U+1F415",
      utfChar: "🐕",
      CLDRShortName: "dog",
    },
    {
      utf8Code: "U+1F9AE",
      utfChar: "🦮",
      CLDRShortName: "guide dog",
    },
    {
      utf8Code: "U+1F415 U+200D U+1F9BA",
      utfChar: "🐕‍🦺",
      CLDRShortName: "service dog",
    },
    {
      utf8Code: "U+1F429",
      utfChar: "🐩",
      CLDRShortName: "poodle",
    },
    {
      utf8Code: "U+1F43A",
      utfChar: "🐺",
      CLDRShortName: "wolf",
    },
    {
      utf8Code: "U+1F98A",
      utfChar: "🦊",
      CLDRShortName: "fox",
    },
    {
      utf8Code: "U+1F99D",
      utfChar: "🦝",
      CLDRShortName: "raccoon",
    },
    {
      utf8Code: "U+1F431",
      utfChar: "🐱",
      CLDRShortName: "cat face",
    },
    {
      utf8Code: "U+1F408",
      utfChar: "🐈",
      CLDRShortName: "cat",
    },
    {
      utf8Code: "U+1F408 U+200D U+2B1B",
      utfChar: "🐈‍⬛",
      CLDRShortName: "black cat",
    },
    {
      utf8Code: "U+1F981",
      utfChar: "🦁",
      CLDRShortName: "lion",
    },
    {
      utf8Code: "U+1F42F",
      utfChar: "🐯",
      CLDRShortName: "tiger face",
    },
    {
      utf8Code: "U+1F405",
      utfChar: "🐅",
      CLDRShortName: "tiger",
    },
    {
      utf8Code: "U+1F406",
      utfChar: "🐆",
      CLDRShortName: "leopard",
    },
    {
      utf8Code: "U+1F434",
      utfChar: "🐴",
      CLDRShortName: "horse face",
    },
    {
      utf8Code: "U+1F40E",
      utfChar: "🐎",
      CLDRShortName: "horse",
    },
    {
      utf8Code: "U+1F984",
      utfChar: "🦄",
      CLDRShortName: "unicorn",
    },
    {
      utf8Code: "U+1F993",
      utfChar: "🦓",
      CLDRShortName: "zebra",
    },
    {
      utf8Code: "U+1F98C",
      utfChar: "🦌",
      CLDRShortName: "deer",
    },
    {
      utf8Code: "U+1F9AC",
      utfChar: "🦬",
      CLDRShortName: "bison",
    },
    {
      utf8Code: "U+1F42E",
      utfChar: "🐮",
      CLDRShortName: "cow face",
    },
    {
      utf8Code: "U+1F402",
      utfChar: "🐂",
      CLDRShortName: "ox",
    },
    {
      utf8Code: "U+1F403",
      utfChar: "🐃",
      CLDRShortName: "water buffalo",
    },
    {
      utf8Code: "U+1F404",
      utfChar: "🐄",
      CLDRShortName: "cow",
    },
    {
      utf8Code: "U+1F437",
      utfChar: "🐷",
      CLDRShortName: "pig face",
    },
    {
      utf8Code: "U+1F416",
      utfChar: "🐖",
      CLDRShortName: "pig",
    },
    {
      utf8Code: "U+1F417",
      utfChar: "🐗",
      CLDRShortName: "boar",
    },
    {
      utf8Code: "U+1F43D",
      utfChar: "🐽",
      CLDRShortName: "pig nose",
    },
    {
      utf8Code: "U+1F40F",
      utfChar: "🐏",
      CLDRShortName: "ram",
    },
    {
      utf8Code: "U+1F411",
      utfChar: "🐑",
      CLDRShortName: "ewe",
    },
    {
      utf8Code: "U+1F410",
      utfChar: "🐐",
      CLDRShortName: "goat",
    },
    {
      utf8Code: "U+1F42A",
      utfChar: "🐪",
      CLDRShortName: "camel",
    },
    {
      utf8Code: "U+1F42B",
      utfChar: "🐫",
      CLDRShortName: "two-hump camel",
    },
    {
      utf8Code: "U+1F999",
      utfChar: "🦙",
      CLDRShortName: "llama",
    },
    {
      utf8Code: "U+1F992",
      utfChar: "🦒",
      CLDRShortName: "giraffe",
    },
    {
      utf8Code: "U+1F418",
      utfChar: "🐘",
      CLDRShortName: "elephant",
    },
    {
      utf8Code: "U+1F9A3",
      utfChar: "🦣",
      CLDRShortName: "mammoth",
    },
    {
      utf8Code: "U+1F98F",
      utfChar: "🦏",
      CLDRShortName: "rhinoceros",
    },
    {
      utf8Code: "U+1F99B",
      utfChar: "🦛",
      CLDRShortName: "hippopotamus",
    },
    {
      utf8Code: "U+1F42D",
      utfChar: "🐭",
      CLDRShortName: "mouse face",
    },
    {
      utf8Code: "U+1F401",
      utfChar: "🐁",
      CLDRShortName: "mouse",
    },
    {
      utf8Code: "U+1F400",
      utfChar: "🐀",
      CLDRShortName: "rat",
    },
    {
      utf8Code: "U+1F439",
      utfChar: "🐹",
      CLDRShortName: "hamster",
    },
    {
      utf8Code: "U+1F430",
      utfChar: "🐰",
      CLDRShortName: "rabbit face",
    },
    {
      utf8Code: "U+1F407",
      utfChar: "🐇",
      CLDRShortName: "rabbit",
    },
    {
      utf8Code: "U+1F43F",
      utfChar: "🐿",
      CLDRShortName: "chipmunk",
    },
    {
      utf8Code: "U+1F9AB",
      utfChar: "🦫",
      CLDRShortName: "beaver",
    },
    {
      utf8Code: "U+1F994",
      utfChar: "🦔",
      CLDRShortName: "hedgehog",
    },
    {
      utf8Code: "U+1F987",
      utfChar: "🦇",
      CLDRShortName: "bat",
    },
    {
      utf8Code: "U+1F43B",
      utfChar: "🐻",
      CLDRShortName: "bear",
    },
    {
      utf8Code: "U+1F43B U+200D U+2744 U+FE0F",
      utfChar: "🐻‍❄️",
      CLDRShortName: "polar bear",
    },
    {
      utf8Code: "U+1F428",
      utfChar: "🐨",
      CLDRShortName: "koala",
    },
    {
      utf8Code: "U+1F43C",
      utfChar: "🐼",
      CLDRShortName: "panda",
    },
    {
      utf8Code: "U+1F9A5",
      utfChar: "🦥",
      CLDRShortName: "sloth",
    },
    {
      utf8Code: "U+1F9A6",
      utfChar: "🦦",
      CLDRShortName: "otter",
    },
    {
      utf8Code: "U+1F9A8",
      utfChar: "🦨",
      CLDRShortName: "skunk",
    },
    {
      utf8Code: "U+1F998",
      utfChar: "🦘",
      CLDRShortName: "kangaroo",
    },
    {
      utf8Code: "U+1F9A1",
      utfChar: "🦡",
      CLDRShortName: "badger",
    },
    {
      utf8Code: "U+1F43E",
      utfChar: "🐾",
      CLDRShortName: "paw prints",
    },
  ],
  "animal-bird": [
    {
      utf8Code: "U+1F983",
      utfChar: "🦃",
      CLDRShortName: "turkey",
    },
    {
      utf8Code: "U+1F414",
      utfChar: "🐔",
      CLDRShortName: "chicken",
    },
    {
      utf8Code: "U+1F413",
      utfChar: "🐓",
      CLDRShortName: "rooster",
    },
    {
      utf8Code: "U+1F423",
      utfChar: "🐣",
      CLDRShortName: "hatching chick",
    },
    {
      utf8Code: "U+1F424",
      utfChar: "🐤",
      CLDRShortName: "baby chick",
    },
    {
      utf8Code: "U+1F425",
      utfChar: "🐥",
      CLDRShortName: "front-facing baby chick",
    },
    {
      utf8Code: "U+1F426",
      utfChar: "🐦",
      CLDRShortName: "bird",
    },
    {
      utf8Code: "U+1F427",
      utfChar: "🐧",
      CLDRShortName: "penguin",
    },
    {
      utf8Code: "U+1F54A",
      utfChar: "🕊",
      CLDRShortName: "dove",
    },
    {
      utf8Code: "U+1F985",
      utfChar: "🦅",
      CLDRShortName: "eagle",
    },
    {
      utf8Code: "U+1F986",
      utfChar: "🦆",
      CLDRShortName: "duck",
    },
    {
      utf8Code: "U+1F9A2",
      utfChar: "🦢",
      CLDRShortName: "swan",
    },
    {
      utf8Code: "U+1F989",
      utfChar: "🦉",
      CLDRShortName: "owl",
    },
    {
      utf8Code: "U+1F9A4",
      utfChar: "🦤",
      CLDRShortName: "dodo",
    },
    {
      utf8Code: "U+1FAB6",
      utfChar: "🪶",
      CLDRShortName: "feather",
    },
    {
      utf8Code: "U+1F9A9",
      utfChar: "🦩",
      CLDRShortName: "flamingo",
    },
    {
      utf8Code: "U+1F99A",
      utfChar: "🦚",
      CLDRShortName: "peacock",
    },
    {
      utf8Code: "U+1F99C",
      utfChar: "🦜",
      CLDRShortName: "parrot",
    },
  ],
  "animal-amphibian": [
    {
      utf8Code: "U+1F438",
      utfChar: "🐸",
      CLDRShortName: "frog",
    },
  ],
  "animal-reptile": [
    {
      utf8Code: "U+1F40A",
      utfChar: "🐊",
      CLDRShortName: "crocodile",
    },
    {
      utf8Code: "U+1F422",
      utfChar: "🐢",
      CLDRShortName: "turtle",
    },
    {
      utf8Code: "U+1F98E",
      utfChar: "🦎",
      CLDRShortName: "lizard",
    },
    {
      utf8Code: "U+1F40D",
      utfChar: "🐍",
      CLDRShortName: "snake",
    },
    {
      utf8Code: "U+1F432",
      utfChar: "🐲",
      CLDRShortName: "dragon face",
    },
    {
      utf8Code: "U+1F409",
      utfChar: "🐉",
      CLDRShortName: "dragon",
    },
    {
      utf8Code: "U+1F995",
      utfChar: "🦕",
      CLDRShortName: "sauropod",
    },
    {
      utf8Code: "U+1F996",
      utfChar: "🦖",
      CLDRShortName: "T-Rex",
    },
  ],
  "animal-marine": [
    {
      utf8Code: "U+1F433",
      utfChar: "🐳",
      CLDRShortName: "spouting whale",
    },
    {
      utf8Code: "U+1F40B",
      utfChar: "🐋",
      CLDRShortName: "whale",
    },
    {
      utf8Code: "U+1F42C",
      utfChar: "🐬",
      CLDRShortName: "dolphin",
    },
    {
      utf8Code: "U+1F9AD",
      utfChar: "🦭",
      CLDRShortName: "seal",
    },
    {
      utf8Code: "U+1F41F",
      utfChar: "🐟",
      CLDRShortName: "fish",
    },
    {
      utf8Code: "U+1F420",
      utfChar: "🐠",
      CLDRShortName: "tropical fish",
    },
    {
      utf8Code: "U+1F421",
      utfChar: "🐡",
      CLDRShortName: "blowfish",
    },
    {
      utf8Code: "U+1F988",
      utfChar: "🦈",
      CLDRShortName: "shark",
    },
    {
      utf8Code: "U+1F419",
      utfChar: "🐙",
      CLDRShortName: "octopus",
    },
    {
      utf8Code: "U+1F41A",
      utfChar: "🐚",
      CLDRShortName: "spiral shell",
    },
    {
      utf8Code: "U+1FAB8",
      utfChar: "🪸",
      CLDRShortName: "⊛ coral",
    },
  ],
  "animal-bug": [
    {
      utf8Code: "U+1F40C",
      utfChar: "🐌",
      CLDRShortName: "snail",
    },
    {
      utf8Code: "U+1F98B",
      utfChar: "🦋",
      CLDRShortName: "butterfly",
    },
    {
      utf8Code: "U+1F41B",
      utfChar: "🐛",
      CLDRShortName: "bug",
    },
    {
      utf8Code: "U+1F41C",
      utfChar: "🐜",
      CLDRShortName: "ant",
    },
    {
      utf8Code: "U+1F41D",
      utfChar: "🐝",
      CLDRShortName: "honeybee",
    },
    {
      utf8Code: "U+1FAB2",
      utfChar: "🪲",
      CLDRShortName: "beetle",
    },
    {
      utf8Code: "U+1F41E",
      utfChar: "🐞",
      CLDRShortName: "lady beetle",
    },
    {
      utf8Code: "U+1F997",
      utfChar: "🦗",
      CLDRShortName: "cricket",
    },
    {
      utf8Code: "U+1FAB3",
      utfChar: "🪳",
      CLDRShortName: "cockroach",
    },
    {
      utf8Code: "U+1F577",
      utfChar: "🕷",
      CLDRShortName: "spider",
    },
    {
      utf8Code: "U+1F578",
      utfChar: "🕸",
      CLDRShortName: "spider web",
    },
    {
      utf8Code: "U+1F982",
      utfChar: "🦂",
      CLDRShortName: "scorpion",
    },
    {
      utf8Code: "U+1F99F",
      utfChar: "🦟",
      CLDRShortName: "mosquito",
    },
    {
      utf8Code: "U+1FAB0",
      utfChar: "🪰",
      CLDRShortName: "fly",
    },
    {
      utf8Code: "U+1FAB1",
      utfChar: "🪱",
      CLDRShortName: "worm",
    },
    {
      utf8Code: "U+1F9A0",
      utfChar: "🦠",
      CLDRShortName: "microbe",
    },
  ],
  "plant-flower": [
    {
      utf8Code: "U+1F490",
      utfChar: "💐",
      CLDRShortName: "bouquet",
    },
    {
      utf8Code: "U+1F338",
      utfChar: "🌸",
      CLDRShortName: "cherry blossom",
    },
    {
      utf8Code: "U+1F4AE",
      utfChar: "💮",
      CLDRShortName: "white flower",
    },
    {
      utf8Code: "U+1FAB7",
      utfChar: "🪷",
      CLDRShortName: "⊛ lotus",
    },
    {
      utf8Code: "U+1F3F5",
      utfChar: "🏵",
      CLDRShortName: "rosette",
    },
    {
      utf8Code: "U+1F339",
      utfChar: "🌹",
      CLDRShortName: "rose",
    },
    {
      utf8Code: "U+1F940",
      utfChar: "🥀",
      CLDRShortName: "wilted flower",
    },
    {
      utf8Code: "U+1F33A",
      utfChar: "🌺",
      CLDRShortName: "hibiscus",
    },
    {
      utf8Code: "U+1F33B",
      utfChar: "🌻",
      CLDRShortName: "sunflower",
    },
    {
      utf8Code: "U+1F33C",
      utfChar: "🌼",
      CLDRShortName: "blossom",
    },
    {
      utf8Code: "U+1F337",
      utfChar: "🌷",
      CLDRShortName: "tulip",
    },
  ],
  "plant-other": [
    {
      utf8Code: "U+1F331",
      utfChar: "🌱",
      CLDRShortName: "seedling",
    },
    {
      utf8Code: "U+1FAB4",
      utfChar: "🪴",
      CLDRShortName: "potted plant",
    },
    {
      utf8Code: "U+1F332",
      utfChar: "🌲",
      CLDRShortName: "evergreen tree",
    },
    {
      utf8Code: "U+1F333",
      utfChar: "🌳",
      CLDRShortName: "deciduous tree",
    },
    {
      utf8Code: "U+1F334",
      utfChar: "🌴",
      CLDRShortName: "palm tree",
    },
    {
      utf8Code: "U+1F335",
      utfChar: "🌵",
      CLDRShortName: "cactus",
    },
    {
      utf8Code: "U+1F33E",
      utfChar: "🌾",
      CLDRShortName: "sheaf of rice",
    },
    {
      utf8Code: "U+1F33F",
      utfChar: "🌿",
      CLDRShortName: "herb",
    },
    {
      utf8Code: "U+2618",
      utfChar: "☘",
      CLDRShortName: "shamrock",
    },
    {
      utf8Code: "U+1F340",
      utfChar: "🍀",
      CLDRShortName: "four leaf clover",
    },
    {
      utf8Code: "U+1F341",
      utfChar: "🍁",
      CLDRShortName: "maple leaf",
    },
    {
      utf8Code: "U+1F342",
      utfChar: "🍂",
      CLDRShortName: "fallen leaf",
    },
    {
      utf8Code: "U+1F343",
      utfChar: "🍃",
      CLDRShortName: "leaf fluttering in wind",
    },
    {
      utf8Code: "U+1FAB9",
      utfChar: "🪹",
      CLDRShortName: "⊛ empty nest",
    },
    {
      utf8Code: "U+1FABA",
      utfChar: "🪺",
      CLDRShortName: "⊛ nest with eggs",
    },
  ],
  "food-fruit": [
    {
      utf8Code: "U+1F347",
      utfChar: "🍇",
      CLDRShortName: "grapes",
    },
    {
      utf8Code: "U+1F348",
      utfChar: "🍈",
      CLDRShortName: "melon",
    },
    {
      utf8Code: "U+1F349",
      utfChar: "🍉",
      CLDRShortName: "watermelon",
    },
    {
      utf8Code: "U+1F34A",
      utfChar: "🍊",
      CLDRShortName: "tangerine",
    },
    {
      utf8Code: "U+1F34B",
      utfChar: "🍋",
      CLDRShortName: "lemon",
    },
    {
      utf8Code: "U+1F34C",
      utfChar: "🍌",
      CLDRShortName: "banana",
    },
    {
      utf8Code: "U+1F34D",
      utfChar: "🍍",
      CLDRShortName: "pineapple",
    },
    {
      utf8Code: "U+1F96D",
      utfChar: "🥭",
      CLDRShortName: "mango",
    },
    {
      utf8Code: "U+1F34E",
      utfChar: "🍎",
      CLDRShortName: "red apple",
    },
    {
      utf8Code: "U+1F34F",
      utfChar: "🍏",
      CLDRShortName: "green apple",
    },
    {
      utf8Code: "U+1F350",
      utfChar: "🍐",
      CLDRShortName: "pear",
    },
    {
      utf8Code: "U+1F351",
      utfChar: "🍑",
      CLDRShortName: "peach",
    },
    {
      utf8Code: "U+1F352",
      utfChar: "🍒",
      CLDRShortName: "cherries",
    },
    {
      utf8Code: "U+1F353",
      utfChar: "🍓",
      CLDRShortName: "strawberry",
    },
    {
      utf8Code: "U+1FAD0",
      utfChar: "🫐",
      CLDRShortName: "blueberries",
    },
    {
      utf8Code: "U+1F95D",
      utfChar: "🥝",
      CLDRShortName: "kiwi fruit",
    },
    {
      utf8Code: "U+1F345",
      utfChar: "🍅",
      CLDRShortName: "tomato",
    },
    {
      utf8Code: "U+1FAD2",
      utfChar: "🫒",
      CLDRShortName: "olive",
    },
    {
      utf8Code: "U+1F965",
      utfChar: "🥥",
      CLDRShortName: "coconut",
    },
  ],
  "food-vegetable": [
    {
      utf8Code: "U+1F951",
      utfChar: "🥑",
      CLDRShortName: "avocado",
    },
    {
      utf8Code: "U+1F346",
      utfChar: "🍆",
      CLDRShortName: "eggplant",
    },
    {
      utf8Code: "U+1F954",
      utfChar: "🥔",
      CLDRShortName: "potato",
    },
    {
      utf8Code: "U+1F955",
      utfChar: "🥕",
      CLDRShortName: "carrot",
    },
    {
      utf8Code: "U+1F33D",
      utfChar: "🌽",
      CLDRShortName: "ear of corn",
    },
    {
      utf8Code: "U+1F336",
      utfChar: "🌶",
      CLDRShortName: "hot pepper",
    },
    {
      utf8Code: "U+1FAD1",
      utfChar: "🫑",
      CLDRShortName: "bell pepper",
    },
    {
      utf8Code: "U+1F952",
      utfChar: "🥒",
      CLDRShortName: "cucumber",
    },
    {
      utf8Code: "U+1F96C",
      utfChar: "🥬",
      CLDRShortName: "leafy green",
    },
    {
      utf8Code: "U+1F966",
      utfChar: "🥦",
      CLDRShortName: "broccoli",
    },
    {
      utf8Code: "U+1F9C4",
      utfChar: "🧄",
      CLDRShortName: "garlic",
    },
    {
      utf8Code: "U+1F9C5",
      utfChar: "🧅",
      CLDRShortName: "onion",
    },
    {
      utf8Code: "U+1F344",
      utfChar: "🍄",
      CLDRShortName: "mushroom",
    },
    {
      utf8Code: "U+1F95C",
      utfChar: "🥜",
      CLDRShortName: "peanuts",
    },
    {
      utf8Code: "U+1FAD8",
      utfChar: "🫘",
      CLDRShortName: "⊛ beans",
    },
    {
      utf8Code: "U+1F330",
      utfChar: "🌰",
      CLDRShortName: "chestnut",
    },
  ],
  "food-prepared": [
    {
      utf8Code: "U+1F35E",
      utfChar: "🍞",
      CLDRShortName: "bread",
    },
    {
      utf8Code: "U+1F950",
      utfChar: "🥐",
      CLDRShortName: "croissant",
    },
    {
      utf8Code: "U+1F956",
      utfChar: "🥖",
      CLDRShortName: "baguette bread",
    },
    {
      utf8Code: "U+1FAD3",
      utfChar: "🫓",
      CLDRShortName: "flatbread",
    },
    {
      utf8Code: "U+1F968",
      utfChar: "🥨",
      CLDRShortName: "pretzel",
    },
    {
      utf8Code: "U+1F96F",
      utfChar: "🥯",
      CLDRShortName: "bagel",
    },
    {
      utf8Code: "U+1F95E",
      utfChar: "🥞",
      CLDRShortName: "pancakes",
    },
    {
      utf8Code: "U+1F9C7",
      utfChar: "🧇",
      CLDRShortName: "waffle",
    },
    {
      utf8Code: "U+1F9C0",
      utfChar: "🧀",
      CLDRShortName: "cheese wedge",
    },
    {
      utf8Code: "U+1F356",
      utfChar: "🍖",
      CLDRShortName: "meat on bone",
    },
    {
      utf8Code: "U+1F357",
      utfChar: "🍗",
      CLDRShortName: "poultry leg",
    },
    {
      utf8Code: "U+1F969",
      utfChar: "🥩",
      CLDRShortName: "cut of meat",
    },
    {
      utf8Code: "U+1F953",
      utfChar: "🥓",
      CLDRShortName: "bacon",
    },
    {
      utf8Code: "U+1F354",
      utfChar: "🍔",
      CLDRShortName: "hamburger",
    },
    {
      utf8Code: "U+1F35F",
      utfChar: "🍟",
      CLDRShortName: "french fries",
    },
    {
      utf8Code: "U+1F355",
      utfChar: "🍕",
      CLDRShortName: "pizza",
    },
    {
      utf8Code: "U+1F32D",
      utfChar: "🌭",
      CLDRShortName: "hot dog",
    },
    {
      utf8Code: "U+1F96A",
      utfChar: "🥪",
      CLDRShortName: "sandwich",
    },
    {
      utf8Code: "U+1F32E",
      utfChar: "🌮",
      CLDRShortName: "taco",
    },
    {
      utf8Code: "U+1F32F",
      utfChar: "🌯",
      CLDRShortName: "burrito",
    },
    {
      utf8Code: "U+1FAD4",
      utfChar: "🫔",
      CLDRShortName: "tamale",
    },
    {
      utf8Code: "U+1F959",
      utfChar: "🥙",
      CLDRShortName: "stuffed flatbread",
    },
    {
      utf8Code: "U+1F9C6",
      utfChar: "🧆",
      CLDRShortName: "falafel",
    },
    {
      utf8Code: "U+1F95A",
      utfChar: "🥚",
      CLDRShortName: "egg",
    },
    {
      utf8Code: "U+1F373",
      utfChar: "🍳",
      CLDRShortName: "cooking",
    },
    {
      utf8Code: "U+1F958",
      utfChar: "🥘",
      CLDRShortName: "shallow pan of food",
    },
    {
      utf8Code: "U+1F372",
      utfChar: "🍲",
      CLDRShortName: "pot of food",
    },
    {
      utf8Code: "U+1FAD5",
      utfChar: "🫕",
      CLDRShortName: "fondue",
    },
    {
      utf8Code: "U+1F963",
      utfChar: "🥣",
      CLDRShortName: "bowl with spoon",
    },
    {
      utf8Code: "U+1F957",
      utfChar: "🥗",
      CLDRShortName: "green salad",
    },
    {
      utf8Code: "U+1F37F",
      utfChar: "🍿",
      CLDRShortName: "popcorn",
    },
    {
      utf8Code: "U+1F9C8",
      utfChar: "🧈",
      CLDRShortName: "butter",
    },
    {
      utf8Code: "U+1F9C2",
      utfChar: "🧂",
      CLDRShortName: "salt",
    },
    {
      utf8Code: "U+1F96B",
      utfChar: "🥫",
      CLDRShortName: "canned food",
    },
  ],
  "food-asian": [
    {
      utf8Code: "U+1F371",
      utfChar: "🍱",
      CLDRShortName: "bento box",
    },
    {
      utf8Code: "U+1F358",
      utfChar: "🍘",
      CLDRShortName: "rice cracker",
    },
    {
      utf8Code: "U+1F359",
      utfChar: "🍙",
      CLDRShortName: "rice ball",
    },
    {
      utf8Code: "U+1F35A",
      utfChar: "🍚",
      CLDRShortName: "cooked rice",
    },
    {
      utf8Code: "U+1F35B",
      utfChar: "🍛",
      CLDRShortName: "curry rice",
    },
    {
      utf8Code: "U+1F35C",
      utfChar: "🍜",
      CLDRShortName: "steaming bowl",
    },
    {
      utf8Code: "U+1F35D",
      utfChar: "🍝",
      CLDRShortName: "spaghetti",
    },
    {
      utf8Code: "U+1F360",
      utfChar: "🍠",
      CLDRShortName: "roasted sweet potato",
    },
    {
      utf8Code: "U+1F362",
      utfChar: "🍢",
      CLDRShortName: "oden",
    },
    {
      utf8Code: "U+1F363",
      utfChar: "🍣",
      CLDRShortName: "sushi",
    },
    {
      utf8Code: "U+1F364",
      utfChar: "🍤",
      CLDRShortName: "fried shrimp",
    },
    {
      utf8Code: "U+1F365",
      utfChar: "🍥",
      CLDRShortName: "fish cake with swirl",
    },
    {
      utf8Code: "U+1F96E",
      utfChar: "🥮",
      CLDRShortName: "moon cake",
    },
    {
      utf8Code: "U+1F361",
      utfChar: "🍡",
      CLDRShortName: "dango",
    },
    {
      utf8Code: "U+1F95F",
      utfChar: "🥟",
      CLDRShortName: "dumpling",
    },
    {
      utf8Code: "U+1F960",
      utfChar: "🥠",
      CLDRShortName: "fortune cookie",
    },
    {
      utf8Code: "U+1F961",
      utfChar: "🥡",
      CLDRShortName: "takeout box",
    },
  ],
  "food-marine": [
    {
      utf8Code: "U+1F980",
      utfChar: "🦀",
      CLDRShortName: "crab",
    },
    {
      utf8Code: "U+1F99E",
      utfChar: "🦞",
      CLDRShortName: "lobster",
    },
    {
      utf8Code: "U+1F990",
      utfChar: "🦐",
      CLDRShortName: "shrimp",
    },
    {
      utf8Code: "U+1F991",
      utfChar: "🦑",
      CLDRShortName: "squid",
    },
    {
      utf8Code: "U+1F9AA",
      utfChar: "🦪",
      CLDRShortName: "oyster",
    },
  ],
  "food-sweet": [
    {
      utf8Code: "U+1F366",
      utfChar: "🍦",
      CLDRShortName: "soft ice cream",
    },
    {
      utf8Code: "U+1F367",
      utfChar: "🍧",
      CLDRShortName: "shaved ice",
    },
    {
      utf8Code: "U+1F368",
      utfChar: "🍨",
      CLDRShortName: "ice cream",
    },
    {
      utf8Code: "U+1F369",
      utfChar: "🍩",
      CLDRShortName: "doughnut",
    },
    {
      utf8Code: "U+1F36A",
      utfChar: "🍪",
      CLDRShortName: "cookie",
    },
    {
      utf8Code: "U+1F382",
      utfChar: "🎂",
      CLDRShortName: "birthday cake",
    },
    {
      utf8Code: "U+1F370",
      utfChar: "🍰",
      CLDRShortName: "shortcake",
    },
    {
      utf8Code: "U+1F9C1",
      utfChar: "🧁",
      CLDRShortName: "cupcake",
    },
    {
      utf8Code: "U+1F967",
      utfChar: "🥧",
      CLDRShortName: "pie",
    },
    {
      utf8Code: "U+1F36B",
      utfChar: "🍫",
      CLDRShortName: "chocolate bar",
    },
    {
      utf8Code: "U+1F36C",
      utfChar: "🍬",
      CLDRShortName: "candy",
    },
    {
      utf8Code: "U+1F36D",
      utfChar: "🍭",
      CLDRShortName: "lollipop",
    },
    {
      utf8Code: "U+1F36E",
      utfChar: "🍮",
      CLDRShortName: "custard",
    },
    {
      utf8Code: "U+1F36F",
      utfChar: "🍯",
      CLDRShortName: "honey pot",
    },
  ],
  drink: [
    {
      utf8Code: "U+1F37C",
      utfChar: "🍼",
      CLDRShortName: "baby bottle",
    },
    {
      utf8Code: "U+1F95B",
      utfChar: "🥛",
      CLDRShortName: "glass of milk",
    },
    {
      utf8Code: "U+2615",
      utfChar: "☕",
      CLDRShortName: "hot beverage",
    },
    {
      utf8Code: "U+1FAD6",
      utfChar: "🫖",
      CLDRShortName: "teapot",
    },
    {
      utf8Code: "U+1F375",
      utfChar: "🍵",
      CLDRShortName: "teacup without handle",
    },
    {
      utf8Code: "U+1F376",
      utfChar: "🍶",
      CLDRShortName: "sake",
    },
    {
      utf8Code: "U+1F37E",
      utfChar: "🍾",
      CLDRShortName: "bottle with popping cork",
    },
    {
      utf8Code: "U+1F377",
      utfChar: "🍷",
      CLDRShortName: "wine glass",
    },
    {
      utf8Code: "U+1F378",
      utfChar: "🍸",
      CLDRShortName: "cocktail glass",
    },
    {
      utf8Code: "U+1F379",
      utfChar: "🍹",
      CLDRShortName: "tropical drink",
    },
    {
      utf8Code: "U+1F37A",
      utfChar: "🍺",
      CLDRShortName: "beer mug",
    },
    {
      utf8Code: "U+1F37B",
      utfChar: "🍻",
      CLDRShortName: "clinking beer mugs",
    },
    {
      utf8Code: "U+1F942",
      utfChar: "🥂",
      CLDRShortName: "clinking glasses",
    },
    {
      utf8Code: "U+1F943",
      utfChar: "🥃",
      CLDRShortName: "tumbler glass",
    },
    {
      utf8Code: "U+1FAD7",
      utfChar: "🫗",
      CLDRShortName: "⊛ pouring liquid",
    },
    {
      utf8Code: "U+1F964",
      utfChar: "🥤",
      CLDRShortName: "cup with straw",
    },
    {
      utf8Code: "U+1F9CB",
      utfChar: "🧋",
      CLDRShortName: "bubble tea",
    },
    {
      utf8Code: "U+1F9C3",
      utfChar: "🧃",
      CLDRShortName: "beverage box",
    },
    {
      utf8Code: "U+1F9C9",
      utfChar: "🧉",
      CLDRShortName: "mate",
    },
    {
      utf8Code: "U+1F9CA",
      utfChar: "🧊",
      CLDRShortName: "ice",
    },
  ],
  dishware: [
    {
      utf8Code: "U+1F962",
      utfChar: "🥢",
      CLDRShortName: "chopsticks",
    },
    {
      utf8Code: "U+1F37D",
      utfChar: "🍽",
      CLDRShortName: "fork and knife with plate",
    },
    {
      utf8Code: "U+1F374",
      utfChar: "🍴",
      CLDRShortName: "fork and knife",
    },
    {
      utf8Code: "U+1F944",
      utfChar: "🥄",
      CLDRShortName: "spoon",
    },
    {
      utf8Code: "U+1F52A",
      utfChar: "🔪",
      CLDRShortName: "kitchen knife",
    },
    {
      utf8Code: "U+1FAD9",
      utfChar: "🫙",
      CLDRShortName: "⊛ jar",
    },
    {
      utf8Code: "U+1F3FA",
      utfChar: "🏺",
      CLDRShortName: "amphora",
    },
  ],
  "place-map": [
    {
      utf8Code: "U+1F30D",
      utfChar: "🌍",
      CLDRShortName: "globe showing Europe-Africa",
    },
    {
      utf8Code: "U+1F30E",
      utfChar: "🌎",
      CLDRShortName: "globe showing Americas",
    },
    {
      utf8Code: "U+1F30F",
      utfChar: "🌏",
      CLDRShortName: "globe showing Asia-Australia",
    },
    {
      utf8Code: "U+1F310",
      utfChar: "🌐",
      CLDRShortName: "globe with meridians",
    },
    {
      utf8Code: "U+1F5FA",
      utfChar: "🗺",
      CLDRShortName: "world map",
    },
    {
      utf8Code: "U+1F5FE",
      utfChar: "🗾",
      CLDRShortName: "map of Japan",
    },
    {
      utf8Code: "U+1F9ED",
      utfChar: "🧭",
      CLDRShortName: "compass",
    },
  ],
  "place-geographic": [
    {
      utf8Code: "U+1F3D4",
      utfChar: "🏔",
      CLDRShortName: "snow-capped mountain",
    },
    {
      utf8Code: "U+26F0",
      utfChar: "⛰",
      CLDRShortName: "mountain",
    },
    {
      utf8Code: "U+1F30B",
      utfChar: "🌋",
      CLDRShortName: "volcano",
    },
    {
      utf8Code: "U+1F5FB",
      utfChar: "🗻",
      CLDRShortName: "mount fuji",
    },
    {
      utf8Code: "U+1F3D5",
      utfChar: "🏕",
      CLDRShortName: "camping",
    },
    {
      utf8Code: "U+1F3D6",
      utfChar: "🏖",
      CLDRShortName: "beach with umbrella",
    },
    {
      utf8Code: "U+1F3DC",
      utfChar: "🏜",
      CLDRShortName: "desert",
    },
    {
      utf8Code: "U+1F3DD",
      utfChar: "🏝",
      CLDRShortName: "desert island",
    },
    {
      utf8Code: "U+1F3DE",
      utfChar: "🏞",
      CLDRShortName: "national park",
    },
  ],
  "place-building": [
    {
      utf8Code: "U+1F3DF",
      utfChar: "🏟",
      CLDRShortName: "stadium",
    },
    {
      utf8Code: "U+1F3DB",
      utfChar: "🏛",
      CLDRShortName: "classical building",
    },
    {
      utf8Code: "U+1F3D7",
      utfChar: "🏗",
      CLDRShortName: "building construction",
    },
    {
      utf8Code: "U+1F9F1",
      utfChar: "🧱",
      CLDRShortName: "brick",
    },
    {
      utf8Code: "U+1FAA8",
      utfChar: "🪨",
      CLDRShortName: "rock",
    },
    {
      utf8Code: "U+1FAB5",
      utfChar: "🪵",
      CLDRShortName: "wood",
    },
    {
      utf8Code: "U+1F6D6",
      utfChar: "🛖",
      CLDRShortName: "hut",
    },
    {
      utf8Code: "U+1F3D8",
      utfChar: "🏘",
      CLDRShortName: "houses",
    },
    {
      utf8Code: "U+1F3DA",
      utfChar: "🏚",
      CLDRShortName: "derelict house",
    },
    {
      utf8Code: "U+1F3E0",
      utfChar: "🏠",
      CLDRShortName: "house",
    },
    {
      utf8Code: "U+1F3E1",
      utfChar: "🏡",
      CLDRShortName: "house with garden",
    },
    {
      utf8Code: "U+1F3E2",
      utfChar: "🏢",
      CLDRShortName: "office building",
    },
    {
      utf8Code: "U+1F3E3",
      utfChar: "🏣",
      CLDRShortName: "Japanese post office",
    },
    {
      utf8Code: "U+1F3E4",
      utfChar: "🏤",
      CLDRShortName: "post office",
    },
    {
      utf8Code: "U+1F3E5",
      utfChar: "🏥",
      CLDRShortName: "hospital",
    },
    {
      utf8Code: "U+1F3E6",
      utfChar: "🏦",
      CLDRShortName: "bank",
    },
    {
      utf8Code: "U+1F3E8",
      utfChar: "🏨",
      CLDRShortName: "hotel",
    },
    {
      utf8Code: "U+1F3E9",
      utfChar: "🏩",
      CLDRShortName: "love hotel",
    },
    {
      utf8Code: "U+1F3EA",
      utfChar: "🏪",
      CLDRShortName: "convenience store",
    },
    {
      utf8Code: "U+1F3EB",
      utfChar: "🏫",
      CLDRShortName: "school",
    },
    {
      utf8Code: "U+1F3EC",
      utfChar: "🏬",
      CLDRShortName: "department store",
    },
    {
      utf8Code: "U+1F3ED",
      utfChar: "🏭",
      CLDRShortName: "factory",
    },
    {
      utf8Code: "U+1F3EF",
      utfChar: "🏯",
      CLDRShortName: "Japanese castle",
    },
    {
      utf8Code: "U+1F3F0",
      utfChar: "🏰",
      CLDRShortName: "castle",
    },
    {
      utf8Code: "U+1F492",
      utfChar: "💒",
      CLDRShortName: "wedding",
    },
    {
      utf8Code: "U+1F5FC",
      utfChar: "🗼",
      CLDRShortName: "Tokyo tower",
    },
    {
      utf8Code: "U+1F5FD",
      utfChar: "🗽",
      CLDRShortName: "Statue of Liberty",
    },
  ],
  "place-religious": [
    {
      utf8Code: "U+26EA",
      utfChar: "⛪",
      CLDRShortName: "church",
    },
    {
      utf8Code: "U+1F54C",
      utfChar: "🕌",
      CLDRShortName: "mosque",
    },
    {
      utf8Code: "U+1F6D5",
      utfChar: "🛕",
      CLDRShortName: "hindu temple",
    },
    {
      utf8Code: "U+1F54D",
      utfChar: "🕍",
      CLDRShortName: "synagogue",
    },
    {
      utf8Code: "U+26E9",
      utfChar: "⛩",
      CLDRShortName: "shinto shrine",
    },
    {
      utf8Code: "U+1F54B",
      utfChar: "🕋",
      CLDRShortName: "kaaba",
    },
  ],
  "place-other": [
    {
      utf8Code: "U+26F2",
      utfChar: "⛲",
      CLDRShortName: "fountain",
    },
    {
      utf8Code: "U+26FA",
      utfChar: "⛺",
      CLDRShortName: "tent",
    },
    {
      utf8Code: "U+1F301",
      utfChar: "🌁",
      CLDRShortName: "foggy",
    },
    {
      utf8Code: "U+1F303",
      utfChar: "🌃",
      CLDRShortName: "night with stars",
    },
    {
      utf8Code: "U+1F3D9",
      utfChar: "🏙",
      CLDRShortName: "cityscape",
    },
    {
      utf8Code: "U+1F304",
      utfChar: "🌄",
      CLDRShortName: "sunrise over mountains",
    },
    {
      utf8Code: "U+1F305",
      utfChar: "🌅",
      CLDRShortName: "sunrise",
    },
    {
      utf8Code: "U+1F306",
      utfChar: "🌆",
      CLDRShortName: "cityscape at dusk",
    },
    {
      utf8Code: "U+1F307",
      utfChar: "🌇",
      CLDRShortName: "sunset",
    },
    {
      utf8Code: "U+1F309",
      utfChar: "🌉",
      CLDRShortName: "bridge at night",
    },
    {
      utf8Code: "U+2668",
      utfChar: "♨",
      CLDRShortName: "hot springs",
    },
    {
      utf8Code: "U+1F3A0",
      utfChar: "🎠",
      CLDRShortName: "carousel horse",
    },
    {
      utf8Code: "U+1F6DD",
      utfChar: "🛝",
      CLDRShortName: "⊛ playground slide",
    },
    {
      utf8Code: "U+1F3A1",
      utfChar: "🎡",
      CLDRShortName: "ferris wheel",
    },
    {
      utf8Code: "U+1F3A2",
      utfChar: "🎢",
      CLDRShortName: "roller coaster",
    },
    {
      utf8Code: "U+1F488",
      utfChar: "💈",
      CLDRShortName: "barber pole",
    },
    {
      utf8Code: "U+1F3AA",
      utfChar: "🎪",
      CLDRShortName: "circus tent",
    },
  ],
  "transport-ground": [
    {
      utf8Code: "U+1F682",
      utfChar: "🚂",
      CLDRShortName: "locomotive",
    },
    {
      utf8Code: "U+1F683",
      utfChar: "🚃",
      CLDRShortName: "railway car",
    },
    {
      utf8Code: "U+1F684",
      utfChar: "🚄",
      CLDRShortName: "high-speed train",
    },
    {
      utf8Code: "U+1F685",
      utfChar: "🚅",
      CLDRShortName: "bullet train",
    },
    {
      utf8Code: "U+1F686",
      utfChar: "🚆",
      CLDRShortName: "train",
    },
    {
      utf8Code: "U+1F687",
      utfChar: "🚇",
      CLDRShortName: "metro",
    },
    {
      utf8Code: "U+1F688",
      utfChar: "🚈",
      CLDRShortName: "light rail",
    },
    {
      utf8Code: "U+1F689",
      utfChar: "🚉",
      CLDRShortName: "station",
    },
    {
      utf8Code: "U+1F68A",
      utfChar: "🚊",
      CLDRShortName: "tram",
    },
    {
      utf8Code: "U+1F69D",
      utfChar: "🚝",
      CLDRShortName: "monorail",
    },
    {
      utf8Code: "U+1F69E",
      utfChar: "🚞",
      CLDRShortName: "mountain railway",
    },
    {
      utf8Code: "U+1F68B",
      utfChar: "🚋",
      CLDRShortName: "tram car",
    },
    {
      utf8Code: "U+1F68C",
      utfChar: "🚌",
      CLDRShortName: "bus",
    },
    {
      utf8Code: "U+1F68D",
      utfChar: "🚍",
      CLDRShortName: "oncoming bus",
    },
    {
      utf8Code: "U+1F68E",
      utfChar: "🚎",
      CLDRShortName: "trolleybus",
    },
    {
      utf8Code: "U+1F690",
      utfChar: "🚐",
      CLDRShortName: "minibus",
    },
    {
      utf8Code: "U+1F691",
      utfChar: "🚑",
      CLDRShortName: "ambulance",
    },
    {
      utf8Code: "U+1F692",
      utfChar: "🚒",
      CLDRShortName: "fire engine",
    },
    {
      utf8Code: "U+1F693",
      utfChar: "🚓",
      CLDRShortName: "police car",
    },
    {
      utf8Code: "U+1F694",
      utfChar: "🚔",
      CLDRShortName: "oncoming police car",
    },
    {
      utf8Code: "U+1F695",
      utfChar: "🚕",
      CLDRShortName: "taxi",
    },
    {
      utf8Code: "U+1F696",
      utfChar: "🚖",
      CLDRShortName: "oncoming taxi",
    },
    {
      utf8Code: "U+1F697",
      utfChar: "🚗",
      CLDRShortName: "automobile",
    },
    {
      utf8Code: "U+1F698",
      utfChar: "🚘",
      CLDRShortName: "oncoming automobile",
    },
    {
      utf8Code: "U+1F699",
      utfChar: "🚙",
      CLDRShortName: "sport utility vehicle",
    },
    {
      utf8Code: "U+1F6FB",
      utfChar: "🛻",
      CLDRShortName: "pickup truck",
    },
    {
      utf8Code: "U+1F69A",
      utfChar: "🚚",
      CLDRShortName: "delivery truck",
    },
    {
      utf8Code: "U+1F69B",
      utfChar: "🚛",
      CLDRShortName: "articulated lorry",
    },
    {
      utf8Code: "U+1F69C",
      utfChar: "🚜",
      CLDRShortName: "tractor",
    },
    {
      utf8Code: "U+1F3CE",
      utfChar: "🏎",
      CLDRShortName: "racing car",
    },
    {
      utf8Code: "U+1F3CD",
      utfChar: "🏍",
      CLDRShortName: "motorcycle",
    },
    {
      utf8Code: "U+1F6F5",
      utfChar: "🛵",
      CLDRShortName: "motor scooter",
    },
    {
      utf8Code: "U+1F9BD",
      utfChar: "🦽",
      CLDRShortName: "manual wheelchair",
    },
    {
      utf8Code: "U+1F9BC",
      utfChar: "🦼",
      CLDRShortName: "motorized wheelchair",
    },
    {
      utf8Code: "U+1F6FA",
      utfChar: "🛺",
      CLDRShortName: "auto rickshaw",
    },
    {
      utf8Code: "U+1F6B2",
      utfChar: "🚲",
      CLDRShortName: "bicycle",
    },
    {
      utf8Code: "U+1F6F4",
      utfChar: "🛴",
      CLDRShortName: "kick scooter",
    },
    {
      utf8Code: "U+1F6F9",
      utfChar: "🛹",
      CLDRShortName: "skateboard",
    },
    {
      utf8Code: "U+1F6FC",
      utfChar: "🛼",
      CLDRShortName: "roller skate",
    },
    {
      utf8Code: "U+1F68F",
      utfChar: "🚏",
      CLDRShortName: "bus stop",
    },
    {
      utf8Code: "U+1F6E3",
      utfChar: "🛣",
      CLDRShortName: "motorway",
    },
    {
      utf8Code: "U+1F6E4",
      utfChar: "🛤",
      CLDRShortName: "railway track",
    },
    {
      utf8Code: "U+1F6E2",
      utfChar: "🛢",
      CLDRShortName: "oil drum",
    },
    {
      utf8Code: "U+26FD",
      utfChar: "⛽",
      CLDRShortName: "fuel pump",
    },
    {
      utf8Code: "U+1F6DE",
      utfChar: "🛞",
      CLDRShortName: "⊛ wheel",
    },
    {
      utf8Code: "U+1F6A8",
      utfChar: "🚨",
      CLDRShortName: "police car light",
    },
    {
      utf8Code: "U+1F6A5",
      utfChar: "🚥",
      CLDRShortName: "horizontal traffic light",
    },
    {
      utf8Code: "U+1F6A6",
      utfChar: "🚦",
      CLDRShortName: "vertical traffic light",
    },
    {
      utf8Code: "U+1F6D1",
      utfChar: "🛑",
      CLDRShortName: "stop sign",
    },
    {
      utf8Code: "U+1F6A7",
      utfChar: "🚧",
      CLDRShortName: "construction",
    },
  ],
  "transport-water": [
    {
      utf8Code: "U+2693",
      utfChar: "⚓",
      CLDRShortName: "anchor",
    },
    {
      utf8Code: "U+1F6DF",
      utfChar: "🛟",
      CLDRShortName: "⊛ ring buoy",
    },
    {
      utf8Code: "U+26F5",
      utfChar: "⛵",
      CLDRShortName: "sailboat",
    },
    {
      utf8Code: "U+1F6F6",
      utfChar: "🛶",
      CLDRShortName: "canoe",
    },
    {
      utf8Code: "U+1F6A4",
      utfChar: "🚤",
      CLDRShortName: "speedboat",
    },
    {
      utf8Code: "U+1F6F3",
      utfChar: "🛳",
      CLDRShortName: "passenger ship",
    },
    {
      utf8Code: "U+26F4",
      utfChar: "⛴",
      CLDRShortName: "ferry",
    },
    {
      utf8Code: "U+1F6E5",
      utfChar: "🛥",
      CLDRShortName: "motor boat",
    },
    {
      utf8Code: "U+1F6A2",
      utfChar: "🚢",
      CLDRShortName: "ship",
    },
  ],
  "transport-air": [
    {
      utf8Code: "U+2708",
      utfChar: "✈",
      CLDRShortName: "airplane",
    },
    {
      utf8Code: "U+1F6E9",
      utfChar: "🛩",
      CLDRShortName: "small airplane",
    },
    {
      utf8Code: "U+1F6EB",
      utfChar: "🛫",
      CLDRShortName: "airplane departure",
    },
    {
      utf8Code: "U+1F6EC",
      utfChar: "🛬",
      CLDRShortName: "airplane arrival",
    },
    {
      utf8Code: "U+1FA82",
      utfChar: "🪂",
      CLDRShortName: "parachute",
    },
    {
      utf8Code: "U+1F4BA",
      utfChar: "💺",
      CLDRShortName: "seat",
    },
    {
      utf8Code: "U+1F681",
      utfChar: "🚁",
      CLDRShortName: "helicopter",
    },
    {
      utf8Code: "U+1F69F",
      utfChar: "🚟",
      CLDRShortName: "suspension railway",
    },
    {
      utf8Code: "U+1F6A0",
      utfChar: "🚠",
      CLDRShortName: "mountain cableway",
    },
    {
      utf8Code: "U+1F6A1",
      utfChar: "🚡",
      CLDRShortName: "aerial tramway",
    },
    {
      utf8Code: "U+1F6F0",
      utfChar: "🛰",
      CLDRShortName: "satellite",
    },
    {
      utf8Code: "U+1F680",
      utfChar: "🚀",
      CLDRShortName: "rocket",
    },
    {
      utf8Code: "U+1F6F8",
      utfChar: "🛸",
      CLDRShortName: "flying saucer",
    },
  ],
  hotel: [
    {
      utf8Code: "U+1F6CE",
      utfChar: "🛎",
      CLDRShortName: "bellhop bell",
    },
    {
      utf8Code: "U+1F9F3",
      utfChar: "🧳",
      CLDRShortName: "luggage",
    },
  ],
  time: [
    {
      utf8Code: "U+231B",
      utfChar: "⌛",
      CLDRShortName: "hourglass done",
    },
    {
      utf8Code: "U+23F3",
      utfChar: "⏳",
      CLDRShortName: "hourglass not done",
    },
    {
      utf8Code: "U+231A",
      utfChar: "⌚",
      CLDRShortName: "watch",
    },
    {
      utf8Code: "U+23F0",
      utfChar: "⏰",
      CLDRShortName: "alarm clock",
    },
    {
      utf8Code: "U+23F1",
      utfChar: "⏱",
      CLDRShortName: "stopwatch",
    },
    {
      utf8Code: "U+23F2",
      utfChar: "⏲",
      CLDRShortName: "timer clock",
    },
    {
      utf8Code: "U+1F570",
      utfChar: "🕰",
      CLDRShortName: "mantelpiece clock",
    },
    {
      utf8Code: "U+1F55B",
      utfChar: "🕛",
      CLDRShortName: "twelve o’clock",
    },
    {
      utf8Code: "U+1F567",
      utfChar: "🕧",
      CLDRShortName: "twelve-thirty",
    },
    {
      utf8Code: "U+1F550",
      utfChar: "🕐",
      CLDRShortName: "one o’clock",
    },
    {
      utf8Code: "U+1F55C",
      utfChar: "🕜",
      CLDRShortName: "one-thirty",
    },
    {
      utf8Code: "U+1F551",
      utfChar: "🕑",
      CLDRShortName: "two o’clock",
    },
    {
      utf8Code: "U+1F55D",
      utfChar: "🕝",
      CLDRShortName: "two-thirty",
    },
    {
      utf8Code: "U+1F552",
      utfChar: "🕒",
      CLDRShortName: "three o’clock",
    },
    {
      utf8Code: "U+1F55E",
      utfChar: "🕞",
      CLDRShortName: "three-thirty",
    },
    {
      utf8Code: "U+1F553",
      utfChar: "🕓",
      CLDRShortName: "four o’clock",
    },
    {
      utf8Code: "U+1F55F",
      utfChar: "🕟",
      CLDRShortName: "four-thirty",
    },
    {
      utf8Code: "U+1F554",
      utfChar: "🕔",
      CLDRShortName: "five o’clock",
    },
    {
      utf8Code: "U+1F560",
      utfChar: "🕠",
      CLDRShortName: "five-thirty",
    },
    {
      utf8Code: "U+1F555",
      utfChar: "🕕",
      CLDRShortName: "six o’clock",
    },
    {
      utf8Code: "U+1F561",
      utfChar: "🕡",
      CLDRShortName: "six-thirty",
    },
    {
      utf8Code: "U+1F556",
      utfChar: "🕖",
      CLDRShortName: "seven o’clock",
    },
    {
      utf8Code: "U+1F562",
      utfChar: "🕢",
      CLDRShortName: "seven-thirty",
    },
    {
      utf8Code: "U+1F557",
      utfChar: "🕗",
      CLDRShortName: "eight o’clock",
    },
    {
      utf8Code: "U+1F563",
      utfChar: "🕣",
      CLDRShortName: "eight-thirty",
    },
    {
      utf8Code: "U+1F558",
      utfChar: "🕘",
      CLDRShortName: "nine o’clock",
    },
    {
      utf8Code: "U+1F564",
      utfChar: "🕤",
      CLDRShortName: "nine-thirty",
    },
    {
      utf8Code: "U+1F559",
      utfChar: "🕙",
      CLDRShortName: "ten o’clock",
    },
    {
      utf8Code: "U+1F565",
      utfChar: "🕥",
      CLDRShortName: "ten-thirty",
    },
    {
      utf8Code: "U+1F55A",
      utfChar: "🕚",
      CLDRShortName: "eleven o’clock",
    },
    {
      utf8Code: "U+1F566",
      utfChar: "🕦",
      CLDRShortName: "eleven-thirty",
    },
  ],
  "sky & weather": [
    {
      utf8Code: "U+1F311",
      utfChar: "🌑",
      CLDRShortName: "new moon",
    },
    {
      utf8Code: "U+1F312",
      utfChar: "🌒",
      CLDRShortName: "waxing crescent moon",
    },
    {
      utf8Code: "U+1F313",
      utfChar: "🌓",
      CLDRShortName: "first quarter moon",
    },
    {
      utf8Code: "U+1F314",
      utfChar: "🌔",
      CLDRShortName: "waxing gibbous moon",
    },
    {
      utf8Code: "U+1F315",
      utfChar: "🌕",
      CLDRShortName: "full moon",
    },
    {
      utf8Code: "U+1F316",
      utfChar: "🌖",
      CLDRShortName: "waning gibbous moon",
    },
    {
      utf8Code: "U+1F317",
      utfChar: "🌗",
      CLDRShortName: "last quarter moon",
    },
    {
      utf8Code: "U+1F318",
      utfChar: "🌘",
      CLDRShortName: "waning crescent moon",
    },
    {
      utf8Code: "U+1F319",
      utfChar: "🌙",
      CLDRShortName: "crescent moon",
    },
    {
      utf8Code: "U+1F31A",
      utfChar: "🌚",
      CLDRShortName: "new moon face",
    },
    {
      utf8Code: "U+1F31B",
      utfChar: "🌛",
      CLDRShortName: "first quarter moon face",
    },
    {
      utf8Code: "U+1F31C",
      utfChar: "🌜",
      CLDRShortName: "last quarter moon face",
    },
    {
      utf8Code: "U+1F321",
      utfChar: "🌡",
      CLDRShortName: "thermometer",
    },
    {
      utf8Code: "U+2600",
      utfChar: "☀",
      CLDRShortName: "sun",
    },
    {
      utf8Code: "U+1F31D",
      utfChar: "🌝",
      CLDRShortName: "full moon face",
    },
    {
      utf8Code: "U+1F31E",
      utfChar: "🌞",
      CLDRShortName: "sun with face",
    },
    {
      utf8Code: "U+1FA90",
      utfChar: "🪐",
      CLDRShortName: "ringed planet",
    },
    {
      utf8Code: "U+2B50",
      utfChar: "⭐",
      CLDRShortName: "star",
    },
    {
      utf8Code: "U+1F31F",
      utfChar: "🌟",
      CLDRShortName: "glowing star",
    },
    {
      utf8Code: "U+1F320",
      utfChar: "🌠",
      CLDRShortName: "shooting star",
    },
    {
      utf8Code: "U+1F30C",
      utfChar: "🌌",
      CLDRShortName: "milky way",
    },
    {
      utf8Code: "U+2601",
      utfChar: "☁",
      CLDRShortName: "cloud",
    },
    {
      utf8Code: "U+26C5",
      utfChar: "⛅",
      CLDRShortName: "sun behind cloud",
    },
    {
      utf8Code: "U+26C8",
      utfChar: "⛈",
      CLDRShortName: "cloud with lightning and rain",
    },
    {
      utf8Code: "U+1F324",
      utfChar: "🌤",
      CLDRShortName: "sun behind small cloud",
    },
    {
      utf8Code: "U+1F325",
      utfChar: "🌥",
      CLDRShortName: "sun behind large cloud",
    },
    {
      utf8Code: "U+1F326",
      utfChar: "🌦",
      CLDRShortName: "sun behind rain cloud",
    },
    {
      utf8Code: "U+1F327",
      utfChar: "🌧",
      CLDRShortName: "cloud with rain",
    },
    {
      utf8Code: "U+1F328",
      utfChar: "🌨",
      CLDRShortName: "cloud with snow",
    },
    {
      utf8Code: "U+1F329",
      utfChar: "🌩",
      CLDRShortName: "cloud with lightning",
    },
    {
      utf8Code: "U+1F32A",
      utfChar: "🌪",
      CLDRShortName: "tornado",
    },
    {
      utf8Code: "U+1F32B",
      utfChar: "🌫",
      CLDRShortName: "fog",
    },
    {
      utf8Code: "U+1F32C",
      utfChar: "🌬",
      CLDRShortName: "wind face",
    },
    {
      utf8Code: "U+1F300",
      utfChar: "🌀",
      CLDRShortName: "cyclone",
    },
    {
      utf8Code: "U+1F308",
      utfChar: "🌈",
      CLDRShortName: "rainbow",
    },
    {
      utf8Code: "U+1F302",
      utfChar: "🌂",
      CLDRShortName: "closed umbrella",
    },
    {
      utf8Code: "U+2602",
      utfChar: "☂",
      CLDRShortName: "umbrella",
    },
    {
      utf8Code: "U+2614",
      utfChar: "☔",
      CLDRShortName: "umbrella with rain drops",
    },
    {
      utf8Code: "U+26F1",
      utfChar: "⛱",
      CLDRShortName: "umbrella on ground",
    },
    {
      utf8Code: "U+26A1",
      utfChar: "⚡",
      CLDRShortName: "high voltage",
    },
    {
      utf8Code: "U+2744",
      utfChar: "❄",
      CLDRShortName: "snowflake",
    },
    {
      utf8Code: "U+2603",
      utfChar: "☃",
      CLDRShortName: "snowman",
    },
    {
      utf8Code: "U+26C4",
      utfChar: "⛄",
      CLDRShortName: "snowman without snow",
    },
    {
      utf8Code: "U+2604",
      utfChar: "☄",
      CLDRShortName: "comet",
    },
    {
      utf8Code: "U+1F525",
      utfChar: "🔥",
      CLDRShortName: "fire",
    },
    {
      utf8Code: "U+1F4A7",
      utfChar: "💧",
      CLDRShortName: "droplet",
    },
    {
      utf8Code: "U+1F30A",
      utfChar: "🌊",
      CLDRShortName: "water wave",
    },
  ],
  event: [
    {
      utf8Code: "U+1F383",
      utfChar: "🎃",
      CLDRShortName: "jack-o-lantern",
    },
    {
      utf8Code: "U+1F384",
      utfChar: "🎄",
      CLDRShortName: "Christmas tree",
    },
    {
      utf8Code: "U+1F386",
      utfChar: "🎆",
      CLDRShortName: "fireworks",
    },
    {
      utf8Code: "U+1F387",
      utfChar: "🎇",
      CLDRShortName: "sparkler",
    },
    {
      utf8Code: "U+1F9E8",
      utfChar: "🧨",
      CLDRShortName: "firecracker",
    },
    {
      utf8Code: "U+2728",
      utfChar: "✨",
      CLDRShortName: "sparkles",
    },
    {
      utf8Code: "U+1F388",
      utfChar: "🎈",
      CLDRShortName: "balloon",
    },
    {
      utf8Code: "U+1F389",
      utfChar: "🎉",
      CLDRShortName: "party popper",
    },
    {
      utf8Code: "U+1F38A",
      utfChar: "🎊",
      CLDRShortName: "confetti ball",
    },
    {
      utf8Code: "U+1F38B",
      utfChar: "🎋",
      CLDRShortName: "tanabata tree",
    },
    {
      utf8Code: "U+1F38D",
      utfChar: "🎍",
      CLDRShortName: "pine decoration",
    },
    {
      utf8Code: "U+1F38E",
      utfChar: "🎎",
      CLDRShortName: "Japanese dolls",
    },
    {
      utf8Code: "U+1F38F",
      utfChar: "🎏",
      CLDRShortName: "carp streamer",
    },
    {
      utf8Code: "U+1F390",
      utfChar: "🎐",
      CLDRShortName: "wind chime",
    },
    {
      utf8Code: "U+1F391",
      utfChar: "🎑",
      CLDRShortName: "moon viewing ceremony",
    },
    {
      utf8Code: "U+1F9E7",
      utfChar: "🧧",
      CLDRShortName: "red envelope",
    },
    {
      utf8Code: "U+1F380",
      utfChar: "🎀",
      CLDRShortName: "ribbon",
    },
    {
      utf8Code: "U+1F381",
      utfChar: "🎁",
      CLDRShortName: "wrapped gift",
    },
    {
      utf8Code: "U+1F397",
      utfChar: "🎗",
      CLDRShortName: "reminder ribbon",
    },
    {
      utf8Code: "U+1F39F",
      utfChar: "🎟",
      CLDRShortName: "admission tickets",
    },
    {
      utf8Code: "U+1F3AB",
      utfChar: "🎫",
      CLDRShortName: "ticket",
    },
  ],
  "award-medal": [
    {
      utf8Code: "U+1F396",
      utfChar: "🎖",
      CLDRShortName: "military medal",
    },
    {
      utf8Code: "U+1F3C6",
      utfChar: "🏆",
      CLDRShortName: "trophy",
    },
    {
      utf8Code: "U+1F3C5",
      utfChar: "🏅",
      CLDRShortName: "sports medal",
    },
    {
      utf8Code: "U+1F947",
      utfChar: "🥇",
      CLDRShortName: "1st place medal",
    },
    {
      utf8Code: "U+1F948",
      utfChar: "🥈",
      CLDRShortName: "2nd place medal",
    },
    {
      utf8Code: "U+1F949",
      utfChar: "🥉",
      CLDRShortName: "3rd place medal",
    },
  ],
  sport: [
    {
      utf8Code: "U+26BD",
      utfChar: "⚽",
      CLDRShortName: "soccer ball",
    },
    {
      utf8Code: "U+26BE",
      utfChar: "⚾",
      CLDRShortName: "baseball",
    },
    {
      utf8Code: "U+1F94E",
      utfChar: "🥎",
      CLDRShortName: "softball",
    },
    {
      utf8Code: "U+1F3C0",
      utfChar: "🏀",
      CLDRShortName: "basketball",
    },
    {
      utf8Code: "U+1F3D0",
      utfChar: "🏐",
      CLDRShortName: "volleyball",
    },
    {
      utf8Code: "U+1F3C8",
      utfChar: "🏈",
      CLDRShortName: "american football",
    },
    {
      utf8Code: "U+1F3C9",
      utfChar: "🏉",
      CLDRShortName: "rugby football",
    },
    {
      utf8Code: "U+1F3BE",
      utfChar: "🎾",
      CLDRShortName: "tennis",
    },
    {
      utf8Code: "U+1F94F",
      utfChar: "🥏",
      CLDRShortName: "flying disc",
    },
    {
      utf8Code: "U+1F3B3",
      utfChar: "🎳",
      CLDRShortName: "bowling",
    },
    {
      utf8Code: "U+1F3CF",
      utfChar: "🏏",
      CLDRShortName: "cricket game",
    },
    {
      utf8Code: "U+1F3D1",
      utfChar: "🏑",
      CLDRShortName: "field hockey",
    },
    {
      utf8Code: "U+1F3D2",
      utfChar: "🏒",
      CLDRShortName: "ice hockey",
    },
    {
      utf8Code: "U+1F94D",
      utfChar: "🥍",
      CLDRShortName: "lacrosse",
    },
    {
      utf8Code: "U+1F3D3",
      utfChar: "🏓",
      CLDRShortName: "ping pong",
    },
    {
      utf8Code: "U+1F3F8",
      utfChar: "🏸",
      CLDRShortName: "badminton",
    },
    {
      utf8Code: "U+1F94A",
      utfChar: "🥊",
      CLDRShortName: "boxing glove",
    },
    {
      utf8Code: "U+1F94B",
      utfChar: "🥋",
      CLDRShortName: "martial arts uniform",
    },
    {
      utf8Code: "U+1F945",
      utfChar: "🥅",
      CLDRShortName: "goal net",
    },
    {
      utf8Code: "U+26F3",
      utfChar: "⛳",
      CLDRShortName: "flag in hole",
    },
    {
      utf8Code: "U+26F8",
      utfChar: "⛸",
      CLDRShortName: "ice skate",
    },
    {
      utf8Code: "U+1F3A3",
      utfChar: "🎣",
      CLDRShortName: "fishing pole",
    },
    {
      utf8Code: "U+1F93F",
      utfChar: "🤿",
      CLDRShortName: "diving mask",
    },
    {
      utf8Code: "U+1F3BD",
      utfChar: "🎽",
      CLDRShortName: "running shirt",
    },
    {
      utf8Code: "U+1F3BF",
      utfChar: "🎿",
      CLDRShortName: "skis",
    },
    {
      utf8Code: "U+1F6F7",
      utfChar: "🛷",
      CLDRShortName: "sled",
    },
    {
      utf8Code: "U+1F94C",
      utfChar: "🥌",
      CLDRShortName: "curling stone",
    },
  ],
  game: [
    {
      utf8Code: "U+1F3AF",
      utfChar: "🎯",
      CLDRShortName: "bullseye",
    },
    {
      utf8Code: "U+1FA80",
      utfChar: "🪀",
      CLDRShortName: "yo-yo",
    },
    {
      utf8Code: "U+1FA81",
      utfChar: "🪁",
      CLDRShortName: "kite",
    },
    {
      utf8Code: "U+1F3B1",
      utfChar: "🎱",
      CLDRShortName: "pool 8 ball",
    },
    {
      utf8Code: "U+1F52E",
      utfChar: "🔮",
      CLDRShortName: "crystal ball",
    },
    {
      utf8Code: "U+1FA84",
      utfChar: "🪄",
      CLDRShortName: "magic wand",
    },
    {
      utf8Code: "U+1F9FF",
      utfChar: "🧿",
      CLDRShortName: "nazar amulet",
    },
    {
      utf8Code: "U+1FAAC",
      utfChar: "🪬",
      CLDRShortName: "⊛ hamsa",
    },
    {
      utf8Code: "U+1F3AE",
      utfChar: "🎮",
      CLDRShortName: "video game",
    },
    {
      utf8Code: "U+1F579",
      utfChar: "🕹",
      CLDRShortName: "joystick",
    },
    {
      utf8Code: "U+1F3B0",
      utfChar: "🎰",
      CLDRShortName: "slot machine",
    },
    {
      utf8Code: "U+1F3B2",
      utfChar: "🎲",
      CLDRShortName: "game die",
    },
    {
      utf8Code: "U+1F9E9",
      utfChar: "🧩",
      CLDRShortName: "puzzle piece",
    },
    {
      utf8Code: "U+1F9F8",
      utfChar: "🧸",
      CLDRShortName: "teddy bear",
    },
    {
      utf8Code: "U+1FA85",
      utfChar: "🪅",
      CLDRShortName: "piñata",
    },
    {
      utf8Code: "U+1FAA9",
      utfChar: "🪩",
      CLDRShortName: "⊛ mirror ball",
    },
    {
      utf8Code: "U+1FA86",
      utfChar: "🪆",
      CLDRShortName: "nesting dolls",
    },
    {
      utf8Code: "U+2660",
      utfChar: "♠",
      CLDRShortName: "spade suit",
    },
    {
      utf8Code: "U+2665",
      utfChar: "♥",
      CLDRShortName: "heart suit",
    },
    {
      utf8Code: "U+2666",
      utfChar: "♦",
      CLDRShortName: "diamond suit",
    },
    {
      utf8Code: "U+2663",
      utfChar: "♣",
      CLDRShortName: "club suit",
    },
    {
      utf8Code: "U+265F",
      utfChar: "♟",
      CLDRShortName: "chess pawn",
    },
    {
      utf8Code: "U+1F0CF",
      utfChar: "🃏",
      CLDRShortName: "joker",
    },
    {
      utf8Code: "U+1F004",
      utfChar: "🀄",
      CLDRShortName: "mahjong red dragon",
    },
    {
      utf8Code: "U+1F3B4",
      utfChar: "🎴",
      CLDRShortName: "flower playing cards",
    },
  ],
  "arts & crafts": [
    {
      utf8Code: "U+1F3AD",
      utfChar: "🎭",
      CLDRShortName: "performing arts",
    },
    {
      utf8Code: "U+1F5BC",
      utfChar: "🖼",
      CLDRShortName: "framed picture",
    },
    {
      utf8Code: "U+1F3A8",
      utfChar: "🎨",
      CLDRShortName: "artist palette",
    },
    {
      utf8Code: "U+1F9F5",
      utfChar: "🧵",
      CLDRShortName: "thread",
    },
    {
      utf8Code: "U+1FAA1",
      utfChar: "🪡",
      CLDRShortName: "sewing needle",
    },
    {
      utf8Code: "U+1F9F6",
      utfChar: "🧶",
      CLDRShortName: "yarn",
    },
    {
      utf8Code: "U+1FAA2",
      utfChar: "🪢",
      CLDRShortName: "knot",
    },
  ],
  clothing: [
    {
      utf8Code: "U+1F453",
      utfChar: "👓",
      CLDRShortName: "glasses",
    },
    {
      utf8Code: "U+1F576",
      utfChar: "🕶",
      CLDRShortName: "sunglasses",
    },
    {
      utf8Code: "U+1F97D",
      utfChar: "🥽",
      CLDRShortName: "goggles",
    },
    {
      utf8Code: "U+1F97C",
      utfChar: "🥼",
      CLDRShortName: "lab coat",
    },
    {
      utf8Code: "U+1F9BA",
      utfChar: "🦺",
      CLDRShortName: "safety vest",
    },
    {
      utf8Code: "U+1F454",
      utfChar: "👔",
      CLDRShortName: "necktie",
    },
    {
      utf8Code: "U+1F455",
      utfChar: "👕",
      CLDRShortName: "t-shirt",
    },
    {
      utf8Code: "U+1F456",
      utfChar: "👖",
      CLDRShortName: "jeans",
    },
    {
      utf8Code: "U+1F9E3",
      utfChar: "🧣",
      CLDRShortName: "scarf",
    },
    {
      utf8Code: "U+1F9E4",
      utfChar: "🧤",
      CLDRShortName: "gloves",
    },
    {
      utf8Code: "U+1F9E5",
      utfChar: "🧥",
      CLDRShortName: "coat",
    },
    {
      utf8Code: "U+1F9E6",
      utfChar: "🧦",
      CLDRShortName: "socks",
    },
    {
      utf8Code: "U+1F457",
      utfChar: "👗",
      CLDRShortName: "dress",
    },
    {
      utf8Code: "U+1F458",
      utfChar: "👘",
      CLDRShortName: "kimono",
    },
    {
      utf8Code: "U+1F97B",
      utfChar: "🥻",
      CLDRShortName: "sari",
    },
    {
      utf8Code: "U+1FA71",
      utfChar: "🩱",
      CLDRShortName: "one-piece swimsuit",
    },
    {
      utf8Code: "U+1FA72",
      utfChar: "🩲",
      CLDRShortName: "briefs",
    },
    {
      utf8Code: "U+1FA73",
      utfChar: "🩳",
      CLDRShortName: "shorts",
    },
    {
      utf8Code: "U+1F459",
      utfChar: "👙",
      CLDRShortName: "bikini",
    },
    {
      utf8Code: "U+1F45A",
      utfChar: "👚",
      CLDRShortName: "woman’s clothes",
    },
    {
      utf8Code: "U+1F45B",
      utfChar: "👛",
      CLDRShortName: "purse",
    },
    {
      utf8Code: "U+1F45C",
      utfChar: "👜",
      CLDRShortName: "handbag",
    },
    {
      utf8Code: "U+1F45D",
      utfChar: "👝",
      CLDRShortName: "clutch bag",
    },
    {
      utf8Code: "U+1F6CD",
      utfChar: "🛍",
      CLDRShortName: "shopping bags",
    },
    {
      utf8Code: "U+1F392",
      utfChar: "🎒",
      CLDRShortName: "backpack",
    },
    {
      utf8Code: "U+1FA74",
      utfChar: "🩴",
      CLDRShortName: "thong sandal",
    },
    {
      utf8Code: "U+1F45E",
      utfChar: "👞",
      CLDRShortName: "man’s shoe",
    },
    {
      utf8Code: "U+1F45F",
      utfChar: "👟",
      CLDRShortName: "running shoe",
    },
    {
      utf8Code: "U+1F97E",
      utfChar: "🥾",
      CLDRShortName: "hiking boot",
    },
    {
      utf8Code: "U+1F97F",
      utfChar: "🥿",
      CLDRShortName: "flat shoe",
    },
    {
      utf8Code: "U+1F460",
      utfChar: "👠",
      CLDRShortName: "high-heeled shoe",
    },
    {
      utf8Code: "U+1F461",
      utfChar: "👡",
      CLDRShortName: "woman’s sandal",
    },
    {
      utf8Code: "U+1FA70",
      utfChar: "🩰",
      CLDRShortName: "ballet shoes",
    },
    {
      utf8Code: "U+1F462",
      utfChar: "👢",
      CLDRShortName: "woman’s boot",
    },
    {
      utf8Code: "U+1F451",
      utfChar: "👑",
      CLDRShortName: "crown",
    },
    {
      utf8Code: "U+1F452",
      utfChar: "👒",
      CLDRShortName: "woman’s hat",
    },
    {
      utf8Code: "U+1F3A9",
      utfChar: "🎩",
      CLDRShortName: "top hat",
    },
    {
      utf8Code: "U+1F393",
      utfChar: "🎓",
      CLDRShortName: "graduation cap",
    },
    {
      utf8Code: "U+1F9E2",
      utfChar: "🧢",
      CLDRShortName: "billed cap",
    },
    {
      utf8Code: "U+1FA96",
      utfChar: "🪖",
      CLDRShortName: "military helmet",
    },
    {
      utf8Code: "U+26D1",
      utfChar: "⛑",
      CLDRShortName: "rescue worker’s helmet",
    },
    {
      utf8Code: "U+1F4FF",
      utfChar: "📿",
      CLDRShortName: "prayer beads",
    },
    {
      utf8Code: "U+1F484",
      utfChar: "💄",
      CLDRShortName: "lipstick",
    },
    {
      utf8Code: "U+1F48D",
      utfChar: "💍",
      CLDRShortName: "ring",
    },
    {
      utf8Code: "U+1F48E",
      utfChar: "💎",
      CLDRShortName: "gem stone",
    },
  ],
  sound: [
    {
      utf8Code: "U+1F507",
      utfChar: "🔇",
      CLDRShortName: "muted speaker",
    },
    {
      utf8Code: "U+1F508",
      utfChar: "🔈",
      CLDRShortName: "speaker low volume",
    },
    {
      utf8Code: "U+1F509",
      utfChar: "🔉",
      CLDRShortName: "speaker medium volume",
    },
    {
      utf8Code: "U+1F50A",
      utfChar: "🔊",
      CLDRShortName: "speaker high volume",
    },
    {
      utf8Code: "U+1F4E2",
      utfChar: "📢",
      CLDRShortName: "loudspeaker",
    },
    {
      utf8Code: "U+1F4E3",
      utfChar: "📣",
      CLDRShortName: "megaphone",
    },
    {
      utf8Code: "U+1F4EF",
      utfChar: "📯",
      CLDRShortName: "postal horn",
    },
    {
      utf8Code: "U+1F514",
      utfChar: "🔔",
      CLDRShortName: "bell",
    },
    {
      utf8Code: "U+1F515",
      utfChar: "🔕",
      CLDRShortName: "bell with slash",
    },
  ],
  music: [
    {
      utf8Code: "U+1F3BC",
      utfChar: "🎼",
      CLDRShortName: "musical score",
    },
    {
      utf8Code: "U+1F3B5",
      utfChar: "🎵",
      CLDRShortName: "musical note",
    },
    {
      utf8Code: "U+1F3B6",
      utfChar: "🎶",
      CLDRShortName: "musical notes",
    },
    {
      utf8Code: "U+1F399",
      utfChar: "🎙",
      CLDRShortName: "studio microphone",
    },
    {
      utf8Code: "U+1F39A",
      utfChar: "🎚",
      CLDRShortName: "level slider",
    },
    {
      utf8Code: "U+1F39B",
      utfChar: "🎛",
      CLDRShortName: "control knobs",
    },
    {
      utf8Code: "U+1F3A4",
      utfChar: "🎤",
      CLDRShortName: "microphone",
    },
    {
      utf8Code: "U+1F3A7",
      utfChar: "🎧",
      CLDRShortName: "headphone",
    },
    {
      utf8Code: "U+1F4FB",
      utfChar: "📻",
      CLDRShortName: "radio",
    },
  ],
  "musical-instrument": [
    {
      utf8Code: "U+1F3B7",
      utfChar: "🎷",
      CLDRShortName: "saxophone",
    },
    {
      utf8Code: "U+1FA97",
      utfChar: "🪗",
      CLDRShortName: "accordion",
    },
    {
      utf8Code: "U+1F3B8",
      utfChar: "🎸",
      CLDRShortName: "guitar",
    },
    {
      utf8Code: "U+1F3B9",
      utfChar: "🎹",
      CLDRShortName: "musical keyboard",
    },
    {
      utf8Code: "U+1F3BA",
      utfChar: "🎺",
      CLDRShortName: "trumpet",
    },
    {
      utf8Code: "U+1F3BB",
      utfChar: "🎻",
      CLDRShortName: "violin",
    },
    {
      utf8Code: "U+1FA95",
      utfChar: "🪕",
      CLDRShortName: "banjo",
    },
    {
      utf8Code: "U+1F941",
      utfChar: "🥁",
      CLDRShortName: "drum",
    },
    {
      utf8Code: "U+1FA98",
      utfChar: "🪘",
      CLDRShortName: "long drum",
    },
  ],
  phone: [
    {
      utf8Code: "U+1F4F1",
      utfChar: "📱",
      CLDRShortName: "mobile phone",
    },
    {
      utf8Code: "U+1F4F2",
      utfChar: "📲",
      CLDRShortName: "mobile phone with arrow",
    },
    {
      utf8Code: "U+260E",
      utfChar: "☎",
      CLDRShortName: "telephone",
    },
    {
      utf8Code: "U+1F4DE",
      utfChar: "📞",
      CLDRShortName: "telephone receiver",
    },
    {
      utf8Code: "U+1F4DF",
      utfChar: "📟",
      CLDRShortName: "pager",
    },
    {
      utf8Code: "U+1F4E0",
      utfChar: "📠",
      CLDRShortName: "fax machine",
    },
  ],
  computer: [
    {
      utf8Code: "U+1F50B",
      utfChar: "🔋",
      CLDRShortName: "battery",
    },
    {
      utf8Code: "U+1FAAB",
      utfChar: "🪫",
      CLDRShortName: "⊛ low battery",
    },
    {
      utf8Code: "U+1F50C",
      utfChar: "🔌",
      CLDRShortName: "electric plug",
    },
    {
      utf8Code: "U+1F4BB",
      utfChar: "💻",
      CLDRShortName: "laptop",
    },
    {
      utf8Code: "U+1F5A5",
      utfChar: "🖥",
      CLDRShortName: "desktop computer",
    },
    {
      utf8Code: "U+1F5A8",
      utfChar: "🖨",
      CLDRShortName: "printer",
    },
    {
      utf8Code: "U+2328",
      utfChar: "⌨",
      CLDRShortName: "keyboard",
    },
    {
      utf8Code: "U+1F5B1",
      utfChar: "🖱",
      CLDRShortName: "computer mouse",
    },
    {
      utf8Code: "U+1F5B2",
      utfChar: "🖲",
      CLDRShortName: "trackball",
    },
    {
      utf8Code: "U+1F4BD",
      utfChar: "💽",
      CLDRShortName: "computer disk",
    },
    {
      utf8Code: "U+1F4BE",
      utfChar: "💾",
      CLDRShortName: "floppy disk",
    },
    {
      utf8Code: "U+1F4BF",
      utfChar: "💿",
      CLDRShortName: "optical disk",
    },
    {
      utf8Code: "U+1F4C0",
      utfChar: "📀",
      CLDRShortName: "dvd",
    },
    {
      utf8Code: "U+1F9EE",
      utfChar: "🧮",
      CLDRShortName: "abacus",
    },
  ],
  "light & video": [
    {
      utf8Code: "U+1F3A5",
      utfChar: "🎥",
      CLDRShortName: "movie camera",
    },
    {
      utf8Code: "U+1F39E",
      utfChar: "🎞",
      CLDRShortName: "film frames",
    },
    {
      utf8Code: "U+1F4FD",
      utfChar: "📽",
      CLDRShortName: "film projector",
    },
    {
      utf8Code: "U+1F3AC",
      utfChar: "🎬",
      CLDRShortName: "clapper board",
    },
    {
      utf8Code: "U+1F4FA",
      utfChar: "📺",
      CLDRShortName: "television",
    },
    {
      utf8Code: "U+1F4F7",
      utfChar: "📷",
      CLDRShortName: "camera",
    },
    {
      utf8Code: "U+1F4F8",
      utfChar: "📸",
      CLDRShortName: "camera with flash",
    },
    {
      utf8Code: "U+1F4F9",
      utfChar: "📹",
      CLDRShortName: "video camera",
    },
    {
      utf8Code: "U+1F4FC",
      utfChar: "📼",
      CLDRShortName: "videocassette",
    },
    {
      utf8Code: "U+1F50D",
      utfChar: "🔍",
      CLDRShortName: "magnifying glass tilted left",
    },
    {
      utf8Code: "U+1F50E",
      utfChar: "🔎",
      CLDRShortName: "magnifying glass tilted right",
    },
    {
      utf8Code: "U+1F56F",
      utfChar: "🕯",
      CLDRShortName: "candle",
    },
    {
      utf8Code: "U+1F4A1",
      utfChar: "💡",
      CLDRShortName: "light bulb",
    },
    {
      utf8Code: "U+1F526",
      utfChar: "🔦",
      CLDRShortName: "flashlight",
    },
    {
      utf8Code: "U+1F3EE",
      utfChar: "🏮",
      CLDRShortName: "red paper lantern",
    },
    {
      utf8Code: "U+1FA94",
      utfChar: "🪔",
      CLDRShortName: "diya lamp",
    },
  ],
  "book-paper": [
    {
      utf8Code: "U+1F4D4",
      utfChar: "📔",
      CLDRShortName: "notebook with decorative cover",
    },
    {
      utf8Code: "U+1F4D5",
      utfChar: "📕",
      CLDRShortName: "closed book",
    },
    {
      utf8Code: "U+1F4D6",
      utfChar: "📖",
      CLDRShortName: "open book",
    },
    {
      utf8Code: "U+1F4D7",
      utfChar: "📗",
      CLDRShortName: "green book",
    },
    {
      utf8Code: "U+1F4D8",
      utfChar: "📘",
      CLDRShortName: "blue book",
    },
    {
      utf8Code: "U+1F4D9",
      utfChar: "📙",
      CLDRShortName: "orange book",
    },
    {
      utf8Code: "U+1F4DA",
      utfChar: "📚",
      CLDRShortName: "books",
    },
    {
      utf8Code: "U+1F4D3",
      utfChar: "📓",
      CLDRShortName: "notebook",
    },
    {
      utf8Code: "U+1F4D2",
      utfChar: "📒",
      CLDRShortName: "ledger",
    },
    {
      utf8Code: "U+1F4C3",
      utfChar: "📃",
      CLDRShortName: "page with curl",
    },
    {
      utf8Code: "U+1F4DC",
      utfChar: "📜",
      CLDRShortName: "scroll",
    },
    {
      utf8Code: "U+1F4C4",
      utfChar: "📄",
      CLDRShortName: "page facing up",
    },
    {
      utf8Code: "U+1F4F0",
      utfChar: "📰",
      CLDRShortName: "newspaper",
    },
    {
      utf8Code: "U+1F5DE",
      utfChar: "🗞",
      CLDRShortName: "rolled-up newspaper",
    },
    {
      utf8Code: "U+1F4D1",
      utfChar: "📑",
      CLDRShortName: "bookmark tabs",
    },
    {
      utf8Code: "U+1F516",
      utfChar: "🔖",
      CLDRShortName: "bookmark",
    },
    {
      utf8Code: "U+1F3F7",
      utfChar: "🏷",
      CLDRShortName: "label",
    },
  ],
  money: [
    {
      utf8Code: "U+1F4B0",
      utfChar: "💰",
      CLDRShortName: "money bag",
    },
    {
      utf8Code: "U+1FA99",
      utfChar: "🪙",
      CLDRShortName: "coin",
    },
    {
      utf8Code: "U+1F4B4",
      utfChar: "💴",
      CLDRShortName: "yen banknote",
    },
    {
      utf8Code: "U+1F4B5",
      utfChar: "💵",
      CLDRShortName: "dollar banknote",
    },
    {
      utf8Code: "U+1F4B6",
      utfChar: "💶",
      CLDRShortName: "euro banknote",
    },
    {
      utf8Code: "U+1F4B7",
      utfChar: "💷",
      CLDRShortName: "pound banknote",
    },
    {
      utf8Code: "U+1F4B8",
      utfChar: "💸",
      CLDRShortName: "money with wings",
    },
    {
      utf8Code: "U+1F4B3",
      utfChar: "💳",
      CLDRShortName: "credit card",
    },
    {
      utf8Code: "U+1F9FE",
      utfChar: "🧾",
      CLDRShortName: "receipt",
    },
    {
      utf8Code: "U+1F4B9",
      utfChar: "💹",
      CLDRShortName: "chart increasing with yen",
    },
  ],
  mail: [
    {
      utf8Code: "U+2709",
      utfChar: "✉",
      CLDRShortName: "envelope",
    },
    {
      utf8Code: "U+1F4E7",
      utfChar: "📧",
      CLDRShortName: "e-mail",
    },
    {
      utf8Code: "U+1F4E8",
      utfChar: "📨",
      CLDRShortName: "incoming envelope",
    },
    {
      utf8Code: "U+1F4E9",
      utfChar: "📩",
      CLDRShortName: "envelope with arrow",
    },
    {
      utf8Code: "U+1F4E4",
      utfChar: "📤",
      CLDRShortName: "outbox tray",
    },
    {
      utf8Code: "U+1F4E5",
      utfChar: "📥",
      CLDRShortName: "inbox tray",
    },
    {
      utf8Code: "U+1F4E6",
      utfChar: "📦",
      CLDRShortName: "package",
    },
    {
      utf8Code: "U+1F4EB",
      utfChar: "📫",
      CLDRShortName: "closed mailbox with raised flag",
    },
    {
      utf8Code: "U+1F4EA",
      utfChar: "📪",
      CLDRShortName: "closed mailbox with lowered flag",
    },
    {
      utf8Code: "U+1F4EC",
      utfChar: "📬",
      CLDRShortName: "open mailbox with raised flag",
    },
    {
      utf8Code: "U+1F4ED",
      utfChar: "📭",
      CLDRShortName: "open mailbox with lowered flag",
    },
    {
      utf8Code: "U+1F4EE",
      utfChar: "📮",
      CLDRShortName: "postbox",
    },
    {
      utf8Code: "U+1F5F3",
      utfChar: "🗳",
      CLDRShortName: "ballot box with ballot",
    },
  ],
  writing: [
    {
      utf8Code: "U+270F",
      utfChar: "✏",
      CLDRShortName: "pencil",
    },
    {
      utf8Code: "U+2712",
      utfChar: "✒",
      CLDRShortName: "black nib",
    },
    {
      utf8Code: "U+1F58B",
      utfChar: "🖋",
      CLDRShortName: "fountain pen",
    },
    {
      utf8Code: "U+1F58A",
      utfChar: "🖊",
      CLDRShortName: "pen",
    },
    {
      utf8Code: "U+1F58C",
      utfChar: "🖌",
      CLDRShortName: "paintbrush",
    },
    {
      utf8Code: "U+1F58D",
      utfChar: "🖍",
      CLDRShortName: "crayon",
    },
    {
      utf8Code: "U+1F4DD",
      utfChar: "📝",
      CLDRShortName: "memo",
    },
  ],
  office: [
    {
      utf8Code: "U+1F4BC",
      utfChar: "💼",
      CLDRShortName: "briefcase",
    },
    {
      utf8Code: "U+1F4C1",
      utfChar: "📁",
      CLDRShortName: "file folder",
    },
    {
      utf8Code: "U+1F4C2",
      utfChar: "📂",
      CLDRShortName: "open file folder",
    },
    {
      utf8Code: "U+1F5C2",
      utfChar: "🗂",
      CLDRShortName: "card index dividers",
    },
    {
      utf8Code: "U+1F4C5",
      utfChar: "📅",
      CLDRShortName: "calendar",
    },
    {
      utf8Code: "U+1F4C6",
      utfChar: "📆",
      CLDRShortName: "tear-off calendar",
    },
    {
      utf8Code: "U+1F5D2",
      utfChar: "🗒",
      CLDRShortName: "spiral notepad",
    },
    {
      utf8Code: "U+1F5D3",
      utfChar: "🗓",
      CLDRShortName: "spiral calendar",
    },
    {
      utf8Code: "U+1F4C7",
      utfChar: "📇",
      CLDRShortName: "card index",
    },
    {
      utf8Code: "U+1F4C8",
      utfChar: "📈",
      CLDRShortName: "chart increasing",
    },
    {
      utf8Code: "U+1F4C9",
      utfChar: "📉",
      CLDRShortName: "chart decreasing",
    },
    {
      utf8Code: "U+1F4CA",
      utfChar: "📊",
      CLDRShortName: "bar chart",
    },
    {
      utf8Code: "U+1F4CB",
      utfChar: "📋",
      CLDRShortName: "clipboard",
    },
    {
      utf8Code: "U+1F4CC",
      utfChar: "📌",
      CLDRShortName: "pushpin",
    },
    {
      utf8Code: "U+1F4CD",
      utfChar: "📍",
      CLDRShortName: "round pushpin",
    },
    {
      utf8Code: "U+1F4CE",
      utfChar: "📎",
      CLDRShortName: "paperclip",
    },
    {
      utf8Code: "U+1F587",
      utfChar: "🖇",
      CLDRShortName: "linked paperclips",
    },
    {
      utf8Code: "U+1F4CF",
      utfChar: "📏",
      CLDRShortName: "straight ruler",
    },
    {
      utf8Code: "U+1F4D0",
      utfChar: "📐",
      CLDRShortName: "triangular ruler",
    },
    {
      utf8Code: "U+2702",
      utfChar: "✂",
      CLDRShortName: "scissors",
    },
    {
      utf8Code: "U+1F5C3",
      utfChar: "🗃",
      CLDRShortName: "card file box",
    },
    {
      utf8Code: "U+1F5C4",
      utfChar: "🗄",
      CLDRShortName: "file cabinet",
    },
    {
      utf8Code: "U+1F5D1",
      utfChar: "🗑",
      CLDRShortName: "wastebasket",
    },
  ],
  lock: [
    {
      utf8Code: "U+1F512",
      utfChar: "🔒",
      CLDRShortName: "locked",
    },
    {
      utf8Code: "U+1F513",
      utfChar: "🔓",
      CLDRShortName: "unlocked",
    },
    {
      utf8Code: "U+1F50F",
      utfChar: "🔏",
      CLDRShortName: "locked with pen",
    },
    {
      utf8Code: "U+1F510",
      utfChar: "🔐",
      CLDRShortName: "locked with key",
    },
    {
      utf8Code: "U+1F511",
      utfChar: "🔑",
      CLDRShortName: "key",
    },
    {
      utf8Code: "U+1F5DD",
      utfChar: "🗝",
      CLDRShortName: "old key",
    },
  ],
  tool: [
    {
      utf8Code: "U+1F528",
      utfChar: "🔨",
      CLDRShortName: "hammer",
    },
    {
      utf8Code: "U+1FA93",
      utfChar: "🪓",
      CLDRShortName: "axe",
    },
    {
      utf8Code: "U+26CF",
      utfChar: "⛏",
      CLDRShortName: "pick",
    },
    {
      utf8Code: "U+2692",
      utfChar: "⚒",
      CLDRShortName: "hammer and pick",
    },
    {
      utf8Code: "U+1F6E0",
      utfChar: "🛠",
      CLDRShortName: "hammer and wrench",
    },
    {
      utf8Code: "U+1F5E1",
      utfChar: "🗡",
      CLDRShortName: "dagger",
    },
    {
      utf8Code: "U+2694",
      utfChar: "⚔",
      CLDRShortName: "crossed swords",
    },
    {
      utf8Code: "U+1F52B",
      utfChar: "🔫",
      CLDRShortName: "water pistol",
    },
    {
      utf8Code: "U+1FA83",
      utfChar: "🪃",
      CLDRShortName: "boomerang",
    },
    {
      utf8Code: "U+1F3F9",
      utfChar: "🏹",
      CLDRShortName: "bow and arrow",
    },
    {
      utf8Code: "U+1F6E1",
      utfChar: "🛡",
      CLDRShortName: "shield",
    },
    {
      utf8Code: "U+1FA9A",
      utfChar: "🪚",
      CLDRShortName: "carpentry saw",
    },
    {
      utf8Code: "U+1F527",
      utfChar: "🔧",
      CLDRShortName: "wrench",
    },
    {
      utf8Code: "U+1FA9B",
      utfChar: "🪛",
      CLDRShortName: "screwdriver",
    },
    {
      utf8Code: "U+1F529",
      utfChar: "🔩",
      CLDRShortName: "nut and bolt",
    },
    {
      utf8Code: "U+2699",
      utfChar: "⚙",
      CLDRShortName: "gear",
    },
    {
      utf8Code: "U+1F5DC",
      utfChar: "🗜",
      CLDRShortName: "clamp",
    },
    {
      utf8Code: "U+2696",
      utfChar: "⚖",
      CLDRShortName: "balance scale",
    },
    {
      utf8Code: "U+1F9AF",
      utfChar: "🦯",
      CLDRShortName: "white cane",
    },
    {
      utf8Code: "U+1F517",
      utfChar: "🔗",
      CLDRShortName: "link",
    },
    {
      utf8Code: "U+26D3",
      utfChar: "⛓",
      CLDRShortName: "chains",
    },
    {
      utf8Code: "U+1FA9D",
      utfChar: "🪝",
      CLDRShortName: "hook",
    },
    {
      utf8Code: "U+1F9F0",
      utfChar: "🧰",
      CLDRShortName: "toolbox",
    },
    {
      utf8Code: "U+1F9F2",
      utfChar: "🧲",
      CLDRShortName: "magnet",
    },
    {
      utf8Code: "U+1FA9C",
      utfChar: "🪜",
      CLDRShortName: "ladder",
    },
  ],
  science: [
    {
      utf8Code: "U+2697",
      utfChar: "⚗",
      CLDRShortName: "alembic",
    },
    {
      utf8Code: "U+1F9EA",
      utfChar: "🧪",
      CLDRShortName: "test tube",
    },
    {
      utf8Code: "U+1F9EB",
      utfChar: "🧫",
      CLDRShortName: "petri dish",
    },
    {
      utf8Code: "U+1F9EC",
      utfChar: "🧬",
      CLDRShortName: "dna",
    },
    {
      utf8Code: "U+1F52C",
      utfChar: "🔬",
      CLDRShortName: "microscope",
    },
    {
      utf8Code: "U+1F52D",
      utfChar: "🔭",
      CLDRShortName: "telescope",
    },
    {
      utf8Code: "U+1F4E1",
      utfChar: "📡",
      CLDRShortName: "satellite antenna",
    },
  ],
  medical: [
    {
      utf8Code: "U+1F489",
      utfChar: "💉",
      CLDRShortName: "syringe",
    },
    {
      utf8Code: "U+1FA78",
      utfChar: "🩸",
      CLDRShortName: "drop of blood",
    },
    {
      utf8Code: "U+1F48A",
      utfChar: "💊",
      CLDRShortName: "pill",
    },
    {
      utf8Code: "U+1FA79",
      utfChar: "🩹",
      CLDRShortName: "adhesive bandage",
    },
    {
      utf8Code: "U+1FA7C",
      utfChar: "🩼",
      CLDRShortName: "⊛ crutch",
    },
    {
      utf8Code: "U+1FA7A",
      utfChar: "🩺",
      CLDRShortName: "stethoscope",
    },
    {
      utf8Code: "U+1FA7B",
      utfChar: "🩻",
      CLDRShortName: "⊛ x-ray",
    },
  ],
  household: [
    {
      utf8Code: "U+1F6AA",
      utfChar: "🚪",
      CLDRShortName: "door",
    },
    {
      utf8Code: "U+1F6D7",
      utfChar: "🛗",
      CLDRShortName: "elevator",
    },
    {
      utf8Code: "U+1FA9E",
      utfChar: "🪞",
      CLDRShortName: "mirror",
    },
    {
      utf8Code: "U+1FA9F",
      utfChar: "🪟",
      CLDRShortName: "window",
    },
    {
      utf8Code: "U+1F6CF",
      utfChar: "🛏",
      CLDRShortName: "bed",
    },
    {
      utf8Code: "U+1F6CB",
      utfChar: "🛋",
      CLDRShortName: "couch and lamp",
    },
    {
      utf8Code: "U+1FA91",
      utfChar: "🪑",
      CLDRShortName: "chair",
    },
    {
      utf8Code: "U+1F6BD",
      utfChar: "🚽",
      CLDRShortName: "toilet",
    },
    {
      utf8Code: "U+1FAA0",
      utfChar: "🪠",
      CLDRShortName: "plunger",
    },
    {
      utf8Code: "U+1F6BF",
      utfChar: "🚿",
      CLDRShortName: "shower",
    },
    {
      utf8Code: "U+1F6C1",
      utfChar: "🛁",
      CLDRShortName: "bathtub",
    },
    {
      utf8Code: "U+1FAA4",
      utfChar: "🪤",
      CLDRShortName: "mouse trap",
    },
    {
      utf8Code: "U+1FA92",
      utfChar: "🪒",
      CLDRShortName: "razor",
    },
    {
      utf8Code: "U+1F9F4",
      utfChar: "🧴",
      CLDRShortName: "lotion bottle",
    },
    {
      utf8Code: "U+1F9F7",
      utfChar: "🧷",
      CLDRShortName: "safety pin",
    },
    {
      utf8Code: "U+1F9F9",
      utfChar: "🧹",
      CLDRShortName: "broom",
    },
    {
      utf8Code: "U+1F9FA",
      utfChar: "🧺",
      CLDRShortName: "basket",
    },
    {
      utf8Code: "U+1F9FB",
      utfChar: "🧻",
      CLDRShortName: "roll of paper",
    },
    {
      utf8Code: "U+1FAA3",
      utfChar: "🪣",
      CLDRShortName: "bucket",
    },
    {
      utf8Code: "U+1F9FC",
      utfChar: "🧼",
      CLDRShortName: "soap",
    },
    {
      utf8Code: "U+1FAE7",
      utfChar: "🫧",
      CLDRShortName: "⊛ bubbles",
    },
    {
      utf8Code: "U+1FAA5",
      utfChar: "🪥",
      CLDRShortName: "toothbrush",
    },
    {
      utf8Code: "U+1F9FD",
      utfChar: "🧽",
      CLDRShortName: "sponge",
    },
    {
      utf8Code: "U+1F9EF",
      utfChar: "🧯",
      CLDRShortName: "fire extinguisher",
    },
    {
      utf8Code: "U+1F6D2",
      utfChar: "🛒",
      CLDRShortName: "shopping cart",
    },
  ],
  "other-object": [
    {
      utf8Code: "U+1F6AC",
      utfChar: "🚬",
      CLDRShortName: "cigarette",
    },
    {
      utf8Code: "U+26B0",
      utfChar: "⚰",
      CLDRShortName: "coffin",
    },
    {
      utf8Code: "U+1FAA6",
      utfChar: "🪦",
      CLDRShortName: "headstone",
    },
    {
      utf8Code: "U+26B1",
      utfChar: "⚱",
      CLDRShortName: "funeral urn",
    },
    {
      utf8Code: "U+1F5FF",
      utfChar: "🗿",
      CLDRShortName: "moai",
    },
    {
      utf8Code: "U+1FAA7",
      utfChar: "🪧",
      CLDRShortName: "placard",
    },
    {
      utf8Code: "U+1FAAA",
      utfChar: "🪪",
      CLDRShortName: "⊛ identification card",
    },
  ],
  "transport-sign": [
    {
      utf8Code: "U+1F3E7",
      utfChar: "🏧",
      CLDRShortName: "ATM sign",
    },
    {
      utf8Code: "U+1F6AE",
      utfChar: "🚮",
      CLDRShortName: "litter in bin sign",
    },
    {
      utf8Code: "U+1F6B0",
      utfChar: "🚰",
      CLDRShortName: "potable water",
    },
    {
      utf8Code: "U+267F",
      utfChar: "♿",
      CLDRShortName: "wheelchair symbol",
    },
    {
      utf8Code: "U+1F6B9",
      utfChar: "🚹",
      CLDRShortName: "men’s room",
    },
    {
      utf8Code: "U+1F6BA",
      utfChar: "🚺",
      CLDRShortName: "women’s room",
    },
    {
      utf8Code: "U+1F6BB",
      utfChar: "🚻",
      CLDRShortName: "restroom",
    },
    {
      utf8Code: "U+1F6BC",
      utfChar: "🚼",
      CLDRShortName: "baby symbol",
    },
    {
      utf8Code: "U+1F6BE",
      utfChar: "🚾",
      CLDRShortName: "water closet",
    },
    {
      utf8Code: "U+1F6C2",
      utfChar: "🛂",
      CLDRShortName: "passport control",
    },
    {
      utf8Code: "U+1F6C3",
      utfChar: "🛃",
      CLDRShortName: "customs",
    },
    {
      utf8Code: "U+1F6C4",
      utfChar: "🛄",
      CLDRShortName: "baggage claim",
    },
    {
      utf8Code: "U+1F6C5",
      utfChar: "🛅",
      CLDRShortName: "left luggage",
    },
  ],
  warning: [
    {
      utf8Code: "U+26A0",
      utfChar: "⚠",
      CLDRShortName: "warning",
    },
    {
      utf8Code: "U+1F6B8",
      utfChar: "🚸",
      CLDRShortName: "children crossing",
    },
    {
      utf8Code: "U+26D4",
      utfChar: "⛔",
      CLDRShortName: "no entry",
    },
    {
      utf8Code: "U+1F6AB",
      utfChar: "🚫",
      CLDRShortName: "prohibited",
    },
    {
      utf8Code: "U+1F6B3",
      utfChar: "🚳",
      CLDRShortName: "no bicycles",
    },
    {
      utf8Code: "U+1F6AD",
      utfChar: "🚭",
      CLDRShortName: "no smoking",
    },
    {
      utf8Code: "U+1F6AF",
      utfChar: "🚯",
      CLDRShortName: "no littering",
    },
    {
      utf8Code: "U+1F6B1",
      utfChar: "🚱",
      CLDRShortName: "non-potable water",
    },
    {
      utf8Code: "U+1F6B7",
      utfChar: "🚷",
      CLDRShortName: "no pedestrians",
    },
    {
      utf8Code: "U+1F4F5",
      utfChar: "📵",
      CLDRShortName: "no mobile phones",
    },
    {
      utf8Code: "U+1F51E",
      utfChar: "🔞",
      CLDRShortName: "no one under eighteen",
    },
    {
      utf8Code: "U+2622",
      utfChar: "☢",
      CLDRShortName: "radioactive",
    },
    {
      utf8Code: "U+2623",
      utfChar: "☣",
      CLDRShortName: "biohazard",
    },
  ],
  arrow: [
    {
      utf8Code: "U+2B06",
      utfChar: "⬆",
      CLDRShortName: "up arrow",
    },
    {
      utf8Code: "U+2197",
      utfChar: "↗",
      CLDRShortName: "up-right arrow",
    },
    {
      utf8Code: "U+27A1",
      utfChar: "➡",
      CLDRShortName: "right arrow",
    },
    {
      utf8Code: "U+2198",
      utfChar: "↘",
      CLDRShortName: "down-right arrow",
    },
    {
      utf8Code: "U+2B07",
      utfChar: "⬇",
      CLDRShortName: "down arrow",
    },
    {
      utf8Code: "U+2199",
      utfChar: "↙",
      CLDRShortName: "down-left arrow",
    },
    {
      utf8Code: "U+2B05",
      utfChar: "⬅",
      CLDRShortName: "left arrow",
    },
    {
      utf8Code: "U+2196",
      utfChar: "↖",
      CLDRShortName: "up-left arrow",
    },
    {
      utf8Code: "U+2195",
      utfChar: "↕",
      CLDRShortName: "up-down arrow",
    },
    {
      utf8Code: "U+2194",
      utfChar: "↔",
      CLDRShortName: "left-right arrow",
    },
    {
      utf8Code: "U+21A9",
      utfChar: "↩",
      CLDRShortName: "right arrow curving left",
    },
    {
      utf8Code: "U+21AA",
      utfChar: "↪",
      CLDRShortName: "left arrow curving right",
    },
    {
      utf8Code: "U+2934",
      utfChar: "⤴",
      CLDRShortName: "right arrow curving up",
    },
    {
      utf8Code: "U+2935",
      utfChar: "⤵",
      CLDRShortName: "right arrow curving down",
    },
    {
      utf8Code: "U+1F503",
      utfChar: "🔃",
      CLDRShortName: "clockwise vertical arrows",
    },
    {
      utf8Code: "U+1F504",
      utfChar: "🔄",
      CLDRShortName: "counterclockwise arrows button",
    },
    {
      utf8Code: "U+1F519",
      utfChar: "🔙",
      CLDRShortName: "BACK arrow",
    },
    {
      utf8Code: "U+1F51A",
      utfChar: "🔚",
      CLDRShortName: "END arrow",
    },
    {
      utf8Code: "U+1F51B",
      utfChar: "🔛",
      CLDRShortName: "ON! arrow",
    },
    {
      utf8Code: "U+1F51C",
      utfChar: "🔜",
      CLDRShortName: "SOON arrow",
    },
    {
      utf8Code: "U+1F51D",
      utfChar: "🔝",
      CLDRShortName: "TOP arrow",
    },
  ],
  religion: [
    {
      utf8Code: "U+1F6D0",
      utfChar: "🛐",
      CLDRShortName: "place of worship",
    },
    {
      utf8Code: "U+269B",
      utfChar: "⚛",
      CLDRShortName: "atom symbol",
    },
    {
      utf8Code: "U+1F549",
      utfChar: "🕉",
      CLDRShortName: "om",
    },
    {
      utf8Code: "U+2721",
      utfChar: "✡",
      CLDRShortName: "star of David",
    },
    {
      utf8Code: "U+2638",
      utfChar: "☸",
      CLDRShortName: "wheel of dharma",
    },
    {
      utf8Code: "U+262F",
      utfChar: "☯",
      CLDRShortName: "yin yang",
    },
    {
      utf8Code: "U+271D",
      utfChar: "✝",
      CLDRShortName: "latin cross",
    },
    {
      utf8Code: "U+2626",
      utfChar: "☦",
      CLDRShortName: "orthodox cross",
    },
    {
      utf8Code: "U+262A",
      utfChar: "☪",
      CLDRShortName: "star and crescent",
    },
    {
      utf8Code: "U+262E",
      utfChar: "☮",
      CLDRShortName: "peace symbol",
    },
    {
      utf8Code: "U+1F54E",
      utfChar: "🕎",
      CLDRShortName: "menorah",
    },
    {
      utf8Code: "U+1F52F",
      utfChar: "🔯",
      CLDRShortName: "dotted six-pointed star",
    },
  ],
  zodiac: [
    {
      utf8Code: "U+2648",
      utfChar: "♈",
      CLDRShortName: "Aries",
    },
    {
      utf8Code: "U+2649",
      utfChar: "♉",
      CLDRShortName: "Taurus",
    },
    {
      utf8Code: "U+264A",
      utfChar: "♊",
      CLDRShortName: "Gemini",
    },
    {
      utf8Code: "U+264B",
      utfChar: "♋",
      CLDRShortName: "Cancer",
    },
    {
      utf8Code: "U+264C",
      utfChar: "♌",
      CLDRShortName: "Leo",
    },
    {
      utf8Code: "U+264D",
      utfChar: "♍",
      CLDRShortName: "Virgo",
    },
    {
      utf8Code: "U+264E",
      utfChar: "♎",
      CLDRShortName: "Libra",
    },
    {
      utf8Code: "U+264F",
      utfChar: "♏",
      CLDRShortName: "Scorpio",
    },
    {
      utf8Code: "U+2650",
      utfChar: "♐",
      CLDRShortName: "Sagittarius",
    },
    {
      utf8Code: "U+2651",
      utfChar: "♑",
      CLDRShortName: "Capricorn",
    },
    {
      utf8Code: "U+2652",
      utfChar: "♒",
      CLDRShortName: "Aquarius",
    },
    {
      utf8Code: "U+2653",
      utfChar: "♓",
      CLDRShortName: "Pisces",
    },
    {
      utf8Code: "U+26CE",
      utfChar: "⛎",
      CLDRShortName: "Ophiuchus",
    },
  ],
  "av-symbol": [
    {
      utf8Code: "U+1F500",
      utfChar: "🔀",
      CLDRShortName: "shuffle tracks button",
    },
    {
      utf8Code: "U+1F501",
      utfChar: "🔁",
      CLDRShortName: "repeat button",
    },
    {
      utf8Code: "U+1F502",
      utfChar: "🔂",
      CLDRShortName: "repeat single button",
    },
    {
      utf8Code: "U+25B6",
      utfChar: "▶",
      CLDRShortName: "play button",
    },
    {
      utf8Code: "U+23E9",
      utfChar: "⏩",
      CLDRShortName: "fast-forward button",
    },
    {
      utf8Code: "U+23ED",
      utfChar: "⏭",
      CLDRShortName: "next track button",
    },
    {
      utf8Code: "U+23EF",
      utfChar: "⏯",
      CLDRShortName: "play or pause button",
    },
    {
      utf8Code: "U+25C0",
      utfChar: "◀",
      CLDRShortName: "reverse button",
    },
    {
      utf8Code: "U+23EA",
      utfChar: "⏪",
      CLDRShortName: "fast reverse button",
    },
    {
      utf8Code: "U+23EE",
      utfChar: "⏮",
      CLDRShortName: "last track button",
    },
    {
      utf8Code: "U+1F53C",
      utfChar: "🔼",
      CLDRShortName: "upwards button",
    },
    {
      utf8Code: "U+23EB",
      utfChar: "⏫",
      CLDRShortName: "fast up button",
    },
    {
      utf8Code: "U+1F53D",
      utfChar: "🔽",
      CLDRShortName: "downwards button",
    },
    {
      utf8Code: "U+23EC",
      utfChar: "⏬",
      CLDRShortName: "fast down button",
    },
    {
      utf8Code: "U+23F8",
      utfChar: "⏸",
      CLDRShortName: "pause button",
    },
    {
      utf8Code: "U+23F9",
      utfChar: "⏹",
      CLDRShortName: "stop button",
    },
    {
      utf8Code: "U+23FA",
      utfChar: "⏺",
      CLDRShortName: "record button",
    },
    {
      utf8Code: "U+23CF",
      utfChar: "⏏",
      CLDRShortName: "eject button",
    },
    {
      utf8Code: "U+1F3A6",
      utfChar: "🎦",
      CLDRShortName: "cinema",
    },
    {
      utf8Code: "U+1F505",
      utfChar: "🔅",
      CLDRShortName: "dim button",
    },
    {
      utf8Code: "U+1F506",
      utfChar: "🔆",
      CLDRShortName: "bright button",
    },
    {
      utf8Code: "U+1F4F6",
      utfChar: "📶",
      CLDRShortName: "antenna bars",
    },
    {
      utf8Code: "U+1F4F3",
      utfChar: "📳",
      CLDRShortName: "vibration mode",
    },
    {
      utf8Code: "U+1F4F4",
      utfChar: "📴",
      CLDRShortName: "mobile phone off",
    },
  ],
  gender: [
    {
      utf8Code: "U+2640",
      utfChar: "♀",
      CLDRShortName: "female sign",
    },
    {
      utf8Code: "U+2642",
      utfChar: "♂",
      CLDRShortName: "male sign",
    },
    {
      utf8Code: "U+26A7",
      utfChar: "⚧",
      CLDRShortName: "transgender symbol",
    },
  ],
  math: [
    {
      utf8Code: "U+2716",
      utfChar: "✖",
      CLDRShortName: "multiply",
    },
    {
      utf8Code: "U+2795",
      utfChar: "➕",
      CLDRShortName: "plus",
    },
    {
      utf8Code: "U+2796",
      utfChar: "➖",
      CLDRShortName: "minus",
    },
    {
      utf8Code: "U+2797",
      utfChar: "➗",
      CLDRShortName: "divide",
    },
    {
      utf8Code: "U+1F7F0",
      utfChar: "🟰",
      CLDRShortName: "⊛ heavy equals sign",
    },
    {
      utf8Code: "U+267E",
      utfChar: "♾",
      CLDRShortName: "infinity",
    },
  ],
  punctuation: [
    {
      utf8Code: "U+203C",
      utfChar: "‼",
      CLDRShortName: "double exclamation mark",
    },
    {
      utf8Code: "U+2049",
      utfChar: "⁉",
      CLDRShortName: "exclamation question mark",
    },
    {
      utf8Code: "U+2753",
      utfChar: "❓",
      CLDRShortName: "red question mark",
    },
    {
      utf8Code: "U+2754",
      utfChar: "❔",
      CLDRShortName: "white question mark",
    },
    {
      utf8Code: "U+2755",
      utfChar: "❕",
      CLDRShortName: "white exclamation mark",
    },
    {
      utf8Code: "U+2757",
      utfChar: "❗",
      CLDRShortName: "red exclamation mark",
    },
    {
      utf8Code: "U+3030",
      utfChar: "〰",
      CLDRShortName: "wavy dash",
    },
  ],
  currency: [
    {
      utf8Code: "U+1F4B1",
      utfChar: "💱",
      CLDRShortName: "currency exchange",
    },
    {
      utf8Code: "U+1F4B2",
      utfChar: "💲",
      CLDRShortName: "heavy dollar sign",
    },
  ],
  "other-symbol": [
    {
      utf8Code: "U+2695",
      utfChar: "⚕",
      CLDRShortName: "medical symbol",
    },
    {
      utf8Code: "U+267B",
      utfChar: "♻",
      CLDRShortName: "recycling symbol",
    },
    {
      utf8Code: "U+269C",
      utfChar: "⚜",
      CLDRShortName: "fleur-de-lis",
    },
    {
      utf8Code: "U+1F531",
      utfChar: "🔱",
      CLDRShortName: "trident emblem",
    },
    {
      utf8Code: "U+1F4DB",
      utfChar: "📛",
      CLDRShortName: "name badge",
    },
    {
      utf8Code: "U+1F530",
      utfChar: "🔰",
      CLDRShortName: "Japanese symbol for beginner",
    },
    {
      utf8Code: "U+2B55",
      utfChar: "⭕",
      CLDRShortName: "hollow red circle",
    },
    {
      utf8Code: "U+2705",
      utfChar: "✅",
      CLDRShortName: "check mark button",
    },
    {
      utf8Code: "U+2611",
      utfChar: "☑",
      CLDRShortName: "check box with check",
    },
    {
      utf8Code: "U+2714",
      utfChar: "✔",
      CLDRShortName: "check mark",
    },
    {
      utf8Code: "U+274C",
      utfChar: "❌",
      CLDRShortName: "cross mark",
    },
    {
      utf8Code: "U+274E",
      utfChar: "❎",
      CLDRShortName: "cross mark button",
    },
    {
      utf8Code: "U+27B0",
      utfChar: "➰",
      CLDRShortName: "curly loop",
    },
    {
      utf8Code: "U+27BF",
      utfChar: "➿",
      CLDRShortName: "double curly loop",
    },
    {
      utf8Code: "U+303D",
      utfChar: "〽",
      CLDRShortName: "part alternation mark",
    },
    {
      utf8Code: "U+2733",
      utfChar: "✳",
      CLDRShortName: "eight-spoked asterisk",
    },
    {
      utf8Code: "U+2734",
      utfChar: "✴",
      CLDRShortName: "eight-pointed star",
    },
    {
      utf8Code: "U+2747",
      utfChar: "❇",
      CLDRShortName: "sparkle",
    },
    {
      utf8Code: "U+00A9",
      utfChar: "©",
      CLDRShortName: "copyright",
    },
    {
      utf8Code: "U+00AE",
      utfChar: "®",
      CLDRShortName: "registered",
    },
    {
      utf8Code: "U+2122",
      utfChar: "™",
      CLDRShortName: "trade mark",
    },
  ],
  keycap: [
    {
      utf8Code: "U+0023 U+FE0F U+20E3",
      utfChar: "#️⃣",
      CLDRShortName: "keycap: #",
    },
    {
      utf8Code: "U+002A U+FE0F U+20E3",
      utfChar: "*️⃣",
      CLDRShortName: "keycap: *",
    },
    {
      utf8Code: "U+0030 U+FE0F U+20E3",
      utfChar: "0️⃣",
      CLDRShortName: "keycap: 0",
    },
    {
      utf8Code: "U+0031 U+FE0F U+20E3",
      utfChar: "1️⃣",
      CLDRShortName: "keycap: 1",
    },
    {
      utf8Code: "U+0032 U+FE0F U+20E3",
      utfChar: "2️⃣",
      CLDRShortName: "keycap: 2",
    },
    {
      utf8Code: "U+0033 U+FE0F U+20E3",
      utfChar: "3️⃣",
      CLDRShortName: "keycap: 3",
    },
    {
      utf8Code: "U+0034 U+FE0F U+20E3",
      utfChar: "4️⃣",
      CLDRShortName: "keycap: 4",
    },
    {
      utf8Code: "U+0035 U+FE0F U+20E3",
      utfChar: "5️⃣",
      CLDRShortName: "keycap: 5",
    },
    {
      utf8Code: "U+0036 U+FE0F U+20E3",
      utfChar: "6️⃣",
      CLDRShortName: "keycap: 6",
    },
    {
      utf8Code: "U+0037 U+FE0F U+20E3",
      utfChar: "7️⃣",
      CLDRShortName: "keycap: 7",
    },
    {
      utf8Code: "U+0038 U+FE0F U+20E3",
      utfChar: "8️⃣",
      CLDRShortName: "keycap: 8",
    },
    {
      utf8Code: "U+0039 U+FE0F U+20E3",
      utfChar: "9️⃣",
      CLDRShortName: "keycap: 9",
    },
    {
      utf8Code: "U+1F51F",
      utfChar: "🔟",
      CLDRShortName: "keycap: 10",
    },
  ],
  alphanum: [
    {
      utf8Code: "U+1F520",
      utfChar: "🔠",
      CLDRShortName: "input latin uppercase",
    },
    {
      utf8Code: "U+1F521",
      utfChar: "🔡",
      CLDRShortName: "input latin lowercase",
    },
    {
      utf8Code: "U+1F522",
      utfChar: "🔢",
      CLDRShortName: "input numbers",
    },
    {
      utf8Code: "U+1F523",
      utfChar: "🔣",
      CLDRShortName: "input symbols",
    },
    {
      utf8Code: "U+1F524",
      utfChar: "🔤",
      CLDRShortName: "input latin letters",
    },
    {
      utf8Code: "U+1F170",
      utfChar: "🅰",
      CLDRShortName: "A button (blood type)",
    },
    {
      utf8Code: "U+1F18E",
      utfChar: "🆎",
      CLDRShortName: "AB button (blood type)",
    },
    {
      utf8Code: "U+1F171",
      utfChar: "🅱",
      CLDRShortName: "B button (blood type)",
    },
    {
      utf8Code: "U+1F191",
      utfChar: "🆑",
      CLDRShortName: "CL button",
    },
    {
      utf8Code: "U+1F192",
      utfChar: "🆒",
      CLDRShortName: "COOL button",
    },
    {
      utf8Code: "U+1F193",
      utfChar: "🆓",
      CLDRShortName: "FREE button",
    },
    {
      utf8Code: "U+2139",
      utfChar: "ℹ",
      CLDRShortName: "information",
    },
    {
      utf8Code: "U+1F194",
      utfChar: "🆔",
      CLDRShortName: "ID button",
    },
    {
      utf8Code: "U+24C2",
      utfChar: "Ⓜ",
      CLDRShortName: "circled M",
    },
    {
      utf8Code: "U+1F195",
      utfChar: "🆕",
      CLDRShortName: "NEW button",
    },
    {
      utf8Code: "U+1F196",
      utfChar: "🆖",
      CLDRShortName: "NG button",
    },
    {
      utf8Code: "U+1F17E",
      utfChar: "🅾",
      CLDRShortName: "O button (blood type)",
    },
    {
      utf8Code: "U+1F197",
      utfChar: "🆗",
      CLDRShortName: "OK button",
    },
    {
      utf8Code: "U+1F17F",
      utfChar: "🅿",
      CLDRShortName: "P button",
    },
    {
      utf8Code: "U+1F198",
      utfChar: "🆘",
      CLDRShortName: "SOS button",
    },
    {
      utf8Code: "U+1F199",
      utfChar: "🆙",
      CLDRShortName: "UP! button",
    },
    {
      utf8Code: "U+1F19A",
      utfChar: "🆚",
      CLDRShortName: "VS button",
    },
    {
      utf8Code: "U+1F201",
      utfChar: "🈁",
      CLDRShortName: "Japanese “here” button",
    },
    {
      utf8Code: "U+1F202",
      utfChar: "🈂",
      CLDRShortName: "Japanese “service charge” button",
    },
    {
      utf8Code: "U+1F237",
      utfChar: "🈷",
      CLDRShortName: "Japanese “monthly amount” button",
    },
    {
      utf8Code: "U+1F236",
      utfChar: "🈶",
      CLDRShortName: "Japanese “not free of charge” button",
    },
    {
      utf8Code: "U+1F22F",
      utfChar: "🈯",
      CLDRShortName: "Japanese “reserved” button",
    },
    {
      utf8Code: "U+1F250",
      utfChar: "🉐",
      CLDRShortName: "Japanese “bargain” button",
    },
    {
      utf8Code: "U+1F239",
      utfChar: "🈹",
      CLDRShortName: "Japanese “discount” button",
    },
    {
      utf8Code: "U+1F21A",
      utfChar: "🈚",
      CLDRShortName: "Japanese “free of charge” button",
    },
    {
      utf8Code: "U+1F232",
      utfChar: "🈲",
      CLDRShortName: "Japanese “prohibited” button",
    },
    {
      utf8Code: "U+1F251",
      utfChar: "🉑",
      CLDRShortName: "Japanese “acceptable” button",
    },
    {
      utf8Code: "U+1F238",
      utfChar: "🈸",
      CLDRShortName: "Japanese “application” button",
    },
    {
      utf8Code: "U+1F234",
      utfChar: "🈴",
      CLDRShortName: "Japanese “passing grade” button",
    },
    {
      utf8Code: "U+1F233",
      utfChar: "🈳",
      CLDRShortName: "Japanese “vacancy” button",
    },
    {
      utf8Code: "U+3297",
      utfChar: "㊗",
      CLDRShortName: "Japanese “congratulations” button",
    },
    {
      utf8Code: "U+3299",
      utfChar: "㊙",
      CLDRShortName: "Japanese “secret” button",
    },
    {
      utf8Code: "U+1F23A",
      utfChar: "🈺",
      CLDRShortName: "Japanese “open for business” button",
    },
    {
      utf8Code: "U+1F235",
      utfChar: "🈵",
      CLDRShortName: "Japanese “no vacancy” button",
    },
  ],
  geometric: [
    {
      utf8Code: "U+1F534",
      utfChar: "🔴",
      CLDRShortName: "red circle",
    },
    {
      utf8Code: "U+1F7E0",
      utfChar: "🟠",
      CLDRShortName: "orange circle",
    },
    {
      utf8Code: "U+1F7E1",
      utfChar: "🟡",
      CLDRShortName: "yellow circle",
    },
    {
      utf8Code: "U+1F7E2",
      utfChar: "🟢",
      CLDRShortName: "green circle",
    },
    {
      utf8Code: "U+1F535",
      utfChar: "🔵",
      CLDRShortName: "blue circle",
    },
    {
      utf8Code: "U+1F7E3",
      utfChar: "🟣",
      CLDRShortName: "purple circle",
    },
    {
      utf8Code: "U+1F7E4",
      utfChar: "🟤",
      CLDRShortName: "brown circle",
    },
    {
      utf8Code: "U+26AB",
      utfChar: "⚫",
      CLDRShortName: "black circle",
    },
    {
      utf8Code: "U+26AA",
      utfChar: "⚪",
      CLDRShortName: "white circle",
    },
    {
      utf8Code: "U+1F7E5",
      utfChar: "🟥",
      CLDRShortName: "red square",
    },
    {
      utf8Code: "U+1F7E7",
      utfChar: "🟧",
      CLDRShortName: "orange square",
    },
    {
      utf8Code: "U+1F7E8",
      utfChar: "🟨",
      CLDRShortName: "yellow square",
    },
    {
      utf8Code: "U+1F7E9",
      utfChar: "🟩",
      CLDRShortName: "green square",
    },
    {
      utf8Code: "U+1F7E6",
      utfChar: "🟦",
      CLDRShortName: "blue square",
    },
    {
      utf8Code: "U+1F7EA",
      utfChar: "🟪",
      CLDRShortName: "purple square",
    },
    {
      utf8Code: "U+1F7EB",
      utfChar: "🟫",
      CLDRShortName: "brown square",
    },
    {
      utf8Code: "U+2B1B",
      utfChar: "⬛",
      CLDRShortName: "black large square",
    },
    {
      utf8Code: "U+2B1C",
      utfChar: "⬜",
      CLDRShortName: "white large square",
    },
    {
      utf8Code: "U+25FC",
      utfChar: "◼",
      CLDRShortName: "black medium square",
    },
    {
      utf8Code: "U+25FB",
      utfChar: "◻",
      CLDRShortName: "white medium square",
    },
    {
      utf8Code: "U+25FE",
      utfChar: "◾",
      CLDRShortName: "black medium-small square",
    },
    {
      utf8Code: "U+25FD",
      utfChar: "◽",
      CLDRShortName: "white medium-small square",
    },
    {
      utf8Code: "U+25AA",
      utfChar: "▪",
      CLDRShortName: "black small square",
    },
    {
      utf8Code: "U+25AB",
      utfChar: "▫",
      CLDRShortName: "white small square",
    },
    {
      utf8Code: "U+1F536",
      utfChar: "🔶",
      CLDRShortName: "large orange diamond",
    },
    {
      utf8Code: "U+1F537",
      utfChar: "🔷",
      CLDRShortName: "large blue diamond",
    },
    {
      utf8Code: "U+1F538",
      utfChar: "🔸",
      CLDRShortName: "small orange diamond",
    },
    {
      utf8Code: "U+1F539",
      utfChar: "🔹",
      CLDRShortName: "small blue diamond",
    },
    {
      utf8Code: "U+1F53A",
      utfChar: "🔺",
      CLDRShortName: "red triangle pointed up",
    },
    {
      utf8Code: "U+1F53B",
      utfChar: "🔻",
      CLDRShortName: "red triangle pointed down",
    },
    {
      utf8Code: "U+1F4A0",
      utfChar: "💠",
      CLDRShortName: "diamond with a dot",
    },
    {
      utf8Code: "U+1F518",
      utfChar: "🔘",
      CLDRShortName: "radio button",
    },
    {
      utf8Code: "U+1F533",
      utfChar: "🔳",
      CLDRShortName: "white square button",
    },
    {
      utf8Code: "U+1F532",
      utfChar: "🔲",
      CLDRShortName: "black square button",
    },
  ],
  flag: [
    {
      utf8Code: "U+1F3C1",
      utfChar: "🏁",
      CLDRShortName: "chequered flag",
    },
    {
      utf8Code: "U+1F6A9",
      utfChar: "🚩",
      CLDRShortName: "triangular flag",
    },
    {
      utf8Code: "U+1F38C",
      utfChar: "🎌",
      CLDRShortName: "crossed flags",
    },
    {
      utf8Code: "U+1F3F4",
      utfChar: "🏴",
      CLDRShortName: "black flag",
    },
    {
      utf8Code: "U+1F3F3",
      utfChar: "🏳",
      CLDRShortName: "white flag",
    },
    {
      utf8Code: "U+1F3F3 U+FE0F U+200D U+1F308",
      utfChar: "🏳️‍🌈",
      CLDRShortName: "rainbow flag",
    },
    {
      utf8Code: "U+1F3F3 U+FE0F U+200D U+26A7 U+FE0F",
      utfChar: "🏳️‍⚧️",
      CLDRShortName: "transgender flag",
    },
    {
      utf8Code: "U+1F3F4 U+200D U+2620 U+FE0F",
      utfChar: "🏴‍☠️",
      CLDRShortName: "pirate flag",
    },
  ],
};

angular.module('app').constant("emojies", emojies);

