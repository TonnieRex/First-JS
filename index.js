const card = document.getElementById('card')
const viewButton = document.getElementById('viewbutton')
const image = document.getElementById('image')

card.addEventListener('mouseenter', function() {
    image.style.opacity = 0.8
    viewButton.style.display = 'block'
})

card.addEventListener('mouseleave', function() {
    image.style.opacity = 1
    viewButton.style.display = ''
})