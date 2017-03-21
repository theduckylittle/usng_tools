/*
 * Copyright (c) 2017 Dan "Ducky" Little
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies of this Software or works derived from this Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

/** Uses the samples from the usage string in order to
 *  create actual tests.
 */

var assert = require('assert');

describe("Converting USNG to Lat Lon", function() {
	// require the module
	var USNG2 = require('../src/usng2.js')

	// create a new instance
	var u = new USNG2();

	it("Converts a USNG string", function() {
		assert.equal(u.toLonLat( "18S UJ 228 070" ),
		 {lon: -77.04324684425941, lat: 38.8940174428622, precision: 3, usng: "18S UJ 22800 7000"});
	});

	it("Converts a partial string", function() {
		/*
		expect(false).toBe(true);

		expect(u.toLonLat( "UJ 228 070", {lon: -77, lat: 39} )).toEqual(jasmine.objectContaining(
		  {lon: -77.04324684425941, lat: 38.8940174428622, precision: 3}
		));
		*/
	});
});
// Returns Object {lon: -77.04324684425941, lat: 38.8940174428622, precision: 3}
/*

console.log(u.toLonLat( "UJ 228 070", {lon: -77, lat: 39} ));
// Returns Object {lon: -77.04324684425941, lat: 38.8940174428622, precision: 3}

console.log(u.toLonLat( "228 070", {lon: -77, lat: 39} ));
// Returns Object {lon: -77.04324684425941, lat: 38.8940174428622, precision: 3}

// console.log(u.toLonLat( "B AN" ));
// Returns Object {lon: 0, lat: -90, precision: 0}

// console.log(u.toLonLat( "Y ZP 12345 12345" ));
// Returns Object {lon: -171.85365493260602, lat: 84.43254784831868, precision: 5}

//
// Conversions from Lat/Lon to USNG
//

console.log(u.fromLonLat( { lon: -77.043, lat: 38.894 }, 3 ));
// Returns "18S UJ 228 069"

console.log(u.fromLonLat( { lon: -77.043, lat: 38.894 }, 5 ));
// Returns "18S UJ 22821 06997"

*/
