todos = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "date":{
        "year" :2019,
        "month": 6,
        "day": 2
      }
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 1
      }
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false,
      "date":{
        "year" :2019,
        "month": 2,
        "day": 3
      }
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true,
      "date":{
        "year" :2019,
        "month": 5,
        "day": 2
      }
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 1
      }
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 6
      }
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 9
      }
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 4
      }
    },
    {
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 7
      }
    },
    {
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 3
      }
    },
    {
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 9
      }
    },
    {
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 2
      }
    },
    {
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 3
      }
    },
    {
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 5
      }
    },
    {
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true,
      "date":{
        "year": 2019,
        "month": 1,
        "day": 2
      }
    }
]

const monthStats = (array, month) => {
  let new_array = []
  array.map((element) => {
    if (element.date.month === month) {
      new_array.push(element)
    }
  });
  let num_of_todos = new_array.length
  let completed = 0;
  let incompleted = 0;
  for (let i = 0; i < new_array.length; i++) {
    const item = new_array[i];
    if (item.complete === true) {
      completed++
    }
    incompleted++
  }
  stats = {
    "total": num_of_todos,
    "completed": completed,
    "incomplete": incompleted
  }
  return stats
}
console.log(todos.length)
console.log(monthStats(todos, 1));

// Test for the functions
test_todo = []
for (let i = 1; i < 26; i++) {
  let month = Math.floor(Math.random() * 12)+1;
  let day = Math.floor(Math.random() * 31)+1;
  let year = 2019;
  let title = "title "+i;
  let complete;
  if (Math.random() === 1){
    complete = false
  } else {
    complete = true
  };
  new_todo = {
    "id": i,
    "title": title,
    "complete": complete,
    "date": {
      "year": year,
      "month": month,
      "day": day
    }
  };
  test_todo.push(new_todo)
}
console.log(test_todo)
console.log(test_todo.length)
console.log(monthStats(test_todo, 2))