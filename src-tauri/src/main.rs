use tauri::command;
use std::net::{TcpStream, ToSocketAddrs};

#[command]
fn connect_to_ip(ip: String) -> Result<String, String> {
    let address = format!("{}:8080", ip); // Porta de exemplo
    match TcpStream::connect(address) {
        Ok(_) => Ok(format!("Conectado a {}", ip)),
        Err(e) => Err(format!("Erro ao conectar a {}: {}", ip, e)),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![connect_to_ip]) // Chama a função connect_to_ip
        .run(tauri::generate_context!())
        .expect("Erro ao iniciar o Tauri");
}
