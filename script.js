/* 
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [  ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [  ]  Supondo que a média, para esse concurso é **7**, verifique **se**
 cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


*/

let students = [
    {
        name: "Rapahel",
        fisrtGrade: 8.0,
        secondGrade: 9.0,
    }, 
    {
        name: "Joana",
        fisrtGrade: 7.5,
        secondGrade: 10.0
    },
    {
        name: "Antonio",
        fisrtGrade: 6.5,
        secondGrade: 4.0
    },
    {
        name: "Kimberli",
        fisrtGrade: 10,
        secondGrade: 6
    }

]


function media(fisrtGrade, secondGrade) {
    return ((fisrtGrade + secondGrade) / 2).toFixed(2)
}

for (let i = 0; i < students.length; i++) {
    let grade = media(students[i].fisrtGrade, students[i].secondGrade);

    if (grade >= 7) {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${grade}
Parabéns, ${students[i].name}! Você foi aprovado(a) no concurso!
        `)
    } else {
        alert(`A média do(a) aluno(a) ${students[i].name} é: ${grade}
Não foi dessa vez, ${students[i].name}! Tente novamente!
        `)
    }
}