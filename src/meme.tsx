import React from "react";
import got from 'got';
import cheerio from "cheerio";
import { html } from "cheerio/lib/api/manipulation.js";

export async function wrong() {
  const URL = "https://tenor.com/search/wrong-answer-gifs";
  try {
    // Fetching HTML
    const response = await got(URL);
    const html = response.body;
    
    const $= cheerio.load(html);
    const memes=$('img');

    console.log(html);
  } catch (error) {
    console.error(error);
    
  }
}
