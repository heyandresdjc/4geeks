const RandomString = (length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .";
    for (var i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const RandomPara = (num_of_sentences) => {
    let possible = [0,1]
    let position = Math.floor(Math.random() * possible.length);
    let hey = possible[position];
    let paragraph = ""
    if (hey > 0) {
        for (let index = 0; index < num_of_sentences; index++) {
            let sentence = RandomString(200);
            paragraph += sentence;
        }
        if (paragraph.search("decepticon") < 0) {
            paragraph += "decepticon"
        }
        return paragraph
    } else {
        for (let index = 0; index < num_of_sentences; index++) {
            let sentence = RandomString(200);
            paragraph += sentence;
        }
    }
    return paragraph
}


const RandomEmail = () => {
    let possible = ["gmail.com", "dod.gov", "wh.gov", "doj.gov", "yahoo.com"];
    let index = Math.floor(Math.random() * possible.length);
    return possible[index];
}


const EmailAPI = (num_of_emails) => {
    let emails = []
    let i = 0
    while (i < num_of_emails) {
        let email_body = RandomPara(5);
        let email = {
            sender: RandomString(10).replace(" ", "_")+"@"+RandomEmail(),
            subject: RandomString(75),
            body: email_body
        }
        i++
        emails.push(email)
    }
    return emails
}

let emails = EmailAPI(1000);
let decepticon_email_count = 0
emails.forEach((email, index) => {
    if (email.body.search("decepticon")> 0) {
        console.log(index+1);
        console.log(email.body)
        decepticon_email_count++
    }
});

console.log(decepticon_email_count)