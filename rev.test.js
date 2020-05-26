let indhu = require("./node_modules/indhu-test/indhu");
let rev = require("./rev");

let result = rev("indhu");
let expected = "uhdni";

indhu.test(result).toBeEqualTo(expected);

/*fail cases*/

indhu.test(rev("sanjai")).toBeEqualTo("njisaa");

indhu.test(rev("hello")).toBeEqualTo("Olleh");
