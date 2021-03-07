const form = document.getElementById('searchbox')

form.addEventListener('submit',function(ev){
    ev.preventDefault()
    const formData = new FormData(this)
    const project_id = formData.get('project_id')
    
    document.cookie = `project_id=${project_id}`
    window.location.href = 'home.html'
    
})
