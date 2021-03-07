const form = document.getElementById('searchbox')

form.addEventListener('submit',function(ev){
    ev.preventDefault()
    const formData = new FormData(this)
    const proyect_id = formData.get('proyect_id')
    
    document.cookie = `proyect_id=${proyect_id}`
    window.location.href = 'home.html'
    
})
