import md5 from 'js-md5';

const PUBLIC_KEY = import.meta.env.VITE_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const limit = 20


export async function loadHeroesCharacters() {
        const ts = Number(new Date());
        const hash = md5.create();
        hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
       
          const response = await fetch(
            `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
)

          const data =await response.json()
            console.log(data)
          return data
}