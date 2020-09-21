/* Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

algorithm:
1. input number--possibly a decimal
2. Separate number into left side of decimal (degrees)
3. multiply decimal X 60 
4. separate whole number (minutes) from remaining deicmal
5. multiply decimal x 60 
6. round this number appropriately (seconds)
7. combine degrees, minutes, seconds together with appr symbols
8. output degrees number

*/

function dms(num){
    let newNum = String(num);
    const degree = parseInt(num);
    const seconds = 
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
