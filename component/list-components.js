Vue.component('list-component',{
    data(){
        return {
            characters: [
                {name:"Rick Sanchez", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
                {name: "Morthy Smith", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"},
                {name:"Summer Smith", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"},
                {name:"Beth Smith", image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"},
                {name:"Jerry Smith", image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"}
            ],
        }
    },
    template: '#list-template'

})