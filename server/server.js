import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "../src/App";
const app = express();
const PORT = 8000;

app.use("^/$", (req, res, next) => {
	fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send("Some error happened");
		}
		const sheet = new ServerStyleSheet();
		try {
			const html = renderToString(
				<StyleSheetManager sheet={sheet.instance}>
					<App />
				</StyleSheetManager>
			);
			const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
			// sheet.getStyleElement();
			const test = data.replace(
				'<div id="root"></div>',
				`<div id="root">${html + styleTags}</div>`
			);
			// console.log(test);
			return res.send(test);
		} catch (error) {
			// handle error
			console.error(error);
		} finally {
			sheet.seal();
		}
	});
});
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.listen(PORT, () => {
	console.log(`App launched on ${PORT}`);
});
