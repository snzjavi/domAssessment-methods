const bodyElement = document.querySelector('body')
const button = document.createElement('button')
const mainElement = document.createElement('main')
bodyElement.append(mainElement)
const img = document.createElement('img')
const link = document.createElement('a')

bodyElement.append(button)
button.append('remove')
button.addEventListener('click', function() {
    mainElement.remove()
})

mainElement.append(img)
img.src = "https://i.stack.imgur.com/RQ3Id.png"

const url = document.createTextNode('visit site')
link.append(url)
link.title = "google"
link.href = "http://www.google.com"
mainElement.append(link)









