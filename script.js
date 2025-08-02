function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Imagem do rosto de Carlos Augusto olhando para a tela com um leve sorriso"
    )
  }
}
