import React from "react";
import { Text, View, Image } from "react-native";

export default class App extends React.PureComponent {
  render() {
    //Random Color Codes will be used if color value is not defined or passed as a prop
    let random_colors = [
      "#E75521",
      "#079E98",
      "#3492D4",
      "#F8A326",
      "#E94B35",
      "#22CC69",
      "#1851D0",
      "#8F43B1",
      "#F74F91",
      "#050505",
      "#10A211",
      "#FA06D9",
      "#641E16",
      "#4A235A",
      "#D35400",
      "#C00033",
      "#571845",
      "#0078D7",
      "#008000",
      "#FD602F"
    ];

    // List of valid colors
    let valid_colours_object = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      "indianred ": "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };

    const DEFAULT_COLOR = "white";
    const DEFAULT_BACKGROUND_COLOR = "orange";
    const DEFAULT_FONT_WEIGHT = "bold";
    const DEFAULT_SIZE = 50;
    const DEFAULT_USER_AVATAR_NAME = "U";

    //Getting the props and assigning to a variables
    let {
      size,
      fontWeight,
      color,
      backgroundColor,
      firstName,
      lastName,
      imageSource,
      showImage
    } = this.props;

    // Method to validate valid Hex color code
    validate_hex_color_code = hex_value => {
      if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex_value)) {
        return true;
      } else {
        return false;
      }
    };

    // Method to validate valid color name
    validate_color_name = color_name => {
      if (valid_colours_object.hasOwnProperty(color_name.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    };

    //Condition for rendering image avatar or text avatar
    if (showImage) {
      //For Image Avatar
      size = size == undefined ? 50 : size;
      let imageFlag = false;
      if (imageSource == undefined) {
        imageSource = "";
        imageFlag = true;
      } else {
        imageSource;
      }

      //Image Avatar Styling
      const image_avatar = {
        width: size,
        height: size,
        borderRadius: size / 2
      };

      //If source is undefined or not provided then default_text_avatar styles will be used to display default user avatar
      const default_text_avatar = {
        backgroundColor: "orange",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width: size,
        height: size,
        textAlignVertical: "center",
        borderRadius: size / 2,
        fontSize: size / 2
      };

      return (
        //Render image if valid source is found OR render default avatar for invalid image source
        <View>
          {imageFlag ? (
            <Text style={[default_text_avatar]}>U</Text>
          ) : (
            <Image style={[image_avatar]} source={imageSource} />
          )}
        </View>
      );
    } else {
      let random_number = Math.floor(Math.random() * 20);

      // assigning values (or default) to a properties
      size = size == undefined ? DEFAULT_SIZE : size;
      fontWeight = fontWeight == undefined ? DEFAULT_FONT_WEIGHT : fontWeight;
      color = color == undefined ? DEFAULT_COLOR : color;
      backgroundColor =
        backgroundColor == undefined
          ? random_colors[random_number]
          : backgroundColor;
      size = size == undefined ? DEFAULT_SIZE : size;
      firstName = firstName == undefined ? "" : firstName;
      lastName = lastName == undefined ? "" : lastName;

      //  Check for valid fontWeight property value
      if (fontWeight !== "bold" && fontWeight !== "normal") {
        fontWeight = DEFAULT_FONT_WEIGHT;
      }

      //Check for valid Hex color code and name
      if (color.charAt(0) === "#") {
        validate_hex_color_code(color) ? color : (color = DEFAULT_COLOR);
      } else {
        validate_color_name(color)
          ? (color = color.toLowerCase())
          : (color = DEFAULT_COLOR);
      }

      //Check for valid backgound color code and name
      if (backgroundColor.charAt(0) === "#") {
        validate_hex_color_code(backgroundColor)
          ? backgroundColor
          : (backgroundColor = DEFAULT_BACKGROUND_COLOR);
      } else {
        validate_color_name(backgroundColor)
          ? (backgroundColor = backgroundColor.toLowerCase())
          : (backgroundColor = DEFAULT_BACKGROUND_COLOR);
      }

      const text_avatar = {
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: fontWeight,
        textAlign: "center",
        width: size,
        height: size,
        textAlignVertical: "center",
        borderRadius: size / 2,
        fontSize: size / 3
      };

      //Extracting initials from the full name
      let name = "";
      if (firstName == "" && lastName == "") {
        name = DEFAULT_USER_AVATAR_NAME;
      } else {
        name = firstName.charAt(0) + lastName.charAt(0);
      }

      return (
        <View>
          <Text style={[text_avatar]}>{name}</Text>
        </View>
      );
    }
  }
}
