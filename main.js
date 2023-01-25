class Lista {
    #dataStorage = []
    #pos = 0

    prev(){
        if(this.#pos > 0){
            --this.#pos
        }
    }
    next(){
        if(this.#pos < this.#dataStorage.length -1){
            ++this.#pos
        }
    }
    getCurrent(){
        console.log('current',this.#dataStorage[this.#pos])
    }
    length(){
        console.log('length',this.#dataStorage.length)
    }
    clear(){
        this.#dataStorage =[]
    }
    insert(after, value){
        const index = this.findIndex(value)
        if(index < 0){
            console.log('elemento não encontrado')
            return
        }
        this.#dataStorage.splice(index +1, 0, after)
    }
    append(value){
        this.#dataStorage.push(value)
    }
    remove(value){
        const index = this.findIndex(value)
        if(index < 0){
            console.log('elemento não encontrado')
            return
        }
        this.#dataStorage.splice(index, 1)
    }
    front(){
        console.log(this.#dataStorage[0])
    }
    end(){
        console.log(this.#dataStorage[this.#dataStorage.length -1])
    }
    moveTo(position){
        if(position > this.#dataStorage.length -1 || position < 0){
            console.log('posição não encontrada')
            return 
        }
        this.#pos = position
    }
    display(){
        console.log('display',this.#dataStorage)
    }
    findIndex(value){
        return  this.#dataStorage.findIndex(el => el == value)
    }

}

const lista = new Lista()
lista.append('hudson.img')
lista.append('hudson2.img')
lista.insert('hudson.1.1.img','hudson.img')
lista.display()
lista.getCurrent()
lista.moveTo(1)
lista.getCurrent()
