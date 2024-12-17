import axios from 'axios';
import cheerio from 'cheerio';

function MemeGen(){
const url = 'https://tenor.com/search/wrong-answer-gifs'; 
const AxiosInstance = axios.create(); 


AxiosInstance.get(url)
  .then( 
    response => {
      const html = response.data; 
      const $ = cheerio.load(html); 

      const image= $('img'); 
      const imageArray: { Image_href: string | undefined; }[]=[];

      image.each((index, element) => {
        imageArray.push({
           Image_href: $(element).attr('src'), // get the href attribute 
         
        });
      
      });

      console.log(imageArray);
    }
  )
  .catch(console.error);
}
export default MemeGen;