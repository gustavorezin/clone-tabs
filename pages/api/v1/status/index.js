function status(request, response) {
  response.status(200).json({ chave: "Deu certo: 200" });
}

export default status;
