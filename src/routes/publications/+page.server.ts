export const load = async () => {
  // fetch list of works
  const worksRes = await fetch('https://pub.orcid.org/v3.0/0000-0001-6794-0601/works', {
    headers: { 'Content-Type': 'application/orcid+json' }
  })
  const works = await worksRes.json()
  const group = works['group']
  const cleanArray: any[] = []

  function createRequest(id: string) {
    return new Request('https://pub.orcid.org/v3.0/0000-0001-6794-0601/works/' + id, {
      headers: new Headers({
        'Content-Type': 'application/orcid+json'
      }),
      method: 'GET'
    })
  }

  const requestArray = []
  /**
   * This for loop does 2 things:
   * - Create array of request for getting paper detail
   * - Create a clean json object call paper, put it into cleanArray
   */
  for (let item of group) {
    const summary = item['work-summary'][0]
    const id = summary['put-code']
    requestArray.push(createRequest(id))

    var regex = /(<([^>]+)>)/ig
      , title = summary.title.title.value.replace(regex, "");

    const paper = {
      id: summary['put-code'],
      title: title,
      url: summary.url.value
    }
    cleanArray.push(paper)
  }

  let result = await Promise.all(
    requestArray.map((request) => {
      return fetch(request).then((response: { json: () => any }) => {
        return response.json()
      })
    })
  )
    .then((values) => {
      // Take contributors from json response put it into cleanArray
      for (let x in values) {
        let contributorsJson = values[x]['bulk'][0]['work']['contributors']['contributor']
        const contributors = []
        for (let person of contributorsJson) {
          const name = person['credit-name'].value
          contributors.push(name)
        }
        cleanArray[x].contributors = contributors
      }
      return cleanArray
    })
    .catch(console.error.bind(console))
  return { result }
}
