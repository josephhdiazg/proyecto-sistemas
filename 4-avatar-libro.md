---
permalink: /avatar-libro
layout: base
title: Avatar y Libro Digital
---

<style>
  /* ── Layout principal ── */
  .av-section { margin-bottom: 3rem; }

  .av-panel-header {
    font-family: 'Orbitron', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: #3a5e3a;
    text-transform: uppercase;
    padding: 0.7rem 1.5rem;
    border-bottom: 1px solid #1a2e1a;
    background: #111911;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .av-panel-header::before { content: '//'; color: #00ff41; margin-right: 0.3rem; }

  /* ── Contenedor avatar + chat ── */
  .av-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    min-height: 520px;
    border: 1px solid #1a2e1a;
    box-shadow: inset 0 0 24px #00ff4108;
  }
  @media (max-width: 750px) {
    .av-container { grid-template-columns: 1fr; }
  }

  /* ── Panel izquierdo: avatar ── */
  .av-left {
    background: #0a0f0a;
    border-right: 1px solid #1a2e1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5rem 1rem 1rem;
    gap: 0.8rem;
    position: relative;
  }
  .av-img-wrap {
    width: 260px;
    height: 260px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-shrink: 0;
  }
  #avatar-img {
    width: 260px;
    height: 260px;
    object-fit: contain;
    filter: drop-shadow(0 0 18px #00ff4166);
    transition: filter 0.1s;
    display: block;
  }
  #avatar-img.talking {
    filter: drop-shadow(0 0 28px #00ff41aa);
  }
  .av-status {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.78rem;
    color: #3a5e3a;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    letter-spacing: 0.05em;
  }
  .av-status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #3a5e3a;
    flex-shrink: 0;
    transition: background 0.2s, box-shadow 0.2s;
  }
  .av-status-dot.active {
    background: #00ff41;
    box-shadow: 0 0 6px #00ff41;
  }
  .av-examples {
    width: 100%;
    border-top: 1px solid #1a2e1a;
    padding-top: 0.8rem;
  }
  .av-examples-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
    margin-bottom: 0.5rem;
  }
  .av-example {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    color: #3a5e3a;
    padding: 0.3rem 0;
    border-left: 2px solid #1a2e1a;
    padding-left: 0.5rem;
    margin-bottom: 0.3rem;
    line-height: 1.4;
  }

  /* ── Panel derecho: chat ── */
  .av-right {
    display: flex;
    flex-direction: column;
    background: #0d120d;
  }
  .av-chat-history {
    flex: 1;
    overflow-y: auto;
    padding: 1.2rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 0;
    max-height: 400px;
    scrollbar-width: thin;
    scrollbar-color: #1a2e1a transparent;
  }
  .av-chat-history::-webkit-scrollbar { width: 4px; }
  .av-chat-history::-webkit-scrollbar-track { background: transparent; }
  .av-chat-history::-webkit-scrollbar-thumb { background: #1a2e1a; border-radius: 2px; }

  .av-msg { display: flex; flex-direction: column; gap: 0.2rem; max-width: 90%; }
  .av-msg-user { align-self: flex-end; align-items: flex-end; }
  .av-msg-bot  { align-self: flex-start; align-items: flex-start; }

  .av-msg-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
  }
  .av-msg-user .av-msg-label { color: #00ffe7; }

  .av-msg-bubble {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.7;
    padding: 0.6rem 0.9rem;
    border: 1px solid #1a2e1a;
  }
  .av-msg-user .av-msg-bubble {
    background: #0a1210;
    border-color: #00ffe744;
    color: #00ffe7;
  }
  .av-msg-bot .av-msg-bubble {
    background: #111911;
    border-color: #1a2e1a;
    color: #b8d4b8;
  }
  .av-msg-bot .av-msg-bubble strong { color: #00ff41; }

  /* Intro message */
  .av-intro {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.88rem;
    color: #3a5e3a;
    text-align: center;
    padding: 2rem 1rem;
    line-height: 1.8;
    border: 1px dashed #1a2e1a;
    margin: 0.5rem;
  }
  .av-intro span { color: #00ff41; }

  /* ── Área de input ── */
  .av-input-area {
    border-top: 1px solid #1a2e1a;
    padding: 0.8rem 1rem;
    background: #111911;
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
  .av-input {
    flex: 1;
    background: #0d120d;
    border: 1px solid #1a2e1a;
    color: #00ff41;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .av-input::placeholder { color: #3a5e3a; }
  .av-input:focus { border-color: #00ff4166; }
  .av-send-btn {
    font-family: 'Orbitron', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    background: transparent;
    border: 1px solid #00ff41;
    color: #00ff41;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  .av-send-btn:hover { background: #00ff4111; box-shadow: 0 0 8px #00ff4133; }
  .av-send-btn:disabled { border-color: #1a2e1a; color: #3a5e3a; cursor: not-allowed; }

  /* ── Libro digital ── */
  .lb-section {
    margin-bottom: 3rem;
    position: relative;
    z-index: 9998; /* encima del scan-line (z-index 9997) */
  }
  .lb-inner {
    border: 1px solid #1a2e1a;
    background: #0d120d;
    box-shadow: inset 0 0 20px #00ff4108;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .lb-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.9rem;
    color: #00ff41;
    letter-spacing: 0.15em;
    text-align: center;
  }
  .lb-desc {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.88rem;
    color: #3a5e3a;
    text-align: center;
    max-width: 520px;
    line-height: 1.7;
  }
  .lb-embed-wrap {
    border: 1px solid #1a2e1a;
    box-shadow: 0 0 20px #00ff4122;
    overflow: hidden;
    width: 100%;
    max-width: 960px;
    /* Recorta la barra inferior de Calameo */
    height: 530px;
  }
  .lb-embed-wrap iframe {
    display: block;
    width: 100%;
    height: 570px; /* 40px extra para que la barra quede fuera del área visible */
    border: 0;
    margin-bottom: -40px;
  }
  .lb-link {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.8rem;
    color: #3a5e3a;
    text-decoration: none;
    border: 1px solid #1a2e1a;
    padding: 0.4rem 1rem;
    transition: all 0.15s;
  }
  .lb-link:hover { color: #00ff41; border-color: #00ff41; }
</style>

<!-- HERO -->
<div class="hxkr-panel-bright p-4 corner-tl corner-br relative mb-8">
  <div class="font-hud text-xs tracking-widest mb-1" style="color:#3a5e3a;">// RECURSOS_INTERACTIVOS</div>
  <h1 class="font-display text-5xl text-glow" style="color:#00ff41;">Avatar y Libro Digital</h1>
  <p style="font-family:'Share Tech Mono',monospace;font-size:1rem;color:#b8d4b8;margin-top:0.5rem;">
    Asistente interactivo con conocimiento de los tres cortes · Libro digital de diagnóstico de equipos
  </p>
</div>

<!-- ══════════ SECCIÓN AVATAR ══════════ -->
<div class="av-section">
  <div class="av-panel-header">ASISTENTE INTERACTIVO — SISTEMAS OPERATIVOS</div>
  <div class="av-container">

    <!-- IZQUIERDA: avatar -->
    <div class="av-left">
      <div class="av-img-wrap">
        <img id="avatar-img"
             src="{{ '/assets/img/avatar_general/001_White_Idle.png' | relative_url }}"
             alt="Avatar asistente">
      </div>
      <div class="av-status">
        <span class="av-status-dot" id="status-dot"></span>
        <span id="status-text">EN ESPERA</span>
      </div>
      <div class="av-examples">
        <div class="av-examples-label">EJEMPLOS DE PREGUNTA</div>
        <div class="av-example">"¿Qué hace el comando sfc /scannow?"</div>
        <div class="av-example">"¿Cómo proteger SSH en Ubuntu Server?"</div>
        <div class="av-example">"¿Qué es RustDesk y para qué sirve?"</div>
      </div>
    </div>

    <!-- DERECHA: chat -->
    <div class="av-right">
      <div class="av-chat-history" id="chat-history">
        <div class="av-intro">
          <span>SISTEMA LISTO</span><br>
          Puedes preguntarme sobre cualquier tema visto en los tres cortes:<br>
          comandos de Windows · instalación de SO · Ubuntu Server · SSH ·<br>
          herramientas remotas · diagnóstico de hardware · y más.
        </div>
      </div>
      <div class="av-input-area">
        <input type="text" id="av-input" class="av-input"
               placeholder="Escribe tu pregunta aquí..."
               autocomplete="off" maxlength="200">
        <button id="av-send" class="av-send-btn">ENVIAR</button>
      </div>
    </div>

  </div>
</div>

<!-- ══════════ SECCIÓN LIBRO DIGITAL ══════════ -->
<div class="lb-section">
  <div class="av-panel-header">LIBRO DIGITAL — DIAGNÓSTICO DE EQUIPOS</div>
  <div class="lb-inner">
    <div class="lb-title">Libro Digital de Diagnóstico de Equipos</div>
    <div class="lb-desc">
      Documentación técnica completa sobre diagnóstico y mantenimiento de equipos de cómputo,
      elaborada como parte del proyecto de Sistemas Operativos.
    </div>
    <div class="lb-embed-wrap">
      <iframe src="//v.calameo.com/?bkcode=0082320230f863d0829a6&mode=mini"
              scrolling="no" allowtransparency allowfullscreen></iframe>
    </div>
    <a href="https://www.calameo.com/books/0082320230f863d0829a6"
       target="_blank" class="lb-link">↗ ABRIR EN CALAMEO</a>
  </div>
</div>

<!-- ══════════ MOTOR NLP + LÓGICA AVATAR ══════════ -->
{% vite_javascript_tag nlp %}