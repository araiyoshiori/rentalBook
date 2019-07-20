let data =
[
  {
    id: 1001,
    content: "はれです。",
    tags: [
      {
        id: 1,
        pattern: "T1",
        sort: 2,
      },
      {
        id: 2,
        pattern: "T3",
        sort: 2,
      },

    ]
  },
  {
    id: 1002,
    content: "くもりです。",
    tags: [
      {
        id: 3,
        pattern: "T1",
        sort: 1,
      },
      {
        id: 4,
        pattern: "T3",
        sort: 3,
      },

    ]
  },
  {
    id: 1003,
    content: "あめです。",
    tags: [
      {
        id: 5,
        pattern: "T1",
        sort: 3,
      },
      {
        id: 6,
        pattern: "T3",
        sort: 1,
      },

    ]
  }
]
let dataCopy = JSON.parse(JSON.stringify(data))
dataCopy.sort(function(a,b){
    const indexa = a.tags.findIndex(item => item.pattern === "T1")
    const indexb = b.tags.findIndex(item => item.pattern === "T1")
    if(a.tags[indexa].sort < b.tags[indexb].sort) return -1;
    if(a.tags[indexa].sort > b.tags[indexb].sort) return 1;
    return 0;
});


data.map(data => {
  data.tags.map(tag => {
    tag.pattern = "1"
    return tag
  })
  return data
})


console.log("data", data)
console.log("dataCopy", dataCopy)
console.log("--dataCheckStart--")
data.map(data => {
  console.log("id", data.id)
  console.log("contnet", data.content)
  data.tags.map(tag => {
    console.log("id", tag.id)
    console.log("pattern", tag.pattern)
    console.log("sort", tag.sort)
    return tag
  })
  return data
})
console.log("--dataCheckEnd  --")


console.log("--dataCopyCheckStart--")
dataCopy.map(data => {
  console.log("id", data.id)
  console.log("contnet", data.content)
  data.tags.map(tag => {
    console.log("id", tag.id)
    console.log("pattern", tag.pattern)
    console.log("sort", tag.sort)
    return tag
  })
  return data
})
console.log("--dataCopyCheckEnd  --")