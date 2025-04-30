import React, { useState } from 'react';

const ConnectionForm: React.FC = () => {
    const [ip, setIp] = useState('');
    const [status, setStatus] = useState('');

    const handleConnect = () => {
        if (!ip) {
            setStatus('Por favor, insira um IP.');
            return;
        }
        setStatus(`Conectando a ${ip}...`);

        // Enviar o IP para o Tauri backend para conexão
        window.tauri.invoke('connect_to_ip', { ip })
            .then((response) => setStatus(`Conectado a ${ip}`))
            .catch((error) => setStatus(`Erro: ${error.message}`));
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <input
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                placeholder="Digite o IP do outro notebook"
                className="p-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleConnect}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Conectar
            </button>
            {status && <p className="text-lg">{status}</p>}
        </div>
    );
};

export default ConnectionForm;
