let fs = require("fs");
let path = require("path");
let browserify = require("browserify");

let input = path.normalize(path.join(__dirname, "../", "public", "javascripts"));
let output = path.normalize(path.join(__dirname, "../", "dist", "main.js"));

let b = browserify();

let files = fs.readdirSync(input);

for (let i = 0; i < files.length; i++) {
	b.add(path.join(input, files[i]));
}

b.transform("babelify", { presets: ["es2015", "react"] });

b.bundle((err, buf) => {
	if (err) { throw err; }
	fs.writeFile(output, buf, (err) => {
		if (err) { throw err; }
	});
});
