newnote = document.querySelector('.newnote')
main = document.querySelector('main')
write = document.querySelector('main section')
writingpad = document.querySelector('main section div')

newnote.addEventListener('click', ()=> {
	write.style.display = 'block';
	writingpad.focus()
});