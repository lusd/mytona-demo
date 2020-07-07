import * as axios from 'axios';



export const rickAPI = {
  getCharacters(page){
    return (
      axios({
        url: 'https://rickandmortyapi.com/graphql/',
        method: 'post',
        withCredentials: true,
        data: {
          query: `
            query {
              characters(page: ${page}) {
                info {
                  count,
                  pages
                }
                results {
                  id,
                  name,
                  image,
                  location{
                    name
                  },
                  status,
                  species,
                  type,
                  gender
                }
              }
            }
          `
        }
      }).then((result) =>  {
        return result.data;
      })
    )
  }
}
