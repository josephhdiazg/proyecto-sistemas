---
permalink: /segundo-corte
layout: base
title: Segundo Corte
---

<style>
  .sc-section { margin-bottom: 3rem; }

  .sc-os-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-left: 4px solid #00ff41;
    background: #111911;
    box-shadow: inset 0 0 20px #00ff4111;
  }
  .sc-os-header h2 {
    font-family: 'Orbitron', monospace;
    font-size: 1.4rem;
    color: #00ff41;
    text-shadow: 0 0 10px #00ff4188;
    margin: 0;
    letter-spacing: 0.1em;
  }
  .sc-os-badge {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    border: 1px solid currentColor;
    padding: 0.2rem 0.6rem;
    letter-spacing: 0.1em;
  }

  .sc-block {
    background: #0d120d;
    border: 1px solid #1a2e1a;
    box-shadow: inset 0 0 12px #00ff4108;
    padding: 1.5rem 2rem;
    margin-bottom: 1.5rem;
  }
  .sc-block-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: #3a5e3a;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #1a2e1a;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .sc-block-title::before { content: '//'; color: #00ff41; }

  .sc-text {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
    color: #b8d4b8;
    line-height: 1.8;
  }
  .sc-text p { margin-bottom: 1rem; }
  .sc-text strong { color: #00ff41; }

  .sc-steps { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; }
  .sc-step {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    color: #b8d4b8;
    line-height: 1.7;
  }
  .sc-step-num {
    min-width: 32px;
    height: 32px;
    border: 1px solid #00ff41;
    color: #00ff41;
    font-family: 'Orbitron', monospace;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 6px #00ff4133;
  }

  /* Layout requisitos: tabla + botones lado a lado */
  .sc-req-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 1.5rem;
    align-items: start;
  }
  @media (max-width: 900px) { .sc-req-layout { grid-template-columns: 1fr; } }

  .sc-req-table { width: 100%; border-collapse: collapse; }
  .sc-req-table th {
    background: #111911;
    color: #00ff41;
    font-family: 'Orbitron', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1rem;
    border-bottom: 1px solid #1a2e1a;
    text-align: left;
  }
  .sc-req-table td {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: #b8d4b8;
    padding: 0.55rem 1rem;
    border-bottom: 1px solid #0d150d;
    line-height: 1.5;
  }
  .sc-req-table tr:hover td { background: #0d150d; }
  .sc-req-table .req-cat { color: #3a5e3a; font-size: 0.8rem; }
  .sc-req-min { color: #ffb300; }
  .sc-req-rec { color: #00ff41; }

  /* Panel de botones del asistente */
  .sc-assistant-panel {
    background: #0d120d;
    border: 1px solid #1a2e1a;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: inset 0 0 12px #00ff4108;
  }
  .sc-assistant-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
    margin-bottom: 0.25rem;
  }

  .sc-av-btn {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.85rem;
    background: transparent;
    border: 1px solid #1a2e1a;
    color: #3a5e3a;
    padding: 0.5rem 0.75rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.15s;
    width: 100%;
    line-height: 1.4;
  }
  .sc-av-btn:hover { border-color: #00ff41; color: #00ff41; background: #0d120d; box-shadow: 0 0 8px #00ff4133; }
  .sc-av-btn.active { border-color: #00ff41; color: #00ff41; background: #0d150d; }

  .sc-video-wrap {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 1px solid #1a2e1a;
    box-shadow: 0 0 20px #00ff4122;
  }
  .sc-video-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }

  .tag-win { color:#00ffe7; border:1px solid #00ffe744; padding:0 5px; font-size:0.8rem; }
  .tag-lin { color:#ffb300; border:1px solid #ffb30044; padding:0 5px; font-size:0.8rem; }
  .tag-min { color:#ffb300; border:1px solid #ffb30044; padding:0 4px; font-size:0.75rem; }
  .tag-rec { color:#00ff41; border:1px solid #00ff4144; padding:0 4px; font-size:0.75rem; }

  .sc-divider {
    border: 0;
    border-top: 1px solid #1a2e1a;
    margin: 3rem 0;
    position: relative;
  }
  .sc-divider::after {
    content: '// SIGUIENTE_SISTEMA_OPERATIVO';
    position: absolute;
    top: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
    background: #080c08;
    padding: 0 1rem;
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
  }

  /* Clippy overrides */
  .clippy { filter: drop-shadow(0 0 6px #00ff4188) !important; }
  .clippy-balloon {
    background: #0d120d !important;
    border: 1px solid #00ff41 !important;
    border-radius: 0 !important;
    box-shadow: 0 0 12px #00ff4144 !important;
  }
  .clippy-balloon .clippy-content {
    color: #00ff41 !important;
    font-family: 'Share Tech Mono', monospace !important;
    font-size: 0.82rem !important;
  }
  .clippy-balloon .clippy-tip { border-top-color: #00ff41 !important; }
  .clippy-balloon .clippy-tip-inner { border-top-color: #0d120d !important; }
</style>

<div class="hxkr-panel-bright p-4 corner-tl corner-br relative mb-8">
  <div class="font-hud text-xs tracking-widest mb-1" style="color:#3a5e3a;">// SEGUNDO_CORTE</div>
  <h1 class="font-display text-5xl text-glow" style="color:#00ff41;">Instalación de SO</h1>
  <p class="sc-text mt-2" style="font-size:1rem;">Proceso de instalación en VirtualBox, requisitos y recursos para <span class="tag-win">Windows 11</span> y <span class="tag-lin">Ubuntu Linux</span>.</p>
</div>

<!-- ══════════ WINDOWS 11 ══════════ -->
<div class="sc-section" id="seccionWindows">
  <div class="sc-os-header">
    <h2>⊞ Windows 11</h2>
    <span class="sc-os-badge" style="color:#00ffe7;">MICROSOFT</span>
    <span class="sc-os-badge" style="color:#00ffe7;">VIRTUALBOX</span>
  </div>

  <div class="sc-block">
    <div class="sc-block-title">Proceso de instalación — Windows 11 en VirtualBox</div>
    <div class="sc-text">
      <p>La instalación se realizó en <strong>Oracle VirtualBox</strong>, una herramienta de virtualización que permite correr sistemas operativos dentro de otro sistema sin necesidad de particionar el disco físico. Se creó una máquina virtual con los recursos necesarios y se montó la imagen ISO oficial de Windows 11.</p>
    </div>
    <ol class="sc-steps">
      <li class="sc-step"><span class="sc-step-num">01</span><span>Se descargó la imagen ISO de Windows 11 desde el sitio oficial de Microsoft y se montó en la unidad óptica virtual de VirtualBox.</span></li>
      <li class="sc-step"><span class="sc-step-num">02</span><span>Se creó una máquina virtual con <strong>4 GB de RAM</strong>, <strong>64 GB de disco virtual</strong>, y se habilitó el soporte de <strong>TPM 2.0</strong> y <strong>Secure Boot</strong> desde la configuración de VirtualBox.</span></li>
      <li class="sc-step"><span class="sc-step-num">03</span><span>Al iniciar la máquina virtual arrancó el instalador de Windows 11. Se seleccionó el <strong>idioma</strong>, la <strong>zona horaria</strong> y la distribución del <strong>teclado</strong>.</span></li>
      <li class="sc-step"><span class="sc-step-num">04</span><span>Se pulsó <strong>Instalar ahora</strong>, se eligió la edición <strong>Windows 11 Home</strong> y se aceptaron los términos de licencia.</span></li>
      <li class="sc-step"><span class="sc-step-num">05</span><span>Se seleccionó <strong>Instalación personalizada</strong> y se usó el disco virtual completo como partición de instalación.</span></li>
      <li class="sc-step"><span class="sc-step-num">06</span><span>El instalador copió los archivos y configuró el sistema. La máquina virtual reinició varias veces de forma automática.</span></li>
      <li class="sc-step"><span class="sc-step-num">07</span><span>Se completó la configuración inicial: cuenta de usuario, preferencias de privacidad y red. Windows 11 quedó operativo dentro de la máquina virtual.</span></li>
    </ol>
  </div>

  <div class="sc-block">
    <div class="sc-block-title">Requisitos del sistema — Windows 11</div>
    <div class="sc-req-layout">
      <div>
        <table class="sc-req-table">
          <thead>
            <tr>
              <th>Componente</th>
              <th><span class="tag-min">MÍNIMO</span></th>
              <th><span class="tag-rec">RECOMENDADO</span></th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="req-cat">Procesador</td><td>1 GHz, 2 núcleos, 64 bits</td><td>Intel i5 / Ryzen 5 (8ª gen+)</td></tr>
            <tr><td class="req-cat">RAM</td><td class="sc-req-min">4 GB</td><td class="sc-req-rec">8 — 16 GB</td></tr>
            <tr><td class="req-cat">Almacenamiento</td><td class="sc-req-min">64 GB</td><td class="sc-req-rec">256 GB SSD NVMe</td></tr>
            <tr><td class="req-cat">TPM</td><td class="sc-req-min">Versión 2.0 (obligatorio)</td><td class="sc-req-rec">Versión 2.0</td></tr>
            <tr><td class="req-cat">Firmware</td><td>UEFI + Secure Boot</td><td>UEFI + Secure Boot</td></tr>
            <tr><td class="req-cat">Gráficos</td><td>DirectX 12, WDDM 2.x</td><td>GPU dedicada 4 GB VRAM</td></tr>
            <tr><td class="req-cat">Pantalla</td><td>720p, 9 pulgadas mín.</td><td>1080p o superior</td></tr>
            <tr><td class="req-cat">Internet</td><td colspan="2">Requerida en la configuración inicial</td></tr>
          </tbody>
        </table>
        <p class="sc-text mt-4" style="font-size:0.85rem;color:#3a5e3a;">⚠ El <strong style="color:#ffb300;">TPM 2.0</strong> es el requisito más restrictivo. Equipos fabricados antes de 2017 frecuentemente no lo tienen activo.</p>
      </div>

      <!-- Botones asistente Windows — sin recuadro de avatar -->
      <div class="sc-assistant-panel">
        <div class="sc-assistant-label">// PREGÚNTALE A CLIPPY</div>
        <button class="sc-av-btn" data-av="win" data-key="tpm">¿Por qué Windows 11 exige TPM 2.0?</button>
        <button class="sc-av-btn" data-av="win" data-key="secureboot">¿Qué protege Secure Boot?</button>
        <button class="sc-av-btn" data-av="win" data-key="ram_impacto">¿Qué pasa si instalo Windows con solo 4 GB de RAM?</button>
        <button class="sc-av-btn" data-av="win" data-key="disco_impacto">¿Por qué se recomiendan 64 GB y no menos?</button>
        <button class="sc-av-btn" data-av="win" data-key="directx">¿Para qué sirve DirectX 12?</button>
        <button class="sc-av-btn" data-av="win" data-key="vbox_win">¿Cómo afecta VirtualBox a los requisitos?</button>
      </div>
    </div>
  </div>

  <div class="sc-block">
    <div class="sc-block-title">Video — Instalación de Windows 11 en VirtualBox</div>
    <p class="sc-text mb-4">El siguiente video muestra el proceso completo de instalación de Windows 11 dentro de VirtualBox, desde el arranque del instalador hasta la configuración inicial del sistema.</p>
    <div class="sc-video-wrap">
      <iframe src="https://www.youtube.com/embed/taK3G3IAzKE" title="Instalación Windows 11 VirtualBox" allowfullscreen></iframe>
    </div>
  </div>
</div>

<hr class="sc-divider">

<!-- ══════════ UBUNTU ══════════ -->
<div class="sc-section" id="seccionUbuntu">
  <div class="sc-os-header" style="border-left-color:#ffb300;">
    <h2 style="color:#ffb300;text-shadow:0 0 10px #ffb30088;">🐧 Ubuntu Linux</h2>
    <span class="sc-os-badge" style="color:#ffb300;">CANONICAL</span>
    <span class="sc-os-badge" style="color:#ffb300;">24.04 LTS — VIRTUALBOX</span>
  </div>

  <div class="sc-block">
    <div class="sc-block-title">Proceso de instalación — Ubuntu 24.04 en VirtualBox</div>
    <div class="sc-text">
      <p>Al igual que Windows 11, Ubuntu 24.04 LTS se instaló dentro de <strong>Oracle VirtualBox</strong>. Se montó la imagen ISO oficial y se configuró la máquina virtual. A diferencia de Windows, Ubuntu <strong>no requiere TPM 2.0 ni Secure Boot</strong>, lo que simplifica considerablemente la configuración.</p>
    </div>
    <ol class="sc-steps">
      <li class="sc-step"><span class="sc-step-num">01</span><span>Se descargó la imagen ISO de Ubuntu 24.04 LTS desde ubuntu.com y se montó en la unidad óptica virtual de VirtualBox.</span></li>
      <li class="sc-step"><span class="sc-step-num">02</span><span>Se creó una máquina virtual con <strong>4 GB de RAM</strong> y <strong>25 GB de disco virtual</strong>. No fue necesario habilitar TPM ni Secure Boot.</span></li>
      <li class="sc-step"><span class="sc-step-num">03</span><span>Al iniciar la máquina, Ubuntu arrancó en modo <strong>Live</strong>. Desde ahí se ejecutó el instalador gráfico haciendo clic en <strong>"Instalar Ubuntu"</strong>.</span></li>
      <li class="sc-step"><span class="sc-step-num">04</span><span>Se seleccionó el <strong>idioma</strong>, la distribución del <strong>teclado</strong> y el tipo de instalación: <strong>normal</strong> con aplicaciones incluidas.</span></li>
      <li class="sc-step"><span class="sc-step-num">05</span><span>Se eligió <strong>borrar disco e instalar Ubuntu</strong>, usando el disco virtual completo. Las particiones se configuraron automáticamente.</span></li>
      <li class="sc-step"><span class="sc-step-num">06</span><span>Se seleccionó la <strong>zona horaria</strong> y se creó el <strong>usuario</strong> con nombre, nombre del equipo y contraseña.</span></li>
      <li class="sc-step"><span class="sc-step-num">07</span><span>La instalación se completó automáticamente. Al reiniciar, Ubuntu quedó operativo con el entorno de escritorio <strong>GNOME</strong>.</span></li>
    </ol>
  </div>

  <div class="sc-block">
    <div class="sc-block-title">Requisitos del sistema — Ubuntu 24.04 LTS</div>
    <div class="sc-req-layout">
      <div>
        <table class="sc-req-table">
          <thead>
            <tr>
              <th>Componente</th>
              <th><span class="tag-min">MÍNIMO</span></th>
              <th><span class="tag-rec">RECOMENDADO</span></th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="req-cat">Procesador</td><td>2 GHz, doble núcleo, 64 bits</td><td>Intel i5 / Ryzen 5 o superior</td></tr>
            <tr><td class="req-cat">RAM</td><td class="sc-req-min">4 GB</td><td class="sc-req-rec">8 — 16 GB</td></tr>
            <tr><td class="req-cat">Almacenamiento</td><td class="sc-req-min">25 GB</td><td class="sc-req-rec">50 GB o más (SSD recomendado)</td></tr>
            <tr><td class="req-cat">TPM</td><td colspan="2" style="color:#00ff41;">No requerido</td></tr>
            <tr><td class="req-cat">Secure Boot</td><td colspan="2" style="color:#00ff41;">Opcional (compatible)</td></tr>
            <tr><td class="req-cat">Gráficos</td><td>Resolución 1024×768</td><td>GPU con aceleración 3D</td></tr>
            <tr><td class="req-cat">Internet</td><td colspan="2">Recomendada durante la instalación</td></tr>
            <tr><td class="req-cat">Costo</td><td colspan="2" style="color:#00ff41;">Gratuito y de código abierto</td></tr>
          </tbody>
        </table>
        <p class="sc-text mt-4" style="font-size:0.85rem;color:#3a5e3a;">✔ Ubuntu funciona en equipos donde <strong style="color:#ffb300;">Windows 11 no es compatible</strong>. Sin TPM 2.0 ni Secure Boot, es ideal para hardware antiguo.</p>
      </div>

      <!-- Botones asistente Ubuntu -->
      <div class="sc-assistant-panel">
        <div class="sc-assistant-label">// PREGÚNTALE A BONZI</div>
        <button class="sc-av-btn" data-av="lin" data-key="ram_ubuntu">¿Por qué Ubuntu necesita menos RAM que Windows?</button>
        <button class="sc-av-btn" data-av="lin" data-key="disco_ubuntu">¿Por qué Ubuntu ocupa menos disco que Windows?</button>
        <button class="sc-av-btn" data-av="lin" data-key="sin_tpm">¿Por qué Ubuntu no necesita TPM 2.0?</button>
        <button class="sc-av-btn" data-av="lin" data-key="lts">¿Qué significa LTS en Ubuntu?</button>
        <button class="sc-av-btn" data-av="lin" data-key="live">¿Para qué sirve el modo Live de Ubuntu?</button>
        <button class="sc-av-btn" data-av="lin" data-key="gnome_req">¿GNOME consume muchos recursos?</button>
      </div>
    </div>
  </div>

  <div class="sc-block">
    <div class="sc-block-title">Video — Instalación de Ubuntu 24.04 en VirtualBox</div>
    <p class="sc-text mb-4">El siguiente video muestra el proceso completo de instalación de Ubuntu 24.04 LTS dentro de VirtualBox, desde el arranque del instalador hasta la primera ejecución del sistema con GNOME.</p>
    <div class="sc-video-wrap">
      <iframe src="https://www.youtube.com/embed/zlTGgUFyAmk" title="Instalación Ubuntu 24.04 VirtualBox" allowfullscreen></iframe>
    </div>
  </div>
</div>

{% vite_javascript_tag agents %}