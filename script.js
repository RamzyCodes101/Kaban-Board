const cards = document.querySelectorAll(".card")
const lists = document.querySelectorAll("list")

for(const card of cards){
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("dragend", dragEnd)
}

for(const list of lists){
    list.addEventListener("dragover", dragOver)
    list.addEventListener("dragenter", dragEnter)
    list.addEventListener("dragleave", dragLeave)
    list.addEventListener("drop", dragDrop)
}

function dragStart(e){
    //this allows the drop location to know which element is being moveds
    //when you realse it

    e.dataTransfer.setData("text/plan", this.id)
}

function dragEnd(){
    console.log("Drag ended ")
}

function dragOver(e){
    // this is because browser dont allow you to drop element on another element
    e.preventDefault()
}

function dragEnter(e){

    e.preventDefault()
    this.classList.add("over")
}

function dragOver(e){

    this.classList.remove("over")
}

function dragDrop(e){
    const id = e.dataTransfer.getData("text/plain")

    const card = document.getElementById(id)

    this.appendChild(card)

    this.classList.remove("over")
}