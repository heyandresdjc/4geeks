const RandomString = (length) => {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const DocListGen = (num) => {
    let docs = [];
    let i = 0;
    while (i< num ){
        if (i % 7 !== 0){
            doc = {name: RandomString(13).replace("q", " "), docID: RandomString(6), urgent: false}
            docs.push(doc);
        }else{
            doc = {name: "Gregory House", docID: "gh0987", urgent: false}
            docs.push(doc);
        }
        i++;
    }
    return docs;
}

let doc_list = DocListGen(100);
let doc_list1 = DocListGen(100);

const Queue = (arra) => {
    let updated = [];
    for (let index = 0; index < arra.length; index++) {
        const doc = arra[index];
        if (doc.docID === "gh0987") {
            console.log("WE GOT ANOTHER ONE");
            doc.urgent = true;
        }
        updated.push(doc);
    }
    return updated;
}

console.log(Queue(doc_list));
console.log(Queue(doc_list1));
