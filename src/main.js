$("#btn").click(function(e)
{
    // Se deixar o campo em branco nao cria a tarefa e aparece uma mensagem na tela
    const tarefa = $("#tarefa").val();
    if(tarefa === ""){
        alert ("digite uma tarefa válida")
    } else{
         // cria a tarefa com o que quiser
        $("#lista").append(
            `<li>
            <i class="fas fa-check-circle check"></i>
            <span>${ tarefa }</span>
            <i class="fa-solid fa-trash-can close"></i>
            </li>`
          //  ${ tarefa } é para transcrever o que voce digitou para a tarefa
        );
        $("#tarefa").val ("");
    }
    // exclui a tarefa
    $(".close").each(function(){
        $(this).click(function(){
            $(this).parent().remove();
        })
    });
    //$("#lista li").click(function(){
      //  $(this).find(".check").css("color", "#349223");
       //     $(this).find("span").css("textDecoration", "line-through");
   //})
   $("#lista li").click(function() {
    var checkIcon = $(this).find(".check");
    var taskSpan = $(this).find("span");
    // Cria uma variável para fazer uma estrutura condicional if/else onde nao está marcado, se marcar ela fica em verde e com um risco na tarefa
    
    if (checkIcon.css("color") === "rgb(52, 146, 35)") {
        checkIcon.css("color", "");
        taskSpan.css("text-decoration", "");
    } else {
        checkIcon.css("color", "#349223");
        taskSpan.css("text-decoration", "line-through");
    }
});

})