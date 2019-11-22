import fs from "fs";
import path from "path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import PageLoading, { PageLoadingDirectory, PageLoadingId } from "../src/Components/PageLoading";

const fsPromises = fs.promises;

const generateStaticMarkup = () => {
    return renderToStaticMarkup(<PageLoading />);
};

const generateAnimationStaticCSS = () => {
    return fsPromises.readFile(path.join(PageLoadingDirectory, "Animation.css"), "utf8");
};

const appendLoaderToHtml = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "../", "public", "./index.html"), "utf8");
        const { window } = new JSDOM(data);
        const $ = require("jquery")(window);

        const loadingDiv = `<div id="${PageLoadingId}">${generateStaticMarkup()}</div>`;
        const animationStyle = `<style>${await generateAnimationStaticCSS()}</style>`;

        $("body").append(loadingDiv);
        $("head").append(animationStyle);

        const finalDomOutput = `<!DOCTYPE html> ${window.document.documentElement.outerHTML}`;
        await fsPromises.writeFile(path.join(__dirname, "../", "./public", "./index.html"), finalDomOutput);
    } catch (error) {
        throw error;
    }
};

appendLoaderToHtml();
