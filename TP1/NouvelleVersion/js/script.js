const openModal = documents.querySelectorAll();
const closeModalButton = documents.querySelectorAll('[data-close-button]');

closeModalButton.ForEach(button => {
    button.addEventLister('click', () => {
        const modal = button.closest('.modal') 
        close(modal)
    })
})

function closeModal(modal){
    if(modal == nul) return 
    modal.remove('active')
}
