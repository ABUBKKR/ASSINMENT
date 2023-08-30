function describeCity(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country));
}
// CALLING FUNCTION
describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("Tokyo");
