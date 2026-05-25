import { initAgent } from 'clippyjs';
import * as agents from 'clippyjs/agents';

const RESP = {
    win: {
        tpm: 'El TPM 2.0 es obligatorio porque Windows 11 lo usa para cifrar el disco con BitLocker, proteger credenciales y verificar que el sistema no haya sido manipulado antes de arrancar.',
        secureboot: 'Secure Boot verifica que el software que se ejecuta al inicio del sistema tenga firma digital válida. Impide que malware o sistemas no autorizados arranquen antes que Windows.',
        ram_impacto: 'Con 4 GB Windows 11 funciona pero con limitaciones notables. El sistema reserva entre 2 y 3 GB para sí mismo, dejando poco margen para aplicaciones. Con más de una app abierta empezará a usar el archivo de paginación en disco, lo que lo vuelve lento.',
        disco_impacto: 'Windows 11 ocupa aproximadamente 20 GB solo con la instalación base. Los 64 GB mínimos dejan margen para actualizaciones, archivos temporales y aplicaciones básicas. Con menos espacio el sistema empieza a fallar con las actualizaciones.',
        directx: 'DirectX 12 es la API gráfica de Microsoft que permite a las aplicaciones y juegos comunicarse directamente con la GPU. Sin soporte para DirectX 12, Windows 11 no puede garantizar el correcto funcionamiento del entorno visual.',
        vbox_win: 'En VirtualBox los requisitos se aplican sobre los recursos que le asignas a la máquina virtual, no al hardware físico completo. Debes asignarle al menos 4 GB de RAM y 64 GB de disco virtual, y habilitar TPM 2.0 desde la configuración de VirtualBox.'
    },
    lin: {
        ram_ubuntu: 'Ubuntu con GNOME consume entre 1 y 1.5 GB de RAM en reposo, mucho menos que Windows 11 que consume entre 2 y 3 GB. Esto se debe a que Linux está diseñado para ser eficiente con los recursos del sistema.',
        disco_ubuntu: 'La instalación base de Ubuntu ocupa aproximadamente 8 GB, frente a los 20 GB de Windows 11. Esto se debe a que Ubuntu no incluye por defecto drivers propietarios, software de telemetría ni capas de compatibilidad que sí tiene Windows.',
        sin_tpm: 'Ubuntu no requiere TPM 2.0 porque el cifrado de disco y la verificación de integridad son opcionales en Linux. El sistema operativo no impone estas restricciones de hardware, dejando esa decisión al usuario.',
        lts: 'LTS significa Long Term Support, soporte a largo plazo. Ubuntu 24.04 LTS recibirá actualizaciones de seguridad y mantenimiento hasta el año 2029, cinco años desde su lanzamiento. Es la versión más estable recomendada para producción.',
        live: 'El modo Live permite ejecutar Ubuntu directamente desde el USB o ISO sin instalarlo. Sirve para probar el sistema, verificar compatibilidad de hardware, recuperar archivos o reparar una instalación existente sin afectar el disco.',
        gnome_req: 'GNOME consume entre 800 MB y 1.2 GB de RAM en reposo, más que entornos más ligeros como XFCE o LXQt. Con 4 GB de RAM funciona bien para uso básico. Si el equipo tiene poca RAM, Ubuntu ofrece versiones como Xubuntu o Lubuntu con entornos más ligeros.'
    }
};

let winAgent = null;
let linAgent = null;
let winLoaded = false;
let linLoaded = false;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function showClippy() {
    if (! winLoaded) {
        winAgent = await initAgent(agents.Clippy);
        winLoaded = true;
    }

    winAgent.show();

    await delay(800);

    try {
        winAgent.speak('¡Hola! Pulsa un botón para preguntarme sobre los requisitos de Windows 11.');
    } catch(e){}
}

async function showBonzi() {
    if (! linLoaded) {
        linAgent = await initAgent(agents.Bonzi);
        linLoaded = true;
    }

    linAgent.show();

    await delay(800);

    try {
        linAgent.speak('¡Hola! Pulsa un botón para preguntarme sobre los requisitos de Ubuntu.'); 
    } catch(e){}
}

async function hideAgent(agent) {
    try { agent.closeBalloon(); } catch(e){}

    await delay(1500);

    let promise = new Promise(resolve => {
        try { agent.hide(false, resolve); } catch(e) {}
    });

    await promise;
    await delay(250);
}

// Observer: carga el agente correcto y oculta el otro
const observer = new IntersectionObserver(async entries => {
    for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        if (entry.target.id === 'seccionWindows') {

            // Ocultar Bonzi si existe
            if (linAgent) { await hideAgent(linAgent); }

            await showClippy();
        } else if (entry.target.id === 'seccionUbuntu') {

            // Ocultar Clippy si existe
            if (winAgent) { await hideAgent(winAgent); }

            await showBonzi();
        }
    }
}, { threshold: 0.15 });

observer.observe(document.getElementById('seccionWindows'));
observer.observe(document.getElementById('seccionUbuntu'));

// Botones
document.querySelectorAll('.sc-av-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const av  = btn.dataset.av;
        const key = btn.dataset.key;
        const resp = RESP[av] && RESP[av][key];

        if (!resp) return;

        document.querySelectorAll(`.sc-av-btn[data-av="${av}"]`).forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        const ag = av === 'win' ? winAgent : linAgent;
        if (ag) {
            try {
                ag.animate();

                await delay(350);

                try { ag.speak(resp); } catch(e){}
            } catch(e){}
        }
    });
});
