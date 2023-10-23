let listUser = JSON.parse(localStorage.getItem("listUser"))
let statutAlert = [
    {
        class:"red",
        comment:"đang khóa",
        btn:"Mở khóa"
    },
    {
        class:"alertAccout",
        comment:"đang hoạt động",
        btn:"Khóa"
    }
]
function renderUsers(){
    let text =""
    for(let i=0;i<listUser.length;i++){
        if(listUser[i].role != "admin"){
            text += `
        <tr>
            <td>${i+1}</td>
                <td><img src=${listUser[i].avatar}></td>
                <td>${listUser[i].email}</td>
                <td>${listUser[i].username}</td>
                <td style="display: flex;justify-content: center;align-items: center;padding: 1.5vw; gap: 1vw;" class="satus" >
                    <div class=${statutAlert[listUser[i].status].class}></div> <div class="comment" >${statutAlert[listUser[i].status].comment}</div></td>
                <td>
                    <button onclick="changeStatus(${listUser[i].id})">${statutAlert[listUser[i].status].btn}</button>
                </td>
        </tr>

        `
        }
        
    }
    document.getElementById("body").innerHTML = text
}
renderUsers()

function changeStatus(id){
    for(let i =0 ;i<listUser.length;i++){
        if(listUser[i].id == id){
            if(listUser[i].status == 1){
                listUser[i].status = 0
                localStorage.setItem("listUser",JSON.stringify(listUser))
            }else{
                listUser[i].status = 1
                localStorage.setItem("listUser",JSON.stringify(listUser))
            }
            renderUsers()
        }
    }

}