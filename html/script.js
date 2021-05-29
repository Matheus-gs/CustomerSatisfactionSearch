const check = (el) => {

    const listaCheckBox = document.querySelectorAll('form .avaliacoes input');

    for (let i = 0; i <= listaCheckBox.length; i++) {

        if (listaCheckBox[i] != el) listaCheckBox[i].checked = false

    }
}