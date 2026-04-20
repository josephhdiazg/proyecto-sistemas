---
permalink: /avatar
layout: base
title: Avatar SO
---

<style>
  .av-container {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 1.5rem;
    align-items: start;
  }
  @media (max-width: 768px) {
    .av-container { grid-template-columns: 1fr; }
  }

  .av-figure { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
  .av-screen {
    width: 200px; height: 200px;
    border: 2px solid #00ff41;
    box-shadow: 0 0 24px #00ff4166, inset 0 0 24px #00ff4111;
    position: relative; overflow: hidden;
    background: #080c08;
    display: flex; align-items: center; justify-content: center;
    clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  }
  .av-face { width: 130px; height: 130px; }
  .av-scanline {
    position: absolute; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent, #00ff4188, transparent);
    animation: avScan 3s linear infinite; pointer-events: none;
  }
  @keyframes avScan { 0%{top:-4px} 100%{top:100%} }

  .av-eye { animation: eyeBlink 5s ease-in-out infinite; transform-origin: center; }
  @keyframes eyeBlink {
    0%,88%,100%{transform:scaleY(1)}
    93%{transform:scaleY(0.06)}
  }

  .av-talking #mLine1 { animation: mA 0.25s steps(1) infinite; }
  .av-talking #mLine2 { animation: mB 0.25s steps(1) infinite 0.08s; }
  .av-talking #mLine3 { animation: mC 0.25s steps(1) infinite 0.16s; }
  @keyframes mA { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes mB { 0%,100%{opacity:0} 50%{opacity:1} }
  @keyframes mC { 0%,33%,100%{opacity:0} 33%,66%{opacity:1} }

  .av-status { display:flex; align-items:center; gap:0.5rem; font-family:'Orbitron',monospace; font-size:0.55rem; letter-spacing:0.15em; color:#3a5e3a; text-transform:uppercase; }
  .av-dot { width:8px;height:8px;border-radius:50%;background:#00ff41;box-shadow:0 0 6px #00ff41;animation:blink 1s step-end infinite; }
  .av-dot.busy { background:#ffb300;box-shadow:0 0 6px #ffb300; }

  .av-btn-grid { display:flex; flex-direction:column; gap:0.4rem; width:100%; }
  .av-btn {
    font-family:'Share Tech Mono',monospace; font-size:0.72rem;
    background:transparent; border:1px solid #1a2e1a; color:#3a5e3a;
    padding:0.45rem 0.7rem; text-align:left; cursor:pointer;
    transition:all 0.15s; letter-spacing:0.04em; width:100%;
  }
  .av-btn:hover { border-color:#00ff41; color:#00ff41; box-shadow:0 0 8px #00ff4133; background:#0d120d; }
  .av-btn.active { border-color:#00ff41; color:#00ff41; background:#0d150d; }
  .av-btn:disabled { opacity:0.4; cursor:not-allowed; }

  .av-chat-panel {
    display:flex; flex-direction:column; height:500px;
    background:#0d120d; border:1px solid #1a2e1a;
    box-shadow:inset 0 0 12px #00ff4111;
  }
  .av-chat-header {
    padding:0.55rem 1rem; border-bottom:1px solid #1a2e1a; background:#111911;
    font-family:'Orbitron',monospace; font-size:0.55rem; letter-spacing:0.13em;
    color:#3a5e3a; display:flex; align-items:center; gap:0.5rem;
  }
  .av-messages {
    flex:1; overflow-y:auto; padding:1rem;
    display:flex; flex-direction:column; gap:0.75rem;
  }
  .av-msg {
    padding:0.7rem 1rem; font-size:0.82rem; line-height:1.7;
    font-family:'Share Tech Mono',monospace; border:1px solid #1a2e1a;
    animation: msgIn 0.2s ease-out;
  }
  @keyframes msgIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
  .av-msg.from-av { background:#111911; color:#b8d4b8; border-left:2px solid #00ff41; }
  .av-msg.from-user { background:#0d1a0d; color:#00ff41; border-right:2px solid #007a1f; text-align:right; align-self:flex-end; max-width:70%; }
  .av-msg-label { font-family:'Orbitron',monospace; font-size:0.5rem; letter-spacing:0.1em; opacity:0.4; margin-bottom:0.35rem; }

  .av-typing { display:flex;gap:5px;padding:0.7rem 1rem;background:#111911;border:1px solid #1a2e1a;border-left:2px solid #00ff41;width:fit-content; }
  .av-typing span { width:6px;height:6px;background:#00ff41;border-radius:50%;animation:tDot 1s ease-in-out infinite; }
  .av-typing span:nth-child(2){animation-delay:0.2s}
  .av-typing span:nth-child(3){animation-delay:0.4s}
  @keyframes tDot { 0%,60%,100%{transform:translateY(0);opacity:0.25} 30%{transform:translateY(-7px);opacity:1} }

  .tag-win { color:#00ffe7;border:1px solid #00ffe744;padding:0 4px;font-size:0.72rem; }
  .tag-lin { color:#ffb300;border:1px solid #ffb30044;padding:0 4px;font-size:0.72rem; }
</style>

<div class="space-y-4">

  <div class="hxkr-panel-bright p-4 corner-tl corner-br relative">
    <div class="font-hud text-xs tracking-widest mb-1" style="color:#3a5e3a;">// MÓDULO_AVATAR</div>
    <h1 class="font-display text-4xl text-glow" style="color:#00ff41;">SYS_GUIDE v1.0</h1>
    <p class="text-sm mt-1" style="color:#3a5e3a;">Asistente interactivo — Requisitos de instalación <span class="tag-win">Windows</span> &amp; <span class="tag-lin">Linux</span></p>
  </div>

  <div class="av-container">

    <!-- Avatar + botones -->
    <div class="av-figure">
      <div class="av-screen" id="avScreen">
        <div class="av-scanline"></div>
        <svg class="av-face" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="12" width="100" height="86" rx="12" fill="#0d120d" stroke="#00ff41" stroke-width="1.5"/>
          <line x1="65" y1="12" x2="65" y2="1" stroke="#00ff41" stroke-width="1.5"/>
          <circle cx="65" cy="1" r="3" fill="#00ff41" style="filter:drop-shadow(0 0 4px #00ff41)"/>
          <rect class="av-eye" x="26" y="34" width="26" height="20" rx="4" fill="#080c08" stroke="#00ff41" stroke-width="1"/>
          <rect x="31" y="38" width="16" height="12" rx="2" fill="#00ff41" opacity="0.9" style="filter:drop-shadow(0 0 5px #00ff41)"/>
          <rect class="av-eye" x="78" y="34" width="26" height="20" rx="4" fill="#080c08" stroke="#00ff41" stroke-width="1"/>
          <rect x="83" y="38" width="16" height="12" rx="2" fill="#00ff41" opacity="0.9" style="filter:drop-shadow(0 0 5px #00ff41)"/>
          <g id="avMouth" transform="translate(33,70)">
            <rect id="mLine1" x="0" y="5" width="64" height="3" rx="1" fill="#00ff41" opacity="0.8"/>
            <rect id="mLine2" x="6" y="0" width="52" height="3" rx="1" fill="#00ff41" opacity="0"/>
            <rect id="mLine3" x="10" y="10" width="44" height="3" rx="1" fill="#00ff41" opacity="0"/>
          </g>
          <line x1="15" y1="52" x2="6"  y2="52" stroke="#00ff41" stroke-width="1" opacity="0.4"/>
          <line x1="15" y1="59" x2="8"  y2="59" stroke="#00ff41" stroke-width="1" opacity="0.3"/>
          <line x1="115" y1="52" x2="124" y2="52" stroke="#00ff41" stroke-width="1" opacity="0.4"/>
          <line x1="115" y1="59" x2="122" y2="59" stroke="#00ff41" stroke-width="1" opacity="0.3"/>
          <rect x="45" y="98" width="40" height="18" rx="4" fill="#0d120d" stroke="#1a2e1a" stroke-width="1"/>
          <rect x="53" y="103" width="24" height="7" rx="2" fill="#111911" stroke="#00ff41" stroke-width="0.5" opacity="0.5"/>
          <circle cx="65" cy="107" r="2" fill="#00ff41" opacity="0.4"/>
        </svg>
        <div style="position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.03) 3px,rgba(0,255,65,0.03) 4px);"></div>
      </div>

      <div class="av-status">
        <span class="av-dot" id="avDot"></span>
        <span id="avStatusTx">EN LÍNEA</span>
      </div>

      <div style="width:100%">
        <div class="font-hud mb-2" style="font-size:0.5rem;letter-spacing:0.15em;color:#3a5e3a;">// SELECCIONA_TEMA</div>
        <div class="av-btn-grid">
          <button class="av-btn" onclick="ask('win_min', this)">⊞ Req. mínimos — Windows 11</button>
          <button class="av-btn" onclick="ask('win_rec', this)">⊞ Req. recomendados — Windows 11</button>
          <button class="av-btn" onclick="ask('win_10', this)">⊞ Req. Windows 10</button>
          <button class="av-btn" onclick="ask('lin_ubuntu', this)">🐧 Req. Ubuntu Desktop</button>
          <button class="av-btn" onclick="ask('lin_debian', this)">🐧 Req. Debian</button>
          <button class="av-btn" onclick="ask('lin_arch', this)">🐧 Req. Arch Linux</button>
          <button class="av-btn" onclick="ask('comparar', this)">⇄ Windows vs Linux</button>
        </div>
      </div>
    </div>

    <!-- Chat -->
    <div class="av-chat-panel">
      <div class="av-chat-header">
        <span style="color:#00ff41;">▶</span>
        TERMINAL_DIÁLOGO — SYS_GUIDE v1.0
        <span style="margin-left:auto;color:#007a1f;">MODO_OFFLINE · SIN_API</span>
      </div>
      <div class="av-messages" id="avMessages">
        <div class="av-msg from-av">
          <div class="av-msg-label">SYS_GUIDE v1.0</div>
          Iniciando sistema... <span style="color:#00ff41;">OK</span><br><br>
          Hola. Soy <strong style="color:#00ff41;">SYS_GUIDE</strong>, tu asistente de sistemas operativos.<br><br>
          Selecciona un tema en el panel izquierdo y te explicaré los <span class="tag-win">requisitos de Windows</span> o <span class="tag-lin">Linux</span> para su instalación.
        </div>
      </div>
    </div>

  </div>
</div>

<script>
(function(){

  var DIALOGOS = {
    win_min: {
      pregunta: '¿Requisitos mínimos de Windows 11?',
      respuesta: '<span class="tag-win">WINDOWS 11</span> — Requisitos mínimos oficiales:\n\n- Procesador: 1 GHz o más, 2 núcleos (64 bits)\n- RAM: 4 GB\n- Almacenamiento: 64 GB\n- Firmware: UEFI con Secure Boot\n- TPM: versión 2.0 (obligatorio)\n- Gráficos: DirectX 12 compatible\n- Pantalla: 720p, mínimo 9 pulgadas\n- Internet: requerida en configuración inicial\n\n⚠ El TPM 2.0 es el requisito que impide instalar Windows 11 en muchas PCs antiguas.'
    },
    win_rec: {
      pregunta: '¿Requisitos recomendados de Windows 11?',
      respuesta: '<span class="tag-win">WINDOWS 11</span> — Especificaciones recomendadas:\n\n- Procesador: Intel Core i5 / AMD Ryzen 5 (8ª gen o superior)\n- RAM: 8 GB (16 GB para multitarea fluida)\n- Almacenamiento: 256 GB SSD (NVMe preferido)\n- Gráficos: GPU dedicada con 4 GB VRAM\n- Pantalla: 1080p o superior\n- Conectividad: Wi-Fi 5 o Ethernet Gigabit\n\n✔ Con estas specs Windows 11 funciona sin limitaciones.'
    },
    win_10: {
      pregunta: '¿Requisitos de Windows 10?',
      respuesta: '<span class="tag-win">WINDOWS 10</span> — Requisitos de instalación:\n\n- Procesador: 1 GHz o más (32 o 64 bits)\n- RAM: 1 GB (32 bits) / 2 GB (64 bits)\n- Almacenamiento: 16 GB (32 bits) / 32 GB (64 bits)\n- Gráficos: DirectX 9 con WDDM 1.0\n- Pantalla: 800 × 600 píxeles\n- No requiere TPM 2.0 ni Secure Boot\n\n💡 Windows 10 tiene soporte oficial hasta octubre 2025. Es mucho más compatible con hardware antiguo que Windows 11.'
    },
    lin_ubuntu: {
      pregunta: '¿Requisitos de Ubuntu Desktop?',
      respuesta: '<span class="tag-lin">UBUNTU DESKTOP 24.04 LTS</span> — Requisitos:\n\n- Procesador: 2 GHz, doble núcleo (64 bits)\n- RAM: 4 GB mínimo / 8 GB recomendado\n- Almacenamiento: 25 GB mínimo\n- Pantalla: 1024 × 768 px\n- Medio de instalación: USB o DVD\n- No requiere TPM ni Secure Boot\n\n✔ Ubuntu incluye entorno gráfico GNOME, navegador y office desde el primer arranque. Ideal para comenzar con Linux.'
    },
    lin_debian: {
      pregunta: '¿Requisitos de Debian?',
      respuesta: '<span class="tag-lin">DEBIAN 12 — Bookworm</span> — Requisitos:\n\n- Procesador: cualquier x86 de 64 bits\n- RAM: 512 MB mínimo / 2 GB con escritorio\n- Almacenamiento: 10 GB mínimo / 20 GB recomendado\n- Sin GUI: funciona con solo 256 MB de RAM\n\n💡 Debian es más liviano que Ubuntu, extremadamente estable y es la base de muchas distros. Perfecto para servidores o PCs con pocos recursos.'
    },
    lin_arch: {
      pregunta: '¿Requisitos de Arch Linux?',
      respuesta: '<span class="tag-lin">ARCH LINUX</span> — Requisitos:\n\n- Procesador: x86_64 (64 bits)\n- RAM: 512 MB mínimo / 2 GB recomendado\n- Almacenamiento: 2 GB mínimo / 20 GB práctico\n- Internet: necesaria durante la instalación\n\n⚠ Arch no tiene instalador gráfico; todo se configura desde terminal manualmente.\n\n✔ Ventaja: sistema minimalista, gran control y muy bajo consumo de recursos. Recomendado para usuarios con experiencia en Linux.'
    },
    comparar: {
      pregunta: '¿Diferencias entre Windows y Linux?',
      respuesta: 'Comparativa de requisitos:\n\n<span class="tag-win">Windows 11</span>\n- RAM mínima: 4 GB\n- Disco: 64 GB\n- TPM 2.0: obligatorio\n- Secure Boot: obligatorio\n- Costo: de pago\n\n<span class="tag-lin">Ubuntu Linux</span>\n- RAM mínima: 4 GB\n- Disco: 25 GB\n- TPM 2.0: no requerido\n- Secure Boot: opcional\n- Costo: gratuito\n\n💡 Linux puede instalarse en PCs donde Windows 11 no corre. Para equipos con más de 5 años, Linux suele ser la mejor opción.'
    }
  };

  var messagesEl = document.getElementById('avMessages');
  var avScreen   = document.getElementById('avScreen');
  var avDot      = document.getElementById('avDot');
  var avStatusTx = document.getElementById('avStatusTx');
  var busy = false;

  function setStatus(state) {
    avScreen.classList.remove('av-talking');
    avDot.classList.remove('busy');
    if (state === 'busy') {
      avDot.classList.add('busy');
      avStatusTx.textContent = 'PROCESANDO...';
    } else if (state === 'talking') {
      avScreen.classList.add('av-talking');
      avStatusTx.textContent = 'TRANSMITIENDO';
    } else {
      avStatusTx.textContent = 'EN LÍNEA';
    }
  }

  function addMsg(html, fromAv) {
    var div = document.createElement('div');
    div.className = 'av-msg ' + (fromAv ? 'from-av' : 'from-user');
    var label = document.createElement('div');
    label.className = 'av-msg-label';
    label.textContent = fromAv ? 'SYS_GUIDE v1.0' : 'USUARIO';
    div.appendChild(label);
    var body = document.createElement('span');
    body.innerHTML = html.replace(/\n/g, '<br>');
    div.appendChild(body);
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    var div = document.createElement('div');
    div.id = 'avTyping'; div.className = 'av-typing';
    div.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function removeTyping() {
    var t = document.getElementById('avTyping');
    if (t) t.remove();
  }

  function setBtns(disabled) {
    document.querySelectorAll('.av-btn').forEach(function(b){ b.disabled = disabled; });
  }

  window.ask = function(key, btn) {
    if (busy) return;
    var d = DIALOGOS[key];
    if (!d) return;

    busy = true;
    setBtns(true);

    document.querySelectorAll('.av-btn').forEach(function(b){ b.classList.remove('active'); });
    if (btn) btn.classList.add('active');

    addMsg('› ' + d.pregunta, false);
    setStatus('busy');
    showTyping();

    setTimeout(function() {
      removeTyping();
      setStatus('talking');
      addMsg(d.respuesta, true);
      setTimeout(function() {
        setStatus('idle');
        busy = false;
        setBtns(false);
      }, 2200);
    }, 850);
  };

})();
</script>
