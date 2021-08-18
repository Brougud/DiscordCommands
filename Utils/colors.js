
const colors {
"Sucess": 123455,
"Error": 13107200,
"Err": 13107200,
"Description": -12428612,
"warn": 16764928,
"default": 1677721,
"def": 1677721,
  

"BRIGHT_RED": -36000000000000000000,
"SALMON": -111235,
"BRIGHT_GREEN": -360000000000,
"GREEN": -36000000000,
"GOLD": -36000000,
"LIGHT_PINK": -360000,
"WHITE": -3,
"BLACK": 1,
"LIGHT_BLUE": 112356
}

//ty for help on this part
exports.get = function get (color)
{

   if (Object.prototype.hasOwnProperty.call(
      colors,
      color
   ))
   {

      return colors[color];

   }
   if (isNaN(color))
   {

      return colors.warn;

   }
   return color;

};
