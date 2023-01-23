API_KEY = 'c04690b5f42b4ce38fadeeb24e488976'

import { setDataList } from '../redux/actions'

export const ApiGetDataList = () => async (dispatch) => {
  const response = await fetch(
    'https://newsapi.org/v2/everything?q=tesla&from=2022-12-23&sortBy=publishedAt&apiKey=' + API_KEY
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      dispatch(setDataList(data))
    })
    .catch(function (error) {
      console.error('Error: ', error)
    })
}
