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
const factLoaderId = "loadingFactLoader";

const factSetterScript = `
<script id="${factLoaderId}">
        function loadingFactSetterScript () {
            const opts = {
                method: 'GET',      
                headers: {}
            };
            
            fetch('https://catfact.ninja/fact?max_length=50', opts)
            .then(function (response) {
            return response.json();
            })
            .then(function (data) {
                const PageLoadingFactElement = document.getElementById("${PageLoadingFactId}");
                if(PageLoadingFactElement){
                    PageLoadingFactElement.innerHTML = data.fact;
                }
            });
        }

    loadingFactSetterScript();

</script>
`;

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
    const factLoaderScriptElement = $(`#${factLoaderId}`);
    if (factLoaderScriptElement) factLoaderScriptElement.remove();
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
        $("head").append(factSetterScript);

        const finalDomOutput = `<!DOCTYPE html> ${window.document.documentElement.outerHTML}`;
        await fsPromises.writeFile(path.join(__dirname, "../", "./public", "./index.html"), finalDomOutput);
    } catch (error) {
        throw error;
    }
};

appendLoaderToHtml();
