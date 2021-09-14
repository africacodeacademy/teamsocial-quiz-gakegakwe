import got from "got";
import cheerio from "cheerio";

export async function wrong() {
  const URL = "https://tenor.com/search/wrong-answer-gifs";
  try {
    const memesArray: {
      Image_href: string | undefined; // get the href attribute
      img_src: string;
    }[] = [];
    const response = await got(URL);
    const html = response.body;

    const $ = cheerio.load(html);
    const memes = $("img");

    memes.each((index, element) => {
      memesArray.push({
        Image_href: $(element).attr("src"), // get the href attribute
        img_src: "link ",
      });
    });
   
    console.log(memesArray);
  } catch (error) {
    console.error(error);
  }
}
wrong();
