function downloadAsmFile() {
  const code = document.getElementById("asmCode").value;

  const blob = new Blob([code], { type: "text/x-asm;charset=utf-8" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "program.asm";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
