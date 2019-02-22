let list_of_name = [
    'Liam','Emma',
    'Noah','Olivia',
    'William','Ava',
    'James','Isabella',
    'Logan','Sophia',
    'Benjamin','Mia',
    'Mason','Charlotte',
    'Elijah','Amelia',
    'Oliver','Evelyn',
    'Jacob','Abigail',
    'Lucas','Harper',
    'Michael','Emily',
    'Alexander','Elizabeth',
    'Ethan','Avery',
    'Daniel','Sofia',
    'Matthew','Ella',
    'Aiden','Madison',
    'Henry','Scarlett',
    'Joseph','Victoria',
    'Jackson','Aria',
    'Samuel','Grace',
    'Sebastian','Chloe',
    'David','Camila',
    'Carter','Penelope',
    'Wyatt','Riley'
]

function FilteringList(arr, filterItem) {
    let new_list_of_names = []

    arr.forEach(element => {
        if(element.toLowerCase().includes(filterItem.toLowerCase())){
            new_list_of_names.push(element);
        }
    });
    return new_list_of_names;
}

console.log(FilteringList(list_of_name, 'am'));
