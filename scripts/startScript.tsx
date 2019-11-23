import fs from "fs";
import path from "path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import PageLoading, {
    PageLoadingDirectory,
    PageLoadingId,
    PageLoadingStyleId,
    PageLoadingFactId,
} from "../src/Components/PageLoading";

const fsPromises = fs.promises;
const jqeuryFactLoaderId = "jqeuryFactLoader";
const jqeuryFactLoaderScript = `
<script id="${jqeuryFactLoaderId}">
$(document).ready(function(){
    $.getJSON("https://catfact.ninja/fact?max_length=50",function(data){
        const PageLoadingFactElements = $("#${PageLoadingFactId}");
         if(PageLoadingFactElements.length > 0){
            PageLoadingFactElements[0].innerHTML = data.fact;
        }
    });
});
</script>`;

const generateStaticMarkup = (): string => {
    return renderToStaticMarkup(<PageLoading />);
};

const generateAnimationStaticCSS = (): Promise<string> => {
    return fsPromises.readFile(path.join(PageLoadingDirectory, "Animation.css"), "utf8");
};

const removeIfAlreadyAppended = ($: JQueryStatic): void => {
    const pageLoadingDiv = $(`#${PageLoadingId}`);
    if (pageLoadingDiv) pageLoadingDiv.remove();
    const pageLoadingStyles = $(`#${PageLoadingStyleId}`);
    if (pageLoadingStyles) pageLoadingStyles.remove();
    const jqeuryFactLoaderElement = $(`#${jqeuryFactLoaderId}`);
    if (jqeuryFactLoaderElement) jqeuryFactLoaderElement.remove();
};

const appendLoaderToHtml = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "../", "public", "./index.html"), "utf8");
        const { window } = new JSDOM(data);
        const $ = require("jquery")(window) as JQueryStatic;

        removeIfAlreadyAppended($);

        const loadingDiv = `<div id="${PageLoadingId}">${generateStaticMarkup()}</div>`;
        const animationStyle = `<style id="${PageLoadingStyleId}">${await generateAnimationStaticCSS()}</style>`;
        $("body").append(loadingDiv);
        $("head").append(animationStyle);
        $("head").append(jqeuryFactLoaderScript);

        const finalDomOutput = `<!DOCTYPE html> ${window.document.documentElement.outerHTML}`;
        await fsPromises.writeFile(path.join(__dirname, "../", "./public", "./index.html"), finalDomOutput);
    } catch (error) {
        throw error;
    }
};

appendLoaderToHtml();
