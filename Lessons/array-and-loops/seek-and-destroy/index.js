let files_received = ["file.doc","file.docx","file.odt","file.pdf","file.rtf","file.tex","file.txt","file.wks","file.wps","file.wpd", "idk.dmg", "file.exe"]

const SeekAndDestroy = (array) => {
    let new_array = []
    array.forEach((item)=>{
        inx = item.split(".")
        if ((inx[1].toLowerCase() === "pdf") || (inx[1].toLowerCase() === "docx") || (inx[1].toLowerCase() === "doc")){
            new_array.push(item)
        }
    })
    return new_array
}

console.log(SeekAndDestroy(files_received))