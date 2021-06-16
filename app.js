let button = document.getElementById("btnbold")
let buttons = document.querySelectorAll('.btn_ic')

console.log(buttons)

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        let action = this.dataset.action;
        executeCommandDefault(action)
    })
})

function executeCommandDefault(action){
    document.execCommand(action, false);
}