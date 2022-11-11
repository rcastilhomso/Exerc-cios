const pacientesFilaMensagem = document.getElementById("pacientes-fila");
const pacientesFila = [];

function novoPaciente() {
  const nomePacienteInput = document.getElementById("nome-paciente");
  const nomePaciente = nomePacienteInput.value;
  if (!nomePaciente) {
    alert("Digite o nome do paciente!");
  } else {
    pacientesFila.push(` ${nomePaciente}`);
    pacientesFilaMensagem.textContent = pacientesFila;
    nomePacienteInput.value = "";
  }
}

function atenderPaciente() {
  if (pacientesFila.length > 0) {
    document.getElementById(
      "pacientes-atendidos"
    ).textContent = `${pacientesFila.shift()}`;
  } else {
    alert("Não há pacientes na fila!");
  }
  pacientesFilaMensagem.textContent = pacientesFila;
}
